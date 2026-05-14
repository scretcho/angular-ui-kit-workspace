import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
  readonly value = input(0);
  readonly max = input(100);
  readonly label = input<string>();
  readonly showLabel = input(false);
  readonly striped = input(false);
  readonly animated = input(false);
  readonly indeterminate = input(false);
  readonly variant = input<ProgressVariant>('primary');
  readonly size = input<ProgressSize>('md');

  get percent(): number {
    return Math.min(100, Math.max(0, (this.value() / this.max()) * 100));
  }

  get roundedPercent(): number {
    return Math.round(this.percent);
  }

  get displayLabel(): string {
    return this.label() ?? `${this.roundedPercent}%`;
  }
}
