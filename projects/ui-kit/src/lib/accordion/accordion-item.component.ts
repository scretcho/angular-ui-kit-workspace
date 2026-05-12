import { ChangeDetectionStrategy, Component, Input, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACCORDION_TOKEN } from './accordion-host';

@Component({
  selector: 'uk-accordion-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkAccordionItemComponent {
  @Input({ required: true }) itemId = '';
  @Input() title = '';
  @Input() icon?: string;
  @Input() disabled = false;

  private accordion = inject(ACCORDION_TOKEN);

  readonly isOpen = computed(() => this.accordion.openIds().has(this.itemId));

  toggle(): void {
    if (!this.disabled) this.accordion.toggle(this.itemId);
  }
}
