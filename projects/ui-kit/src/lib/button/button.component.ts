import {
  Component, input, output,
  ChangeDetectionStrategy, computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost' | 'outline';
export type ButtonSize    = 'xs' | 'sm' | 'md' | 'lg';

@Component({
  selector: 'uk-button',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class UkButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly icon = input<string>();
  readonly iconPosition = input<'left' | 'right'>('left');
  readonly iconOnly = input(false);
  readonly label = input<string>();
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly fullWidth = input(false);
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly clicked = output<MouseEvent>();

  readonly hostClass = computed(() => {
    const classes = [
      'uk-btn',
      `uk-btn-${this.variant()}`,
      `uk-btn-${this.size()}`,
    ];
    if (this.iconOnly())  classes.push('uk-btn-icon-only');
    if (this.fullWidth()) classes.push('uk-btn-full');
    if (this.loading())   classes.push('uk-btn-loading');
    return classes.join(' ');
  });

  onClick(e: MouseEvent) {
    if (this.disabled() || this.loading()) { e.stopPropagation(); return; }
    this.clicked.emit(e);
  }
}
