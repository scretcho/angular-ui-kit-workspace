import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { ACCORDION_TOKEN, AccordionHost } from './accordion-host';

@Component({
  selector: 'uk-accordion',
  standalone: true,
  template: `<div [class]="'uk-accordion uk-accordion--' + size"><ng-content /></div>`,
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ACCORDION_TOKEN, useExisting: UkAccordionComponent }],
})
export class UkAccordionComponent implements AccordionHost {
  @Input() multiple = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  readonly openIds = signal<Set<string>>(new Set());

  toggle(id: string): void {
    this.openIds.update(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!this.multiple) next.clear();
        next.add(id);
      }
      return next;
    });
  }
}
