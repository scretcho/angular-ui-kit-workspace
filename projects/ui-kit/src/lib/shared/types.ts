export type UkSize = 'sm' | 'md' | 'lg';
export type UkVariant = 'default' | 'filled' | 'outlined';

export interface SelectOption<T = string | number> {
  label: string;
  value: T;
  disabled?: boolean;
  group?: string;
}

export interface DynamicFormField {
  key: string;
  type:
    | 'input'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'textarea'
    | 'select'
    | 'multiselect'
    | 'checkbox'
    | 'radio'
    | 'date-range'
    | 'otp'
    | 'range'
    | 'rating'
    | 'timepicker';
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  validators?: DynamicValidator[];
  options?: SelectOption[];
  defaultValue?: unknown;
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  otpLength?: number;
  hint?: string;
  class?: string;
  order?: number;
}

export interface DynamicValidator {
  type: 'required' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern' | 'email';
  value?: string | number;
  message?: string;
}

export interface RowAction<T = Record<string, unknown>> {
  id: string;
  label: string;
  icon?: string;
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  show?: boolean | ((row: T) => boolean);
}

export interface TableColumn<T = Record<string, unknown>> {
  key: keyof T | string | ((row: T) => unknown);
  header: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'number' | 'date' | 'boolean' | 'toggle' | 'badge' | 'actions';
  cellTemplate?: unknown;
  format?: (value: unknown, row: T) => string;
  badgeMap?: Record<string, string>;
}

export interface TableConfig<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  paginate?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  searchable?: boolean;
  selectable?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  emptyText?: string;
  rowActions?: RowAction<T>[];
}

export interface NavItem {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  children?: NavItem[];
  badge?: string | number;
  badgeVariant?: 'primary' | 'success' | 'danger' | 'warning';
  dividerBefore?: boolean;
  disabled?: boolean;
  show?: boolean;
}

export interface HeaderAction {
  id: string;
  icon: string;
  label?: string;
  badge?: string | number;
  badgeVariant?: 'primary' | 'success' | 'danger' | 'warning';
}

export interface LayoutUser {
  name: string;
  email?: string;
  avatar?: string;
  menuItems?: Array<{ id: string; label: string; icon?: string }>;
}

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface TimeValue {
  hour: number;
  minute: number;
  second?: number;
  period?: 'AM' | 'PM';
}
