import * as _angular_core from '@angular/core';
import { ElementRef, AfterViewInit, QueryList, TemplateRef, OnInit, InjectionToken, Signal } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder, ValidatorFn } from '@angular/forms';
import * as ui_kit from 'ui-kit';

type UkSize = 'sm' | 'md' | 'lg';
type UkVariant = 'default' | 'filled' | 'outlined';
interface SelectOption<T = string | number> {
    label: string;
    value: T;
    disabled?: boolean;
    group?: string;
}
interface DynamicFormField {
    key: string;
    type: 'input' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select' | 'multiselect' | 'checkbox' | 'radio' | 'date-range' | 'otp' | 'range' | 'rating' | 'timepicker';
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
interface DynamicValidator {
    type: 'required' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern' | 'email';
    value?: string | number;
    message?: string;
}
interface RowAction<T = Record<string, unknown>> {
    id: string;
    label: string;
    icon?: string;
    variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
    show?: boolean | ((row: T) => boolean);
}
interface TableColumn<T = Record<string, unknown>> {
    key: keyof T | string | ((row: T) => unknown);
    header: string;
    sortable?: boolean;
    width?: string;
    align?: 'left' | 'center' | 'right';
    type?: 'text' | 'number' | 'date' | 'boolean' | 'toggle' | 'badge' | 'actions';
    cellTemplate?: unknown;
    format?: (value: unknown, row: T) => string;
    badgeMap?: Record<string, string>;
    show?: boolean;
}
interface TableConfig<T = Record<string, unknown>> {
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
interface NavItem {
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
interface HeaderAction {
    id: string;
    icon: string;
    label?: string;
    badge?: string | number;
    badgeVariant?: 'primary' | 'success' | 'danger' | 'warning';
}
interface LayoutUser {
    name: string;
    email?: string;
    avatar?: string;
    menuItems?: Array<{
        id: string;
        label: string;
        icon?: string;
    }>;
}
type DialogVariant = 'info' | 'success' | 'error' | 'warning';
interface AlertDialogConfig {
    variant?: DialogVariant;
    title?: string;
    message: string;
    button?: string;
    closeOnBackdrop?: boolean;
}
interface ConfirmDialogConfig {
    header?: string;
    message: string;
    subMessage?: string;
    data?: unknown;
    cancelButton?: string | false;
    confirmButton?: string;
    confirmVariant?: 'primary' | 'danger' | 'warning' | 'success';
    closeOnBackdrop?: boolean;
}
interface TabItem {
    id: string;
    label: string;
    icon?: string;
    disabled?: boolean;
    badge?: string | number;
}
interface DateRange {
    start: Date | null;
    end: Date | null;
}
interface TimeValue {
    hour: number;
    minute: number;
    second?: number;
    period?: 'AM' | 'PM';
}

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost' | 'outline';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
declare class UkButtonComponent {
    readonly variant: _angular_core.InputSignal<ButtonVariant>;
    readonly size: _angular_core.InputSignal<ButtonSize>;
    readonly icon: _angular_core.InputSignal<string | undefined>;
    readonly iconPosition: _angular_core.InputSignal<"left" | "right">;
    readonly iconOnly: _angular_core.InputSignal<boolean>;
    readonly label: _angular_core.InputSignal<string | undefined>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly loading: _angular_core.InputSignal<boolean>;
    readonly fullWidth: _angular_core.InputSignal<boolean>;
    readonly type: _angular_core.InputSignal<"button" | "submit" | "reset">;
    readonly clicked: _angular_core.OutputEmitterRef<MouseEvent>;
    readonly hostClass: _angular_core.Signal<string>;
    onClick(e: MouseEvent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkButtonComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkButtonComponent, "uk-button", never, { "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "iconPosition": { "alias": "iconPosition"; "required": false; "isSignal": true; }; "iconOnly": { "alias": "iconOnly"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "fullWidth": { "alias": "fullWidth"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, { "clicked": "clicked"; }, never, ["*"], true, never>;
}

declare class UkInputComponent implements ControlValueAccessor {
    readonly label: _angular_core.InputSignal<string>;
    readonly placeholder: _angular_core.InputSignal<string>;
    readonly type: _angular_core.InputSignal<"number" | "email" | "password" | "tel" | "url" | "text" | "search">;
    readonly size: _angular_core.InputSignal<UkSize>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly readonly: _angular_core.InputSignal<boolean>;
    readonly clearable: _angular_core.InputSignal<boolean>;
    readonly prefixIcon: _angular_core.InputSignal<boolean>;
    readonly suffixIcon: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly maxlength: _angular_core.InputSignal<number | undefined>;
    readonly minlength: _angular_core.InputSignal<number | undefined>;
    readonly autocomplete: _angular_core.InputSignal<string>;
    readonly id: _angular_core.InputSignal<string>;
    readonly valueChange: _angular_core.OutputEmitterRef<string>;
    readonly cleared: _angular_core.OutputEmitterRef<void>;
    readonly value: _angular_core.WritableSignal<string>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly focused: _angular_core.WritableSignal<boolean>;
    readonly inputId: string;
    readonly wrapperClass: _angular_core.Signal<string>;
    private onChange;
    onTouched: () => void;
    onInput(event: Event): void;
    clear(): void;
    writeValue(val: string): void;
    registerOnChange(fn: (v: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkInputComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkInputComponent, "uk-input", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "readonly": { "alias": "readonly"; "required": false; "isSignal": true; }; "clearable": { "alias": "clearable"; "required": false; "isSignal": true; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; "isSignal": true; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; "maxlength": { "alias": "maxlength"; "required": false; "isSignal": true; }; "minlength": { "alias": "minlength"; "required": false; "isSignal": true; }; "autocomplete": { "alias": "autocomplete"; "required": false; "isSignal": true; }; "id": { "alias": "id"; "required": false; "isSignal": true; }; }, { "valueChange": "valueChange"; "cleared": "cleared"; }, never, ["[ukPrefix]", "[ukSuffix]"], true, never>;
}

declare class UkTextareaComponent implements ControlValueAccessor {
    readonly label: _angular_core.InputSignal<string>;
    readonly placeholder: _angular_core.InputSignal<string>;
    readonly size: _angular_core.InputSignal<UkSize>;
    readonly rows: _angular_core.InputSignal<number>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly readonly: _angular_core.InputSignal<boolean>;
    readonly resizable: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly maxlength: _angular_core.InputSignal<number | undefined>;
    readonly valueChange: _angular_core.OutputEmitterRef<string>;
    readonly value: _angular_core.WritableSignal<string>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly textareaId: string;
    readonly wrapperClass: _angular_core.Signal<string>;
    private onChange;
    onTouched: () => void;
    onInput(event: Event): void;
    writeValue(val: string): void;
    registerOnChange(fn: (v: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkTextareaComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkTextareaComponent, "uk-textarea", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "rows": { "alias": "rows"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "readonly": { "alias": "readonly"; "required": false; "isSignal": true; }; "resizable": { "alias": "resizable"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; "maxlength": { "alias": "maxlength"; "required": false; "isSignal": true; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}

declare class UkSelectComponent implements ControlValueAccessor {
    private el;
    readonly label: _angular_core.InputSignal<string>;
    readonly placeholder: _angular_core.InputSignal<string>;
    readonly options: _angular_core.InputSignal<SelectOption<string | number>[]>;
    readonly size: _angular_core.InputSignal<UkSize>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly searchable: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly selectionChange: _angular_core.OutputEmitterRef<SelectOption<string | number>>;
    readonly value: _angular_core.WritableSignal<string | number | null>;
    readonly isOpen: _angular_core.WritableSignal<boolean>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly searchQuery: _angular_core.WritableSignal<string>;
    readonly selectedOption: _angular_core.Signal<SelectOption<string | number> | null>;
    readonly filteredOptions: _angular_core.Signal<SelectOption<string | number>[]>;
    readonly wrapperClass: _angular_core.Signal<string>;
    private onChange;
    onTouched: () => void;
    constructor(el: ElementRef);
    onDocumentClick(e: MouseEvent): void;
    toggle(): void;
    onSearch(e: Event): void;
    selectOption(opt: SelectOption): void;
    writeValue(val: string | number | null): void;
    registerOnChange(fn: (v: string | number | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkSelectComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkSelectComponent, "uk-select", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "searchable": { "alias": "searchable"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}

declare class UkMultiSelectComponent implements ControlValueAccessor {
    private el;
    readonly label: _angular_core.InputSignal<string>;
    readonly placeholder: _angular_core.InputSignal<string>;
    readonly options: _angular_core.InputSignal<SelectOption<string | number>[]>;
    readonly size: _angular_core.InputSignal<UkSize>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly showSelectAll: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly selectionChange: _angular_core.OutputEmitterRef<SelectOption<string | number>[]>;
    readonly values: _angular_core.WritableSignal<(string | number)[]>;
    readonly isOpen: _angular_core.WritableSignal<boolean>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly searchQuery: _angular_core.WritableSignal<string>;
    readonly selectedOptions: _angular_core.Signal<SelectOption<string | number>[]>;
    readonly filteredOptions: _angular_core.Signal<SelectOption<string | number>[]>;
    readonly allSelected: _angular_core.Signal<boolean>;
    readonly wrapperClass: _angular_core.Signal<string>;
    private onChange;
    onTouched: () => void;
    constructor(el: ElementRef);
    onDocumentClick(e: MouseEvent): void;
    toggle(): void;
    onSearch(e: Event): void;
    isSelected(opt: SelectOption): boolean;
    toggleOption(opt: SelectOption): void;
    removeOption(opt: SelectOption, e: Event): void;
    toggleAll(): void;
    writeValue(val: (string | number)[]): void;
    registerOnChange(fn: (v: (string | number)[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkMultiSelectComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkMultiSelectComponent, "uk-multi-select", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "showSelectAll": { "alias": "showSelectAll"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}

interface CalendarDay$1 {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    isInRange: boolean;
    isStart: boolean;
    isEnd: boolean;
    isDisabled: boolean;
}
declare class UkDateRangePickerComponent implements ControlValueAccessor {
    private el;
    readonly label: _angular_core.InputSignal<string>;
    readonly placeholder: _angular_core.InputSignal<string>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly minDate: _angular_core.InputSignal<Date | undefined>;
    readonly maxDate: _angular_core.InputSignal<Date | undefined>;
    readonly showPresets: _angular_core.InputSignal<boolean>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly format: _angular_core.InputSignal<string>;
    readonly rangeChange: _angular_core.OutputEmitterRef<DateRange>;
    readonly isOpen: _angular_core.WritableSignal<boolean>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly dateRange: _angular_core.WritableSignal<DateRange>;
    readonly hoverDate: _angular_core.WritableSignal<Date | null>;
    readonly leftYear: _angular_core.WritableSignal<number>;
    readonly leftMonth: _angular_core.WritableSignal<number>;
    readonly rightYear: _angular_core.Signal<number>;
    readonly rightMonth: _angular_core.Signal<number>;
    readonly weekDays: string[];
    readonly today: Date;
    private selecting;
    readonly presets: {
        label: string;
        fn: () => {
            start: Date;
            end: Date;
        };
    }[];
    private onChange;
    onTouched: () => void;
    constructor(el: ElementRef);
    onDocumentClick(e: MouseEvent): void;
    openPicker(): void;
    buildDays(year: number, month: number): CalendarDay$1[];
    buildDay(date: Date, isCurrentMonth: boolean): CalendarDay$1;
    readonly leftDays: _angular_core.Signal<CalendarDay$1[]>;
    readonly rightDays: _angular_core.Signal<CalendarDay$1[]>;
    sameDay(a: Date, b: Date): boolean;
    selectDay(date: Date): void;
    prevMonth(): void;
    nextMonth(): void;
    nextMonthLeft(): void;
    prevMonthRight(): void;
    formatMonth(year: number, month: number): string;
    formatDate(d: Date): string;
    readonly displayValue: _angular_core.Signal<string>;
    applyPreset(p: {
        label: string;
        fn: () => DateRange;
    }): void;
    apply(): void;
    cancel(): void;
    clear(e: Event): void;
    writeValue(val: DateRange): void;
    registerOnChange(fn: (v: DateRange) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkDateRangePickerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkDateRangePickerComponent, "uk-date-range-picker", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "minDate": { "alias": "minDate"; "required": false; "isSignal": true; }; "maxDate": { "alias": "maxDate"; "required": false; "isSignal": true; }; "showPresets": { "alias": "showPresets"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; "format": { "alias": "format"; "required": false; "isSignal": true; }; }, { "rangeChange": "rangeChange"; }, never, never, true, never>;
}

interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    isDisabled: boolean;
}
declare class UkDatepickerComponent implements ControlValueAccessor {
    private el;
    readonly label: _angular_core.InputSignal<string>;
    readonly placeholder: _angular_core.InputSignal<string>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly minDate: _angular_core.InputSignal<Date | undefined>;
    readonly maxDate: _angular_core.InputSignal<Date | undefined>;
    readonly showTodayButton: _angular_core.InputSignal<boolean>;
    readonly clearable: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly dateChange: _angular_core.OutputEmitterRef<Date | null>;
    readonly isOpen: _angular_core.WritableSignal<boolean>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly selected: _angular_core.WritableSignal<Date | null>;
    readonly viewYear: _angular_core.WritableSignal<number>;
    readonly viewMonth: _angular_core.WritableSignal<number>;
    readonly showYearPicker: _angular_core.WritableSignal<boolean>;
    readonly weekDays: string[];
    readonly today: Date;
    private onChange;
    onTouched: () => void;
    constructor(el: ElementRef);
    onDocumentClick(e: MouseEvent): void;
    readonly displayValue: _angular_core.Signal<string>;
    readonly headerLabel: _angular_core.Signal<string>;
    readonly days: _angular_core.Signal<CalendarDay[]>;
    buildDays(year: number, month: number): CalendarDay[];
    makeDay(date: Date, isCurrentMonth: boolean): CalendarDay;
    sameDay(a: Date, b: Date): boolean;
    readonly yearRange: _angular_core.Signal<number[]>;
    open(): void;
    selectDay(date: Date): void;
    selectToday(): void;
    clear(e: Event): void;
    prevMonth(): void;
    nextMonth(): void;
    prevYearPage(): void;
    nextYearPage(): void;
    selectYear(year: number): void;
    writeValue(val: Date | null): void;
    registerOnChange(fn: (v: Date | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkDatepickerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkDatepickerComponent, "uk-datepicker", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "minDate": { "alias": "minDate"; "required": false; "isSignal": true; }; "maxDate": { "alias": "maxDate"; "required": false; "isSignal": true; }; "showTodayButton": { "alias": "showTodayButton"; "required": false; "isSignal": true; }; "clearable": { "alias": "clearable"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; }, { "dateChange": "dateChange"; }, never, never, true, never>;
}

declare class UkTimepickerComponent implements ControlValueAccessor {
    readonly label: _angular_core.InputSignal<string>;
    readonly use24Hour: _angular_core.InputSignal<boolean>;
    readonly showSeconds: _angular_core.InputSignal<boolean>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly timeChange: _angular_core.OutputEmitterRef<TimeValue>;
    readonly time: _angular_core.WritableSignal<TimeValue>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly displayHour: _angular_core.Signal<number>;
    private onChange;
    onTouched: () => void;
    padded(n: number): string;
    emit(): void;
    increment(unit: 'hour' | 'minute' | 'second'): void;
    decrement(unit: 'hour' | 'minute' | 'second'): void;
    setPeriod(p: 'AM' | 'PM'): void;
    onHourInput(e: Event): void;
    onMinuteInput(e: Event): void;
    onSecondInput(e: Event): void;
    validateHour(): void;
    validateMinute(): void;
    writeValue(val: TimeValue): void;
    registerOnChange(fn: (v: TimeValue) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkTimepickerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkTimepickerComponent, "uk-timepicker", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "use24Hour": { "alias": "use24Hour"; "required": false; "isSignal": true; }; "showSeconds": { "alias": "showSeconds"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; }, { "timeChange": "timeChange"; }, never, never, true, never>;
}

declare class UkCheckboxComponent implements ControlValueAccessor {
    readonly label: _angular_core.InputSignal<string>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly indeterminate: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly checkedChange: _angular_core.OutputEmitterRef<boolean>;
    readonly checked: _angular_core.WritableSignal<boolean>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    private onChange;
    onTouched: () => void;
    onToggle(e: Event): void;
    writeValue(val: boolean): void;
    registerOnChange(fn: (v: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkCheckboxComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkCheckboxComponent, "uk-checkbox", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "indeterminate": { "alias": "indeterminate"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; }, { "checkedChange": "checkedChange"; }, never, never, true, never>;
}

declare class UkRadioGroupComponent implements ControlValueAccessor {
    readonly label: _angular_core.InputSignal<string>;
    readonly options: _angular_core.InputSignal<SelectOption<string | number>[]>;
    readonly direction: _angular_core.InputSignal<"vertical" | "horizontal">;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly selectionChange: _angular_core.OutputEmitterRef<SelectOption<string | number>>;
    readonly value: _angular_core.WritableSignal<string | number | null>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly groupName: string;
    private onChange;
    onTouched: () => void;
    select(opt: SelectOption): void;
    writeValue(val: string | number | null): void;
    registerOnChange(fn: (v: string | number | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkRadioGroupComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkRadioGroupComponent, "uk-radio-group", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "direction": { "alias": "direction"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}

declare class UkOtpInputComponent implements ControlValueAccessor, AfterViewInit {
    readonly label: _angular_core.InputSignal<string>;
    readonly length: _angular_core.InputSignal<number>;
    readonly mask: _angular_core.InputSignal<boolean>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly separator: _angular_core.InputSignal<string>;
    readonly separatorAfter: _angular_core.InputSignal<number>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly errorMessage: _angular_core.InputSignal<string>;
    readonly completed: _angular_core.OutputEmitterRef<string>;
    readonly valueChange: _angular_core.OutputEmitterRef<string>;
    inputRefs: QueryList<ElementRef<HTMLInputElement>>;
    readonly digits: _angular_core.WritableSignal<Record<number, string>>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly focusedIndex: _angular_core.WritableSignal<number>;
    get slots(): number[];
    private onChange;
    onTouched: () => void;
    ngAfterViewInit(): void;
    getOtpValue(): string;
    focusInput(index: number): void;
    onKeyDown(e: KeyboardEvent, index: number): void;
    onInput(e: Event, index: number): void;
    onPaste(e: ClipboardEvent): void;
    emitChange(): void;
    writeValue(val: string): void;
    registerOnChange(fn: (v: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkOtpInputComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkOtpInputComponent, "uk-otp-input", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "length": { "alias": "length"; "required": false; "isSignal": true; }; "mask": { "alias": "mask"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "separator": { "alias": "separator"; "required": false; "isSignal": true; }; "separatorAfter": { "alias": "separatorAfter"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "errorMessage": { "alias": "errorMessage"; "required": false; "isSignal": true; }; }, { "completed": "completed"; "valueChange": "valueChange"; }, never, never, true, never>;
}

declare class UkRangeComponent implements ControlValueAccessor {
    readonly label: _angular_core.InputSignal<string>;
    readonly min: _angular_core.InputSignal<number>;
    readonly max: _angular_core.InputSignal<number>;
    readonly step: _angular_core.InputSignal<number>;
    readonly range: _angular_core.InputSignal<boolean>;
    readonly showValue: _angular_core.InputSignal<boolean>;
    readonly showTicks: _angular_core.InputSignal<boolean>;
    readonly unit: _angular_core.InputSignal<string>;
    readonly required: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly valueChange: _angular_core.OutputEmitterRef<number | [number, number]>;
    readonly value: _angular_core.WritableSignal<number>;
    readonly lowValue: _angular_core.WritableSignal<number>;
    readonly highValue: _angular_core.WritableSignal<number>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    readonly valuePercent: _angular_core.Signal<number>;
    readonly lowPercent: _angular_core.Signal<number>;
    readonly highPercent: _angular_core.Signal<number>;
    private onChange;
    onTouched: () => void;
    onInput(e: Event): void;
    onLowInput(e: Event): void;
    onHighInput(e: Event): void;
    emitRange(): void;
    writeValue(val: number | [number, number]): void;
    registerOnChange(fn: (v: number | [number, number]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkRangeComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkRangeComponent, "uk-range", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "min": { "alias": "min"; "required": false; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; "step": { "alias": "step"; "required": false; "isSignal": true; }; "range": { "alias": "range"; "required": false; "isSignal": true; }; "showValue": { "alias": "showValue"; "required": false; "isSignal": true; }; "showTicks": { "alias": "showTicks"; "required": false; "isSignal": true; }; "unit": { "alias": "unit"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}

declare class UkRatingComponent implements ControlValueAccessor {
    readonly label: _angular_core.InputSignal<string>;
    readonly max: _angular_core.InputSignal<number>;
    readonly icon: _angular_core.InputSignal<string>;
    readonly allowHalf: _angular_core.InputSignal<boolean>;
    readonly readonly: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly showCount: _angular_core.InputSignal<boolean>;
    readonly hint: _angular_core.InputSignal<string>;
    readonly ratingChange: _angular_core.OutputEmitterRef<number>;
    readonly value: _angular_core.WritableSignal<number>;
    readonly hoverValue: _angular_core.WritableSignal<number | null>;
    readonly isDisabled: _angular_core.WritableSignal<boolean>;
    get stars(): number[];
    private onChange;
    onTouched: () => void;
    rate(star: number): void;
    writeValue(val: number): void;
    registerOnChange(fn: (v: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(d: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkRatingComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkRatingComponent, "uk-rating", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "allowHalf": { "alias": "allowHalf"; "required": false; "isSignal": true; }; "readonly": { "alias": "readonly"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "showCount": { "alias": "showCount"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; }, { "ratingChange": "ratingChange"; }, never, never, true, never>;
}

interface StepperStep {
    label: string;
    description?: string;
    icon?: string;
    optional?: boolean;
}
declare class UkStepContentDirective {
    templateRef: TemplateRef<unknown>;
    readonly stepIndex: _angular_core.InputSignal<number>;
    constructor(templateRef: TemplateRef<unknown>);
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkStepContentDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<UkStepContentDirective, "[ukStepContent]", never, { "stepIndex": { "alias": "ukStepContent"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
declare class UkStepperComponent {
    readonly steps: _angular_core.InputSignal<StepperStep[]>;
    readonly direction: _angular_core.InputSignal<"vertical" | "horizontal">;
    readonly showNavigation: _angular_core.InputSignal<boolean>;
    readonly allowNavigation: _angular_core.InputSignal<boolean>;
    readonly stepChange: _angular_core.OutputEmitterRef<number>;
    readonly finished: _angular_core.OutputEmitterRef<void>;
    stepTemplates: QueryList<UkStepContentDirective>;
    readonly currentStep: _angular_core.WritableSignal<number>;
    goTo(index: number): void;
    next(): void;
    prev(): void;
    finish(): void;
    reset(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkStepperComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkStepperComponent, "uk-stepper", never, { "steps": { "alias": "steps"; "required": false; "isSignal": true; }; "direction": { "alias": "direction"; "required": false; "isSignal": true; }; "showNavigation": { "alias": "showNavigation"; "required": false; "isSignal": true; }; "allowNavigation": { "alias": "allowNavigation"; "required": false; "isSignal": true; }; }, { "stepChange": "stepChange"; "finished": "finished"; }, ["stepTemplates"], ["*"], true, never>;
}

declare class UkDynamicFormComponent implements OnInit {
    private fb;
    readonly fields: _angular_core.InputSignal<(DynamicFormField & {
        hidden?: boolean;
        fullWidth?: boolean;
    })[]>;
    readonly columns: _angular_core.InputSignal<2 | 1 | 3>;
    readonly showActions: _angular_core.InputSignal<boolean>;
    readonly showReset: _angular_core.InputSignal<boolean>;
    readonly submitLabel: _angular_core.InputSignal<string>;
    readonly resetLabel: _angular_core.InputSignal<string>;
    readonly actionsAlign: _angular_core.InputSignal<"left" | "center" | "right">;
    readonly initialValues: _angular_core.InputSignal<Record<string, unknown>>;
    readonly formSubmit: _angular_core.OutputEmitterRef<Record<string, unknown>>;
    readonly formChange: _angular_core.OutputEmitterRef<Record<string, unknown>>;
    readonly formReset: _angular_core.OutputEmitterRef<void>;
    form: FormGroup;
    readonly submitting: _angular_core.WritableSignal<boolean>;
    readonly sortedFields: _angular_core.Signal<(DynamicFormField & {
        hidden?: boolean;
        fullWidth?: boolean;
    })[]>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    buildForm(): void;
    toValidator(v: DynamicValidator): ValidatorFn | null;
    readonly INPUT_TYPES: Set<string>;
    isInputField(type: string): boolean;
    inputType(type: string): 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    getError(key: string): string;
    onSubmit(): void;
    onReset(): void;
    setSubmitting(v: boolean): void;
    patchValues(v: Record<string, unknown>): void;
    getValue(): any;
    isValid(): boolean;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkDynamicFormComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkDynamicFormComponent, "uk-dynamic-form", never, { "fields": { "alias": "fields"; "required": false; "isSignal": true; }; "columns": { "alias": "columns"; "required": false; "isSignal": true; }; "showActions": { "alias": "showActions"; "required": false; "isSignal": true; }; "showReset": { "alias": "showReset"; "required": false; "isSignal": true; }; "submitLabel": { "alias": "submitLabel"; "required": false; "isSignal": true; }; "resetLabel": { "alias": "resetLabel"; "required": false; "isSignal": true; }; "actionsAlign": { "alias": "actionsAlign"; "required": false; "isSignal": true; }; "initialValues": { "alias": "initialValues"; "required": false; "isSignal": true; }; }, { "formSubmit": "formSubmit"; "formChange": "formChange"; "formReset": "formReset"; }, never, never, true, never>;
}

type SortDir = 'asc' | 'desc' | null;
declare class UkDynamicTableComponent<T extends Record<string, unknown>> {
    readonly data: _angular_core.InputSignal<T[]>;
    readonly config: _angular_core.InputSignal<TableConfig<T>>;
    readonly loading: _angular_core.InputSignal<boolean>;
    readonly rowKey: _angular_core.InputSignal<(row: T, index: number) => string | number>;
    readonly rowClickable: _angular_core.InputSignal<boolean>;
    readonly searchPlaceholder: _angular_core.InputSignal<string>;
    readonly toolbarActions: _angular_core.InputSignal<unknown[]>;
    readonly rowClick: _angular_core.OutputEmitterRef<T>;
    readonly selectionChange: _angular_core.OutputEmitterRef<T[]>;
    readonly sortChange: _angular_core.OutputEmitterRef<{
        key: string;
        dir: SortDir;
    }>;
    readonly pageChange: _angular_core.OutputEmitterRef<number>;
    readonly actionClick: _angular_core.OutputEmitterRef<{
        action: string;
        row: T;
    }>;
    readonly toggleChange: _angular_core.OutputEmitterRef<{
        key: string;
        value: boolean;
        row: T;
    }>;
    readonly Math: Math;
    readonly searchQuery: _angular_core.WritableSignal<string>;
    readonly sortKey: _angular_core.WritableSignal<string | null>;
    readonly sortDir: _angular_core.WritableSignal<SortDir>;
    readonly currentPage: _angular_core.WritableSignal<number>;
    readonly pageSize: _angular_core.WritableSignal<number>;
    readonly selectedRows: _angular_core.WritableSignal<T[]>;
    readonly _loading: _angular_core.WritableSignal<boolean>;
    readonly _data: _angular_core.WritableSignal<T[]>;
    readonly _config: _angular_core.WritableSignal<TableConfig<T>>;
    constructor();
    readonly visibleColumns: _angular_core.Signal<TableColumn<T>[]>;
    readonly filteredData: _angular_core.Signal<T[]>;
    readonly totalPages: _angular_core.Signal<number>;
    readonly pagedData: _angular_core.Signal<T[]>;
    readonly allSelected: _angular_core.Signal<boolean>;
    readonly someSelected: _angular_core.Signal<boolean>;
    readonly pageNumbers: _angular_core.Signal<number[]>;
    getCellValue(row: T, col: TableColumn<T>): unknown;
    getValueByPath(row: T, path: string): unknown;
    getBadgeClass(col: TableColumn<T>, val: unknown): string;
    formatDate(val: unknown): string;
    onSearch(e: Event): void;
    clearSearch(): void;
    sortByCol(col: TableColumn<T>): void;
    isLoading(): boolean;
    sort(key: string): void;
    isSelected(row: T): boolean;
    toggleRow(row: T): void;
    toggleAll(): void;
    clearSelection(): void;
    onRowClick(row: T): void;
    isActionVisible(act: {
        show?: boolean | ((row: T) => boolean);
    }, row: T): boolean;
    onActionClick(actionId: string, row: T, event: MouseEvent): void;
    onToggle(col: TableColumn<T>, row: T, event: Event): void;
    goToPage(p: number): void;
    nextPage(): void;
    prevPage(): void;
    onPageSizeChange(e: Event): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkDynamicTableComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkDynamicTableComponent<any>, "uk-dynamic-table", never, { "data": { "alias": "data"; "required": false; "isSignal": true; }; "config": { "alias": "config"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "rowKey": { "alias": "rowKey"; "required": false; "isSignal": true; }; "rowClickable": { "alias": "rowClickable"; "required": false; "isSignal": true; }; "searchPlaceholder": { "alias": "searchPlaceholder"; "required": false; "isSignal": true; }; "toolbarActions": { "alias": "toolbarActions"; "required": false; "isSignal": true; }; }, { "rowClick": "rowClick"; "selectionChange": "selectionChange"; "sortChange": "sortChange"; "pageChange": "pageChange"; "actionClick": "actionClick"; "toggleChange": "toggleChange"; }, never, ["[ukTableActions]"], true, never>;
}

declare class UkHeaderComponent {
    private el;
    readonly title: _angular_core.InputSignal<string>;
    readonly logo: _angular_core.InputSignal<string | undefined>;
    readonly actions: _angular_core.InputSignal<HeaderAction[]>;
    readonly user: _angular_core.InputSignal<LayoutUser | undefined>;
    readonly sidebarCollapsed: _angular_core.InputSignal<boolean>;
    readonly showMenuToggle: _angular_core.InputSignal<boolean>;
    readonly menuToggle: _angular_core.OutputEmitterRef<void>;
    readonly actionClick: _angular_core.OutputEmitterRef<string>;
    readonly userMenuClick: _angular_core.OutputEmitterRef<string>;
    readonly userMenuOpen: _angular_core.WritableSignal<boolean>;
    constructor(el: ElementRef);
    onDocumentClick(e: MouseEvent): void;
    get initials(): string;
    toggleUserMenu(): void;
    onActionClick(id: string): void;
    onUserMenuClick(id: string): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkHeaderComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkHeaderComponent, "uk-header", never, { "title": { "alias": "title"; "required": false; "isSignal": true; }; "logo": { "alias": "logo"; "required": false; "isSignal": true; }; "actions": { "alias": "actions"; "required": false; "isSignal": true; }; "user": { "alias": "user"; "required": false; "isSignal": true; }; "sidebarCollapsed": { "alias": "sidebarCollapsed"; "required": false; "isSignal": true; }; "showMenuToggle": { "alias": "showMenuToggle"; "required": false; "isSignal": true; }; }, { "menuToggle": "menuToggle"; "actionClick": "actionClick"; "userMenuClick": "userMenuClick"; }, never, never, true, never>;
}

declare class UkSidebarComponent {
    readonly items: _angular_core.InputSignal<NavItem[]>;
    readonly activeId: _angular_core.InputSignal<string>;
    readonly collapsed: _angular_core.InputSignal<boolean>;
    readonly brandTitle: _angular_core.InputSignal<string>;
    readonly brandLogo: _angular_core.InputSignal<string | undefined>;
    readonly brandRoute: _angular_core.InputSignal<string | undefined>;
    readonly itemClick: _angular_core.OutputEmitterRef<NavItem>;
    readonly collapsedChange: _angular_core.OutputEmitterRef<boolean>;
    readonly expanded: _angular_core.WritableSignal<Record<string, boolean>>;
    toggleExpand(id: string): void;
    isExpanded(id: string): boolean;
    isActive(item: NavItem): boolean;
    isChildActive(item: NavItem): boolean;
    select(item: NavItem): void;
    selectChild(child: NavItem): void;
    toggleCollapse(): void;
    isVisible(item: NavItem): boolean;
    visibleChildren(item: NavItem): NavItem[];
    badgeClass(variant?: string): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkSidebarComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkSidebarComponent, "uk-sidebar", never, { "items": { "alias": "items"; "required": false; "isSignal": true; }; "activeId": { "alias": "activeId"; "required": false; "isSignal": true; }; "collapsed": { "alias": "collapsed"; "required": false; "isSignal": true; }; "brandTitle": { "alias": "brandTitle"; "required": false; "isSignal": true; }; "brandLogo": { "alias": "brandLogo"; "required": false; "isSignal": true; }; "brandRoute": { "alias": "brandRoute"; "required": false; "isSignal": true; }; }, { "itemClick": "itemClick"; "collapsedChange": "collapsedChange"; }, never, never, true, never>;
}

declare class UkLayoutComponent implements OnInit {
    readonly title: _angular_core.InputSignal<string>;
    readonly logo: _angular_core.InputSignal<string | undefined>;
    readonly brandRoute: _angular_core.InputSignal<string | undefined>;
    readonly navItems: _angular_core.InputSignal<NavItem[]>;
    readonly headerActions: _angular_core.InputSignal<HeaderAction[]>;
    readonly user: _angular_core.InputSignal<LayoutUser | undefined>;
    readonly activeNavId: _angular_core.InputSignal<string>;
    readonly defaultCollapsed: _angular_core.InputSignal<boolean>;
    readonly navItemClick: _angular_core.OutputEmitterRef<NavItem>;
    readonly headerActionClick: _angular_core.OutputEmitterRef<string>;
    readonly userMenuClick: _angular_core.OutputEmitterRef<string>;
    readonly sidebarCollapsed: _angular_core.WritableSignal<boolean>;
    ngOnInit(): void;
    toggleSidebar(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkLayoutComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkLayoutComponent, "uk-layout", never, { "title": { "alias": "title"; "required": false; "isSignal": true; }; "logo": { "alias": "logo"; "required": false; "isSignal": true; }; "brandRoute": { "alias": "brandRoute"; "required": false; "isSignal": true; }; "navItems": { "alias": "navItems"; "required": false; "isSignal": true; }; "headerActions": { "alias": "headerActions"; "required": false; "isSignal": true; }; "user": { "alias": "user"; "required": false; "isSignal": true; }; "activeNavId": { "alias": "activeNavId"; "required": false; "isSignal": true; }; "defaultCollapsed": { "alias": "defaultCollapsed"; "required": false; "isSignal": true; }; }, { "navItemClick": "navItemClick"; "headerActionClick": "headerActionClick"; "userMenuClick": "userMenuClick"; }, never, ["*"], true, never>;
}

type OffcanvasPosition = 'left' | 'right' | 'top' | 'bottom';
declare class UkOffcanvasComponent {
    readonly open: _angular_core.ModelSignal<boolean>;
    readonly title: _angular_core.InputSignal<string>;
    readonly position: _angular_core.InputSignal<OffcanvasPosition>;
    readonly size: _angular_core.InputSignal<string>;
    readonly backdrop: _angular_core.InputSignal<boolean>;
    readonly closeOnBackdrop: _angular_core.InputSignal<boolean>;
    readonly closed: _angular_core.OutputEmitterRef<void>;
    readonly isVisible: _angular_core.WritableSignal<boolean>;
    readonly isAnimating: _angular_core.WritableSignal<boolean>;
    private closeTimer;
    constructor();
    private show;
    private hide;
    close(): void;
    onBackdropClick(): void;
    onEscape(): void;
    get panelStyle(): Record<string, string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkOffcanvasComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkOffcanvasComponent, "uk-offcanvas", never, { "open": { "alias": "open"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "position": { "alias": "position"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "backdrop": { "alias": "backdrop"; "required": false; "isSignal": true; }; "closeOnBackdrop": { "alias": "closeOnBackdrop"; "required": false; "isSignal": true; }; }, { "open": "openChange"; "closed": "closed"; }, never, ["*", "[ukOffcanvasFooter]"], true, never>;
}

type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpinnerVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark';
declare class UkSpinnerComponent {
    readonly size: _angular_core.InputSignal<SpinnerSize>;
    readonly variant: _angular_core.InputSignal<SpinnerVariant>;
    readonly label: _angular_core.InputSignal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkSpinnerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkSpinnerComponent, "uk-spinner", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

type ToastVariant = 'success' | 'danger' | 'warning' | 'info';
type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
interface ToastItem {
    id: string;
    message: string;
    title?: string;
    variant: ToastVariant;
    duration: number;
    icon?: string;
}
declare class UkToastService {
    private _toasts;
    readonly toasts: _angular_core.Signal<ToastItem[]>;
    show(item: Omit<ToastItem, 'id'> & {
        id?: string;
    }): string;
    success(message: string, title?: string, duration?: number): string;
    error(message: string, title?: string, duration?: number): string;
    warning(message: string, title?: string, duration?: number): string;
    info(message: string, title?: string, duration?: number): string;
    dismiss(id: string): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkToastService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<UkToastService>;
}

declare class UkToasterComponent {
    readonly position: _angular_core.InputSignal<ToastPosition>;
    readonly toastService: UkToastService;
    dismiss(id: string): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkToasterComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkToasterComponent, "uk-toaster", never, { "position": { "alias": "position"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

type ProgressVariant = 'primary' | 'success' | 'danger' | 'warning' | 'info';
type ProgressSize = 'sm' | 'md' | 'lg';
declare class UkProgressComponent {
    readonly value: _angular_core.InputSignal<number>;
    readonly max: _angular_core.InputSignal<number>;
    readonly label: _angular_core.InputSignal<string | undefined>;
    readonly showLabel: _angular_core.InputSignal<boolean>;
    readonly striped: _angular_core.InputSignal<boolean>;
    readonly animated: _angular_core.InputSignal<boolean>;
    readonly indeterminate: _angular_core.InputSignal<boolean>;
    readonly variant: _angular_core.InputSignal<ProgressVariant>;
    readonly size: _angular_core.InputSignal<ProgressSize>;
    get percent(): number;
    get roundedPercent(): number;
    get displayLabel(): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkProgressComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkProgressComponent, "uk-progress", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "showLabel": { "alias": "showLabel"; "required": false; "isSignal": true; }; "striped": { "alias": "striped"; "required": false; "isSignal": true; }; "animated": { "alias": "animated"; "required": false; "isSignal": true; }; "indeterminate": { "alias": "indeterminate"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
declare class UkModalComponent {
    readonly open: _angular_core.ModelSignal<boolean>;
    readonly title: _angular_core.InputSignal<string>;
    readonly size: _angular_core.InputSignal<ModalSize>;
    readonly backdrop: _angular_core.InputSignal<boolean>;
    readonly closeOnBackdrop: _angular_core.InputSignal<boolean>;
    readonly showClose: _angular_core.InputSignal<boolean>;
    readonly closed: _angular_core.OutputEmitterRef<void>;
    readonly isVisible: _angular_core.WritableSignal<boolean>;
    readonly isAnimating: _angular_core.WritableSignal<boolean>;
    private closeTimer;
    constructor();
    private show;
    private hide;
    close(): void;
    onBackdropClick(event: MouseEvent): void;
    onEscape(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkModalComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkModalComponent, "uk-modal", never, { "open": { "alias": "open"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "backdrop": { "alias": "backdrop"; "required": false; "isSignal": true; }; "closeOnBackdrop": { "alias": "closeOnBackdrop"; "required": false; "isSignal": true; }; "showClose": { "alias": "showClose"; "required": false; "isSignal": true; }; }, { "open": "openChange"; "closed": "closed"; }, never, ["*", "[ukModalFooter]"], true, never>;
}

declare class UkListGroupComponent {
    readonly flush: _angular_core.InputSignal<boolean>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkListGroupComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkListGroupComponent, "uk-list-group", never, { "flush": { "alias": "flush"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class UkListItemComponent {
    readonly icon: _angular_core.InputSignal<string | undefined>;
    readonly active: _angular_core.InputSignal<boolean>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    readonly badge: _angular_core.InputSignal<string | number | undefined>;
    readonly badgeVariant: _angular_core.InputSignal<string>;
    readonly action: _angular_core.InputSignal<boolean>;
    readonly itemClick: _angular_core.OutputEmitterRef<void>;
    onClick(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkListItemComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkListItemComponent, "uk-list-item", never, { "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "active": { "alias": "active"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "badge": { "alias": "badge"; "required": false; "isSignal": true; }; "badgeVariant": { "alias": "badgeVariant"; "required": false; "isSignal": true; }; "action": { "alias": "action"; "required": false; "isSignal": true; }; }, { "itemClick": "itemClick"; }, never, ["*"], true, never>;
}

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarShape = 'circle' | 'square';
type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';
declare class UkAvatarComponent {
    readonly src: _angular_core.InputSignal<string | undefined>;
    readonly name: _angular_core.InputSignal<string | undefined>;
    readonly size: _angular_core.InputSignal<AvatarSize>;
    readonly shape: _angular_core.InputSignal<AvatarShape>;
    readonly status: _angular_core.InputSignal<AvatarStatus | undefined>;
    readonly alt: _angular_core.InputSignal<string | undefined>;
    get initials(): string;
    get bgColor(): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkAvatarComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkAvatarComponent, "uk-avatar", never, { "src": { "alias": "src"; "required": false; "isSignal": true; }; "name": { "alias": "name"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "shape": { "alias": "shape"; "required": false; "isSignal": true; }; "status": { "alias": "status"; "required": false; "isSignal": true; }; "alt": { "alias": "alt"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class UkAvatarGroupComponent {
    readonly size: _angular_core.InputSignal<AvatarSize>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkAvatarGroupComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkAvatarGroupComponent, "uk-avatar-group", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

type AlertVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
declare class UkAlertComponent {
    readonly variant: _angular_core.InputSignal<AlertVariant>;
    readonly title: _angular_core.InputSignal<string | undefined>;
    readonly message: _angular_core.InputSignal<string | undefined>;
    readonly icon: _angular_core.InputSignal<string | undefined>;
    readonly dismissible: _angular_core.InputSignal<boolean>;
    readonly dismissed: _angular_core.OutputEmitterRef<void>;
    readonly isDismissed: _angular_core.WritableSignal<boolean>;
    get resolvedIcon(): string;
    dismiss(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkAlertComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkAlertComponent, "uk-alert", never, { "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "message": { "alias": "message"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "dismissible": { "alias": "dismissible"; "required": false; "isSignal": true; }; }, { "dismissed": "dismissed"; }, never, ["*"], true, never>;
}

interface AccordionHost {
    multiple: boolean;
    size: 'sm' | 'md' | 'lg';
    openIds: Signal<Set<string>>;
    toggle(id: string): void;
}
declare const ACCORDION_TOKEN: InjectionToken<AccordionHost>;

declare class UkAccordionComponent implements AccordionHost {
    readonly _multiple: _angular_core.InputSignal<boolean>;
    readonly _size: _angular_core.InputSignal<"sm" | "md" | "lg">;
    get multiple(): boolean;
    get size(): 'sm' | 'md' | 'lg';
    readonly openIds: _angular_core.WritableSignal<Set<string>>;
    toggle(id: string): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkAccordionComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkAccordionComponent, "uk-accordion", never, { "_multiple": { "alias": "multiple"; "required": false; "isSignal": true; }; "_size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class UkAccordionItemComponent {
    readonly itemId: _angular_core.InputSignal<string>;
    readonly title: _angular_core.InputSignal<string>;
    readonly icon: _angular_core.InputSignal<string | undefined>;
    readonly disabled: _angular_core.InputSignal<boolean>;
    private accordion;
    readonly isOpen: _angular_core.Signal<boolean>;
    toggle(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkAccordionItemComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkAccordionItemComponent, "uk-accordion-item", never, { "itemId": { "alias": "itemId"; "required": true; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

type ChartType = 'bar' | 'line' | 'donut' | 'pie';
interface ChartDataset {
    label: string;
    data: number[];
    color?: string;
}
interface ChartConfig {
    type: ChartType;
    labels: string[];
    datasets: ChartDataset[];
    height?: number;
}
interface BarRect {
    x: number;
    y: number;
    w: number;
    h: number;
    color: string;
    label: string;
    value: number;
}
interface LinePoint {
    x: number;
    y: number;
}
interface LineSeries {
    points: LinePoint[];
    polyline: string;
    fill: string;
    color: string;
    label: string;
}
interface DonutSegment {
    d: string;
    color: string;
    label: string;
    value: number;
    pct: number;
}
interface ChartTick {
    value: number;
    y: number;
}
interface ChartXLabel {
    x: number;
    text: string;
}
interface BarChartData {
    bars: BarRect[];
    xLabels: ChartXLabel[];
    ticks: ChartTick[];
    legend: {
        color: string;
        label: string;
    }[];
    W: number;
    H: number;
}
interface LineChartData {
    series: LineSeries[];
    xLabels: ChartXLabel[];
    ticks: ChartTick[];
    legend: {
        color: string;
        label: string;
    }[];
    W: number;
    H: number;
}
interface DonutChartData {
    segments: DonutSegment[];
    legend: {
        color: string;
        label: string;
        value: number;
        pct: number;
    }[];
    cx: number;
    cy: number;
    R: number;
    r: number;
    VW: number;
    VH: number;
    isEmpty: boolean;
}
declare class UkChartComponent {
    readonly config: _angular_core.InputSignal<ChartConfig>;
    readonly barData: _angular_core.WritableSignal<BarChartData | null>;
    readonly lineData: _angular_core.WritableSignal<LineChartData | null>;
    readonly donutData: _angular_core.WritableSignal<DonutChartData | null>;
    constructor();
    private buildBarData;
    private buildLineData;
    private buildDonutData;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkChartComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkChartComponent, "uk-chart", never, { "config": { "alias": "config"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class UkTabsComponent {
    readonly tabs: _angular_core.InputSignal<TabItem[]>;
    readonly variant: _angular_core.InputSignal<"line" | "pills" | "enclosed">;
    readonly size: _angular_core.InputSignal<"sm" | "md" | "lg">;
    readonly activeTab: _angular_core.InputSignal<string>;
    readonly tabChange: _angular_core.OutputEmitterRef<string>;
    readonly activeId: _angular_core.WritableSignal<string>;
    constructor();
    select(tab: TabItem): void;
    isActive(tab: TabItem): boolean;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkTabsComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkTabsComponent, "uk-tabs", never, { "tabs": { "alias": "tabs"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "activeTab": { "alias": "activeTab"; "required": false; "isSignal": true; }; }, { "tabChange": "tabChange"; }, never, ["*"], true, never>;
}

declare class UkAlertDialogComponent implements OnInit {
    readonly config: _angular_core.InputSignal<AlertDialogConfig>;
    readonly closed: _angular_core.OutputEmitterRef<void>;
    readonly visible: _angular_core.WritableSignal<boolean>;
    readonly animating: _angular_core.WritableSignal<boolean>;
    get variant(): ui_kit.DialogVariant;
    get icon(): string;
    get autoTitle(): string;
    ngOnInit(): void;
    close(): void;
    onBackdropClick(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkAlertDialogComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkAlertDialogComponent, "uk-alert-dialog", never, { "config": { "alias": "config"; "required": true; "isSignal": true; }; }, { "closed": "closed"; }, never, never, true, never>;
}

declare class UkConfirmDialogComponent implements OnInit {
    readonly config: _angular_core.InputSignal<ConfirmDialogConfig>;
    readonly closed: _angular_core.OutputEmitterRef<boolean>;
    readonly visible: _angular_core.WritableSignal<boolean>;
    readonly animating: _angular_core.WritableSignal<boolean>;
    get confirmBtnClass(): string;
    get dataPreview(): string | null;
    ngOnInit(): void;
    private dismiss;
    cancel(): void;
    confirm(): void;
    onBackdropClick(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkConfirmDialogComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkConfirmDialogComponent, "uk-confirm-dialog", never, { "config": { "alias": "config"; "required": true; "isSignal": true; }; }, { "closed": "closed"; }, never, never, true, never>;
}

declare class UkDialogService {
    private readonly appRef;
    private readonly injector;
    private mount;
    private destroy;
    alert(config: AlertDialogConfig): Promise<void>;
    info(message: string, options?: Partial<Omit<AlertDialogConfig, 'variant' | 'message'>>): Promise<void>;
    success(message: string, options?: Partial<Omit<AlertDialogConfig, 'variant' | 'message'>>): Promise<void>;
    error(message: string, options?: Partial<Omit<AlertDialogConfig, 'variant' | 'message'>>): Promise<void>;
    warning(message: string, options?: Partial<Omit<AlertDialogConfig, 'variant' | 'message'>>): Promise<void>;
    confirm(config: ConfirmDialogConfig): Promise<boolean>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkDialogService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<UkDialogService>;
}

export { ACCORDION_TOKEN, UkAccordionComponent, UkAccordionItemComponent, UkAlertComponent, UkAlertDialogComponent, UkAvatarComponent, UkAvatarGroupComponent, UkButtonComponent, UkChartComponent, UkCheckboxComponent, UkConfirmDialogComponent, UkDateRangePickerComponent, UkDatepickerComponent, UkDialogService, UkDynamicFormComponent, UkDynamicTableComponent, UkHeaderComponent, UkInputComponent, UkLayoutComponent, UkListGroupComponent, UkListItemComponent, UkModalComponent, UkMultiSelectComponent, UkOffcanvasComponent, UkOtpInputComponent, UkProgressComponent, UkRadioGroupComponent, UkRangeComponent, UkRatingComponent, UkSelectComponent, UkSidebarComponent, UkSpinnerComponent, UkStepContentDirective, UkStepperComponent, UkTabsComponent, UkTextareaComponent, UkTimepickerComponent, UkToastService, UkToasterComponent };
export type { AccordionHost, AlertDialogConfig, AlertVariant, AvatarShape, AvatarSize, AvatarStatus, BarChartData, BarRect, ButtonSize, ButtonVariant, ChartConfig, ChartDataset, ChartTick, ChartType, ChartXLabel, ConfirmDialogConfig, DateRange, DialogVariant, DonutChartData, DonutSegment, DynamicFormField, DynamicValidator, HeaderAction, LayoutUser, LineChartData, LinePoint, LineSeries, ModalSize, NavItem, OffcanvasPosition, ProgressSize, ProgressVariant, RowAction, SelectOption, SpinnerSize, SpinnerVariant, StepperStep, TabItem, TableColumn, TableConfig, TimeValue, ToastItem, ToastPosition, ToastVariant, UkSize, UkVariant };
