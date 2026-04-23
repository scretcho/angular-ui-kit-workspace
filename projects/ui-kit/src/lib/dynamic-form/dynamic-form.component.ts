import {
  Component, Input, Output, EventEmitter, OnInit, OnChanges,
  SimpleChanges, ChangeDetectionStrategy, signal, computed
} from '@angular/core';
import {
  FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidatorFn
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicFormField, DynamicValidator } from '../shared/types';
import { UkInputComponent } from '../input/input.component';
import { UkTextareaComponent } from '../textarea/textarea.component';
import { UkSelectComponent } from '../select/select.component';
import { UkMultiSelectComponent } from '../multi-select/multi-select.component';
import { UkCheckboxComponent } from '../checkbox/checkbox.component';
import { UkRadioGroupComponent } from '../radio/radio.component';
import { UkDateRangePickerComponent } from '../date-range-picker/date-range-picker.component';
import { UkOtpInputComponent } from '../otp-input/otp-input.component';
import { UkRangeComponent } from '../range/range.component';
import { UkRatingComponent } from '../rating/rating.component';
import { UkTimepickerComponent } from '../timepicker/timepicker.component';

@Component({
  selector: 'uk-dynamic-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    UkInputComponent, UkTextareaComponent, UkSelectComponent,
    UkMultiSelectComponent, UkCheckboxComponent, UkRadioGroupComponent,
    UkDateRangePickerComponent, UkOtpInputComponent, UkRangeComponent,
    UkRatingComponent, UkTimepickerComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class UkDynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: (DynamicFormField & { hidden?: boolean; fullWidth?: boolean })[] = [];
  @Input() columns: 1 | 2 | 3 = 1;
  @Input() showActions = true;
  @Input() showReset = true;
  @Input() submitLabel = 'Submit';
  @Input() resetLabel = 'Reset';
  @Input() actionsAlign: 'left' | 'center' | 'right' = 'right';
  @Input() initialValues: Record<string, unknown> = {};
  @Output() formSubmit = new EventEmitter<Record<string, unknown>>();
  @Output() formChange = new EventEmitter<Record<string, unknown>>();
  @Output() formReset = new EventEmitter<void>();

  form!: FormGroup;
  readonly submitting = signal(false);

  readonly sortedFields = computed(() =>
    [...this.fields].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit() { this.buildForm(); }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fields'] && !changes['fields'].firstChange) this.buildForm();
    if (changes['initialValues'] && this.form) this.form.patchValue(this.initialValues);
  }

  buildForm() {
    const controls: Record<string, unknown> = {};
    for (const field of this.fields) {
      const validators: ValidatorFn[] = [];
      if (field.required) validators.push(Validators.required);
      for (const v of field.validators ?? []) {
        const vfn = this.toValidator(v);
        if (vfn) validators.push(vfn);
      }
      const def = this.initialValues[field.key] ?? field.defaultValue ?? (
        field.type === 'checkbox' ? false :
        field.type === 'multiselect' ? [] :
        field.type === 'rating' ? 0 :
        field.type === 'range' ? (field.min ?? 0) : ''
      );
      controls[field.key] = [{ value: def, disabled: !!field.disabled }, validators];
    }
    this.form = this.fb.group(controls);
    this.form.valueChanges.subscribe(v => this.formChange.emit(v));
  }

  toValidator(v: DynamicValidator): ValidatorFn | null {
    switch (v.type) {
      case 'required': return Validators.required;
      case 'email': return Validators.email;
      case 'minLength': return Validators.minLength(v.value as number);
      case 'maxLength': return Validators.maxLength(v.value as number);
      case 'min': return Validators.min(v.value as number);
      case 'max': return Validators.max(v.value as number);
      case 'pattern': return Validators.pattern(v.value as string);
      default: return null;
    }
  }

  getError(key: string): string {
    const ctrl = this.form?.get(key);
    if (!ctrl || !ctrl.touched || !ctrl.errors) return '';
    const field = this.fields.find(f => f.key === key);
    const errors = ctrl.errors;

    if (errors['required']) return `${field?.label || key} is required`;
    if (errors['email']) return 'Please enter a valid email';
    if (errors['minlength']) return `Minimum ${errors['minlength'].requiredLength} characters required`;
    if (errors['maxlength']) return `Maximum ${errors['maxlength'].requiredLength} characters allowed`;
    if (errors['min']) return `Minimum value is ${errors['min'].min}`;
    if (errors['max']) return `Maximum value is ${errors['max'].max}`;
    if (errors['pattern']) {
      const v = field?.validators?.find(v => v.type === 'pattern');
      return v?.message ?? 'Invalid format';
    }
    return 'Invalid value';
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.formSubmit.emit(this.form.getRawValue());
  }

  onReset() {
    this.form.reset();
    this.formReset.emit();
  }

  setSubmitting(v: boolean) { this.submitting.set(v); }
  patchValues(v: Record<string, unknown>) { this.form.patchValue(v); }
  getValue() { return this.form.getRawValue(); }
  isValid() { return this.form.valid; }
}
