import {
  Component, input, output, forwardRef,
  ChangeDetectionStrategy, signal, computed, HostListener, ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectOption, UkSize } from '../shared/types';

@Component({
  selector: 'uk-select',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkSelectComponent),
    multi: true
  }]
})
export class UkSelectComponent implements ControlValueAccessor {
  readonly label = input('');
  readonly placeholder = input('Select an option');
  readonly options = input<SelectOption[]>([]);
  readonly size = input<UkSize>('md');
  readonly required = input(false);
  readonly disabled = input(false);
  readonly searchable = input(false);
  readonly hint = input('');
  readonly errorMessage = input('');
  readonly selectionChange = output<SelectOption>();

  readonly value = signal<string | number | null>(null);
  readonly isOpen = signal(false);
  readonly isDisabled = signal(false);
  readonly searchQuery = signal('');

  readonly selectedOption = computed(() =>
    this.options().find(o => o.value === this.value()) ?? null
  );

  readonly filteredOptions = computed(() => {
    const q = this.searchQuery().toLowerCase();
    return q ? this.options().filter(o => o.label.toLowerCase().includes(q)) : this.options();
  });

  readonly wrapperClass = computed(() => {
    const classes: string[] = [this.size()];
    if (this.errorMessage()) classes.push('error');
    return classes.join(' ');
  });

  private onChange = (_: string | number | null) => {};
  onTouched = () => {};

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    if (!this.el.nativeElement.contains(e.target)) this.isOpen.set(false);
  }

  toggle() {
    if (this.isDisabled()) return;
    this.isOpen.update(v => !v);
    this.onTouched();
  }

  onSearch(e: Event) {
    this.searchQuery.set((e.target as HTMLInputElement).value);
  }

  selectOption(opt: SelectOption) {
    if (opt.disabled) return;
    this.value.set(opt.value as string | number);
    this.onChange(opt.value as string | number);
    this.selectionChange.emit(opt);
    this.isOpen.set(false);
    this.searchQuery.set('');
  }

  writeValue(val: string | number | null) { this.value.set(val); }
  registerOnChange(fn: (v: string | number | null) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
