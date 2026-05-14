import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
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
  readonly itemId = input.required<string>();
  readonly title = input('');
  readonly icon = input<string>();
  readonly disabled = input(false);

  private accordion = inject(ACCORDION_TOKEN);

  readonly isOpen = computed(() => this.accordion.openIds().has(this.itemId()));

  toggle(): void {
    if (!this.disabled()) this.accordion.toggle(this.itemId());
  }
}
