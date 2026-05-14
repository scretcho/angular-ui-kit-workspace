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

export type OffcanvasPosition = 'left' | 'right' | 'top' | 'bottom';

@Component({
  selector: 'uk-offcanvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkOffcanvasComponent {
  readonly open = model(false);
  readonly title = input('');
  readonly position = input<OffcanvasPosition>('right');
  readonly size = input('');
  readonly backdrop = input(true);
  readonly closeOnBackdrop = input(true);

  readonly closed = output<void>();

  readonly isVisible = signal(false);
  readonly isAnimating = signal(false);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      const isOpen = this.open();
      untracked(() => {
        if (isOpen) {
          this.show();
        } else {
          this.hide();
        }
      });
    });
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
    this.open.set(false);
    this.closed.emit();
    this.hide();
  }

  onBackdropClick(): void {
    if (this.closeOnBackdrop()) this.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) this.close();
  }

  get panelStyle(): Record<string, string> {
    const sz = this.size();
    if (!sz) return {};
    const pos = this.position();
    if (pos === 'left' || pos === 'right') {
      return { width: sz };
    }
    return { height: sz };
  }
}
