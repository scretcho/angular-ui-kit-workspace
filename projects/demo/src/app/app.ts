import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  UkDatepickerComponent,
  UkDynamicFormComponent,
  UkDynamicTableComponent,
  UkLayoutComponent,
  UkHeaderComponent,
  UkSidebarComponent,
  StepperStep, DynamicFormField, TableConfig,
  NavItem, HeaderAction, LayoutUser,
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
    UkTimepickerComponent, UkDateRangePickerComponent, UkDatepickerComponent,
    UkDynamicFormComponent, UkDynamicTableComponent,
    UkLayoutComponent, UkHeaderComponent, UkSidebarComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  /* ── App shell navigation (drives uk-layout) ── */
  readonly activeSection = signal('layout');

  readonly appNav: NavItem[] = [
    { id: 'layout',      label: 'Layout',       icon: 'layout-sidebar', dividerBefore: false },
    { id: 'input',       label: 'Input',         icon: 'input-cursor-text', dividerBefore: true },
    { id: 'textarea',    label: 'Textarea',      icon: 'text-paragraph' },
    { id: 'select',      label: 'Select',        icon: 'chevron-bar-down' },
    { id: 'multiselect', label: 'Multi-Select',  icon: 'list-check' },
    { id: 'checkbox',    label: 'Checkbox',      icon: 'check2-square' },
    { id: 'radio',       label: 'Radio',         icon: 'record-circle' },
    { id: 'otp',         label: 'OTP Input',     icon: 'grid-3x2-gap' },
    { id: 'range',       label: 'Range',         icon: 'sliders' },
    { id: 'rating',      label: 'Rating',        icon: 'star' },
    { id: 'stepper',     label: 'Stepper',       icon: 'arrow-right-square' },
    { id: 'timepicker',  label: 'Time Picker',   icon: 'clock' },
    { id: 'datepicker',  label: 'Date Picker',   icon: 'calendar-date' },
    { id: 'daterange',   label: 'Date Range',    icon: 'calendar-range' },
    { id: 'dynform',     label: 'Dynamic Form',  icon: 'ui-checks-grid',  dividerBefore: true },
    { id: 'dyntable',    label: 'Dynamic Table', icon: 'table' },
  ];

  readonly appHeaderActions: HeaderAction[] = [
    { id: 'search',        icon: 'search',   label: 'Search' },
    { id: 'notifications', icon: 'bell',     label: 'Notifications', badge: 4, badgeVariant: 'danger' },
    { id: 'github',        icon: 'github',   label: 'GitHub' },
  ];

  readonly appUser: LayoutUser = {
    name: 'Dev User',
    email: 'dev@ui-kit.io',
    menuItems: [
      { id: 'profile',  label: 'Profile',   icon: 'person' },
      { id: 'settings', label: 'Settings',  icon: 'gear' },
      { id: 'logout',   label: 'Sign out',  icon: 'box-arrow-right' },
    ],
  };

  onNav(item: NavItem)   { this.activeSection.set(item.id); }
  onAction(id: string)   { console.log('action:', id); }
  onUserMenu(id: string) { console.log('user menu:', id); }

  get pageTitle(): string {
    return this.appNav.find(n => n.id === this.activeSection())?.label ?? '';
  }

  /* ── Layout section: standalone preview data ── */
  readonly previewNavItems: NavItem[] = [
    { id: 'dash',     label: 'Dashboard',  icon: 'speedometer2' },
    { id: 'users',    label: 'Users',      icon: 'people',
      children: [
        { id: 'users-all',    label: 'All Users',  icon: 'list-ul' },
        { id: 'users-roles',  label: 'Roles',      icon: 'shield-check' },
      ]
    },
    { id: 'reports',  label: 'Reports',    icon: 'graph-up' },
    { id: 'messages', label: 'Messages',   icon: 'chat-dots', badge: 7, badgeVariant: 'danger', dividerBefore: true },
    { id: 'settings', label: 'Settings',   icon: 'gear' },
  ];
  readonly previewActions: HeaderAction[] = [
    { id: 'bell', icon: 'bell', badge: 3, badgeVariant: 'danger' },
    { id: 'gear', icon: 'gear' },
  ];
  readonly previewUser: LayoutUser = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    menuItems: [
      { id: 'profile', label: 'Profile',  icon: 'person' },
      { id: 'logout',  label: 'Sign out', icon: 'box-arrow-right' },
    ],
  };
  readonly previewActiveId = signal('dash');

  readonly layoutSnippet = `<uk-layout
  title="My App"
  [navItems]="navItems"
  [headerActions]="headerActions"
  [user]="currentUser"
  [activeNavId]="activeId()"
  (navItemClick)="onNav($event)"
  (headerActionClick)="onAction($event)"
  (userMenuClick)="onUserMenu($event)"
>
  <!-- your page content goes here -->
  <router-outlet />
</uk-layout>`;

  /* ── Input ── */
  inputValue = '';

  /* ── Textarea ── */
  textareaValue = '';

  /* ── Select ── */
  selectOptions = [
    { value: 'ng',     label: 'Angular' },
    { value: 'react',  label: 'React' },
    { value: 'vue',    label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
  ];
  selectedFramework = '';

  /* ── Multi-Select ── */
  msOptions = [
    { value: 'ts',      label: 'TypeScript' },
    { value: 'scss',    label: 'SCSS' },
    { value: 'rxjs',    label: 'RxJS' },
    { value: 'signals', label: 'Signals' },
    { value: 'ngrx',    label: 'NgRx' },
  ];
  selectedTech: string[] = [];

  /* ── Checkbox ── */
  checked1 = false;
  checked2 = true;

  /* ── Radio ── */
  radioOptions = [
    { value: 'light',  label: 'Light' },
    { value: 'dark',   label: 'Dark' },
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
    { label: 'Review',  description: 'Confirm & submit' },
  ];

  /* ── Time Picker ── */
  timeValue = { hour: 9, minute: 30, second: 0, period: 'AM' as const };

  /* ── Date Picker ── */
  pickedDate: Date | null = null;
  readonly today = new Date();
  readonly maxBooking = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  /* ── Date Range ── */
  dateRange = { start: null, end: null };

  /* ── Dynamic Form ── */
  dynFormFields: DynamicFormField[] = [
    { key: 'name',  type: 'input',    label: 'Full Name', required: true, placeholder: 'John Doe', order: 1 },
    { key: 'email', type: 'input',    label: 'Email',     required: true, placeholder: 'john@example.com', validators: [{ type: 'email' }], order: 2 },
    { key: 'role',  type: 'select',   label: 'Role',      options: [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }], order: 3 },
    { key: 'bio',   type: 'textarea', label: 'Bio',       placeholder: 'Tell us about yourself', rows: 3, order: 4 },
    { key: 'agree', type: 'checkbox', label: 'I agree to the terms', required: true, order: 5 },
  ];
  dynFormResult = signal<Record<string, unknown> | null>(null);

  /* ── Dynamic Table ── */
  tableData = PEOPLE;
  tableConfig: TableConfig<typeof PEOPLE[0]> = {
    columns: [
      { key: 'id',     header: 'ID',     sortable: true, width: '60px' },
      { key: 'name',   header: 'Name',   sortable: true },
      { key: 'role',   header: 'Role',   type: 'badge', badgeMap: { Admin: 'uk-badge-admin', Editor: 'uk-badge-editor', Viewer: 'uk-badge-viewer' } },
      { key: 'active', header: 'Active', type: 'boolean', sortable: true },
      { key: 'joined', header: 'Joined', type: 'date',    sortable: true },
      { key: 'score',  header: 'Score',  sortable: true,  align: 'right' },
    ],
    searchable: true, selectable: true, paginate: true,
    pageSize: 8, pageSizeOptions: [8, 16, 32], striped: true,
    emptyText: 'No people found.',
  };
}
