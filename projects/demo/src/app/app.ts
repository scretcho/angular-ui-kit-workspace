import { Component, inject, signal } from '@angular/core';
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
  UkButtonComponent,
  UkLayoutComponent,
  UkHeaderComponent,
  UkSidebarComponent,
  UkOffcanvasComponent,
  UkSpinnerComponent,
  UkToasterComponent,
  UkToastService,
  UkProgressComponent,
  UkModalComponent,
  UkListGroupComponent,
  UkListItemComponent,
  UkAvatarComponent,
  UkAvatarGroupComponent,
  UkAlertComponent,
  UkAccordionComponent,
  UkAccordionItemComponent,
  UkChartComponent,
  StepperStep, DynamicFormField, TableConfig,
  NavItem, HeaderAction, LayoutUser, ChartConfig,
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
    UkButtonComponent,
    UkLayoutComponent, UkHeaderComponent, UkSidebarComponent,
    UkOffcanvasComponent,
    UkSpinnerComponent,
    UkToasterComponent,
    UkProgressComponent,
    UkModalComponent,
    UkListGroupComponent, UkListItemComponent,
    UkAvatarComponent, UkAvatarGroupComponent,
    UkAlertComponent,
    UkAccordionComponent, UkAccordionItemComponent,
    UkChartComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  readonly toastService = inject(UkToastService);

  /* ── App shell navigation (drives uk-layout) ── */
  readonly activeSection = signal('layout');

  readonly appNav: NavItem[] = [
    { id: 'layout',      label: 'Layout',       icon: 'layout-sidebar' },
    { id: 'button',      label: 'Button',        icon: 'hand-index-thumb', dividerBefore: true },
    { id: 'input',       label: 'Input',         icon: 'input-cursor-text' },
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
    { id: 'dynform',     label: 'Dynamic Form',  icon: 'ui-checks-grid', dividerBefore: true },
    { id: 'dyntable',    label: 'Dynamic Table', icon: 'table' },
    { id: 'offcanvas',   label: 'Offcanvas',     icon: 'layout-sidebar-reverse', dividerBefore: true },
    { id: 'spinner',     label: 'Spinner',       icon: 'arrow-repeat',           dividerBefore: true },
    { id: 'toast',       label: 'Toast',         icon: 'bell-fill' },
    { id: 'progress',    label: 'Progress',      icon: 'bar-chart-steps' },
    { id: 'modal',       label: 'Modal',         icon: 'window-stack' },
    { id: 'list',        label: 'List Group',    icon: 'list-ul' },
    { id: 'avatar',      label: 'Avatar',        icon: 'person-circle' },
    { id: 'alert',       label: 'Alert',         icon: 'exclamation-triangle' },
    { id: 'accordion',   label: 'Accordion',     icon: 'chevron-bar-expand' },
    { id: 'chart',       label: 'Chart',         icon: 'graph-up-arrow' },
  ];

  /* Items used in the Layout preview — mix of routed and non-routed */
  readonly previewNavRouted: NavItem[] = [
    { id: 'home',     label: 'Home',      icon: 'house',        route: '/' },
    { id: 'about',    label: 'About',     icon: 'info-circle',  route: '/about' },
    { id: 'team',     label: 'Team',      icon: 'people',
      children: [
        { id: 'team-eng',  label: 'Engineering', icon: 'code-slash',  route: '/team/engineering' },
        { id: 'team-des',  label: 'Design',      icon: 'palette',     route: '/team/design' },
      ]
    },
    { id: 'contact',  label: 'Contact',   icon: 'envelope',     route: '/contact', dividerBefore: true },
    { id: 'settings', label: 'Settings',  icon: 'gear',         route: '/settings' },
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

  /* ── Button ── */
  btnLoading = false;
  simulateLoad() {
    this.btnLoading = true;
    setTimeout(() => this.btnLoading = false, 2000);
  }

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
    { key: 'name',     type: 'input',    label: 'Full Name', required: true, placeholder: 'John Doe', order: 1 },
    { key: 'email',    type: 'email',    label: 'Email',     required: true, placeholder: 'john@example.com', order: 2 },
    { key: 'password', type: 'password', label: 'Password',  required: true, placeholder: '••••••••', validators: [{ type: 'minLength', value: 8 }], order: 3 },
    { key: 'age',      type: 'number',   label: 'Age',       placeholder: '25', min: 1, max: 120, order: 4 },
    { key: 'phone',    type: 'tel',      label: 'Phone',     placeholder: '+1 555 000 0000', order: 5 },
    { key: 'website',  type: 'url',      label: 'Website',   placeholder: 'https://example.com', order: 6 },
    { key: 'role',     type: 'select',   label: 'Role',      options: [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }], order: 7 },
    { key: 'bio',      type: 'textarea', label: 'Bio',       placeholder: 'Tell us about yourself', rows: 3, order: 8 },
    { key: 'agree',    type: 'checkbox', label: 'I agree to the terms', required: true, order: 9 },
  ];
  dynFormResult = signal<Record<string, unknown> | null>(null);

  /* ── Modal ── */
  modalOpen = false;
  modalLgOpen = false;

  /* ── Chart ── */
  readonly barChartCfg: ChartConfig = {
    type: 'bar',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      { label: 'Revenue', data: [42, 58, 37, 75, 63, 89] },
      { label: 'Expenses', data: [28, 35, 44, 31, 52, 47] },
    ],
  };
  readonly lineChartCfg: ChartConfig = {
    type: 'line',
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { label: 'Visitors', data: [120, 145, 98, 167, 203, 178, 134] },
      { label: 'Signups', data: [18, 22, 15, 31, 27, 24, 19] },
    ],
  };
  readonly donutChartCfg: ChartConfig = {
    type: 'donut',
    labels: ['Angular', 'React', 'Vue', 'Svelte', 'Other'],
    datasets: [{ label: 'Usage', data: [38, 42, 12, 5, 3] }],
  };
  readonly pieChartCfg: ChartConfig = {
    type: 'pie',
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [{ label: 'Sessions', data: [54, 36, 10] }],
  };

  /* ── Offcanvas ── */
  ocFormOpen = false;
  ocLeftOpen = false;
  ocTopOpen = false;
  ocBottomOpen = false;
  ocFormResult = signal<Record<string, unknown> | null>(null);
  readonly ocFormFields: DynamicFormField[] = [
    { key: 'name',  type: 'input',    label: 'Full Name', required: true, placeholder: 'John Doe', order: 1 },
    { key: 'email', type: 'input',    label: 'Email',     required: true, placeholder: 'you@example.com', validators: [{ type: 'email' }], order: 2 },
    { key: 'role',  type: 'select',   label: 'Role',      options: [{ value: 'admin', label: 'Admin' }, { value: 'editor', label: 'Editor' }, { value: 'viewer', label: 'Viewer' }], order: 3 },
    { key: 'bio',   type: 'textarea', label: 'Bio',       placeholder: 'A short bio…', rows: 3, order: 4 },
  ];

  /* ── Dynamic Table ── */
  tableData = PEOPLE;
  tableConfig: TableConfig<typeof PEOPLE[0]> = {
    columns: [
      { key: 'id',     header: 'ID',     sortable: true, width: '60px', show: false },
      { key: 'name',   header: 'Name',   sortable: true },
      { key: 'role',   header: 'Role',   type: 'badge', badgeMap: { Admin: 'uk-badge-admin', Editor: 'uk-badge-editor', Viewer: 'uk-badge-viewer' } },
      { key: 'active', header: 'Active', type: 'toggle' },
      { key: 'joined', header: 'Joined', type: 'date',   sortable: true },
      { key: 'score',  header: 'Score',  sortable: true, align: 'right' },
    ],
    rowActions: [
      { id: 'view',   label: 'View',   icon: 'eye',    variant: 'default' },
      { id: 'edit',   label: 'Edit',   icon: 'pencil', variant: 'primary' },
      { id: 'delete', label: 'Delete', icon: 'trash',  variant: 'danger' },
    ],
    searchable: true, selectable: true, paginate: true,
    pageSize: 8, pageSizeOptions: [8, 16, 32], striped: true,
    emptyText: 'No people found.',
  };

  onTableAction(event: { action: string; row: typeof PEOPLE[0] }) {
    const msgs: Record<string, string> = {
      view:   `Viewing ${event.row.name}`,
      edit:   `Editing ${event.row.name}`,
      delete: `Deleting ${event.row.name}`,
    };
    const variants: Record<string, 'info' | 'warning' | 'error'> = {
      view: 'info', edit: 'warning', delete: 'error',
    };
    const msg = msgs[event.action] ?? event.action;
    const v = variants[event.action] ?? 'info';
    if (v === 'error') this.toastService.error(msg);
    else if (v === 'warning') this.toastService.warning(msg);
    else this.toastService.info(msg);
  }
}
