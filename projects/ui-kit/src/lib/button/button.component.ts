import {
  Component, Input, Output, EventEmitter,
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
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() iconOnly = false;
  @Input() label?: string;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() clicked = new EventEmitter<MouseEvent>();

  readonly hostClass = computed(() => {
    const classes = [
      'uk-btn',
      `uk-btn-${this.variant}`,
      `uk-btn-${this.size}`,
    ];
    if (this.iconOnly)  classes.push('uk-btn-icon-only');
    if (this.fullWidth) classes.push('uk-btn-full');
    if (this.loading)   classes.push('uk-btn-loading');
    return classes.join(' ');
  });

  onClick(e: MouseEvent) {
    if (this.disabled || this.loading) { e.stopPropagation(); return; }
    this.clicked.emit(e);
  }
}
