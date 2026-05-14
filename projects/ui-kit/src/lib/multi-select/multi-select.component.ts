import {
  Component, input, output, forwardRef,
  ChangeDetectionStrategy, signal, computed, HostListener, ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectOption, UkSize } from '../shared/types';

@Component({
  selector: 'uk-multi-select',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkMultiSelectComponent),
    multi: true
  }]
})
export class UkMultiSelectComponent implements ControlValueAccessor {
  readonly label = input('');
  readonly placeholder = input('Select options');
  readonly options = input<SelectOption[]>([]);
  readonly size = input<UkSize>('md');
  readonly required = input(false);
  readonly disabled = input(false);
  readonly showSelectAll = input(true);
  readonly hint = input('');
  readonly errorMessage = input('');
  readonly selectionChange = output<SelectOption[]>();

  readonly values = signal<(string | number)[]>([]);
  readonly isOpen = signal(false);
  readonly isDisabled = signal(false);
  readonly searchQuery = signal('');

  readonly selectedOptions = computed(() =>
    this.options().filter(o => this.values().includes(o.value as string | number))
  );

  readonly filteredOptions = computed(() => {
    const q = this.searchQuery().toLowerCase();
    return q ? this.options().filter(o => o.label.toLowerCase().includes(q)) : this.options();
  });

  readonly allSelected = computed(() =>
    this.options().length > 0 && this.options().every(o => this.values().includes(o.value as string | number))
  );

  readonly wrapperClass = computed(() => {
    const classes: string[] = [];
    if (this.errorMessage()) classes.push('error');
    return classes.join(' ');
  });

  private onChange = (_: (string | number)[]) => {};
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

  isSelected(opt: SelectOption): boolean {
    return this.values().includes(opt.value as string | number);
  }

  toggleOption(opt: SelectOption) {
    if (opt.disabled) return;
    const v = opt.value as string | number;
    const current = this.values();
    const next = current.includes(v) ? current.filter(x => x !== v) : [...current, v];
    this.values.set(next);
    this.onChange(next);
    this.selectionChange.emit(this.selectedOptions());
  }

  removeOption(opt: SelectOption, e: Event) {
    e.stopPropagation();
    this.toggleOption(opt);
  }

  toggleAll() {
    if (this.allSelected()) {
      this.values.set([]);
    } else {
      this.values.set(this.options().filter(o => !o.disabled).map(o => o.value as string | number));
    }
    this.onChange(this.values());
    this.selectionChange.emit(this.selectedOptions());
  }

  writeValue(val: (string | number)[]) { this.values.set(val ?? []); }
  registerOnChange(fn: (v: (string | number)[]) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
