import {
  Component, input, output, forwardRef,
  ChangeDetectionStrategy, signal, computed
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimeValue } from '../shared/types';

@Component({
  selector: 'uk-timepicker',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkTimepickerComponent),
    multi: true
  }]
})
export class UkTimepickerComponent implements ControlValueAccessor {
  readonly label = input('');
  readonly use24Hour = input(false);
  readonly showSeconds = input(false);
  readonly required = input(false);
  readonly disabled = input(false);
  readonly hint = input('');
  readonly errorMessage = input('');
  readonly timeChange = output<TimeValue>();

  readonly time = signal<TimeValue>({ hour: 12, minute: 0, second: 0, period: 'AM' });
  readonly isDisabled = signal(false);

  readonly displayHour = computed(() => {
    const h = this.time().hour;
    if (this.use24Hour()) return h;
    if (h === 0) return 12;
    if (h > 12) return h - 12;
    return h;
  });

  private onChange = (_: TimeValue) => {};
  onTouched = () => {};

  padded(n: number) { return String(n).padStart(2, '0'); }

  emit() {
    const t = this.time();
    this.onChange(t);
    this.timeChange.emit(t);
  }

  increment(unit: 'hour' | 'minute' | 'second') {
    this.time.update(t => {
      const next = { ...t };
      if (unit === 'hour') next.hour = this.use24Hour() ? (t.hour + 1) % 24 : (t.hour % 12) + 1 + (t.period === 'PM' ? 12 : 0);
      if (unit === 'minute') next.minute = (t.minute + 1) % 60;
      if (unit === 'second') next.second = ((t.second ?? 0) + 1) % 60;
      return next;
    });
    this.emit();
  }

  decrement(unit: 'hour' | 'minute' | 'second') {
    this.time.update(t => {
      const next = { ...t };
      if (unit === 'hour') next.hour = this.use24Hour() ? (t.hour - 1 + 24) % 24 : ((t.hour - 1 + 12) % 12) || 12 + (t.period === 'PM' ? 12 : 0);
      if (unit === 'minute') next.minute = (t.minute - 1 + 60) % 60;
      if (unit === 'second') next.second = ((t.second ?? 0) - 1 + 60) % 60;
      return next;
    });
    this.emit();
  }

  setPeriod(p: 'AM' | 'PM') {
    this.time.update(t => ({ ...t, period: p }));
    this.emit();
  }

  onHourInput(e: Event) {
    const v = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(v)) this.time.update(t => ({ ...t, hour: v }));
  }

  onMinuteInput(e: Event) {
    const v = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(v)) this.time.update(t => ({ ...t, minute: v }));
  }

  onSecondInput(e: Event) {
    const v = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(v)) this.time.update(t => ({ ...t, second: v }));
  }

  validateHour() {
    this.time.update(t => ({
      ...t,
      hour: Math.max(0, Math.min(this.use24Hour() ? 23 : 12, t.hour))
    }));
    this.emit();
  }

  validateMinute() {
    this.time.update(t => ({ ...t, minute: Math.max(0, Math.min(59, t.minute)) }));
    this.emit();
  }

  writeValue(val: TimeValue) { if (val) this.time.set(val); }
  registerOnChange(fn: (v: TimeValue) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
