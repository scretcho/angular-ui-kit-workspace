import {
  Component, Input, Output, EventEmitter, forwardRef,
  ChangeDetectionStrategy, signal, computed, HostListener, ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}

@Component({
  selector: 'uk-datepicker',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkDatepickerComponent),
    multi: true
  }]
})
export class UkDatepickerComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = 'Select date';
  @Input() required = false;
  @Input() disabled = false;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() showTodayButton = true;
  @Input() clearable = true;
  @Input() hint = '';
  @Input() errorMessage = '';
  @Output() dateChange = new EventEmitter<Date | null>();

  readonly isOpen   = signal(false);
  readonly isDisabled = signal(false);
  readonly selected = signal<Date | null>(null);
  readonly viewYear  = signal(new Date().getFullYear());
  readonly viewMonth = signal(new Date().getMonth());
  readonly showYearPicker = signal(false);

  readonly weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  readonly today    = new Date();

  private onChange = (_: Date | null) => {};
  onTouched = () => {};

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    if (!this.el.nativeElement.contains(e.target)) {
      this.isOpen.set(false);
      this.showYearPicker.set(false);
    }
  }

  /* ── display ── */
  readonly displayValue = computed(() => {
    const d = this.selected();
    if (!d) return '';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  });

  readonly headerLabel = computed(() =>
    new Date(this.viewYear(), this.viewMonth(), 1)
      .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  );

  /* ── calendar grid ── */
  readonly days = computed(() => this.buildDays(this.viewYear(), this.viewMonth()));

  buildDays(year: number, month: number): CalendarDay[] {
    const days: CalendarDay[] = [];
    const first = new Date(year, month, 1);
    const last  = new Date(year, month + 1, 0);
    for (let i = first.getDay() - 1; i >= 0; i--) {
      days.push(this.makeDay(new Date(year, month, -i), false));
    }
    for (let d = 1; d <= last.getDate(); d++) {
      days.push(this.makeDay(new Date(year, month, d), true));
    }
    const rem = 42 - days.length;
    for (let d = 1; d <= rem; d++) {
      days.push(this.makeDay(new Date(year, month + 1, d), false));
    }
    return days;
  }

  makeDay(date: Date, isCurrentMonth: boolean): CalendarDay {
    const sel = this.selected();
    return {
      date,
      isCurrentMonth,
      isToday: this.sameDay(date, this.today),
      isSelected: !!sel && this.sameDay(date, sel),
      isDisabled:
        (!!this.minDate && date < this.minDate) ||
        (!!this.maxDate && date > this.maxDate),
    };
  }

  sameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() &&
           a.getMonth()    === b.getMonth()    &&
           a.getDate()     === b.getDate();
  }

  /* ── year picker grid ── */
  readonly yearRange = computed(() => {
    const base = Math.floor(this.viewYear() / 12) * 12;
    return Array.from({ length: 12 }, (_, i) => base + i);
  });

  /* ── interactions ── */
  open() {
    if (this.isDisabled()) return;
    const sel = this.selected();
    if (sel) { this.viewYear.set(sel.getFullYear()); this.viewMonth.set(sel.getMonth()); }
    this.isOpen.update(v => !v);
    this.showYearPicker.set(false);
    this.onTouched();
  }

  selectDay(date: Date) {
    if (this.isDisabled()) return;
    this.selected.set(date);
    this.onChange(date);
    this.dateChange.emit(date);
    this.isOpen.set(false);
  }

  selectToday() { this.selectDay(new Date()); }

  clear(e: Event) {
    e.stopPropagation();
    this.selected.set(null);
    this.onChange(null);
    this.dateChange.emit(null);
  }

  prevMonth() {
    if (this.viewMonth() === 0) { this.viewMonth.set(11); this.viewYear.update(y => y - 1); }
    else { this.viewMonth.update(m => m - 1); }
  }

  nextMonth() {
    if (this.viewMonth() === 11) { this.viewMonth.set(0); this.viewYear.update(y => y + 1); }
    else { this.viewMonth.update(m => m + 1); }
  }

  prevYearPage() { this.viewYear.update(y => y - 12); }
  nextYearPage() { this.viewYear.update(y => y + 12); }

  selectYear(year: number) {
    this.viewYear.set(year);
    this.showYearPicker.set(false);
  }

  /* ── ControlValueAccessor ── */
  writeValue(val: Date | null) { this.selected.set(val ?? null); }
  registerOnChange(fn: (v: Date | null) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
