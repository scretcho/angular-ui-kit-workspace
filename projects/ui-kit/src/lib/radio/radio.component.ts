import {
  Component, input, output, forwardRef,
  ChangeDetectionStrategy, signal
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectOption } from '../shared/types';

@Component({
  selector: 'uk-radio-group',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkRadioGroupComponent),
    multi: true
  }]
})
export class UkRadioGroupComponent implements ControlValueAccessor {
  readonly label = input('');
  readonly options = input<SelectOption[]>([]);
  readonly direction = input<'vertical' | 'horizontal'>('vertical');
  readonly required = input(false);
  readonly disabled = input(false);
  readonly hint = input('');
  readonly errorMessage = input('');
  readonly selectionChange = output<SelectOption>();

  readonly value = signal<string | number | null>(null);
  readonly isDisabled = signal(false);
  readonly groupName = `uk-radio-${Math.random().toString(36).slice(2)}`;

  private onChange = (_: string | number | null) => {};
  onTouched = () => {};

  select(opt: SelectOption) {
    this.value.set(opt.value as string | number);
    this.onChange(opt.value as string | number);
    this.selectionChange.emit(opt);
    this.onTouched();
  }

  writeValue(val: string | number | null) { this.value.set(val); }
  registerOnChange(fn: (v: string | number | null) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
