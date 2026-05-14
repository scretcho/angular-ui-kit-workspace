import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark';

@Component({
  selector: 'uk-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkSpinnerComponent {
  readonly size = input<SpinnerSize>('md');
  readonly variant = input<SpinnerVariant>('primary');
  readonly label = input('Loading…');
}
