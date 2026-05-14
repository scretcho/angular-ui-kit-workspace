import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uk-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkListItemComponent {
  readonly icon = input<string>();
  readonly active = input(false);
  readonly disabled = input(false);
  readonly badge = input<string | number>();
  readonly badgeVariant = input('primary');
  readonly action = input(false);

  readonly itemClick = output<void>();

  onClick(): void {
    if (this.action() && !this.disabled()) this.itemClick.emit();
  }
}
