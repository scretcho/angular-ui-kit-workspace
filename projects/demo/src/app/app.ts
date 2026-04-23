import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  UkInputComponent,
  UkTextareaComponent,
  UkSelectComponent,
  UkMultiSelectComponent,
  UkCheckboxComponent,
  UkRadioGroupComponent,
  UkOtpInputComponent,
  UkRangeComponent,
  UkRatingComponent,
  UkStepperComponent, UkStepContentDirective,
  UkTimepickerComponent,
  UkDateRangePickerComponent,
  UkDynamicFormComponent,
  UkDynamicTableComponent,
  StepperStep,
  DynamicFormField,
  TableConfig,
} from 'ui-kit';

const PEOPLE = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  name: ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Hank'][i % 8] + ` ${i + 1}`,
  role: ['Admin', 'Editor', 'Viewer'][i % 3],
  active: i % 3 !== 2,
  joined: new Date(2022, i % 12, (i % 28) + 1).toISOString(),
  score: Math.round(Math.random() * 100),
}));

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    UkInputComponent, UkTextareaComponent, UkSelectComponent,
    UkMultiSelectComponent, UkCheckboxComponent, UkRadioGroupComponent,
    UkOtpInputComponent, UkRangeComponent, UkRatingComponent,
    UkStepperComponent, UkStepContentDirective,
    UkTimepickerComponent, UkDateRangePickerComponent,
    UkDynamicFormComponent, UkDynamicTableComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  activeSection = signal('input');

  sections = [
    { id: 'input',       label: 'Input' },
    { id: 'textarea',    label: 'Textarea' },
    { id: 'select',      label: 'Select' },
    { id: 'multiselect', label: 'Multi-Select' },
    { id: 'checkbox',    label: 'Checkbox' },
    { id: 'radio',       label: 'Radio' },
    { id: 'otp',         label: 'OTP Input' },
    { id: 'range',       label: 'Range' },
    { id: 'rating',      label: 'Rating' },
    { id: 'stepper',     label: 'Stepper' },
    { id: 'timepicker',  label: 'Time Picker' },
    { id: 'daterange',   label: 'Date Range' },
    { id: 'dynform',     label: 'Dynamic Form' },
    { id: 'dyntable',    label: 'Dynamic Table' },
  ];

  get sectionLabel() {
    return this.sections.find(s => s.id === this.activeSection())?.label ?? '';
  }

  /* ── Input ── */
  inputValue = '';

  /* ── Textarea ── */
  textareaValue = '';

  /* ── Select ── */
  selectOptions = [
    { value: 'ng', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
  ];
  selectedFramework = '';

  /* ── Multi-Select ── */
  msOptions = [
    { value: 'ts', label: 'TypeScript' },
    { value: 'scss', label: 'SCSS' },
    { value: 'rxjs', label: 'RxJS' },
    { value: 'signals', label: 'Signals' },
    { value: 'ngrx', label: 'NgRx' },
  ];
  selectedTech: string[] = [];

  /* ── Checkbox ── */
  checked1 = false;
  checked2 = true;

  /* ── Radio ── */
  radioOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];
  radioValue = 'system';

  /* ── OTP ── */
  otpValue = '';

  /* ── Range ── */
  rangeValue = 40;
  dualRange: [number, number] = [20, 70];

  /* ── Rating ── */
  ratingValue = 3;

  /* ── Stepper ── */
  steps: StepperStep[] = [
    { label: 'Account', description: 'Basic info' },
    { label: 'Profile', description: 'Your details' },
    { label: 'Review', description: 'Confirm & submit' },
  ];

  /* ── Time Picker ── */
  timeValue = { hour: 9, minute: 30, second: 0, period: 'AM' as const };

  /* ── Date Range ── */
  dateRange = { start: null, end: null };

  /* ── Dynamic Form ── */
  dynFormFields: DynamicFormField[] = [
    { key: 'name',    type: 'input',    label: 'Full Name',   required: true, placeholder: 'John Doe', order: 1 },
    { key: 'email',   type: 'input',    label: 'Email',       required: true, placeholder: 'john@example.com', validators: [{ type: 'email' }], order: 2 },
    { key: 'role',    type: 'select',   label: 'Role',        options: [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }], order: 3 },
    { key: 'bio',     type: 'textarea', label: 'Bio',         placeholder: 'Tell us about yourself', rows: 3, order: 4 },
    { key: 'agree',   type: 'checkbox', label: 'I agree to the terms', required: true, order: 5 },
  ];
  dynFormResult = signal<Record<string, unknown> | null>(null);

  /* ── Dynamic Table ── */
  tableData = PEOPLE;
  tableConfig: TableConfig<typeof PEOPLE[0]> = {
    columns: [
      { key: 'id',     header: 'ID',     sortable: true,  width: '60px' },
      { key: 'name',   header: 'Name',   sortable: true },
      { key: 'role',   header: 'Role',   type: 'badge', badgeMap: { Admin: 'uk-badge-admin', Editor: 'uk-badge-editor', Viewer: 'uk-badge-viewer' } },
      { key: 'active', header: 'Active', type: 'boolean', sortable: true },
      { key: 'joined', header: 'Joined', type: 'date',    sortable: true },
      { key: 'score',  header: 'Score',  sortable: true,  align: 'right' },
    ],
    searchable: true,
    selectable: true,
    paginate: true,
    pageSize: 8,
    pageSizeOptions: [8, 16, 32],
    striped: true,
    emptyText: 'No people found.',
  };
}
