import {
  ChangeDetectionStrategy,
  Component,
  effect,
  HostListener,
  input,
  model,
  output,
  signal,
  untracked,
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
export class UkModalComponent {
  readonly open = model(false);
  readonly title = input('');
  readonly size = input<ModalSize>('md');
  readonly backdrop = input(true);
  readonly closeOnBackdrop = input(true);
  readonly showClose = input(true);

  readonly closed = output<void>();

  readonly isVisible = signal(false);
  readonly isAnimating = signal(false);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      const isOpen = this.open();
      untracked(() => {
        if (isOpen) this.show(); else this.hide();
      });
    });
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
    this.open.set(false);
    this.closed.emit();
    this.hide();
  }

  onBackdropClick(event: MouseEvent): void {
    if (this.closeOnBackdrop() && event.target === event.currentTarget) this.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) this.close();
  }
}
