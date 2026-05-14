import {
  Component, input, output, OnInit, effect, untracked,
  ChangeDetectionStrategy, signal, computed
} from '@angular/core';
import {
  FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValidatorFn
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
export class UkDynamicFormComponent implements OnInit {
  readonly fields = input<(DynamicFormField & { hidden?: boolean; fullWidth?: boolean })[]>([]);
  readonly columns = input<1 | 2 | 3>(1);
  readonly showActions = input(true);
  readonly showReset = input(true);
  readonly submitLabel = input('Submit');
  readonly resetLabel = input('Reset');
  readonly actionsAlign = input<'left' | 'center' | 'right'>('right');
  readonly initialValues = input<Record<string, unknown>>({});
  readonly formSubmit = output<Record<string, unknown>>();
  readonly formChange = output<Record<string, unknown>>();
  readonly formReset = output<void>();

  form!: FormGroup;
  readonly submitting = signal(false);

  readonly sortedFields = computed(() =>
    [...this.fields()].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  );

  constructor(private fb: FormBuilder) {
    effect(() => {
      // Read fields signal to track it — rebuild form when fields change (after first render)
      this.fields();
      untracked(() => {
        if (this.form) this.buildForm();
      });
    });

    effect(() => {
      // React to initialValues changes
      const vals = this.initialValues();
      untracked(() => {
        if (this.form) this.form.patchValue(vals);
      });
    });
  }

  ngOnInit() { this.buildForm(); }

  buildForm() {
    const controls: Record<string, unknown> = {};
    for (const field of this.fields()) {
      const validators: ValidatorFn[] = [];
      if (field.required) validators.push(Validators.required);
      for (const v of field.validators ?? []) {
        const vfn = this.toValidator(v);
        if (vfn) validators.push(vfn);
      }
      const def = this.initialValues()[field.key] ?? field.defaultValue ?? (
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

  readonly INPUT_TYPES = new Set(['input', 'email', 'password', 'number', 'tel', 'url']);

  isInputField(type: string): boolean {
    return this.INPUT_TYPES.has(type);
  }

  inputType(type: string): 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' {
    return (type === 'input' ? 'text' : type) as 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  }

  getError(key: string): string {
    const ctrl = this.form?.get(key);
    if (!ctrl || !ctrl.touched || !ctrl.errors) return '';
    const field = this.fields().find(f => f.key === key);
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
