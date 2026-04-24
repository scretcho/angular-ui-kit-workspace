import * as _angular_core from '@angular/core';
import { EventEmitter, ElementRef, AfterViewInit, QueryList, TemplateRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder, ValidatorFn } from '@angular/forms';

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
    type: 'input' | 'textarea' | 'select' | 'multiselect' | 'checkbox' | 'radio' | 'date-range' | 'otp' | 'range' | 'rating' | 'timepicker';
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
interface TableColumn<T = Record<string, unknown>> {
    key: keyof T | string;
    header: string;
    sortable?: boolean;
    width?: string;
    align?: 'left' | 'center' | 'right';
    type?: 'text' | 'number' | 'date' | 'boolean' | 'badge' | 'actions';
    cellTemplate?: unknown;
    format?: (value: unknown, row: T) => string;
    badgeMap?: Record<string, string>;
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

declare class UkInputComponent implements ControlValueAccessor {
    label: string;
    placeholder: string;
    type: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
    size: UkSize;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    prefixIcon: boolean;
    suffixIcon: boolean;
    hint: string;
    errorMessage: string;
    maxlength?: number;
    minlength?: number;
    autocomplete: string;
    id: string;
    valueChange: EventEmitter<string>;
    cleared: EventEmitter<void>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkInputComponent, "uk-input", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "clearable": { "alias": "clearable"; "required": false; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "minlength": { "alias": "minlength"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "id": { "alias": "id"; "required": false; }; }, { "valueChange": "valueChange"; "cleared": "cleared"; }, never, ["[ukPrefix]", "[ukSuffix]"], true, never>;
}

declare class UkTextareaComponent implements ControlValueAccessor {
    label: string;
    placeholder: string;
    size: UkSize;
    rows: number;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    resizable: boolean;
    hint: string;
    errorMessage: string;
    maxlength?: number;
    valueChange: EventEmitter<string>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkTextareaComponent, "uk-textarea", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "size": { "alias": "size"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "resizable": { "alias": "resizable"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}

declare class UkSelectComponent implements ControlValueAccessor {
    private el;
    label: string;
    placeholder: string;
    options: SelectOption[];
    size: UkSize;
    required: boolean;
    disabled: boolean;
    searchable: boolean;
    hint: string;
    errorMessage: string;
    selectionChange: EventEmitter<SelectOption<string | number>>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkSelectComponent, "uk-select", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "options": { "alias": "options"; "required": false; }; "size": { "alias": "size"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "searchable": { "alias": "searchable"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}

declare class UkMultiSelectComponent implements ControlValueAccessor {
    private el;
    label: string;
    placeholder: string;
    options: SelectOption[];
    size: UkSize;
    required: boolean;
    disabled: boolean;
    showSelectAll: boolean;
    hint: string;
    errorMessage: string;
    selectionChange: EventEmitter<SelectOption<string | number>[]>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkMultiSelectComponent, "uk-multi-select", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "options": { "alias": "options"; "required": false; }; "size": { "alias": "size"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showSelectAll": { "alias": "showSelectAll"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}

interface CalendarDay {
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
    label: string;
    placeholder: string;
    required: boolean;
    disabled: boolean;
    minDate?: Date;
    maxDate?: Date;
    showPresets: boolean;
    errorMessage: string;
    format: string;
    rangeChange: EventEmitter<DateRange>;
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
    buildDays(year: number, month: number): CalendarDay[];
    buildDay(date: Date, isCurrentMonth: boolean): CalendarDay;
    readonly leftDays: _angular_core.Signal<CalendarDay[]>;
    readonly rightDays: _angular_core.Signal<CalendarDay[]>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkDateRangePickerComponent, "uk-date-range-picker", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; "showPresets": { "alias": "showPresets"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "format": { "alias": "format"; "required": false; }; }, { "rangeChange": "rangeChange"; }, never, never, true, never>;
}

declare class UkTimepickerComponent implements ControlValueAccessor {
    label: string;
    use24Hour: boolean;
    showSeconds: boolean;
    required: boolean;
    disabled: boolean;
    hint: string;
    errorMessage: string;
    timeChange: EventEmitter<TimeValue>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkTimepickerComponent, "uk-timepicker", never, { "label": { "alias": "label"; "required": false; }; "use24Hour": { "alias": "use24Hour"; "required": false; }; "showSeconds": { "alias": "showSeconds"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; }, { "timeChange": "timeChange"; }, never, never, true, never>;
}

declare class UkCheckboxComponent implements ControlValueAccessor {
    label: string;
    required: boolean;
    disabled: boolean;
    indeterminate: boolean;
    hint: string;
    errorMessage: string;
    checkedChange: EventEmitter<boolean>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkCheckboxComponent, "uk-checkbox", never, { "label": { "alias": "label"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; }, { "checkedChange": "checkedChange"; }, never, never, true, never>;
}

declare class UkRadioGroupComponent implements ControlValueAccessor {
    label: string;
    options: SelectOption[];
    direction: 'vertical' | 'horizontal';
    required: boolean;
    disabled: boolean;
    hint: string;
    errorMessage: string;
    selectionChange: EventEmitter<SelectOption<string | number>>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkRadioGroupComponent, "uk-radio-group", never, { "label": { "alias": "label"; "required": false; }; "options": { "alias": "options"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
}

declare class UkOtpInputComponent implements ControlValueAccessor, AfterViewInit {
    label: string;
    length: number;
    mask: boolean;
    required: boolean;
    disabled: boolean;
    separator: string;
    separatorAfter: number;
    hint: string;
    errorMessage: string;
    completed: EventEmitter<string>;
    valueChange: EventEmitter<string>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkOtpInputComponent, "uk-otp-input", never, { "label": { "alias": "label"; "required": false; }; "length": { "alias": "length"; "required": false; }; "mask": { "alias": "mask"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "separator": { "alias": "separator"; "required": false; }; "separatorAfter": { "alias": "separatorAfter"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; }, { "completed": "completed"; "valueChange": "valueChange"; }, never, never, true, never>;
}

declare class UkRangeComponent implements ControlValueAccessor {
    label: string;
    min: number;
    max: number;
    step: number;
    range: boolean;
    showValue: boolean;
    showTicks: boolean;
    unit: string;
    required: boolean;
    disabled: boolean;
    hint: string;
    valueChange: EventEmitter<number | [number, number]>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkRangeComponent, "uk-range", never, { "label": { "alias": "label"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "step": { "alias": "step"; "required": false; }; "range": { "alias": "range"; "required": false; }; "showValue": { "alias": "showValue"; "required": false; }; "showTicks": { "alias": "showTicks"; "required": false; }; "unit": { "alias": "unit"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}

declare class UkRatingComponent implements ControlValueAccessor {
    label: string;
    max: number;
    icon: 'star' | 'heart' | string;
    allowHalf: boolean;
    readonly: boolean;
    disabled: boolean;
    showCount: boolean;
    hint: string;
    ratingChange: EventEmitter<number>;
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
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkRatingComponent, "uk-rating", never, { "label": { "alias": "label"; "required": false; }; "max": { "alias": "max"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "allowHalf": { "alias": "allowHalf"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showCount": { "alias": "showCount"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; }, { "ratingChange": "ratingChange"; }, never, never, true, never>;
}

interface StepperStep {
    label: string;
    description?: string;
    icon?: string;
    optional?: boolean;
}
declare class UkStepContentDirective {
    templateRef: TemplateRef<unknown>;
    stepIndex: number;
    constructor(templateRef: TemplateRef<unknown>);
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkStepContentDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<UkStepContentDirective, "[ukStepContent]", never, { "stepIndex": { "alias": "ukStepContent"; "required": false; }; }, {}, never, never, true, never>;
}
declare class UkStepperComponent {
    steps: StepperStep[];
    direction: 'horizontal' | 'vertical';
    showNavigation: boolean;
    allowNavigation: boolean;
    stepChange: EventEmitter<number>;
    finished: EventEmitter<void>;
    stepTemplates: QueryList<UkStepContentDirective>;
    readonly currentStep: _angular_core.WritableSignal<number>;
    goTo(index: number): void;
    next(): void;
    prev(): void;
    finish(): void;
    reset(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkStepperComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkStepperComponent, "uk-stepper", never, { "steps": { "alias": "steps"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "showNavigation": { "alias": "showNavigation"; "required": false; }; "allowNavigation": { "alias": "allowNavigation"; "required": false; }; }, { "stepChange": "stepChange"; "finished": "finished"; }, ["stepTemplates"], ["*"], true, never>;
}

declare class UkDynamicFormComponent implements OnInit, OnChanges {
    private fb;
    fields: (DynamicFormField & {
        hidden?: boolean;
        fullWidth?: boolean;
    })[];
    columns: 1 | 2 | 3;
    showActions: boolean;
    showReset: boolean;
    submitLabel: string;
    resetLabel: string;
    actionsAlign: 'left' | 'center' | 'right';
    initialValues: Record<string, unknown>;
    formSubmit: EventEmitter<Record<string, unknown>>;
    formChange: EventEmitter<Record<string, unknown>>;
    formReset: EventEmitter<void>;
    form: FormGroup;
    readonly submitting: _angular_core.WritableSignal<boolean>;
    readonly sortedFields: _angular_core.Signal<(DynamicFormField & {
        hidden?: boolean;
        fullWidth?: boolean;
    })[]>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    buildForm(): void;
    toValidator(v: DynamicValidator): ValidatorFn | null;
    getError(key: string): string;
    onSubmit(): void;
    onReset(): void;
    setSubmitting(v: boolean): void;
    patchValues(v: Record<string, unknown>): void;
    getValue(): any;
    isValid(): boolean;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkDynamicFormComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkDynamicFormComponent, "uk-dynamic-form", never, { "fields": { "alias": "fields"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "showActions": { "alias": "showActions"; "required": false; }; "showReset": { "alias": "showReset"; "required": false; }; "submitLabel": { "alias": "submitLabel"; "required": false; }; "resetLabel": { "alias": "resetLabel"; "required": false; }; "actionsAlign": { "alias": "actionsAlign"; "required": false; }; "initialValues": { "alias": "initialValues"; "required": false; }; }, { "formSubmit": "formSubmit"; "formChange": "formChange"; "formReset": "formReset"; }, never, never, true, never>;
}

type SortDir = 'asc' | 'desc' | null;
declare class UkDynamicTableComponent<T extends Record<string, unknown>> implements OnChanges {
    data: T[];
    config: TableConfig<T>;
    loading: boolean;
    rowKey: (row: T, index: number) => string | number;
    rowClickable: boolean;
    searchPlaceholder: string;
    toolbarActions: unknown[];
    rowClick: EventEmitter<T>;
    selectionChange: EventEmitter<T[]>;
    sortChange: EventEmitter<{
        key: string;
        dir: SortDir;
    }>;
    pageChange: EventEmitter<number>;
    readonly Math: Math;
    readonly searchQuery: _angular_core.WritableSignal<string>;
    readonly sortKey: _angular_core.WritableSignal<string | null>;
    readonly sortDir: _angular_core.WritableSignal<SortDir>;
    readonly currentPage: _angular_core.WritableSignal<number>;
    readonly pageSize: _angular_core.WritableSignal<number>;
    readonly selectedRows: _angular_core.WritableSignal<T[]>;
    readonly _loading: _angular_core.WritableSignal<boolean>;
    ngOnChanges(changes: SimpleChanges): void;
    readonly filteredData: _angular_core.Signal<T[]>;
    readonly totalPages: _angular_core.Signal<number>;
    readonly pagedData: _angular_core.Signal<T[]>;
    readonly allSelected: _angular_core.Signal<boolean>;
    readonly someSelected: _angular_core.Signal<boolean>;
    readonly pageNumbers: _angular_core.Signal<number[]>;
    getCellValue(row: T, col: TableColumn<T>): unknown;
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
    goToPage(p: number): void;
    nextPage(): void;
    prevPage(): void;
    onPageSizeChange(e: Event): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UkDynamicTableComponent<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UkDynamicTableComponent<any>, "uk-dynamic-table", never, { "data": { "alias": "data"; "required": false; }; "config": { "alias": "config"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "rowKey": { "alias": "rowKey"; "required": false; }; "rowClickable": { "alias": "rowClickable"; "required": false; }; "searchPlaceholder": { "alias": "searchPlaceholder"; "required": false; }; "toolbarActions": { "alias": "toolbarActions"; "required": false; }; }, { "rowClick": "rowClick"; "selectionChange": "selectionChange"; "sortChange": "sortChange"; "pageChange": "pageChange"; }, never, ["[ukTableActions]"], true, never>;
}

export { UkCheckboxComponent, UkDateRangePickerComponent, UkDynamicFormComponent, UkDynamicTableComponent, UkInputComponent, UkMultiSelectComponent, UkOtpInputComponent, UkRadioGroupComponent, UkRangeComponent, UkRatingComponent, UkSelectComponent, UkStepContentDirective, UkStepperComponent, UkTextareaComponent, UkTimepickerComponent };
export type { DateRange, DynamicFormField, DynamicValidator, SelectOption, StepperStep, TableColumn, TableConfig, TimeValue, UkSize, UkVariant };
