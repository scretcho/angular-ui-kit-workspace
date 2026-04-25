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

export type OffcanvasPosition = 'left' | 'right' | 'top' | 'bottom';

@Component({
  selector: 'uk-offcanvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkOffcanvasComponent implements OnChanges {
  @Input() open = false;
  @Input() title = '';
  @Input() position: OffcanvasPosition = 'right';
  @Input() size = '';
  @Input() backdrop = true;
  @Input() closeOnBackdrop = true;

  @Output() openChange = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<void>();

  readonly isVisible = signal(false);
  readonly isAnimating = signal(false);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['open']) return;
    if (this.open) {
      this.show();
    } else {
      this.hide();
    }
  }

  private show(): void {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
    this.isVisible.set(true);
    requestAnimationFrame(() => this.isAnimating.set(true));
  }

  private hide(): void {
    this.isAnimating.set(false);
    this.closeTimer = setTimeout(() => {
      this.isVisible.set(false);
      this.closeTimer = null;
    }, 300);
  }

  close(): void {
    this.open = false;
    this.openChange.emit(false);
    this.closed.emit();
    this.hide();
  }

  onBackdropClick(): void {
    if (this.closeOnBackdrop) this.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open) this.close();
  }

  get panelStyle(): Record<string, string> {
    if (!this.size) return {};
    if (this.position === 'left' || this.position === 'right') {
      return { width: this.size };
    }
    return { height: this.size };
  }
}
