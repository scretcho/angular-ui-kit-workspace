import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

@Component({
  selector: 'uk-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkModalComponent implements OnChanges {
  @Input() open = false;
  @Input() title = '';
  @Input() size: ModalSize = 'md';
  @Input() backdrop = true;
  @Input() closeOnBackdrop = true;
  @Input() showClose = true;

  @Output() openChange = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<void>();

  readonly isVisible = signal(false);
  readonly isAnimating = signal(false);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['open']) return;
    if (this.open) this.show(); else this.hide();
  }

  private show(): void {
    if (this.closeTimer) { clearTimeout(this.closeTimer); this.closeTimer = null; }
    this.isVisible.set(true);
    requestAnimationFrame(() => this.isAnimating.set(true));
  }

  private hide(): void {
    this.isAnimating.set(false);
    this.closeTimer = setTimeout(() => { this.isVisible.set(false); this.closeTimer = null; }, 300);
  }

  close(): void {
    this.open = false;
    this.openChange.emit(false);
    this.closed.emit();
    this.hide();
  }

  onBackdropClick(event: MouseEvent): void {
    if (this.closeOnBackdrop && event.target === event.currentTarget) this.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open) this.close();
  }
}
