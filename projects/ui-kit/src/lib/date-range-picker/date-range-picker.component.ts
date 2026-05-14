import {
  Component, input, output, forwardRef,
  ChangeDetectionStrategy, signal, computed, HostListener, ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateRange } from '../shared/types';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isStart: boolean;
  isEnd: boolean;
  isDisabled: boolean;
}

@Component({
  selector: 'uk-date-range-picker',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkDateRangePickerComponent),
    multi: true
  }]
})
export class UkDateRangePickerComponent implements ControlValueAccessor {
  readonly label = input('');
  readonly placeholder = input('Select date range');
  readonly required = input(false);
  readonly disabled = input(false);
  readonly minDate = input<Date>();
  readonly maxDate = input<Date>();
  readonly showPresets = input(true);
  readonly errorMessage = input('');
  readonly format = input('MMM d, yyyy');
  readonly rangeChange = output<DateRange>();

  readonly isOpen = signal(false);
  readonly isDisabled = signal(false);
  readonly dateRange = signal<DateRange>({ start: null, end: null });
  readonly hoverDate = signal<Date | null>(null);
  readonly leftYear = signal(new Date().getFullYear());
  readonly leftMonth = signal(new Date().getMonth());

  readonly rightYear = computed(() => {
    const m = this.leftMonth() + 1;
    return m > 11 ? this.leftYear() + 1 : this.leftYear();
  });
  readonly rightMonth = computed(() => (this.leftMonth() + 1) % 12);

  readonly weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  readonly today = new Date();
  private selecting: 'start' | 'end' = 'start';

  readonly presets = [
    { label: 'Today', fn: () => { const d = new Date(); return { start: d, end: d }; } },
    { label: 'Yesterday', fn: () => { const d = new Date(); d.setDate(d.getDate() - 1); return { start: d, end: d }; } },
    { label: 'Last 7 days', fn: () => { const e = new Date(); const s = new Date(); s.setDate(s.getDate() - 6); return { start: s, end: e }; } },
    { label: 'Last 30 days', fn: () => { const e = new Date(); const s = new Date(); s.setDate(s.getDate() - 29); return { start: s, end: e }; } },
    { label: 'This month', fn: () => { const n = new Date(); return { start: new Date(n.getFullYear(), n.getMonth(), 1), end: new Date(n.getFullYear(), n.getMonth() + 1, 0) }; } },
    { label: 'Last month', fn: () => { const n = new Date(); return { start: new Date(n.getFullYear(), n.getMonth() - 1, 1), end: new Date(n.getFullYear(), n.getMonth(), 0) }; } },
  ];

  private onChange = (_: DateRange) => {};
  onTouched = () => {};

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    if (!this.el.nativeElement.contains(e.target)) this.isOpen.set(false);
  }

  openPicker() {
    if (this.isDisabled()) return;
    this.isOpen.update(v => !v);
    this.onTouched();
  }

  buildDays(year: number, month: number): CalendarDay[] {
    const days: CalendarDay[] = [];
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const startPad = first.getDay();
    for (let i = startPad - 1; i >= 0; i--) {
      days.push(this.buildDay(new Date(year, month, -i), false));
    }
    for (let i = 1; i <= last.getDate(); i++) {
      days.push(this.buildDay(new Date(year, month, i), true));
    }
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push(this.buildDay(new Date(year, month + 1, i), false));
    }
    return days;
  }

  buildDay(date: Date, isCurrentMonth: boolean): CalendarDay {
    const r = this.dateRange();
    const hover = this.hoverDate();
    const s = r.start ? this.sameDay(date, r.start) : false;
    const e = r.end ? this.sameDay(date, r.end) : false;
    let inRange = false;
    if (r.start && r.end) {
      inRange = date > r.start && date < r.end;
    } else if (r.start && hover && !r.end) {
      const lo = r.start < hover ? r.start : hover;
      const hi = r.start < hover ? hover : r.start;
      inRange = date > lo && date < hi;
    }
    const minDate = this.minDate();
    const maxDate = this.maxDate();
    return {
      date, isCurrentMonth,
      isToday: this.sameDay(date, this.today),
      isSelected: s || e,
      isInRange: inRange,
      isStart: s,
      isEnd: e,
      isDisabled: (!!minDate && date < minDate) || (!!maxDate && date > maxDate)
    };
  }

  readonly leftDays = computed(() => this.buildDays(this.leftYear(), this.leftMonth()));
  readonly rightDays = computed(() => this.buildDays(this.rightYear(), this.rightMonth()));

  sameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  selectDay(date: Date) {
    if (this.selecting === 'start' || (this.dateRange().start && this.dateRange().end)) {
      this.dateRange.set({ start: date, end: null });
      this.selecting = 'end';
    } else {
      const s = this.dateRange().start!;
      this.dateRange.set(date < s ? { start: date, end: s } : { start: s, end: date });
      this.selecting = 'start';
    }
  }

  prevMonth() {
    if (this.leftMonth() === 0) { this.leftMonth.set(11); this.leftYear.update(y => y - 1); }
    else { this.leftMonth.update(m => m - 1); }
  }

  nextMonth() {
    if (this.rightMonth() === 11) {
      this.leftMonth.set(this.leftMonth() + 2 > 11 ? (this.leftMonth() + 2) % 12 : this.leftMonth() + 2);
      if (this.leftMonth() < 2) this.leftYear.update(y => y + 1);
    } else {
      this.leftMonth.update(m => m + 1);
    }
  }

  nextMonthLeft() { this.leftMonth.update(m => m === 11 ? (this.leftYear.update(y => y + 1), 0) : m + 1); }
  prevMonthRight() { this.leftMonth.update(m => m === 0 ? (this.leftYear.update(y => y - 1), 11) : m - 1); }

  formatMonth(year: number, month: number) {
    return new Date(year, month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  formatDate(d: Date) {
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  readonly displayValue = computed(() => {
    const r = this.dateRange();
    if (!r.start) return this.placeholder();
    if (!r.end) return `${this.formatDate(r.start)} – ...`;
    return `${this.formatDate(r.start)} – ${this.formatDate(r.end)}`;
  });

  applyPreset(p: { label: string; fn: () => DateRange }) {
    this.dateRange.set(p.fn());
    this.selecting = 'start';
    this.apply();
  }

  apply() {
    const r = this.dateRange();
    this.onChange(r);
    this.rangeChange.emit(r);
    this.isOpen.set(false);
  }

  cancel() { this.isOpen.set(false); }

  clear(e: Event) {
    e.stopPropagation();
    this.dateRange.set({ start: null, end: null });
    this.selecting = 'start';
    this.onChange({ start: null, end: null });
    this.rangeChange.emit({ start: null, end: null });
  }

  writeValue(val: DateRange) { this.dateRange.set(val ?? { start: null, end: null }); }
  registerOnChange(fn: (v: DateRange) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
