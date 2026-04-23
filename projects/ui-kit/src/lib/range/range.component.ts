import {
  Component, Input, Output, EventEmitter, forwardRef,
  ChangeDetectionStrategy, signal, computed
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uk-range',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkRangeComponent),
    multi: true
  }]
})
export class UkRangeComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() range = false;
  @Input() showValue = true;
  @Input() showTicks = true;
  @Input() unit = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() hint = '';
  @Output() valueChange = new EventEmitter<number | [number, number]>();

  readonly value = signal(0);
  readonly lowValue = signal(0);
  readonly highValue = signal(100);
  readonly isDisabled = signal(false);

  readonly valuePercent = computed(() =>
    ((this.value() - this.min) / (this.max - this.min)) * 100
  );
  readonly lowPercent = computed(() =>
    ((this.lowValue() - this.min) / (this.max - this.min)) * 100
  );
  readonly highPercent = computed(() =>
    ((this.highValue() - this.min) / (this.max - this.min)) * 100
  );

  private onChange = (_: number | [number, number]) => {};
  onTouched = () => {};

  onInput(e: Event) {
    const v = +(e.target as HTMLInputElement).value;
    this.value.set(v);
    this.onChange(v);
    this.valueChange.emit(v);
    this.onTouched();
  }

  onLowInput(e: Event) {
    const v = Math.min(+(e.target as HTMLInputElement).value, this.highValue() - this.step);
    this.lowValue.set(v);
    this.emitRange();
  }

  onHighInput(e: Event) {
    const v = Math.max(+(e.target as HTMLInputElement).value, this.lowValue() + this.step);
    this.highValue.set(v);
    this.emitRange();
  }

  emitRange() {
    const pair: [number, number] = [this.lowValue(), this.highValue()];
    this.onChange(pair);
    this.valueChange.emit(pair);
    this.onTouched();
  }

  writeValue(val: number | [number, number]) {
    if (Array.isArray(val)) {
      this.lowValue.set(val[0]);
      this.highValue.set(val[1]);
    } else {
      this.value.set(val ?? 0);
    }
  }
  registerOnChange(fn: (v: number | [number, number]) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
