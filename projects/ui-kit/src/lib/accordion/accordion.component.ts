import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ACCORDION_TOKEN, AccordionHost } from './accordion-host';

@Component({
  selector: 'uk-accordion',
  standalone: true,
  template: `<div [class]="'uk-accordion uk-accordion--' + _size()"><ng-content /></div>`,
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ACCORDION_TOKEN, useExisting: UkAccordionComponent }],
})
export class UkAccordionComponent implements AccordionHost {
  readonly _multiple = input(false, { alias: 'multiple' });
  readonly _size = input<'sm' | 'md' | 'lg'>('md', { alias: 'size' });

  // Satisfy AccordionHost interface (accordion-item reads openIds + toggle only)
  get multiple(): boolean { return this._multiple(); }
  get size(): 'sm' | 'md' | 'lg' { return this._size(); }

  readonly openIds = signal<Set<string>>(new Set());

  toggle(id: string): void {
    this.openIds.update(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!this._multiple()) next.clear();
        next.add(id);
      }
      return next;
    });
  }
}
