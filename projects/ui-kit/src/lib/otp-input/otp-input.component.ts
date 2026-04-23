import {
  Component, Input, Output, EventEmitter, forwardRef,
  ChangeDetectionStrategy, signal, ViewChildren, QueryList, ElementRef, AfterViewInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uk-otp-input',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkOtpInputComponent),
    multi: true
  }]
})
export class UkOtpInputComponent implements ControlValueAccessor, AfterViewInit {
  @Input() label = '';
  @Input() length = 6;
  @Input() mask = false;
  @Input() required = false;
  @Input() disabled = false;
  @Input() separator = '';
  @Input() separatorAfter = 3;
  @Input() hint = '';
  @Input() errorMessage = '';
  @Output() completed = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  @ViewChildren('otpInput') inputRefs!: QueryList<ElementRef<HTMLInputElement>>;

  readonly digits = signal<Record<number, string>>({});
  readonly isDisabled = signal(false);
  readonly focusedIndex = signal(-1);

  get slots() { return Array.from({ length: this.length }, (_, i) => i); }

  private onChange = (_: string) => {};
  onTouched = () => {};

  ngAfterViewInit() {}

  getOtpValue() {
    return this.slots.map(i => this.digits()[i] ?? '').join('');
  }

  focusInput(index: number) {
    const inputs = this.inputRefs?.toArray();
    if (inputs?.[index]) inputs[index].nativeElement.focus();
  }

  onKeyDown(e: KeyboardEvent, index: number) {
    if (e.key === 'Backspace') {
      if (!this.digits()[index]) {
        this.digits.update(d => { const n = { ...d }; delete n[index - 1]; return n; });
        this.focusInput(index - 1);
      } else {
        this.digits.update(d => { const n = { ...d }; delete n[index]; return n; });
      }
      this.emitChange();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') { this.focusInput(index - 1); }
    else if (e.key === 'ArrowRight') { this.focusInput(index + 1); }
  }

  onInput(e: Event, index: number) {
    const input = e.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '').slice(-1);
    input.value = val;
    if (val) {
      this.digits.update(d => ({ ...d, [index]: val }));
      if (index < this.length - 1) this.focusInput(index + 1);
    }
    this.emitChange();
  }

  onPaste(e: ClipboardEvent) {
    e.preventDefault();
    const text = e.clipboardData?.getData('text') ?? '';
    const digits = text.replace(/\D/g, '').slice(0, this.length).split('');
    const map: Record<number, string> = {};
    digits.forEach((d, i) => { map[i] = d; });
    this.digits.set(map);
    this.focusInput(Math.min(digits.length, this.length - 1));
    this.emitChange();
  }

  emitChange() {
    const val = this.getOtpValue();
    this.onChange(val);
    this.valueChange.emit(val);
    if (val.length === this.length) this.completed.emit(val);
  }

  writeValue(val: string) {
    const map: Record<number, string> = {};
    (val ?? '').split('').slice(0, this.length).forEach((c, i) => { map[i] = c; });
    this.digits.set(map);
  }
  registerOnChange(fn: (v: string) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
