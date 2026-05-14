import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AlertVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

const DEFAULT_ICONS: Record<AlertVariant, string> = {
  success:   'check-circle-fill',
  danger:    'exclamation-circle-fill',
  warning:   'exclamation-triangle-fill',
  info:      'info-circle-fill',
  primary:   'info-circle-fill',
  secondary: 'chat-square-fill',
};

@Component({
  selector: 'uk-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkAlertComponent {
  readonly variant = input<AlertVariant>('info');
  readonly title = input<string>();
  readonly message = input<string>();
  readonly icon = input<string>();
  readonly dismissible = input(false);

  readonly dismissed = output<void>();

  readonly isDismissed = signal(false);

  get resolvedIcon(): string {
    return this.icon() ?? DEFAULT_ICONS[this.variant()];
  }

  dismiss(): void {
    this.isDismissed.set(true);
    this.dismissed.emit();
  }
}
