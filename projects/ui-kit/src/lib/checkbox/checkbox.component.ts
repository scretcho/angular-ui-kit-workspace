import {
  Component, Input, Output, EventEmitter, forwardRef,
  ChangeDetectionStrategy, signal
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uk-checkbox',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkCheckboxComponent),
    multi: true
  }]
})
export class UkCheckboxComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() indeterminate = false;
  @Input() hint = '';
  @Input() errorMessage = '';
  @Output() checkedChange = new EventEmitter<boolean>();

  readonly checked = signal(false);
  readonly isDisabled = signal(false);

  private onChange = (_: boolean) => {};
  onTouched = () => {};

  onToggle(e: Event) {
    const v = (e.target as HTMLInputElement).checked;
    this.checked.set(v);
    this.onChange(v);
    this.checkedChange.emit(v);
    this.onTouched();
  }

  writeValue(val: boolean) { this.checked.set(!!val); }
  registerOnChange(fn: (v: boolean) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
