import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() icon?: string;
  @Input() active = false;
  @Input() disabled = false;
  @Input() badge?: string | number;
  @Input() badgeVariant = 'primary';
  @Input() action = false;

  @Output() itemClick = new EventEmitter<void>();

  onClick(): void {
    if (this.action && !this.disabled) this.itemClick.emit();
  }
}
