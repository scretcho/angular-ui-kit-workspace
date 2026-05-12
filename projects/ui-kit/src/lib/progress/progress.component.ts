import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ProgressVariant = 'primary' | 'success' | 'danger' | 'warning' | 'info';
export type ProgressSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'uk-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkProgressComponent {
  @Input() value = 0;
  @Input() max = 100;
  @Input() label?: string;
  @Input() showLabel = false;
  @Input() striped = false;
  @Input() animated = false;
  @Input() indeterminate = false;
  @Input() variant: ProgressVariant = 'primary';
  @Input() size: ProgressSize = 'md';

  get percent(): number {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }

  get roundedPercent(): number {
    return Math.round(this.percent);
  }

  get displayLabel(): string {
    return this.label ?? `${this.roundedPercent}%`;
  }
}
