import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkToastService, ToastPosition } from './toast.service';

@Component({
  selector: 'uk-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkToasterComponent {
  @Input() position: ToastPosition = 'top-right';

  readonly toastService = inject(UkToastService);

  dismiss(id: string): void {
    this.toastService.dismiss(id);
  }
}
