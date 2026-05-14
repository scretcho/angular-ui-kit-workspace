import {
  Component, input, output, forwardRef,
  ChangeDetectionStrategy, signal, computed
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UkSize } from '../shared/types';

@Component({
  selector: 'uk-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkInputComponent),
    multi: true
  }]
})
export class UkInputComponent implements ControlValueAccessor {
  readonly label = input('');
  readonly placeholder = input('');
  readonly type = input<'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'>('text');
  readonly size = input<UkSize>('md');
  readonly required = input(false);
  readonly disabled = input(false);
  readonly readonly = input(false);
  readonly clearable = input(false);
  readonly prefixIcon = input(false);
  readonly suffixIcon = input(false);
  readonly hint = input('');
  readonly errorMessage = input('');
  readonly maxlength = input<number>();
  readonly minlength = input<number>();
  readonly autocomplete = input('off');
  readonly id = input('');
  readonly valueChange = output<string>();
  readonly cleared = output<void>();

  readonly value = signal('');
  readonly isDisabled = signal(false);
  readonly focused = signal(false);

  readonly inputId = `uk-input-${Math.random().toString(36).slice(2)}`;

  readonly wrapperClass = computed(() => {
    const classes: string[] = [this.size()];
    if (this.errorMessage()) classes.push('error');
    return classes.join(' ');
  });

  private onChange = (_: string) => {};
  onTouched = () => {};

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value.set(val);
    this.onChange(val);
    this.valueChange.emit(val);
  }

  clear() {
    this.value.set('');
    this.onChange('');
    this.valueChange.emit('');
    this.cleared.emit();
  }

  writeValue(val: string) { this.value.set(val ?? ''); }
  registerOnChange(fn: (v: string) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
