import { InjectionToken } from '@angular/core';
import type { Signal } from '@angular/core';

export interface AccordionHost {
  multiple: boolean;
  size: 'sm' | 'md' | 'lg';
  openIds: Signal<Set<string>>;
  toggle(id: string): void;
}

export const ACCORDION_TOKEN = new InjectionToken<AccordionHost>('uk-accordion');
