import {
  Component, Input, Output, EventEmitter, forwardRef,
  ChangeDetectionStrategy, signal, computed
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UkSize } from '../shared/types';

@Component({
  selector: 'uk-textarea',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkTextareaComponent),
    multi: true
  }]
})
export class UkTextareaComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() size: UkSize = 'md';
  @Input() rows = 4;
  @Input() required = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() resizable = true;
  @Input() hint = '';
  @Input() errorMessage = '';
  @Input() maxlength?: number;
  @Output() valueChange = new EventEmitter<string>();

  readonly value = signal('');
  readonly isDisabled = signal(false);
  readonly textareaId = `uk-textarea-${Math.random().toString(36).slice(2)}`;

  readonly wrapperClass = computed(() => {
    const classes: string[] = [this.size];
    if (this.errorMessage) classes.push('error');
    return classes.join(' ');
  });

  private onChange = (_: string) => {};
  onTouched = () => {};

  onInput(event: Event) {
    const val = (event.target as HTMLTextAreaElement).value;
    this.value.set(val);
    this.onChange(val);
    this.valueChange.emit(val);
  }

  writeValue(val: string) { this.value.set(val ?? ''); }
  registerOnChange(fn: (v: string) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
