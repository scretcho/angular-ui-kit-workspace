import * as i0 from '@angular/core';
import { EventEmitter, signal, computed, forwardRef, Output, Input, ChangeDetectionStrategy, Component, HostListener, ViewChildren, Directive, ContentChildren } from '@angular/core';
import * as i1$1 from '@angular/forms';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR, Validators, FormsModule } from '@angular/forms';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class UkInputComponent {
    label = '';
    placeholder = '';
    type = 'text';
    size = 'md';
    required = false;
    disabled = false;
    readonly = false;
    clearable = false;
    prefixIcon = false;
    suffixIcon = false;
    hint = '';
    errorMessage = '';
    maxlength;
    minlength;
    autocomplete = 'off';
    id = '';
    valueChange = new EventEmitter();
    cleared = new EventEmitter();
    value = signal('', ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    focused = signal(false, ...(ngDevMode ? [{ debugName: "focused" }] : /* istanbul ignore next */ []));
    inputId = `uk-input-${Math.random().toString(36).slice(2)}`;
    wrapperClass = computed(() => {
        const classes = [this.size];
        if (this.errorMessage)
            classes.push('error');
        return classes.join(' ');
    }, ...(ngDevMode ? [{ debugName: "wrapperClass" }] : /* istanbul ignore next */ []));
    onChange = (_) => { };
    onTouched = () => { };
    onInput(event) {
        const val = event.target.value;
        this.value.set(val);
        this.onChange(val);
        this.valueChange.emit(val);
    }
    clear() {
        this.value.set('');
        this.onChange('');
        this.valueChange.emit('');
        this.cleared.emit();
    }
    writeValue(val) { this.value.set(val ?? ''); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkInputComponent, isStandalone: true, selector: "uk-input", inputs: { label: "label", placeholder: "placeholder", type: "type", size: "size", required: "required", disabled: "disabled", readonly: "readonly", clearable: "clearable", prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", hint: "hint", errorMessage: "errorMessage", maxlength: "maxlength", minlength: "minlength", autocomplete: "autocomplete", id: "id" }, outputs: { valueChange: "valueChange", cleared: "cleared" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkInputComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-input-wrapper\" [class]=\"wrapperClass()\">\n  @if (label) {\n    <label [for]=\"inputId\" class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-input-container\" [class.uk-input--prefix]=\"prefixIcon\" [class.uk-input--suffix]=\"suffixIcon || clearable\">\n    @if (prefixIcon) {\n      <span class=\"uk-input-prefix\">\n        <ng-content select=\"[ukPrefix]\" />\n      </span>\n    }\n    <input\n      [id]=\"inputId\"\n      [type]=\"type\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"isDisabled()\"\n      [readonly]=\"readonly\"\n      [value]=\"value()\"\n      [attr.maxlength]=\"maxlength || null\"\n      [attr.minlength]=\"minlength || null\"\n      [attr.autocomplete]=\"autocomplete\"\n      class=\"uk-input\"\n      (input)=\"onInput($event)\"\n      (blur)=\"onTouched()\"\n      (focus)=\"focused.set(true)\"\n    />\n    @if (suffixIcon) {\n      <span class=\"uk-input-suffix\">\n        <ng-content select=\"[ukSuffix]\" />\n      </span>\n    }\n    @if (clearable && value()) {\n      <button type=\"button\" class=\"uk-input-clear\" (click)=\"clear()\">&#x2715;</button>\n    }\n  </div>\n  @if (hint && !errorMessage) {\n    <span class=\"uk-hint\">{{ hint }}</span>\n  }\n  @if (errorMessage) {\n    <span class=\"uk-error\">{{ errorMessage }}</span>\n  }\n  @if (maxlength) {\n    <span class=\"uk-char-count\">{{ value().length }} / {{ maxlength }}</span>\n  }\n</div>\n", styles: [".uk-input-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-input-container{position:relative;display:flex;align-items:center}.uk-input{width:100%;border:1.5px solid #d1d5db;border-radius:8px;font-size:.9375rem;color:#111827;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s;padding:.5rem .75rem}.uk-input:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-input:disabled{background:#f9fafb;color:#9ca3af;cursor:not-allowed}.uk-input-wrapper.sm .uk-input{padding:.25rem .625rem;font-size:.8125rem;border-radius:6px}.uk-input-wrapper.lg .uk-input{padding:.75rem 1rem;font-size:1rem;border-radius:10px}.uk-input-wrapper.error .uk-input{border-color:#ef4444}.uk-input-wrapper.error .uk-input:focus{box-shadow:0 0 0 3px #ef444426}.uk-input-prefix,.uk-input-suffix{position:absolute;display:flex;align-items:center;color:#6b7280}.uk-input-prefix{left:.625rem}.uk-input-suffix{right:.625rem}.uk-input--prefix .uk-input{padding-left:2.25rem}.uk-input--suffix .uk-input{padding-right:2.25rem}.uk-input-clear{position:absolute;right:.5rem;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px;display:flex;align-items:center}.uk-input-clear:hover{color:#374151}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}.uk-char-count{font-size:.75rem;color:#9ca3af;text-align:right}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-input', standalone: true, imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkInputComponent),
                            multi: true
                        }], template: "<div class=\"uk-input-wrapper\" [class]=\"wrapperClass()\">\n  @if (label) {\n    <label [for]=\"inputId\" class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-input-container\" [class.uk-input--prefix]=\"prefixIcon\" [class.uk-input--suffix]=\"suffixIcon || clearable\">\n    @if (prefixIcon) {\n      <span class=\"uk-input-prefix\">\n        <ng-content select=\"[ukPrefix]\" />\n      </span>\n    }\n    <input\n      [id]=\"inputId\"\n      [type]=\"type\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"isDisabled()\"\n      [readonly]=\"readonly\"\n      [value]=\"value()\"\n      [attr.maxlength]=\"maxlength || null\"\n      [attr.minlength]=\"minlength || null\"\n      [attr.autocomplete]=\"autocomplete\"\n      class=\"uk-input\"\n      (input)=\"onInput($event)\"\n      (blur)=\"onTouched()\"\n      (focus)=\"focused.set(true)\"\n    />\n    @if (suffixIcon) {\n      <span class=\"uk-input-suffix\">\n        <ng-content select=\"[ukSuffix]\" />\n      </span>\n    }\n    @if (clearable && value()) {\n      <button type=\"button\" class=\"uk-input-clear\" (click)=\"clear()\">&#x2715;</button>\n    }\n  </div>\n  @if (hint && !errorMessage) {\n    <span class=\"uk-hint\">{{ hint }}</span>\n  }\n  @if (errorMessage) {\n    <span class=\"uk-error\">{{ errorMessage }}</span>\n  }\n  @if (maxlength) {\n    <span class=\"uk-char-count\">{{ value().length }} / {{ maxlength }}</span>\n  }\n</div>\n", styles: [".uk-input-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-input-container{position:relative;display:flex;align-items:center}.uk-input{width:100%;border:1.5px solid #d1d5db;border-radius:8px;font-size:.9375rem;color:#111827;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s;padding:.5rem .75rem}.uk-input:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-input:disabled{background:#f9fafb;color:#9ca3af;cursor:not-allowed}.uk-input-wrapper.sm .uk-input{padding:.25rem .625rem;font-size:.8125rem;border-radius:6px}.uk-input-wrapper.lg .uk-input{padding:.75rem 1rem;font-size:1rem;border-radius:10px}.uk-input-wrapper.error .uk-input{border-color:#ef4444}.uk-input-wrapper.error .uk-input:focus{box-shadow:0 0 0 3px #ef444426}.uk-input-prefix,.uk-input-suffix{position:absolute;display:flex;align-items:center;color:#6b7280}.uk-input-prefix{left:.625rem}.uk-input-suffix{right:.625rem}.uk-input--prefix .uk-input{padding-left:2.25rem}.uk-input--suffix .uk-input{padding-right:2.25rem}.uk-input-clear{position:absolute;right:.5rem;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px;display:flex;align-items:center}.uk-input-clear:hover{color:#374151}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}.uk-char-count{font-size:.75rem;color:#9ca3af;text-align:right}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], clearable: [{
                type: Input
            }], prefixIcon: [{
                type: Input
            }], suffixIcon: [{
                type: Input
            }], hint: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], minlength: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }], id: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], cleared: [{
                type: Output
            }] } });

class UkTextareaComponent {
    label = '';
    placeholder = '';
    size = 'md';
    rows = 4;
    required = false;
    disabled = false;
    readonly = false;
    resizable = true;
    hint = '';
    errorMessage = '';
    maxlength;
    valueChange = new EventEmitter();
    value = signal('', ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    textareaId = `uk-textarea-${Math.random().toString(36).slice(2)}`;
    wrapperClass = computed(() => {
        const classes = [this.size];
        if (this.errorMessage)
            classes.push('error');
        return classes.join(' ');
    }, ...(ngDevMode ? [{ debugName: "wrapperClass" }] : /* istanbul ignore next */ []));
    onChange = (_) => { };
    onTouched = () => { };
    onInput(event) {
        const val = event.target.value;
        this.value.set(val);
        this.onChange(val);
        this.valueChange.emit(val);
    }
    writeValue(val) { this.value.set(val ?? ''); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkTextareaComponent, isStandalone: true, selector: "uk-textarea", inputs: { label: "label", placeholder: "placeholder", size: "size", rows: "rows", required: "required", disabled: "disabled", readonly: "readonly", resizable: "resizable", hint: "hint", errorMessage: "errorMessage", maxlength: "maxlength" }, outputs: { valueChange: "valueChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkTextareaComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-textarea-wrapper\" [class]=\"wrapperClass()\">\n  @if (label) {\n    <label [for]=\"textareaId\" class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <textarea\n    [id]=\"textareaId\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"isDisabled()\"\n    [readonly]=\"readonly\"\n    [rows]=\"rows\"\n    [attr.maxlength]=\"maxlength || null\"\n    [class.uk-textarea--resize-none]=\"!resizable\"\n    class=\"uk-textarea\"\n    (input)=\"onInput($event)\"\n    (blur)=\"onTouched()\"\n  >{{ value() }}</textarea>\n  <div class=\"uk-textarea-footer\">\n    @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n    @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n    @if (maxlength) {\n      <span class=\"uk-char-count\">{{ value().length }} / {{ maxlength }}</span>\n    }\n  </div>\n</div>\n", styles: [".uk-textarea-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-textarea{width:100%;border:1.5px solid #d1d5db;border-radius:8px;font-size:.9375rem;color:#111827;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s;padding:.5rem .75rem;font-family:inherit;resize:vertical;box-sizing:border-box}.uk-textarea:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-textarea:disabled{background:#f9fafb;color:#9ca3af;cursor:not-allowed}.uk-textarea--resize-none{resize:none}.uk-textarea-wrapper.sm .uk-textarea{padding:.25rem .625rem;font-size:.8125rem}.uk-textarea-wrapper.lg .uk-textarea{padding:.75rem 1rem;font-size:1rem}.uk-textarea-wrapper.error .uk-textarea{border-color:#ef4444}.uk-textarea-footer{display:flex;justify-content:space-between;align-items:center}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}.uk-char-count{font-size:.75rem;color:#9ca3af;margin-left:auto}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-textarea', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkTextareaComponent),
                            multi: true
                        }], template: "<div class=\"uk-textarea-wrapper\" [class]=\"wrapperClass()\">\n  @if (label) {\n    <label [for]=\"textareaId\" class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <textarea\n    [id]=\"textareaId\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"isDisabled()\"\n    [readonly]=\"readonly\"\n    [rows]=\"rows\"\n    [attr.maxlength]=\"maxlength || null\"\n    [class.uk-textarea--resize-none]=\"!resizable\"\n    class=\"uk-textarea\"\n    (input)=\"onInput($event)\"\n    (blur)=\"onTouched()\"\n  >{{ value() }}</textarea>\n  <div class=\"uk-textarea-footer\">\n    @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n    @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n    @if (maxlength) {\n      <span class=\"uk-char-count\">{{ value().length }} / {{ maxlength }}</span>\n    }\n  </div>\n</div>\n", styles: [".uk-textarea-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-textarea{width:100%;border:1.5px solid #d1d5db;border-radius:8px;font-size:.9375rem;color:#111827;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s;padding:.5rem .75rem;font-family:inherit;resize:vertical;box-sizing:border-box}.uk-textarea:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-textarea:disabled{background:#f9fafb;color:#9ca3af;cursor:not-allowed}.uk-textarea--resize-none{resize:none}.uk-textarea-wrapper.sm .uk-textarea{padding:.25rem .625rem;font-size:.8125rem}.uk-textarea-wrapper.lg .uk-textarea{padding:.75rem 1rem;font-size:1rem}.uk-textarea-wrapper.error .uk-textarea{border-color:#ef4444}.uk-textarea-footer{display:flex;justify-content:space-between;align-items:center}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}.uk-char-count{font-size:.75rem;color:#9ca3af;margin-left:auto}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], size: [{
                type: Input
            }], rows: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], resizable: [{
                type: Input
            }], hint: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class UkSelectComponent {
    el;
    label = '';
    placeholder = 'Select an option';
    options = [];
    size = 'md';
    required = false;
    disabled = false;
    searchable = false;
    hint = '';
    errorMessage = '';
    selectionChange = new EventEmitter();
    value = signal(null, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    isOpen = signal(false, ...(ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    searchQuery = signal('', ...(ngDevMode ? [{ debugName: "searchQuery" }] : /* istanbul ignore next */ []));
    selectedOption = computed(() => this.options.find(o => o.value === this.value()) ?? null, ...(ngDevMode ? [{ debugName: "selectedOption" }] : /* istanbul ignore next */ []));
    filteredOptions = computed(() => {
        const q = this.searchQuery().toLowerCase();
        return q ? this.options.filter(o => o.label.toLowerCase().includes(q)) : this.options;
    }, ...(ngDevMode ? [{ debugName: "filteredOptions" }] : /* istanbul ignore next */ []));
    wrapperClass = computed(() => {
        const classes = [this.size];
        if (this.errorMessage)
            classes.push('error');
        return classes.join(' ');
    }, ...(ngDevMode ? [{ debugName: "wrapperClass" }] : /* istanbul ignore next */ []));
    onChange = (_) => { };
    onTouched = () => { };
    constructor(el) {
        this.el = el;
    }
    onDocumentClick(e) {
        if (!this.el.nativeElement.contains(e.target))
            this.isOpen.set(false);
    }
    toggle() {
        if (this.isDisabled())
            return;
        this.isOpen.update(v => !v);
        this.onTouched();
    }
    onSearch(e) {
        this.searchQuery.set(e.target.value);
    }
    selectOption(opt) {
        if (opt.disabled)
            return;
        this.value.set(opt.value);
        this.onChange(opt.value);
        this.selectionChange.emit(opt);
        this.isOpen.set(false);
        this.searchQuery.set('');
    }
    writeValue(val) { this.value.set(val); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkSelectComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkSelectComponent, isStandalone: true, selector: "uk-select", inputs: { label: "label", placeholder: "placeholder", options: "options", size: "size", required: "required", disabled: "disabled", searchable: "searchable", hint: "hint", errorMessage: "errorMessage" }, outputs: { selectionChange: "selectionChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkSelectComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-select-wrapper\" [class]=\"wrapperClass()\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-select-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"toggle()\">\n    <span class=\"uk-select-value\" [class.placeholder]=\"!selectedOption()\">\n      {{ selectedOption()?.label || placeholder }}\n    </span>\n    <span class=\"uk-select-arrow\" [class.rotated]=\"isOpen()\">&#9660;</span>\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-select-dropdown\">\n      @if (searchable) {\n        <div class=\"uk-select-search-wrap\">\n          <input\n            type=\"text\"\n            class=\"uk-select-search\"\n            placeholder=\"Search...\"\n            [value]=\"searchQuery()\"\n            (input)=\"onSearch($event)\"\n            (click)=\"$event.stopPropagation()\"\n          />\n        </div>\n      }\n      <ul class=\"uk-select-options\">\n        @if (filteredOptions().length === 0) {\n          <li class=\"uk-select-empty\">No options found</li>\n        }\n        @for (opt of filteredOptions(); track opt.value) {\n          <li\n            class=\"uk-select-option\"\n            [class.selected]=\"value() === opt.value\"\n            [class.disabled]=\"opt.disabled\"\n            (click)=\"selectOption(opt)\"\n          >\n            <span class=\"uk-select-check\">{{ value() === opt.value ? '\u2713' : '' }}</span>\n            {{ opt.label }}\n          </li>\n        }\n      </ul>\n    </div>\n  }\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-select-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-select-trigger{display:flex;align-items:center;justify-content:space-between;border:1.5px solid #d1d5db;border-radius:8px;padding:.5rem .75rem;background:#fff;cursor:pointer;-webkit-user-select:none;user-select:none;transition:border-color .2s,box-shadow .2s;min-height:40px}.uk-select-trigger:hover:not(.disabled){border-color:#6366f1}.uk-select-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-select-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-select-value{font-size:.9375rem;color:#111827}.uk-select-value.placeholder{color:#9ca3af}.uk-select-arrow{font-size:.625rem;color:#6b7280;transition:transform .2s}.uk-select-arrow.rotated{transform:rotate(180deg)}.uk-select-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 20px #0000001f;z-index:1000;overflow:hidden}.uk-select-search-wrap{padding:8px;border-bottom:1px solid #f3f4f6}.uk-select-search{width:100%;border:1px solid #d1d5db;border-radius:6px;padding:.375rem .625rem;font-size:.875rem;outline:none;box-sizing:border-box}.uk-select-search:focus{border-color:#6366f1}.uk-select-options{list-style:none;margin:0;padding:4px;max-height:220px;overflow-y:auto}.uk-select-option{display:flex;align-items:center;gap:8px;padding:.5rem .75rem;border-radius:6px;cursor:pointer;font-size:.9375rem;color:#374151;transition:background .15s}.uk-select-option:hover:not(.disabled){background:#f5f3ff;color:#6366f1}.uk-select-option.selected{background:#f5f3ff;color:#6366f1;font-weight:500}.uk-select-option.disabled{color:#d1d5db;cursor:not-allowed}.uk-select-check{width:16px;font-size:.75rem;color:#6366f1;flex-shrink:0}.uk-select-empty{padding:1rem;text-align:center;color:#9ca3af;font-size:.875rem}.uk-select-wrapper.sm .uk-select-trigger{padding:.25rem .625rem;min-height:32px;font-size:.8125rem}.uk-select-wrapper.lg .uk-select-trigger{padding:.75rem 1rem;min-height:48px;font-size:1rem}.uk-select-wrapper.error .uk-select-trigger{border-color:#ef4444}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-select', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkSelectComponent),
                            multi: true
                        }], template: "<div class=\"uk-select-wrapper\" [class]=\"wrapperClass()\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-select-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"toggle()\">\n    <span class=\"uk-select-value\" [class.placeholder]=\"!selectedOption()\">\n      {{ selectedOption()?.label || placeholder }}\n    </span>\n    <span class=\"uk-select-arrow\" [class.rotated]=\"isOpen()\">&#9660;</span>\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-select-dropdown\">\n      @if (searchable) {\n        <div class=\"uk-select-search-wrap\">\n          <input\n            type=\"text\"\n            class=\"uk-select-search\"\n            placeholder=\"Search...\"\n            [value]=\"searchQuery()\"\n            (input)=\"onSearch($event)\"\n            (click)=\"$event.stopPropagation()\"\n          />\n        </div>\n      }\n      <ul class=\"uk-select-options\">\n        @if (filteredOptions().length === 0) {\n          <li class=\"uk-select-empty\">No options found</li>\n        }\n        @for (opt of filteredOptions(); track opt.value) {\n          <li\n            class=\"uk-select-option\"\n            [class.selected]=\"value() === opt.value\"\n            [class.disabled]=\"opt.disabled\"\n            (click)=\"selectOption(opt)\"\n          >\n            <span class=\"uk-select-check\">{{ value() === opt.value ? '\u2713' : '' }}</span>\n            {{ opt.label }}\n          </li>\n        }\n      </ul>\n    </div>\n  }\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-select-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-select-trigger{display:flex;align-items:center;justify-content:space-between;border:1.5px solid #d1d5db;border-radius:8px;padding:.5rem .75rem;background:#fff;cursor:pointer;-webkit-user-select:none;user-select:none;transition:border-color .2s,box-shadow .2s;min-height:40px}.uk-select-trigger:hover:not(.disabled){border-color:#6366f1}.uk-select-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-select-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-select-value{font-size:.9375rem;color:#111827}.uk-select-value.placeholder{color:#9ca3af}.uk-select-arrow{font-size:.625rem;color:#6b7280;transition:transform .2s}.uk-select-arrow.rotated{transform:rotate(180deg)}.uk-select-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 20px #0000001f;z-index:1000;overflow:hidden}.uk-select-search-wrap{padding:8px;border-bottom:1px solid #f3f4f6}.uk-select-search{width:100%;border:1px solid #d1d5db;border-radius:6px;padding:.375rem .625rem;font-size:.875rem;outline:none;box-sizing:border-box}.uk-select-search:focus{border-color:#6366f1}.uk-select-options{list-style:none;margin:0;padding:4px;max-height:220px;overflow-y:auto}.uk-select-option{display:flex;align-items:center;gap:8px;padding:.5rem .75rem;border-radius:6px;cursor:pointer;font-size:.9375rem;color:#374151;transition:background .15s}.uk-select-option:hover:not(.disabled){background:#f5f3ff;color:#6366f1}.uk-select-option.selected{background:#f5f3ff;color:#6366f1;font-weight:500}.uk-select-option.disabled{color:#d1d5db;cursor:not-allowed}.uk-select-check{width:16px;font-size:.75rem;color:#6366f1;flex-shrink:0}.uk-select-empty{padding:1rem;text-align:center;color:#9ca3af;font-size:.875rem}.uk-select-wrapper.sm .uk-select-trigger{padding:.25rem .625rem;min-height:32px;font-size:.8125rem}.uk-select-wrapper.lg .uk-select-trigger{padding:.75rem 1rem;min-height:48px;font-size:1rem}.uk-select-wrapper.error .uk-select-trigger{border-color:#ef4444}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], options: [{
                type: Input
            }], size: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], searchable: [{
                type: Input
            }], hint: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UkMultiSelectComponent {
    el;
    label = '';
    placeholder = 'Select options';
    options = [];
    size = 'md';
    required = false;
    disabled = false;
    showSelectAll = true;
    hint = '';
    errorMessage = '';
    selectionChange = new EventEmitter();
    values = signal([], ...(ngDevMode ? [{ debugName: "values" }] : /* istanbul ignore next */ []));
    isOpen = signal(false, ...(ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    searchQuery = signal('', ...(ngDevMode ? [{ debugName: "searchQuery" }] : /* istanbul ignore next */ []));
    selectedOptions = computed(() => this.options.filter(o => this.values().includes(o.value)), ...(ngDevMode ? [{ debugName: "selectedOptions" }] : /* istanbul ignore next */ []));
    filteredOptions = computed(() => {
        const q = this.searchQuery().toLowerCase();
        return q ? this.options.filter(o => o.label.toLowerCase().includes(q)) : this.options;
    }, ...(ngDevMode ? [{ debugName: "filteredOptions" }] : /* istanbul ignore next */ []));
    allSelected = computed(() => this.options.length > 0 && this.options.every(o => this.values().includes(o.value)), ...(ngDevMode ? [{ debugName: "allSelected" }] : /* istanbul ignore next */ []));
    wrapperClass = computed(() => {
        const classes = [];
        if (this.errorMessage)
            classes.push('error');
        return classes.join(' ');
    }, ...(ngDevMode ? [{ debugName: "wrapperClass" }] : /* istanbul ignore next */ []));
    onChange = (_) => { };
    onTouched = () => { };
    constructor(el) {
        this.el = el;
    }
    onDocumentClick(e) {
        if (!this.el.nativeElement.contains(e.target))
            this.isOpen.set(false);
    }
    toggle() {
        if (this.isDisabled())
            return;
        this.isOpen.update(v => !v);
        this.onTouched();
    }
    onSearch(e) {
        this.searchQuery.set(e.target.value);
    }
    isSelected(opt) {
        return this.values().includes(opt.value);
    }
    toggleOption(opt) {
        if (opt.disabled)
            return;
        const v = opt.value;
        const current = this.values();
        const next = current.includes(v) ? current.filter(x => x !== v) : [...current, v];
        this.values.set(next);
        this.onChange(next);
        this.selectionChange.emit(this.selectedOptions());
    }
    removeOption(opt, e) {
        e.stopPropagation();
        this.toggleOption(opt);
    }
    toggleAll() {
        if (this.allSelected()) {
            this.values.set([]);
        }
        else {
            this.values.set(this.options.filter(o => !o.disabled).map(o => o.value));
        }
        this.onChange(this.values());
        this.selectionChange.emit(this.selectedOptions());
    }
    writeValue(val) { this.values.set(val ?? []); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkMultiSelectComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkMultiSelectComponent, isStandalone: true, selector: "uk-multi-select", inputs: { label: "label", placeholder: "placeholder", options: "options", size: "size", required: "required", disabled: "disabled", showSelectAll: "showSelectAll", hint: "hint", errorMessage: "errorMessage" }, outputs: { selectionChange: "selectionChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkMultiSelectComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-ms-wrapper\" [class]=\"wrapperClass()\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-ms-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"toggle()\">\n    <div class=\"uk-ms-tags\">\n      @if (selectedOptions().length === 0) {\n        <span class=\"uk-ms-placeholder\">{{ placeholder }}</span>\n      }\n      @for (opt of selectedOptions(); track opt.value) {\n        <span class=\"uk-ms-tag\">\n          {{ opt.label }}\n          <button type=\"button\" class=\"uk-ms-tag-remove\" (click)=\"removeOption(opt, $event)\">&#x2715;</button>\n        </span>\n      }\n    </div>\n    <span class=\"uk-ms-arrow\" [class.rotated]=\"isOpen()\">&#9660;</span>\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-ms-dropdown\">\n      <div class=\"uk-ms-search-wrap\">\n        <input\n          type=\"text\"\n          class=\"uk-ms-search\"\n          placeholder=\"Search...\"\n          [value]=\"searchQuery()\"\n          (input)=\"onSearch($event)\"\n          (click)=\"$event.stopPropagation()\"\n        />\n      </div>\n      @if (showSelectAll) {\n        <div class=\"uk-ms-select-all\" (click)=\"toggleAll()\">\n          <span class=\"uk-ms-check-box\" [class.checked]=\"allSelected()\">\n            @if (allSelected()) { \u2713 }\n          </span>\n          <span>{{ allSelected() ? 'Deselect All' : 'Select All' }}</span>\n        </div>\n      }\n      <ul class=\"uk-ms-options\">\n        @if (filteredOptions().length === 0) {\n          <li class=\"uk-ms-empty\">No options found</li>\n        }\n        @for (opt of filteredOptions(); track opt.value) {\n          <li\n            class=\"uk-ms-option\"\n            [class.selected]=\"isSelected(opt)\"\n            [class.disabled]=\"opt.disabled\"\n            (click)=\"toggleOption(opt)\"\n          >\n            <span class=\"uk-ms-check-box\" [class.checked]=\"isSelected(opt)\">\n              @if (isSelected(opt)) { \u2713 }\n            </span>\n            {{ opt.label }}\n          </li>\n        }\n      </ul>\n    </div>\n  }\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-ms-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-ms-trigger{display:flex;align-items:center;gap:6px;border:1.5px solid #d1d5db;border-radius:8px;padding:.375rem .75rem;background:#fff;cursor:pointer;min-height:40px;flex-wrap:wrap;transition:border-color .2s,box-shadow .2s}.uk-ms-trigger:hover:not(.disabled){border-color:#6366f1}.uk-ms-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-ms-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-ms-tags{display:flex;flex-wrap:wrap;gap:4px;flex:1;align-items:center}.uk-ms-placeholder{color:#9ca3af;font-size:.9375rem}.uk-ms-tag{display:inline-flex;align-items:center;gap:4px;background:#ede9fe;color:#6366f1;border-radius:4px;padding:2px 8px;font-size:.8125rem;font-weight:500}.uk-ms-tag-remove{background:none;border:none;cursor:pointer;color:#6366f1;padding:0;font-size:.625rem;line-height:1;display:flex;align-items:center}.uk-ms-tag-remove:hover{color:#4f46e5}.uk-ms-arrow{font-size:.625rem;color:#6b7280;transition:transform .2s;flex-shrink:0;margin-left:auto}.uk-ms-arrow.rotated{transform:rotate(180deg)}.uk-ms-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 20px #0000001f;z-index:1000;overflow:hidden}.uk-ms-search-wrap{padding:8px;border-bottom:1px solid #f3f4f6}.uk-ms-search{width:100%;border:1px solid #d1d5db;border-radius:6px;padding:.375rem .625rem;font-size:.875rem;outline:none;box-sizing:border-box}.uk-ms-search:focus{border-color:#6366f1}.uk-ms-select-all{display:flex;align-items:center;gap:10px;padding:.5rem .75rem;border-bottom:1px solid #f3f4f6;cursor:pointer;font-size:.875rem;color:#374151;font-weight:500}.uk-ms-select-all:hover{background:#f5f3ff}.uk-ms-options{list-style:none;margin:0;padding:4px;max-height:220px;overflow-y:auto}.uk-ms-option{display:flex;align-items:center;gap:10px;padding:.5rem .75rem;border-radius:6px;cursor:pointer;font-size:.9375rem;color:#374151;transition:background .15s}.uk-ms-option:hover:not(.disabled){background:#f5f3ff}.uk-ms-option.selected{color:#6366f1}.uk-ms-option.disabled{color:#d1d5db;cursor:not-allowed}.uk-ms-check-box{width:16px;height:16px;border:2px solid #d1d5db;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:.625rem;flex-shrink:0}.uk-ms-check-box.checked{border-color:#6366f1;background:#6366f1;color:#fff}.uk-ms-empty{padding:1rem;text-align:center;color:#9ca3af;font-size:.875rem}.uk-ms-wrapper.error .uk-ms-trigger{border-color:#ef4444}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkMultiSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-multi-select', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkMultiSelectComponent),
                            multi: true
                        }], template: "<div class=\"uk-ms-wrapper\" [class]=\"wrapperClass()\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-ms-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"toggle()\">\n    <div class=\"uk-ms-tags\">\n      @if (selectedOptions().length === 0) {\n        <span class=\"uk-ms-placeholder\">{{ placeholder }}</span>\n      }\n      @for (opt of selectedOptions(); track opt.value) {\n        <span class=\"uk-ms-tag\">\n          {{ opt.label }}\n          <button type=\"button\" class=\"uk-ms-tag-remove\" (click)=\"removeOption(opt, $event)\">&#x2715;</button>\n        </span>\n      }\n    </div>\n    <span class=\"uk-ms-arrow\" [class.rotated]=\"isOpen()\">&#9660;</span>\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-ms-dropdown\">\n      <div class=\"uk-ms-search-wrap\">\n        <input\n          type=\"text\"\n          class=\"uk-ms-search\"\n          placeholder=\"Search...\"\n          [value]=\"searchQuery()\"\n          (input)=\"onSearch($event)\"\n          (click)=\"$event.stopPropagation()\"\n        />\n      </div>\n      @if (showSelectAll) {\n        <div class=\"uk-ms-select-all\" (click)=\"toggleAll()\">\n          <span class=\"uk-ms-check-box\" [class.checked]=\"allSelected()\">\n            @if (allSelected()) { \u2713 }\n          </span>\n          <span>{{ allSelected() ? 'Deselect All' : 'Select All' }}</span>\n        </div>\n      }\n      <ul class=\"uk-ms-options\">\n        @if (filteredOptions().length === 0) {\n          <li class=\"uk-ms-empty\">No options found</li>\n        }\n        @for (opt of filteredOptions(); track opt.value) {\n          <li\n            class=\"uk-ms-option\"\n            [class.selected]=\"isSelected(opt)\"\n            [class.disabled]=\"opt.disabled\"\n            (click)=\"toggleOption(opt)\"\n          >\n            <span class=\"uk-ms-check-box\" [class.checked]=\"isSelected(opt)\">\n              @if (isSelected(opt)) { \u2713 }\n            </span>\n            {{ opt.label }}\n          </li>\n        }\n      </ul>\n    </div>\n  }\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-ms-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-ms-trigger{display:flex;align-items:center;gap:6px;border:1.5px solid #d1d5db;border-radius:8px;padding:.375rem .75rem;background:#fff;cursor:pointer;min-height:40px;flex-wrap:wrap;transition:border-color .2s,box-shadow .2s}.uk-ms-trigger:hover:not(.disabled){border-color:#6366f1}.uk-ms-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-ms-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-ms-tags{display:flex;flex-wrap:wrap;gap:4px;flex:1;align-items:center}.uk-ms-placeholder{color:#9ca3af;font-size:.9375rem}.uk-ms-tag{display:inline-flex;align-items:center;gap:4px;background:#ede9fe;color:#6366f1;border-radius:4px;padding:2px 8px;font-size:.8125rem;font-weight:500}.uk-ms-tag-remove{background:none;border:none;cursor:pointer;color:#6366f1;padding:0;font-size:.625rem;line-height:1;display:flex;align-items:center}.uk-ms-tag-remove:hover{color:#4f46e5}.uk-ms-arrow{font-size:.625rem;color:#6b7280;transition:transform .2s;flex-shrink:0;margin-left:auto}.uk-ms-arrow.rotated{transform:rotate(180deg)}.uk-ms-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 20px #0000001f;z-index:1000;overflow:hidden}.uk-ms-search-wrap{padding:8px;border-bottom:1px solid #f3f4f6}.uk-ms-search{width:100%;border:1px solid #d1d5db;border-radius:6px;padding:.375rem .625rem;font-size:.875rem;outline:none;box-sizing:border-box}.uk-ms-search:focus{border-color:#6366f1}.uk-ms-select-all{display:flex;align-items:center;gap:10px;padding:.5rem .75rem;border-bottom:1px solid #f3f4f6;cursor:pointer;font-size:.875rem;color:#374151;font-weight:500}.uk-ms-select-all:hover{background:#f5f3ff}.uk-ms-options{list-style:none;margin:0;padding:4px;max-height:220px;overflow-y:auto}.uk-ms-option{display:flex;align-items:center;gap:10px;padding:.5rem .75rem;border-radius:6px;cursor:pointer;font-size:.9375rem;color:#374151;transition:background .15s}.uk-ms-option:hover:not(.disabled){background:#f5f3ff}.uk-ms-option.selected{color:#6366f1}.uk-ms-option.disabled{color:#d1d5db;cursor:not-allowed}.uk-ms-check-box{width:16px;height:16px;border:2px solid #d1d5db;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:.625rem;flex-shrink:0}.uk-ms-check-box.checked{border-color:#6366f1;background:#6366f1;color:#fff}.uk-ms-empty{padding:1rem;text-align:center;color:#9ca3af;font-size:.875rem}.uk-ms-wrapper.error .uk-ms-trigger{border-color:#ef4444}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], options: [{
                type: Input
            }], size: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], showSelectAll: [{
                type: Input
            }], hint: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UkDateRangePickerComponent {
    el;
    label = '';
    placeholder = 'Select date range';
    required = false;
    disabled = false;
    minDate;
    maxDate;
    showPresets = true;
    errorMessage = '';
    format = 'MMM d, yyyy';
    rangeChange = new EventEmitter();
    isOpen = signal(false, ...(ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    dateRange = signal({ start: null, end: null }, ...(ngDevMode ? [{ debugName: "dateRange" }] : /* istanbul ignore next */ []));
    hoverDate = signal(null, ...(ngDevMode ? [{ debugName: "hoverDate" }] : /* istanbul ignore next */ []));
    leftYear = signal(new Date().getFullYear(), ...(ngDevMode ? [{ debugName: "leftYear" }] : /* istanbul ignore next */ []));
    leftMonth = signal(new Date().getMonth(), ...(ngDevMode ? [{ debugName: "leftMonth" }] : /* istanbul ignore next */ []));
    rightYear = computed(() => {
        const m = this.leftMonth() + 1;
        return m > 11 ? this.leftYear() + 1 : this.leftYear();
    }, ...(ngDevMode ? [{ debugName: "rightYear" }] : /* istanbul ignore next */ []));
    rightMonth = computed(() => (this.leftMonth() + 1) % 12, ...(ngDevMode ? [{ debugName: "rightMonth" }] : /* istanbul ignore next */ []));
    weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    today = new Date();
    selecting = 'start';
    presets = [
        { label: 'Today', fn: () => { const d = new Date(); return { start: d, end: d }; } },
        { label: 'Yesterday', fn: () => { const d = new Date(); d.setDate(d.getDate() - 1); return { start: d, end: d }; } },
        { label: 'Last 7 days', fn: () => { const e = new Date(); const s = new Date(); s.setDate(s.getDate() - 6); return { start: s, end: e }; } },
        { label: 'Last 30 days', fn: () => { const e = new Date(); const s = new Date(); s.setDate(s.getDate() - 29); return { start: s, end: e }; } },
        { label: 'This month', fn: () => { const n = new Date(); return { start: new Date(n.getFullYear(), n.getMonth(), 1), end: new Date(n.getFullYear(), n.getMonth() + 1, 0) }; } },
        { label: 'Last month', fn: () => { const n = new Date(); return { start: new Date(n.getFullYear(), n.getMonth() - 1, 1), end: new Date(n.getFullYear(), n.getMonth(), 0) }; } },
    ];
    onChange = (_) => { };
    onTouched = () => { };
    constructor(el) {
        this.el = el;
    }
    onDocumentClick(e) {
        if (!this.el.nativeElement.contains(e.target))
            this.isOpen.set(false);
    }
    openPicker() {
        if (this.isDisabled())
            return;
        this.isOpen.update(v => !v);
        this.onTouched();
    }
    buildDays(year, month) {
        const days = [];
        const first = new Date(year, month, 1);
        const last = new Date(year, month + 1, 0);
        const startPad = first.getDay();
        for (let i = startPad - 1; i >= 0; i--) {
            days.push(this.buildDay(new Date(year, month, -i), false));
        }
        for (let i = 1; i <= last.getDate(); i++) {
            days.push(this.buildDay(new Date(year, month, i), true));
        }
        const remaining = 42 - days.length;
        for (let i = 1; i <= remaining; i++) {
            days.push(this.buildDay(new Date(year, month + 1, i), false));
        }
        return days;
    }
    buildDay(date, isCurrentMonth) {
        const r = this.dateRange();
        const hover = this.hoverDate();
        const s = r.start ? this.sameDay(date, r.start) : false;
        const e = r.end ? this.sameDay(date, r.end) : false;
        let inRange = false;
        if (r.start && r.end) {
            inRange = date > r.start && date < r.end;
        }
        else if (r.start && hover && !r.end) {
            const lo = r.start < hover ? r.start : hover;
            const hi = r.start < hover ? hover : r.start;
            inRange = date > lo && date < hi;
        }
        return {
            date, isCurrentMonth,
            isToday: this.sameDay(date, this.today),
            isSelected: s || e,
            isInRange: inRange,
            isStart: s,
            isEnd: e,
            isDisabled: (!!this.minDate && date < this.minDate) || (!!this.maxDate && date > this.maxDate)
        };
    }
    leftDays = computed(() => this.buildDays(this.leftYear(), this.leftMonth()), ...(ngDevMode ? [{ debugName: "leftDays" }] : /* istanbul ignore next */ []));
    rightDays = computed(() => this.buildDays(this.rightYear(), this.rightMonth()), ...(ngDevMode ? [{ debugName: "rightDays" }] : /* istanbul ignore next */ []));
    sameDay(a, b) {
        return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }
    selectDay(date) {
        if (this.selecting === 'start' || (this.dateRange().start && this.dateRange().end)) {
            this.dateRange.set({ start: date, end: null });
            this.selecting = 'end';
        }
        else {
            const s = this.dateRange().start;
            this.dateRange.set(date < s ? { start: date, end: s } : { start: s, end: date });
            this.selecting = 'start';
        }
    }
    prevMonth() {
        if (this.leftMonth() === 0) {
            this.leftMonth.set(11);
            this.leftYear.update(y => y - 1);
        }
        else {
            this.leftMonth.update(m => m - 1);
        }
    }
    nextMonth() {
        if (this.rightMonth() === 11) {
            this.leftMonth.set(this.leftMonth() + 2 > 11 ? (this.leftMonth() + 2) % 12 : this.leftMonth() + 2);
            if (this.leftMonth() < 2)
                this.leftYear.update(y => y + 1);
        }
        else {
            this.leftMonth.update(m => m + 1);
        }
    }
    nextMonthLeft() { this.leftMonth.update(m => m === 11 ? (this.leftYear.update(y => y + 1), 0) : m + 1); }
    prevMonthRight() { this.leftMonth.update(m => m === 0 ? (this.leftYear.update(y => y - 1), 11) : m - 1); }
    formatMonth(year, month) {
        return new Date(year, month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
    formatDate(d) {
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
    displayValue = computed(() => {
        const r = this.dateRange();
        if (!r.start)
            return this.placeholder;
        if (!r.end)
            return `${this.formatDate(r.start)} – ...`;
        return `${this.formatDate(r.start)} – ${this.formatDate(r.end)}`;
    }, ...(ngDevMode ? [{ debugName: "displayValue" }] : /* istanbul ignore next */ []));
    applyPreset(p) {
        this.dateRange.set(p.fn());
        this.selecting = 'start';
        this.apply();
    }
    apply() {
        const r = this.dateRange();
        this.onChange(r);
        this.rangeChange.emit(r);
        this.isOpen.set(false);
    }
    cancel() { this.isOpen.set(false); }
    clear(e) {
        e.stopPropagation();
        this.dateRange.set({ start: null, end: null });
        this.selecting = 'start';
        this.onChange({ start: null, end: null });
        this.rangeChange.emit({ start: null, end: null });
    }
    writeValue(val) { this.dateRange.set(val ?? { start: null, end: null }); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDateRangePickerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkDateRangePickerComponent, isStandalone: true, selector: "uk-date-range-picker", inputs: { label: "label", placeholder: "placeholder", required: "required", disabled: "disabled", minDate: "minDate", maxDate: "maxDate", showPresets: "showPresets", errorMessage: "errorMessage", format: "format" }, outputs: { rangeChange: "rangeChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkDateRangePickerComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-drp-wrapper\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-drp-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"openPicker()\">\n    <span class=\"uk-drp-icon\">&#128197;</span>\n    <span class=\"uk-drp-value\" [class.placeholder]=\"!dateRange().start\">\n      {{ displayValue() }}\n    </span>\n    @if (dateRange().start) {\n      <button type=\"button\" class=\"uk-drp-clear\" (click)=\"clear($event)\">&#x2715;</button>\n    }\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-drp-panel\">\n      <div class=\"uk-drp-calendars\">\n        <div class=\"uk-drp-cal\">\n          <div class=\"uk-drp-cal-header\">\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"prevMonth()\">&#8249;</button>\n            <span class=\"uk-drp-cal-title\">{{ formatMonth(leftYear(), leftMonth()) }}</span>\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"nextMonthLeft()\">&#8250;</button>\n          </div>\n          <div class=\"uk-drp-cal-grid\">\n            @for (d of weekDays; track d) {\n              <span class=\"uk-drp-weekday\">{{ d }}</span>\n            }\n            @for (day of leftDays(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-drp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.start]=\"day.isStart\"\n                [class.end]=\"day.isEnd\"\n                [class.in-range]=\"day.isInRange\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\"\n                (mouseenter)=\"hoverDate.set(day.date)\"\n              >{{ day.date.getDate() }}</button>\n            }\n          </div>\n        </div>\n        <div class=\"uk-drp-cal\">\n          <div class=\"uk-drp-cal-header\">\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"prevMonthRight()\">&#8249;</button>\n            <span class=\"uk-drp-cal-title\">{{ formatMonth(rightYear(), rightMonth()) }}</span>\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"nextMonth()\">&#8250;</button>\n          </div>\n          <div class=\"uk-drp-cal-grid\">\n            @for (d of weekDays; track d) {\n              <span class=\"uk-drp-weekday\">{{ d }}</span>\n            }\n            @for (day of rightDays(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-drp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.start]=\"day.isStart\"\n                [class.end]=\"day.isEnd\"\n                [class.in-range]=\"day.isInRange\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\"\n                (mouseenter)=\"hoverDate.set(day.date)\"\n              >{{ day.date.getDate() }}</button>\n            }\n          </div>\n        </div>\n      </div>\n      @if (showPresets) {\n        <div class=\"uk-drp-presets\">\n          @for (p of presets; track p.label) {\n            <button type=\"button\" class=\"uk-drp-preset\" (click)=\"applyPreset(p)\">{{ p.label }}</button>\n          }\n        </div>\n      }\n      <div class=\"uk-drp-footer\">\n        <button type=\"button\" class=\"uk-drp-btn-cancel\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"uk-drp-btn-apply\" [disabled]=\"!dateRange().start\" (click)=\"apply()\">Apply</button>\n      </div>\n    </div>\n  }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-drp-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-drp-trigger{display:flex;align-items:center;gap:8px;border:1.5px solid #d1d5db;border-radius:8px;padding:.5rem .75rem;background:#fff;cursor:pointer;min-height:40px;transition:border-color .2s,box-shadow .2s}.uk-drp-trigger:hover:not(.disabled){border-color:#6366f1}.uk-drp-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-drp-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-drp-icon{color:#6b7280;font-size:1rem}.uk-drp-value{flex:1;font-size:.9375rem;color:#111827}.uk-drp-value.placeholder{color:#9ca3af}.uk-drp-clear{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem}.uk-drp-clear:hover{color:#374151}.uk-drp-panel{position:absolute;top:calc(100% + 4px);left:0;z-index:1000;background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 30px #00000026;overflow:hidden;min-width:580px}.uk-drp-calendars{display:flex}.uk-drp-cal{padding:16px;flex:1}.uk-drp-cal+.uk-drp-cal{border-left:1px solid #f3f4f6}.uk-drp-cal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.uk-drp-cal-title{font-size:.9375rem;font-weight:600;color:#111827}.uk-drp-nav{background:none;border:none;cursor:pointer;width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;color:#6b7280;transition:background .15s}.uk-drp-nav:hover{background:#f3f4f6;color:#374151}.uk-drp-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.uk-drp-weekday{text-align:center;font-size:.75rem;font-weight:600;color:#9ca3af;padding:4px 0;text-transform:uppercase}.uk-drp-day{width:32px;height:32px;border:none;border-radius:6px;background:none;font-size:.875rem;color:#374151;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center;margin:0 auto}.uk-drp-day:hover:not(:disabled){background:#ede9fe;color:#6366f1}.uk-drp-day.other-month{color:#d1d5db}.uk-drp-day.today{font-weight:700;color:#6366f1}.uk-drp-day.start,.uk-drp-day.end{background:#6366f1!important;color:#fff!important;border-radius:6px}.uk-drp-day.in-range{background:#ede9fe;color:#6366f1;border-radius:0}.uk-drp-day.disabled{color:#d1d5db;cursor:not-allowed}.uk-drp-presets{display:flex;gap:8px;flex-wrap:wrap;padding:8px 16px;border-top:1px solid #f3f4f6}.uk-drp-preset{background:#f3f4f6;border:none;border-radius:6px;padding:4px 12px;font-size:.8125rem;cursor:pointer;color:#374151;transition:background .15s}.uk-drp-preset:hover{background:#ede9fe;color:#6366f1}.uk-drp-footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid #f3f4f6}.uk-drp-btn-cancel{background:none;border:1.5px solid #e5e7eb;border-radius:6px;padding:.375rem 1rem;font-size:.875rem;cursor:pointer;color:#374151}.uk-drp-btn-cancel:hover{background:#f3f4f6}.uk-drp-btn-apply{background:#6366f1;border:none;border-radius:6px;padding:.375rem 1rem;font-size:.875rem;cursor:pointer;color:#fff}.uk-drp-btn-apply:hover:not(:disabled){background:#4f46e5}.uk-drp-btn-apply:disabled{background:#c7d2fe;cursor:not-allowed}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDateRangePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-date-range-picker', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkDateRangePickerComponent),
                            multi: true
                        }], template: "<div class=\"uk-drp-wrapper\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-drp-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"openPicker()\">\n    <span class=\"uk-drp-icon\">&#128197;</span>\n    <span class=\"uk-drp-value\" [class.placeholder]=\"!dateRange().start\">\n      {{ displayValue() }}\n    </span>\n    @if (dateRange().start) {\n      <button type=\"button\" class=\"uk-drp-clear\" (click)=\"clear($event)\">&#x2715;</button>\n    }\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-drp-panel\">\n      <div class=\"uk-drp-calendars\">\n        <div class=\"uk-drp-cal\">\n          <div class=\"uk-drp-cal-header\">\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"prevMonth()\">&#8249;</button>\n            <span class=\"uk-drp-cal-title\">{{ formatMonth(leftYear(), leftMonth()) }}</span>\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"nextMonthLeft()\">&#8250;</button>\n          </div>\n          <div class=\"uk-drp-cal-grid\">\n            @for (d of weekDays; track d) {\n              <span class=\"uk-drp-weekday\">{{ d }}</span>\n            }\n            @for (day of leftDays(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-drp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.start]=\"day.isStart\"\n                [class.end]=\"day.isEnd\"\n                [class.in-range]=\"day.isInRange\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\"\n                (mouseenter)=\"hoverDate.set(day.date)\"\n              >{{ day.date.getDate() }}</button>\n            }\n          </div>\n        </div>\n        <div class=\"uk-drp-cal\">\n          <div class=\"uk-drp-cal-header\">\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"prevMonthRight()\">&#8249;</button>\n            <span class=\"uk-drp-cal-title\">{{ formatMonth(rightYear(), rightMonth()) }}</span>\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"nextMonth()\">&#8250;</button>\n          </div>\n          <div class=\"uk-drp-cal-grid\">\n            @for (d of weekDays; track d) {\n              <span class=\"uk-drp-weekday\">{{ d }}</span>\n            }\n            @for (day of rightDays(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-drp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.start]=\"day.isStart\"\n                [class.end]=\"day.isEnd\"\n                [class.in-range]=\"day.isInRange\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\"\n                (mouseenter)=\"hoverDate.set(day.date)\"\n              >{{ day.date.getDate() }}</button>\n            }\n          </div>\n        </div>\n      </div>\n      @if (showPresets) {\n        <div class=\"uk-drp-presets\">\n          @for (p of presets; track p.label) {\n            <button type=\"button\" class=\"uk-drp-preset\" (click)=\"applyPreset(p)\">{{ p.label }}</button>\n          }\n        </div>\n      }\n      <div class=\"uk-drp-footer\">\n        <button type=\"button\" class=\"uk-drp-btn-cancel\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"uk-drp-btn-apply\" [disabled]=\"!dateRange().start\" (click)=\"apply()\">Apply</button>\n      </div>\n    </div>\n  }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-drp-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-drp-trigger{display:flex;align-items:center;gap:8px;border:1.5px solid #d1d5db;border-radius:8px;padding:.5rem .75rem;background:#fff;cursor:pointer;min-height:40px;transition:border-color .2s,box-shadow .2s}.uk-drp-trigger:hover:not(.disabled){border-color:#6366f1}.uk-drp-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-drp-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-drp-icon{color:#6b7280;font-size:1rem}.uk-drp-value{flex:1;font-size:.9375rem;color:#111827}.uk-drp-value.placeholder{color:#9ca3af}.uk-drp-clear{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem}.uk-drp-clear:hover{color:#374151}.uk-drp-panel{position:absolute;top:calc(100% + 4px);left:0;z-index:1000;background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 30px #00000026;overflow:hidden;min-width:580px}.uk-drp-calendars{display:flex}.uk-drp-cal{padding:16px;flex:1}.uk-drp-cal+.uk-drp-cal{border-left:1px solid #f3f4f6}.uk-drp-cal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.uk-drp-cal-title{font-size:.9375rem;font-weight:600;color:#111827}.uk-drp-nav{background:none;border:none;cursor:pointer;width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;color:#6b7280;transition:background .15s}.uk-drp-nav:hover{background:#f3f4f6;color:#374151}.uk-drp-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.uk-drp-weekday{text-align:center;font-size:.75rem;font-weight:600;color:#9ca3af;padding:4px 0;text-transform:uppercase}.uk-drp-day{width:32px;height:32px;border:none;border-radius:6px;background:none;font-size:.875rem;color:#374151;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center;margin:0 auto}.uk-drp-day:hover:not(:disabled){background:#ede9fe;color:#6366f1}.uk-drp-day.other-month{color:#d1d5db}.uk-drp-day.today{font-weight:700;color:#6366f1}.uk-drp-day.start,.uk-drp-day.end{background:#6366f1!important;color:#fff!important;border-radius:6px}.uk-drp-day.in-range{background:#ede9fe;color:#6366f1;border-radius:0}.uk-drp-day.disabled{color:#d1d5db;cursor:not-allowed}.uk-drp-presets{display:flex;gap:8px;flex-wrap:wrap;padding:8px 16px;border-top:1px solid #f3f4f6}.uk-drp-preset{background:#f3f4f6;border:none;border-radius:6px;padding:4px 12px;font-size:.8125rem;cursor:pointer;color:#374151;transition:background .15s}.uk-drp-preset:hover{background:#ede9fe;color:#6366f1}.uk-drp-footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid #f3f4f6}.uk-drp-btn-cancel{background:none;border:1.5px solid #e5e7eb;border-radius:6px;padding:.375rem 1rem;font-size:.875rem;cursor:pointer;color:#374151}.uk-drp-btn-cancel:hover{background:#f3f4f6}.uk-drp-btn-apply{background:#6366f1;border:none;border-radius:6px;padding:.375rem 1rem;font-size:.875rem;cursor:pointer;color:#fff}.uk-drp-btn-apply:hover:not(:disabled){background:#4f46e5}.uk-drp-btn-apply:disabled{background:#c7d2fe;cursor:not-allowed}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], showPresets: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], format: [{
                type: Input
            }], rangeChange: [{
                type: Output
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UkTimepickerComponent {
    label = '';
    use24Hour = false;
    showSeconds = false;
    required = false;
    disabled = false;
    hint = '';
    errorMessage = '';
    timeChange = new EventEmitter();
    time = signal({ hour: 12, minute: 0, second: 0, period: 'AM' }, ...(ngDevMode ? [{ debugName: "time" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    displayHour = computed(() => {
        const h = this.time().hour;
        if (this.use24Hour)
            return h;
        if (h === 0)
            return 12;
        if (h > 12)
            return h - 12;
        return h;
    }, ...(ngDevMode ? [{ debugName: "displayHour" }] : /* istanbul ignore next */ []));
    onChange = (_) => { };
    onTouched = () => { };
    padded(n) { return String(n).padStart(2, '0'); }
    emit() {
        const t = this.time();
        this.onChange(t);
        this.timeChange.emit(t);
    }
    increment(unit) {
        this.time.update(t => {
            const next = { ...t };
            if (unit === 'hour')
                next.hour = this.use24Hour ? (t.hour + 1) % 24 : (t.hour % 12) + 1 + (t.period === 'PM' ? 12 : 0);
            if (unit === 'minute')
                next.minute = (t.minute + 1) % 60;
            if (unit === 'second')
                next.second = ((t.second ?? 0) + 1) % 60;
            return next;
        });
        this.emit();
    }
    decrement(unit) {
        this.time.update(t => {
            const next = { ...t };
            if (unit === 'hour')
                next.hour = this.use24Hour ? (t.hour - 1 + 24) % 24 : ((t.hour - 1 + 12) % 12) || 12 + (t.period === 'PM' ? 12 : 0);
            if (unit === 'minute')
                next.minute = (t.minute - 1 + 60) % 60;
            if (unit === 'second')
                next.second = ((t.second ?? 0) - 1 + 60) % 60;
            return next;
        });
        this.emit();
    }
    setPeriod(p) {
        this.time.update(t => ({ ...t, period: p }));
        this.emit();
    }
    onHourInput(e) {
        const v = parseInt(e.target.value);
        if (!isNaN(v))
            this.time.update(t => ({ ...t, hour: v }));
    }
    onMinuteInput(e) {
        const v = parseInt(e.target.value);
        if (!isNaN(v))
            this.time.update(t => ({ ...t, minute: v }));
    }
    onSecondInput(e) {
        const v = parseInt(e.target.value);
        if (!isNaN(v))
            this.time.update(t => ({ ...t, second: v }));
    }
    validateHour() {
        this.time.update(t => ({
            ...t,
            hour: Math.max(0, Math.min(this.use24Hour ? 23 : 12, t.hour))
        }));
        this.emit();
    }
    validateMinute() {
        this.time.update(t => ({ ...t, minute: Math.max(0, Math.min(59, t.minute)) }));
        this.emit();
    }
    writeValue(val) { if (val)
        this.time.set(val); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkTimepickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkTimepickerComponent, isStandalone: true, selector: "uk-timepicker", inputs: { label: "label", use24Hour: "use24Hour", showSeconds: "showSeconds", required: "required", disabled: "disabled", hint: "hint", errorMessage: "errorMessage" }, outputs: { timeChange: "timeChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkTimepickerComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-tp-wrapper\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-tp-control\" [class.disabled]=\"isDisabled()\">\n    <div class=\"uk-tp-col\">\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('hour')\" [disabled]=\"isDisabled()\">&#8963;</button>\n      <input\n        type=\"text\"\n        class=\"uk-tp-input\"\n        [value]=\"padded(displayHour())\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onHourInput($event)\"\n        (blur)=\"validateHour()\"\n        maxlength=\"2\"\n      />\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('hour')\" [disabled]=\"isDisabled()\">&#8964;</button>\n    </div>\n    <span class=\"uk-tp-sep\">:</span>\n    <div class=\"uk-tp-col\">\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('minute')\" [disabled]=\"isDisabled()\">&#8963;</button>\n      <input\n        type=\"text\"\n        class=\"uk-tp-input\"\n        [value]=\"padded(time().minute)\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onMinuteInput($event)\"\n        (blur)=\"validateMinute()\"\n        maxlength=\"2\"\n      />\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('minute')\" [disabled]=\"isDisabled()\">&#8964;</button>\n    </div>\n    @if (showSeconds) {\n      <span class=\"uk-tp-sep\">:</span>\n      <div class=\"uk-tp-col\">\n        <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('second')\" [disabled]=\"isDisabled()\">&#8963;</button>\n        <input\n          type=\"text\"\n          class=\"uk-tp-input\"\n          [value]=\"padded(time().second ?? 0)\"\n          [disabled]=\"isDisabled()\"\n          (input)=\"onSecondInput($event)\"\n          maxlength=\"2\"\n        />\n        <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('second')\" [disabled]=\"isDisabled()\">&#8964;</button>\n      </div>\n    }\n    @if (!use24Hour) {\n      <div class=\"uk-tp-period\">\n        <button\n          type=\"button\"\n          class=\"uk-tp-period-btn\"\n          [class.active]=\"time().period === 'AM'\"\n          (click)=\"setPeriod('AM')\"\n          [disabled]=\"isDisabled()\"\n        >AM</button>\n        <button\n          type=\"button\"\n          class=\"uk-tp-period-btn\"\n          [class.active]=\"time().period === 'PM'\"\n          (click)=\"setPeriod('PM')\"\n          [disabled]=\"isDisabled()\"\n        >PM</button>\n      </div>\n    }\n  </div>\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-tp-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-tp-control{display:inline-flex;align-items:center;gap:4px;border:1.5px solid #d1d5db;border-radius:8px;padding:6px 12px;background:#fff;transition:border-color .2s}.uk-tp-control:focus-within{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-tp-control.disabled{background:#f9fafb}.uk-tp-col{display:flex;flex-direction:column;align-items:center;gap:2px}.uk-tp-btn{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px 6px;border-radius:4px;line-height:1;transition:background .15s,color .15s}.uk-tp-btn:hover:not(:disabled){background:#f3f4f6;color:#374151}.uk-tp-btn:disabled{cursor:not-allowed;opacity:.4}.uk-tp-input{width:36px;text-align:center;border:none;outline:none;font-size:1.125rem;font-weight:600;color:#111827;background:transparent;padding:4px 2px}.uk-tp-input:disabled{color:#9ca3af}.uk-tp-sep{font-size:1.25rem;font-weight:600;color:#6b7280;align-self:center}.uk-tp-period{display:flex;flex-direction:column;gap:2px;margin-left:8px}.uk-tp-period-btn{background:#f3f4f6;border:1px solid #e5e7eb;border-radius:4px;padding:2px 8px;font-size:.75rem;font-weight:600;cursor:pointer;color:#6b7280;transition:all .15s}.uk-tp-period-btn.active{background:#6366f1;border-color:#6366f1;color:#fff}.uk-tp-period-btn:hover:not(.active):not(:disabled){background:#e5e7eb}.uk-tp-period-btn:disabled{cursor:not-allowed;opacity:.4}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkTimepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-timepicker', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkTimepickerComponent),
                            multi: true
                        }], template: "<div class=\"uk-tp-wrapper\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-tp-control\" [class.disabled]=\"isDisabled()\">\n    <div class=\"uk-tp-col\">\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('hour')\" [disabled]=\"isDisabled()\">&#8963;</button>\n      <input\n        type=\"text\"\n        class=\"uk-tp-input\"\n        [value]=\"padded(displayHour())\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onHourInput($event)\"\n        (blur)=\"validateHour()\"\n        maxlength=\"2\"\n      />\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('hour')\" [disabled]=\"isDisabled()\">&#8964;</button>\n    </div>\n    <span class=\"uk-tp-sep\">:</span>\n    <div class=\"uk-tp-col\">\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('minute')\" [disabled]=\"isDisabled()\">&#8963;</button>\n      <input\n        type=\"text\"\n        class=\"uk-tp-input\"\n        [value]=\"padded(time().minute)\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onMinuteInput($event)\"\n        (blur)=\"validateMinute()\"\n        maxlength=\"2\"\n      />\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('minute')\" [disabled]=\"isDisabled()\">&#8964;</button>\n    </div>\n    @if (showSeconds) {\n      <span class=\"uk-tp-sep\">:</span>\n      <div class=\"uk-tp-col\">\n        <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('second')\" [disabled]=\"isDisabled()\">&#8963;</button>\n        <input\n          type=\"text\"\n          class=\"uk-tp-input\"\n          [value]=\"padded(time().second ?? 0)\"\n          [disabled]=\"isDisabled()\"\n          (input)=\"onSecondInput($event)\"\n          maxlength=\"2\"\n        />\n        <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('second')\" [disabled]=\"isDisabled()\">&#8964;</button>\n      </div>\n    }\n    @if (!use24Hour) {\n      <div class=\"uk-tp-period\">\n        <button\n          type=\"button\"\n          class=\"uk-tp-period-btn\"\n          [class.active]=\"time().period === 'AM'\"\n          (click)=\"setPeriod('AM')\"\n          [disabled]=\"isDisabled()\"\n        >AM</button>\n        <button\n          type=\"button\"\n          class=\"uk-tp-period-btn\"\n          [class.active]=\"time().period === 'PM'\"\n          (click)=\"setPeriod('PM')\"\n          [disabled]=\"isDisabled()\"\n        >PM</button>\n      </div>\n    }\n  </div>\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-tp-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-tp-control{display:inline-flex;align-items:center;gap:4px;border:1.5px solid #d1d5db;border-radius:8px;padding:6px 12px;background:#fff;transition:border-color .2s}.uk-tp-control:focus-within{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-tp-control.disabled{background:#f9fafb}.uk-tp-col{display:flex;flex-direction:column;align-items:center;gap:2px}.uk-tp-btn{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px 6px;border-radius:4px;line-height:1;transition:background .15s,color .15s}.uk-tp-btn:hover:not(:disabled){background:#f3f4f6;color:#374151}.uk-tp-btn:disabled{cursor:not-allowed;opacity:.4}.uk-tp-input{width:36px;text-align:center;border:none;outline:none;font-size:1.125rem;font-weight:600;color:#111827;background:transparent;padding:4px 2px}.uk-tp-input:disabled{color:#9ca3af}.uk-tp-sep{font-size:1.25rem;font-weight:600;color:#6b7280;align-self:center}.uk-tp-period{display:flex;flex-direction:column;gap:2px;margin-left:8px}.uk-tp-period-btn{background:#f3f4f6;border:1px solid #e5e7eb;border-radius:4px;padding:2px 8px;font-size:.75rem;font-weight:600;cursor:pointer;color:#6b7280;transition:all .15s}.uk-tp-period-btn.active{background:#6366f1;border-color:#6366f1;color:#fff}.uk-tp-period-btn:hover:not(.active):not(:disabled){background:#e5e7eb}.uk-tp-period-btn:disabled{cursor:not-allowed;opacity:.4}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], use24Hour: [{
                type: Input
            }], showSeconds: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], hint: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], timeChange: [{
                type: Output
            }] } });

class UkCheckboxComponent {
    label = '';
    required = false;
    disabled = false;
    indeterminate = false;
    hint = '';
    errorMessage = '';
    checkedChange = new EventEmitter();
    checked = signal(false, ...(ngDevMode ? [{ debugName: "checked" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    onChange = (_) => { };
    onTouched = () => { };
    onToggle(e) {
        const v = e.target.checked;
        this.checked.set(v);
        this.onChange(v);
        this.checkedChange.emit(v);
        this.onTouched();
    }
    writeValue(val) { this.checked.set(!!val); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkCheckboxComponent, isStandalone: true, selector: "uk-checkbox", inputs: { label: "label", required: "required", disabled: "disabled", indeterminate: "indeterminate", hint: "hint", errorMessage: "errorMessage" }, outputs: { checkedChange: "checkedChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkCheckboxComponent),
                multi: true
            }], ngImport: i0, template: "<label class=\"uk-cb-label\" [class.disabled]=\"isDisabled()\">\n  <span class=\"uk-cb-box-wrap\">\n    <input\n      type=\"checkbox\"\n      class=\"uk-cb-native\"\n      [checked]=\"checked()\"\n      [indeterminate]=\"indeterminate\"\n      [disabled]=\"isDisabled()\"\n      (change)=\"onToggle($event)\"\n    />\n    <span class=\"uk-cb-box\" [class.checked]=\"checked()\" [class.indeterminate]=\"indeterminate\">\n      @if (indeterminate) { <span class=\"uk-cb-dash\">\u2014</span> }\n      @else if (checked()) { <span class=\"uk-cb-check\">\u2713</span> }\n    </span>\n  </span>\n  @if (label) {\n    <span class=\"uk-cb-text\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </span>\n  }\n</label>\n@if (hint) { <span class=\"uk-hint\">{{ hint }}</span> }\n@if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n", styles: [":host{display:inline-flex;flex-direction:column;gap:4px}.uk-cb-label{display:inline-flex;align-items:center;gap:10px;cursor:pointer;-webkit-user-select:none;user-select:none}.uk-cb-label.disabled{cursor:not-allowed;opacity:.5}.uk-cb-box-wrap{position:relative;flex-shrink:0}.uk-cb-native{position:absolute;opacity:0;width:0;height:0}.uk-cb-box{width:18px;height:18px;border:2px solid #d1d5db;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:all .15s;background:#fff}.uk-cb-box.checked,.uk-cb-box.indeterminate{background:#6366f1;border-color:#6366f1}.uk-cb-check{color:#fff;font-size:.6875rem;font-weight:700;line-height:1}.uk-cb-dash{color:#fff;font-size:.875rem;font-weight:700;line-height:1}.uk-cb-text{font-size:.9375rem;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-hint{font-size:.75rem;color:#6b7280;margin-left:28px}.uk-error{font-size:.75rem;color:#ef4444;margin-left:28px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-checkbox', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkCheckboxComponent),
                            multi: true
                        }], template: "<label class=\"uk-cb-label\" [class.disabled]=\"isDisabled()\">\n  <span class=\"uk-cb-box-wrap\">\n    <input\n      type=\"checkbox\"\n      class=\"uk-cb-native\"\n      [checked]=\"checked()\"\n      [indeterminate]=\"indeterminate\"\n      [disabled]=\"isDisabled()\"\n      (change)=\"onToggle($event)\"\n    />\n    <span class=\"uk-cb-box\" [class.checked]=\"checked()\" [class.indeterminate]=\"indeterminate\">\n      @if (indeterminate) { <span class=\"uk-cb-dash\">\u2014</span> }\n      @else if (checked()) { <span class=\"uk-cb-check\">\u2713</span> }\n    </span>\n  </span>\n  @if (label) {\n    <span class=\"uk-cb-text\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </span>\n  }\n</label>\n@if (hint) { <span class=\"uk-hint\">{{ hint }}</span> }\n@if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n", styles: [":host{display:inline-flex;flex-direction:column;gap:4px}.uk-cb-label{display:inline-flex;align-items:center;gap:10px;cursor:pointer;-webkit-user-select:none;user-select:none}.uk-cb-label.disabled{cursor:not-allowed;opacity:.5}.uk-cb-box-wrap{position:relative;flex-shrink:0}.uk-cb-native{position:absolute;opacity:0;width:0;height:0}.uk-cb-box{width:18px;height:18px;border:2px solid #d1d5db;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:all .15s;background:#fff}.uk-cb-box.checked,.uk-cb-box.indeterminate{background:#6366f1;border-color:#6366f1}.uk-cb-check{color:#fff;font-size:.6875rem;font-weight:700;line-height:1}.uk-cb-dash{color:#fff;font-size:.875rem;font-weight:700;line-height:1}.uk-cb-text{font-size:.9375rem;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-hint{font-size:.75rem;color:#6b7280;margin-left:28px}.uk-error{font-size:.75rem;color:#ef4444;margin-left:28px}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], hint: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }] } });

class UkRadioGroupComponent {
    label = '';
    options = [];
    direction = 'vertical';
    required = false;
    disabled = false;
    hint = '';
    errorMessage = '';
    selectionChange = new EventEmitter();
    value = signal(null, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    groupName = `uk-radio-${Math.random().toString(36).slice(2)}`;
    onChange = (_) => { };
    onTouched = () => { };
    select(opt) {
        this.value.set(opt.value);
        this.onChange(opt.value);
        this.selectionChange.emit(opt);
        this.onTouched();
    }
    writeValue(val) { this.value.set(val); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkRadioGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkRadioGroupComponent, isStandalone: true, selector: "uk-radio-group", inputs: { label: "label", options: "options", direction: "direction", required: "required", disabled: "disabled", hint: "hint", errorMessage: "errorMessage" }, outputs: { selectionChange: "selectionChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkRadioGroupComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-rg-wrapper\">\n  @if (label) {\n    <span class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </span>\n  }\n  <div class=\"uk-rg-options\" [class.horizontal]=\"direction === 'horizontal'\">\n    @for (opt of options; track opt.value) {\n      <label\n        class=\"uk-radio-label\"\n        [class.disabled]=\"isDisabled() || opt.disabled\"\n        [class.selected]=\"value() === opt.value\"\n      >\n        <input\n          type=\"radio\"\n          class=\"uk-radio-native\"\n          [name]=\"groupName\"\n          [value]=\"opt.value\"\n          [checked]=\"value() === opt.value\"\n          [disabled]=\"isDisabled() || !!opt.disabled\"\n          (change)=\"select(opt)\"\n        />\n        <span class=\"uk-radio-circle\">\n          @if (value() === opt.value) {\n            <span class=\"uk-radio-dot\"></span>\n          }\n        </span>\n        <span class=\"uk-radio-text\">{{ opt.label }}</span>\n      </label>\n    }\n  </div>\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-rg-wrapper{display:flex;flex-direction:column;gap:6px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-rg-options{display:flex;flex-direction:column;gap:10px}.uk-rg-options.horizontal{flex-direction:row;flex-wrap:wrap;gap:16px}.uk-radio-label{display:inline-flex;align-items:center;gap:10px;cursor:pointer;-webkit-user-select:none;user-select:none}.uk-radio-label.disabled{cursor:not-allowed;opacity:.5}.uk-radio-native{position:absolute;opacity:0;width:0;height:0}.uk-radio-circle{width:18px;height:18px;border:2px solid #d1d5db;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .15s;flex-shrink:0}.uk-radio-label.selected .uk-radio-circle{border-color:#6366f1}.uk-radio-dot{width:8px;height:8px;border-radius:50%;background:#6366f1;transition:all .15s}.uk-radio-text{font-size:.9375rem;color:#374151}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkRadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-radio-group', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkRadioGroupComponent),
                            multi: true
                        }], template: "<div class=\"uk-rg-wrapper\">\n  @if (label) {\n    <span class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </span>\n  }\n  <div class=\"uk-rg-options\" [class.horizontal]=\"direction === 'horizontal'\">\n    @for (opt of options; track opt.value) {\n      <label\n        class=\"uk-radio-label\"\n        [class.disabled]=\"isDisabled() || opt.disabled\"\n        [class.selected]=\"value() === opt.value\"\n      >\n        <input\n          type=\"radio\"\n          class=\"uk-radio-native\"\n          [name]=\"groupName\"\n          [value]=\"opt.value\"\n          [checked]=\"value() === opt.value\"\n          [disabled]=\"isDisabled() || !!opt.disabled\"\n          (change)=\"select(opt)\"\n        />\n        <span class=\"uk-radio-circle\">\n          @if (value() === opt.value) {\n            <span class=\"uk-radio-dot\"></span>\n          }\n        </span>\n        <span class=\"uk-radio-text\">{{ opt.label }}</span>\n      </label>\n    }\n  </div>\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-rg-wrapper{display:flex;flex-direction:column;gap:6px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-rg-options{display:flex;flex-direction:column;gap:10px}.uk-rg-options.horizontal{flex-direction:row;flex-wrap:wrap;gap:16px}.uk-radio-label{display:inline-flex;align-items:center;gap:10px;cursor:pointer;-webkit-user-select:none;user-select:none}.uk-radio-label.disabled{cursor:not-allowed;opacity:.5}.uk-radio-native{position:absolute;opacity:0;width:0;height:0}.uk-radio-circle{width:18px;height:18px;border:2px solid #d1d5db;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .15s;flex-shrink:0}.uk-radio-label.selected .uk-radio-circle{border-color:#6366f1}.uk-radio-dot{width:8px;height:8px;border-radius:50%;background:#6366f1;transition:all .15s}.uk-radio-text{font-size:.9375rem;color:#374151}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], options: [{
                type: Input
            }], direction: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], hint: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }] } });

class UkOtpInputComponent {
    label = '';
    length = 6;
    mask = false;
    required = false;
    disabled = false;
    separator = '';
    separatorAfter = 3;
    hint = '';
    errorMessage = '';
    completed = new EventEmitter();
    valueChange = new EventEmitter();
    inputRefs;
    digits = signal({}, ...(ngDevMode ? [{ debugName: "digits" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    focusedIndex = signal(-1, ...(ngDevMode ? [{ debugName: "focusedIndex" }] : /* istanbul ignore next */ []));
    get slots() { return Array.from({ length: this.length }, (_, i) => i); }
    onChange = (_) => { };
    onTouched = () => { };
    ngAfterViewInit() { }
    getOtpValue() {
        return this.slots.map(i => this.digits()[i] ?? '').join('');
    }
    focusInput(index) {
        const inputs = this.inputRefs?.toArray();
        if (inputs?.[index])
            inputs[index].nativeElement.focus();
    }
    onKeyDown(e, index) {
        if (e.key === 'Backspace') {
            if (!this.digits()[index]) {
                this.digits.update(d => { const n = { ...d }; delete n[index - 1]; return n; });
                this.focusInput(index - 1);
            }
            else {
                this.digits.update(d => { const n = { ...d }; delete n[index]; return n; });
            }
            this.emitChange();
            e.preventDefault();
        }
        else if (e.key === 'ArrowLeft') {
            this.focusInput(index - 1);
        }
        else if (e.key === 'ArrowRight') {
            this.focusInput(index + 1);
        }
    }
    onInput(e, index) {
        const input = e.target;
        const val = input.value.replace(/\D/g, '').slice(-1);
        input.value = val;
        if (val) {
            this.digits.update(d => ({ ...d, [index]: val }));
            if (index < this.length - 1)
                this.focusInput(index + 1);
        }
        this.emitChange();
    }
    onPaste(e) {
        e.preventDefault();
        const text = e.clipboardData?.getData('text') ?? '';
        const digits = text.replace(/\D/g, '').slice(0, this.length).split('');
        const map = {};
        digits.forEach((d, i) => { map[i] = d; });
        this.digits.set(map);
        this.focusInput(Math.min(digits.length, this.length - 1));
        this.emitChange();
    }
    emitChange() {
        const val = this.getOtpValue();
        this.onChange(val);
        this.valueChange.emit(val);
        if (val.length === this.length)
            this.completed.emit(val);
    }
    writeValue(val) {
        const map = {};
        (val ?? '').split('').slice(0, this.length).forEach((c, i) => { map[i] = c; });
        this.digits.set(map);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkOtpInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkOtpInputComponent, isStandalone: true, selector: "uk-otp-input", inputs: { label: "label", length: "length", mask: "mask", required: "required", disabled: "disabled", separator: "separator", separatorAfter: "separatorAfter", hint: "hint", errorMessage: "errorMessage" }, outputs: { completed: "completed", valueChange: "valueChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkOtpInputComponent),
                multi: true
            }], viewQueries: [{ propertyName: "inputRefs", predicate: ["otpInput"], descendants: true }], ngImport: i0, template: "<div class=\"uk-otp-wrapper\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-otp-boxes\" [class.error]=\"!!errorMessage\">\n    @for (i of slots; track i) {\n      <input\n        #otpInput\n        [type]=\"mask ? 'password' : 'text'\"\n        class=\"uk-otp-box\"\n        [value]=\"digits()[i] ?? ''\"\n        [disabled]=\"isDisabled()\"\n        maxlength=\"1\"\n        inputmode=\"numeric\"\n        autocomplete=\"one-time-code\"\n        (keydown)=\"onKeyDown($event, i)\"\n        (input)=\"onInput($event, i)\"\n        (paste)=\"onPaste($event)\"\n        (focus)=\"focusedIndex.set(i)\"\n      />\n      @if (separator && i < length - 1 && (i + 1) % separatorAfter === 0) {\n        <span class=\"uk-otp-sep\">{{ separator }}</span>\n      }\n    }\n  </div>\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-otp-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-otp-boxes{display:flex;align-items:center;gap:8px}.uk-otp-box{width:44px;height:52px;border:2px solid #d1d5db;border-radius:8px;text-align:center;font-size:1.375rem;font-weight:700;color:#111827;outline:none;transition:border-color .2s,box-shadow .2s;background:#fff}.uk-otp-box:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-otp-box:disabled{background:#f9fafb;cursor:not-allowed;color:#9ca3af}.uk-otp-boxes.error .uk-otp-box{border-color:#ef4444}.uk-otp-sep{font-size:1.25rem;color:#9ca3af;font-weight:600}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkOtpInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-otp-input', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkOtpInputComponent),
                            multi: true
                        }], template: "<div class=\"uk-otp-wrapper\">\n  @if (label) {\n    <label class=\"uk-label\">\n      {{ label }}\n      @if (required) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-otp-boxes\" [class.error]=\"!!errorMessage\">\n    @for (i of slots; track i) {\n      <input\n        #otpInput\n        [type]=\"mask ? 'password' : 'text'\"\n        class=\"uk-otp-box\"\n        [value]=\"digits()[i] ?? ''\"\n        [disabled]=\"isDisabled()\"\n        maxlength=\"1\"\n        inputmode=\"numeric\"\n        autocomplete=\"one-time-code\"\n        (keydown)=\"onKeyDown($event, i)\"\n        (input)=\"onInput($event, i)\"\n        (paste)=\"onPaste($event)\"\n        (focus)=\"focusedIndex.set(i)\"\n      />\n      @if (separator && i < length - 1 && (i + 1) % separatorAfter === 0) {\n        <span class=\"uk-otp-sep\">{{ separator }}</span>\n      }\n    }\n  </div>\n  @if (hint && !errorMessage) { <span class=\"uk-hint\">{{ hint }}</span> }\n  @if (errorMessage) { <span class=\"uk-error\">{{ errorMessage }}</span> }\n</div>\n", styles: [".uk-otp-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-otp-boxes{display:flex;align-items:center;gap:8px}.uk-otp-box{width:44px;height:52px;border:2px solid #d1d5db;border-radius:8px;text-align:center;font-size:1.375rem;font-weight:700;color:#111827;outline:none;transition:border-color .2s,box-shadow .2s;background:#fff}.uk-otp-box:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-otp-box:disabled{background:#f9fafb;cursor:not-allowed;color:#9ca3af}.uk-otp-boxes.error .uk-otp-box{border-color:#ef4444}.uk-otp-sep{font-size:1.25rem;color:#9ca3af;font-weight:600}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], length: [{
                type: Input
            }], mask: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], separator: [{
                type: Input
            }], separatorAfter: [{
                type: Input
            }], hint: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], completed: [{
                type: Output
            }], valueChange: [{
                type: Output
            }], inputRefs: [{
                type: ViewChildren,
                args: ['otpInput']
            }] } });

class UkRangeComponent {
    label = '';
    min = 0;
    max = 100;
    step = 1;
    range = false;
    showValue = true;
    showTicks = true;
    unit = '';
    required = false;
    disabled = false;
    hint = '';
    valueChange = new EventEmitter();
    value = signal(0, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    lowValue = signal(0, ...(ngDevMode ? [{ debugName: "lowValue" }] : /* istanbul ignore next */ []));
    highValue = signal(100, ...(ngDevMode ? [{ debugName: "highValue" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    valuePercent = computed(() => ((this.value() - this.min) / (this.max - this.min)) * 100, ...(ngDevMode ? [{ debugName: "valuePercent" }] : /* istanbul ignore next */ []));
    lowPercent = computed(() => ((this.lowValue() - this.min) / (this.max - this.min)) * 100, ...(ngDevMode ? [{ debugName: "lowPercent" }] : /* istanbul ignore next */ []));
    highPercent = computed(() => ((this.highValue() - this.min) / (this.max - this.min)) * 100, ...(ngDevMode ? [{ debugName: "highPercent" }] : /* istanbul ignore next */ []));
    onChange = (_) => { };
    onTouched = () => { };
    onInput(e) {
        const v = +e.target.value;
        this.value.set(v);
        this.onChange(v);
        this.valueChange.emit(v);
        this.onTouched();
    }
    onLowInput(e) {
        const v = Math.min(+e.target.value, this.highValue() - this.step);
        this.lowValue.set(v);
        this.emitRange();
    }
    onHighInput(e) {
        const v = Math.max(+e.target.value, this.lowValue() + this.step);
        this.highValue.set(v);
        this.emitRange();
    }
    emitRange() {
        const pair = [this.lowValue(), this.highValue()];
        this.onChange(pair);
        this.valueChange.emit(pair);
        this.onTouched();
    }
    writeValue(val) {
        if (Array.isArray(val)) {
            this.lowValue.set(val[0]);
            this.highValue.set(val[1]);
        }
        else {
            this.value.set(val ?? 0);
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkRangeComponent, isStandalone: true, selector: "uk-range", inputs: { label: "label", min: "min", max: "max", step: "step", range: "range", showValue: "showValue", showTicks: "showTicks", unit: "unit", required: "required", disabled: "disabled", hint: "hint" }, outputs: { valueChange: "valueChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkRangeComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-range-wrapper\">\n  @if (label) {\n    <div class=\"uk-range-header\">\n      <label class=\"uk-label\">\n        {{ label }}\n        @if (required) { <span class=\"uk-required\">*</span> }\n      </label>\n      @if (showValue) {\n        <span class=\"uk-range-val\">\n          @if (range) { {{ lowValue() }} \u2013 {{ highValue() }} }\n          @else { {{ value() }} }\n          @if (unit) { {{ unit }} }\n        </span>\n      }\n    </div>\n  }\n  <div class=\"uk-range-track-wrap\" [class.disabled]=\"isDisabled()\">\n    @if (range) {\n      <input\n        type=\"range\"\n        class=\"uk-range-input uk-range-low\"\n        [min]=\"min\" [max]=\"max\" [step]=\"step\"\n        [value]=\"lowValue()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onLowInput($event)\"\n      />\n      <input\n        type=\"range\"\n        class=\"uk-range-input uk-range-high\"\n        [min]=\"min\" [max]=\"max\" [step]=\"step\"\n        [value]=\"highValue()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onHighInput($event)\"\n      />\n      <div class=\"uk-range-track\">\n        <div class=\"uk-range-fill\" [style.left.%]=\"lowPercent()\" [style.width.%]=\"highPercent() - lowPercent()\"></div>\n      </div>\n    } @else {\n      <input\n        type=\"range\"\n        class=\"uk-range-input\"\n        [min]=\"min\" [max]=\"max\" [step]=\"step\"\n        [value]=\"value()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onInput($event)\"\n      />\n      <div class=\"uk-range-track\">\n        <div class=\"uk-range-fill\" [style.width.%]=\"valuePercent()\"></div>\n      </div>\n    }\n  </div>\n  @if (showTicks) {\n    <div class=\"uk-range-ticks\">\n      <span>{{ min }}</span>\n      <span>{{ max }}</span>\n    </div>\n  }\n  @if (hint) { <span class=\"uk-hint\">{{ hint }}</span> }\n</div>\n", styles: [".uk-range-wrapper{display:flex;flex-direction:column;gap:8px}.uk-range-header{display:flex;justify-content:space-between;align-items:center}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-range-val{font-size:.875rem;font-weight:600;color:#6366f1}.uk-range-track-wrap{position:relative;height:20px;display:flex;align-items:center}.uk-range-track{position:absolute;left:0;right:0;height:6px;background:#e5e7eb;border-radius:3px;pointer-events:none}.uk-range-fill{position:absolute;height:100%;background:#6366f1;border-radius:3px;transition:width .1s,left .1s}.uk-range-input{position:absolute;width:100%;height:6px;opacity:0;cursor:pointer;z-index:2;-webkit-appearance:none;appearance:none;margin:0}.uk-range-input:disabled{cursor:not-allowed}.uk-range-track-wrap:not(.disabled):after{content:\"\";position:absolute;left:0;right:0;height:18px;display:flex;align-items:center}.uk-range-ticks{display:flex;justify-content:space-between}.uk-range-ticks span{font-size:.75rem;color:#9ca3af}.uk-hint{font-size:.75rem;color:#6b7280}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-range', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkRangeComponent),
                            multi: true
                        }], template: "<div class=\"uk-range-wrapper\">\n  @if (label) {\n    <div class=\"uk-range-header\">\n      <label class=\"uk-label\">\n        {{ label }}\n        @if (required) { <span class=\"uk-required\">*</span> }\n      </label>\n      @if (showValue) {\n        <span class=\"uk-range-val\">\n          @if (range) { {{ lowValue() }} \u2013 {{ highValue() }} }\n          @else { {{ value() }} }\n          @if (unit) { {{ unit }} }\n        </span>\n      }\n    </div>\n  }\n  <div class=\"uk-range-track-wrap\" [class.disabled]=\"isDisabled()\">\n    @if (range) {\n      <input\n        type=\"range\"\n        class=\"uk-range-input uk-range-low\"\n        [min]=\"min\" [max]=\"max\" [step]=\"step\"\n        [value]=\"lowValue()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onLowInput($event)\"\n      />\n      <input\n        type=\"range\"\n        class=\"uk-range-input uk-range-high\"\n        [min]=\"min\" [max]=\"max\" [step]=\"step\"\n        [value]=\"highValue()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onHighInput($event)\"\n      />\n      <div class=\"uk-range-track\">\n        <div class=\"uk-range-fill\" [style.left.%]=\"lowPercent()\" [style.width.%]=\"highPercent() - lowPercent()\"></div>\n      </div>\n    } @else {\n      <input\n        type=\"range\"\n        class=\"uk-range-input\"\n        [min]=\"min\" [max]=\"max\" [step]=\"step\"\n        [value]=\"value()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onInput($event)\"\n      />\n      <div class=\"uk-range-track\">\n        <div class=\"uk-range-fill\" [style.width.%]=\"valuePercent()\"></div>\n      </div>\n    }\n  </div>\n  @if (showTicks) {\n    <div class=\"uk-range-ticks\">\n      <span>{{ min }}</span>\n      <span>{{ max }}</span>\n    </div>\n  }\n  @if (hint) { <span class=\"uk-hint\">{{ hint }}</span> }\n</div>\n", styles: [".uk-range-wrapper{display:flex;flex-direction:column;gap:8px}.uk-range-header{display:flex;justify-content:space-between;align-items:center}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-range-val{font-size:.875rem;font-weight:600;color:#6366f1}.uk-range-track-wrap{position:relative;height:20px;display:flex;align-items:center}.uk-range-track{position:absolute;left:0;right:0;height:6px;background:#e5e7eb;border-radius:3px;pointer-events:none}.uk-range-fill{position:absolute;height:100%;background:#6366f1;border-radius:3px;transition:width .1s,left .1s}.uk-range-input{position:absolute;width:100%;height:6px;opacity:0;cursor:pointer;z-index:2;-webkit-appearance:none;appearance:none;margin:0}.uk-range-input:disabled{cursor:not-allowed}.uk-range-track-wrap:not(.disabled):after{content:\"\";position:absolute;left:0;right:0;height:18px;display:flex;align-items:center}.uk-range-ticks{display:flex;justify-content:space-between}.uk-range-ticks span{font-size:.75rem;color:#9ca3af}.uk-hint{font-size:.75rem;color:#6b7280}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], range: [{
                type: Input
            }], showValue: [{
                type: Input
            }], showTicks: [{
                type: Input
            }], unit: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], hint: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class UkRatingComponent {
    label = '';
    max = 5;
    icon = 'star';
    allowHalf = false;
    readonly = false;
    disabled = false;
    showCount = false;
    hint = '';
    ratingChange = new EventEmitter();
    value = signal(0, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    hoverValue = signal(null, ...(ngDevMode ? [{ debugName: "hoverValue" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    get stars() { return Array.from({ length: this.max }, (_, i) => i + 1); }
    onChange = (_) => { };
    onTouched = () => { };
    rate(star) {
        if (this.isDisabled() || this.readonly)
            return;
        const v = this.value() === star ? 0 : star;
        this.value.set(v);
        this.onChange(v);
        this.ratingChange.emit(v);
        this.onTouched();
    }
    writeValue(val) { this.value.set(val ?? 0); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkRatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkRatingComponent, isStandalone: true, selector: "uk-rating", inputs: { label: "label", max: "max", icon: "icon", allowHalf: "allowHalf", readonly: "readonly", disabled: "disabled", showCount: "showCount", hint: "hint" }, outputs: { ratingChange: "ratingChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkRatingComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-rating-wrapper\">\n  @if (label) {\n    <label class=\"uk-label\">{{ label }}</label>\n  }\n  <div class=\"uk-rating-stars\" [class.disabled]=\"isDisabled()\" [class.readonly]=\"readonly\">\n    @for (star of stars; track star) {\n      <button\n        type=\"button\"\n        class=\"uk-star\"\n        [class.filled]=\"star <= (hoverValue() ?? value())\"\n        [class.half]=\"allowHalf && star - 0.5 === (hoverValue() ?? value())\"\n        [disabled]=\"isDisabled() || readonly\"\n        (click)=\"rate(star)\"\n        (mouseenter)=\"hoverValue.set(star)\"\n        (mouseleave)=\"hoverValue.set(null)\"\n      >\n        @if (icon === 'star') { \u2605 }\n        @else if (icon === 'heart') { \u2665 }\n        @else { {{ icon }} }\n      </button>\n    }\n    @if (showCount) {\n      <span class=\"uk-rating-count\">{{ value() }}/{{ max }}</span>\n    }\n  </div>\n  @if (hint) { <span class=\"uk-hint\">{{ hint }}</span> }\n</div>\n", styles: [".uk-rating-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-rating-stars{display:flex;align-items:center;gap:4px}.uk-star{background:none;border:none;cursor:pointer;padding:2px;font-size:1.75rem;line-height:1;color:#d1d5db;transition:color .15s,transform .15s}.uk-star.filled{color:#f59e0b}.uk-star:hover:not(:disabled){transform:scale(1.15)}.uk-rating-stars.disabled .uk-star,.uk-rating-stars.readonly .uk-star{cursor:not-allowed}.uk-rating-stars.readonly .uk-star{cursor:default}.uk-rating-count{font-size:.875rem;color:#6b7280;margin-left:8px}.uk-hint{font-size:.75rem;color:#6b7280}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkRatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-rating', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkRatingComponent),
                            multi: true
                        }], template: "<div class=\"uk-rating-wrapper\">\n  @if (label) {\n    <label class=\"uk-label\">{{ label }}</label>\n  }\n  <div class=\"uk-rating-stars\" [class.disabled]=\"isDisabled()\" [class.readonly]=\"readonly\">\n    @for (star of stars; track star) {\n      <button\n        type=\"button\"\n        class=\"uk-star\"\n        [class.filled]=\"star <= (hoverValue() ?? value())\"\n        [class.half]=\"allowHalf && star - 0.5 === (hoverValue() ?? value())\"\n        [disabled]=\"isDisabled() || readonly\"\n        (click)=\"rate(star)\"\n        (mouseenter)=\"hoverValue.set(star)\"\n        (mouseleave)=\"hoverValue.set(null)\"\n      >\n        @if (icon === 'star') { \u2605 }\n        @else if (icon === 'heart') { \u2665 }\n        @else { {{ icon }} }\n      </button>\n    }\n    @if (showCount) {\n      <span class=\"uk-rating-count\">{{ value() }}/{{ max }}</span>\n    }\n  </div>\n  @if (hint) { <span class=\"uk-hint\">{{ hint }}</span> }\n</div>\n", styles: [".uk-rating-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-rating-stars{display:flex;align-items:center;gap:4px}.uk-star{background:none;border:none;cursor:pointer;padding:2px;font-size:1.75rem;line-height:1;color:#d1d5db;transition:color .15s,transform .15s}.uk-star.filled{color:#f59e0b}.uk-star:hover:not(:disabled){transform:scale(1.15)}.uk-rating-stars.disabled .uk-star,.uk-rating-stars.readonly .uk-star{cursor:not-allowed}.uk-rating-stars.readonly .uk-star{cursor:default}.uk-rating-count{font-size:.875rem;color:#6b7280;margin-left:8px}.uk-hint{font-size:.75rem;color:#6b7280}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], max: [{
                type: Input
            }], icon: [{
                type: Input
            }], allowHalf: [{
                type: Input
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], showCount: [{
                type: Input
            }], hint: [{
                type: Input
            }], ratingChange: [{
                type: Output
            }] } });

class UkStepContentDirective {
    templateRef;
    stepIndex = 0;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkStepContentDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.9", type: UkStepContentDirective, isStandalone: true, selector: "[ukStepContent]", inputs: { stepIndex: ["ukStepContent", "stepIndex"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkStepContentDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ukStepContent]', standalone: true }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { stepIndex: [{
                type: Input,
                args: ['ukStepContent']
            }] } });
class UkStepperComponent {
    steps = [];
    direction = 'horizontal';
    showNavigation = true;
    allowNavigation = false;
    stepChange = new EventEmitter();
    finished = new EventEmitter();
    stepTemplates;
    currentStep = signal(0, ...(ngDevMode ? [{ debugName: "currentStep" }] : /* istanbul ignore next */ []));
    goTo(index) {
        this.currentStep.set(index);
        this.stepChange.emit(index);
    }
    next() {
        if (this.currentStep() < this.steps.length - 1) {
            this.currentStep.update(s => s + 1);
            this.stepChange.emit(this.currentStep());
        }
    }
    prev() {
        if (this.currentStep() > 0) {
            this.currentStep.update(s => s - 1);
            this.stepChange.emit(this.currentStep());
        }
    }
    finish() { this.finished.emit(); }
    reset() { this.currentStep.set(0); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkStepperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkStepperComponent, isStandalone: true, selector: "uk-stepper", inputs: { steps: "steps", direction: "direction", showNavigation: "showNavigation", allowNavigation: "allowNavigation" }, outputs: { stepChange: "stepChange", finished: "finished" }, queries: [{ propertyName: "stepTemplates", predicate: UkStepContentDirective }], ngImport: i0, template: "<div class=\"uk-stepper\" [class.vertical]=\"direction === 'vertical'\">\n  <!-- Step Headers -->\n  <div class=\"uk-stepper-header\">\n    @for (step of steps; track $index; let i = $index; let last = $last) {\n      <div\n        class=\"uk-step\"\n        [class.active]=\"currentStep() === i\"\n        [class.completed]=\"i < currentStep()\"\n        [class.clickable]=\"allowNavigation\"\n        (click)=\"allowNavigation ? goTo(i) : null\"\n      >\n        <div class=\"uk-step-indicator\">\n          <div class=\"uk-step-circle\">\n            @if (i < currentStep()) {\n              <span class=\"uk-step-check\">\u2713</span>\n            } @else if (step.icon && currentStep() !== i) {\n              <span>{{ step.icon }}</span>\n            } @else {\n              <span>{{ i + 1 }}</span>\n            }\n          </div>\n          @if (!last && direction !== 'vertical') {\n            <div class=\"uk-step-line\" [class.done]=\"i < currentStep()\"></div>\n          }\n        </div>\n        <div class=\"uk-step-info\">\n          <span class=\"uk-step-label\">{{ step.label }}</span>\n          @if (step.description) {\n            <span class=\"uk-step-desc\">{{ step.description }}</span>\n          }\n          @if (step.optional) {\n            <span class=\"uk-step-optional\">Optional</span>\n          }\n        </div>\n      </div>\n    }\n  </div>\n\n  <!-- Step Content -->\n  <div class=\"uk-stepper-content\">\n    <ng-content />\n    @for (tmpl of stepTemplates; track $index) {\n      @if (tmpl.stepIndex === currentStep()) {\n        <ng-container [ngTemplateOutlet]=\"tmpl.templateRef\" />\n      }\n    }\n  </div>\n\n  <!-- Navigation -->\n  @if (showNavigation) {\n    <div class=\"uk-stepper-nav\">\n      <button\n        type=\"button\"\n        class=\"uk-step-btn uk-step-btn-back\"\n        [disabled]=\"currentStep() === 0\"\n        (click)=\"prev()\"\n      >&#8592; Back</button>\n      <div class=\"uk-step-progress\">{{ currentStep() + 1 }} of {{ steps.length }}</div>\n      @if (currentStep() < steps.length - 1) {\n        <button type=\"button\" class=\"uk-step-btn uk-step-btn-next\" (click)=\"next()\">\n          Next &#8594;\n        </button>\n      } @else {\n        <button type=\"button\" class=\"uk-step-btn uk-step-btn-finish\" (click)=\"finish()\">\n          Finish &#10003;\n        </button>\n      }\n    </div>\n  }\n</div>\n", styles: [".uk-stepper{display:flex;flex-direction:column;gap:24px}.uk-stepper-header{display:flex;align-items:flex-start;gap:0;overflow-x:auto}.uk-stepper.vertical .uk-stepper-header{flex-direction:column}.uk-step{display:flex;flex-direction:column;align-items:center;flex:1;min-width:80px}.uk-step.clickable{cursor:pointer}.uk-stepper.vertical .uk-step{flex-direction:row;gap:12px;flex:unset;align-items:flex-start;padding-bottom:16px}.uk-step-indicator{display:flex;flex-direction:column;align-items:center;width:100%}.uk-stepper.vertical .uk-step-indicator{flex-direction:column;width:auto}.uk-step-circle{width:36px;height:36px;border-radius:50%;border:2px solid #d1d5db;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:700;color:#9ca3af;background:#fff;transition:all .25s;flex-shrink:0;z-index:1}.uk-step.active .uk-step-circle{border-color:#6366f1;color:#6366f1;background:#ede9fe}.uk-step.completed .uk-step-circle{border-color:#6366f1;background:#6366f1;color:#fff}.uk-step-check{font-size:.875rem}.uk-step-line{flex:1;height:2px;background:#e5e7eb;width:100%;margin-top:-19px;transition:background .25s}.uk-step-line.done{background:#6366f1}.uk-step-info{display:flex;flex-direction:column;align-items:center;gap:2px;padding-top:8px}.uk-stepper.vertical .uk-step-info{align-items:flex-start;padding-top:6px}.uk-step-label{font-size:.8125rem;font-weight:600;color:#9ca3af;white-space:nowrap;transition:color .2s}.uk-step.active .uk-step-label{color:#6366f1}.uk-step.completed .uk-step-label{color:#374151}.uk-step-desc{font-size:.75rem;color:#9ca3af}.uk-step-optional{font-size:.6875rem;color:#9ca3af;font-style:italic}.uk-stepper-content{background:#fff;border:1.5px solid #e5e7eb;border-radius:10px;padding:24px;min-height:120px}.uk-stepper-nav{display:flex;align-items:center;justify-content:space-between;padding-top:8px}.uk-step-progress{font-size:.875rem;color:#9ca3af}.uk-step-btn{border:none;border-radius:8px;padding:.5rem 1.25rem;font-size:.9375rem;font-weight:600;cursor:pointer;transition:all .15s}.uk-step-btn:disabled{opacity:.4;cursor:not-allowed}.uk-step-btn-back{background:#f3f4f6;color:#374151}.uk-step-btn-back:hover:not(:disabled){background:#e5e7eb}.uk-step-btn-next{background:#6366f1;color:#fff}.uk-step-btn-next:hover{background:#4f46e5}.uk-step-btn-finish{background:#10b981;color:#fff}.uk-step-btn-finish:hover{background:#059669}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkStepperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-stepper', standalone: true, imports: [CommonModule, UkStepContentDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"uk-stepper\" [class.vertical]=\"direction === 'vertical'\">\n  <!-- Step Headers -->\n  <div class=\"uk-stepper-header\">\n    @for (step of steps; track $index; let i = $index; let last = $last) {\n      <div\n        class=\"uk-step\"\n        [class.active]=\"currentStep() === i\"\n        [class.completed]=\"i < currentStep()\"\n        [class.clickable]=\"allowNavigation\"\n        (click)=\"allowNavigation ? goTo(i) : null\"\n      >\n        <div class=\"uk-step-indicator\">\n          <div class=\"uk-step-circle\">\n            @if (i < currentStep()) {\n              <span class=\"uk-step-check\">\u2713</span>\n            } @else if (step.icon && currentStep() !== i) {\n              <span>{{ step.icon }}</span>\n            } @else {\n              <span>{{ i + 1 }}</span>\n            }\n          </div>\n          @if (!last && direction !== 'vertical') {\n            <div class=\"uk-step-line\" [class.done]=\"i < currentStep()\"></div>\n          }\n        </div>\n        <div class=\"uk-step-info\">\n          <span class=\"uk-step-label\">{{ step.label }}</span>\n          @if (step.description) {\n            <span class=\"uk-step-desc\">{{ step.description }}</span>\n          }\n          @if (step.optional) {\n            <span class=\"uk-step-optional\">Optional</span>\n          }\n        </div>\n      </div>\n    }\n  </div>\n\n  <!-- Step Content -->\n  <div class=\"uk-stepper-content\">\n    <ng-content />\n    @for (tmpl of stepTemplates; track $index) {\n      @if (tmpl.stepIndex === currentStep()) {\n        <ng-container [ngTemplateOutlet]=\"tmpl.templateRef\" />\n      }\n    }\n  </div>\n\n  <!-- Navigation -->\n  @if (showNavigation) {\n    <div class=\"uk-stepper-nav\">\n      <button\n        type=\"button\"\n        class=\"uk-step-btn uk-step-btn-back\"\n        [disabled]=\"currentStep() === 0\"\n        (click)=\"prev()\"\n      >&#8592; Back</button>\n      <div class=\"uk-step-progress\">{{ currentStep() + 1 }} of {{ steps.length }}</div>\n      @if (currentStep() < steps.length - 1) {\n        <button type=\"button\" class=\"uk-step-btn uk-step-btn-next\" (click)=\"next()\">\n          Next &#8594;\n        </button>\n      } @else {\n        <button type=\"button\" class=\"uk-step-btn uk-step-btn-finish\" (click)=\"finish()\">\n          Finish &#10003;\n        </button>\n      }\n    </div>\n  }\n</div>\n", styles: [".uk-stepper{display:flex;flex-direction:column;gap:24px}.uk-stepper-header{display:flex;align-items:flex-start;gap:0;overflow-x:auto}.uk-stepper.vertical .uk-stepper-header{flex-direction:column}.uk-step{display:flex;flex-direction:column;align-items:center;flex:1;min-width:80px}.uk-step.clickable{cursor:pointer}.uk-stepper.vertical .uk-step{flex-direction:row;gap:12px;flex:unset;align-items:flex-start;padding-bottom:16px}.uk-step-indicator{display:flex;flex-direction:column;align-items:center;width:100%}.uk-stepper.vertical .uk-step-indicator{flex-direction:column;width:auto}.uk-step-circle{width:36px;height:36px;border-radius:50%;border:2px solid #d1d5db;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:700;color:#9ca3af;background:#fff;transition:all .25s;flex-shrink:0;z-index:1}.uk-step.active .uk-step-circle{border-color:#6366f1;color:#6366f1;background:#ede9fe}.uk-step.completed .uk-step-circle{border-color:#6366f1;background:#6366f1;color:#fff}.uk-step-check{font-size:.875rem}.uk-step-line{flex:1;height:2px;background:#e5e7eb;width:100%;margin-top:-19px;transition:background .25s}.uk-step-line.done{background:#6366f1}.uk-step-info{display:flex;flex-direction:column;align-items:center;gap:2px;padding-top:8px}.uk-stepper.vertical .uk-step-info{align-items:flex-start;padding-top:6px}.uk-step-label{font-size:.8125rem;font-weight:600;color:#9ca3af;white-space:nowrap;transition:color .2s}.uk-step.active .uk-step-label{color:#6366f1}.uk-step.completed .uk-step-label{color:#374151}.uk-step-desc{font-size:.75rem;color:#9ca3af}.uk-step-optional{font-size:.6875rem;color:#9ca3af;font-style:italic}.uk-stepper-content{background:#fff;border:1.5px solid #e5e7eb;border-radius:10px;padding:24px;min-height:120px}.uk-stepper-nav{display:flex;align-items:center;justify-content:space-between;padding-top:8px}.uk-step-progress{font-size:.875rem;color:#9ca3af}.uk-step-btn{border:none;border-radius:8px;padding:.5rem 1.25rem;font-size:.9375rem;font-weight:600;cursor:pointer;transition:all .15s}.uk-step-btn:disabled{opacity:.4;cursor:not-allowed}.uk-step-btn-back{background:#f3f4f6;color:#374151}.uk-step-btn-back:hover:not(:disabled){background:#e5e7eb}.uk-step-btn-next{background:#6366f1;color:#fff}.uk-step-btn-next:hover{background:#4f46e5}.uk-step-btn-finish{background:#10b981;color:#fff}.uk-step-btn-finish:hover{background:#059669}\n"] }]
        }], propDecorators: { steps: [{
                type: Input
            }], direction: [{
                type: Input
            }], showNavigation: [{
                type: Input
            }], allowNavigation: [{
                type: Input
            }], stepChange: [{
                type: Output
            }], finished: [{
                type: Output
            }], stepTemplates: [{
                type: ContentChildren,
                args: [UkStepContentDirective]
            }] } });

class UkDynamicFormComponent {
    fb;
    fields = [];
    columns = 1;
    showActions = true;
    showReset = true;
    submitLabel = 'Submit';
    resetLabel = 'Reset';
    actionsAlign = 'right';
    initialValues = {};
    formSubmit = new EventEmitter();
    formChange = new EventEmitter();
    formReset = new EventEmitter();
    form;
    submitting = signal(false, ...(ngDevMode ? [{ debugName: "submitting" }] : /* istanbul ignore next */ []));
    sortedFields = computed(() => [...this.fields].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)), ...(ngDevMode ? [{ debugName: "sortedFields" }] : /* istanbul ignore next */ []));
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() { this.buildForm(); }
    ngOnChanges(changes) {
        if (changes['fields'] && !changes['fields'].firstChange)
            this.buildForm();
        if (changes['initialValues'] && this.form)
            this.form.patchValue(this.initialValues);
    }
    buildForm() {
        const controls = {};
        for (const field of this.fields) {
            const validators = [];
            if (field.required)
                validators.push(Validators.required);
            for (const v of field.validators ?? []) {
                const vfn = this.toValidator(v);
                if (vfn)
                    validators.push(vfn);
            }
            const def = this.initialValues[field.key] ?? field.defaultValue ?? (field.type === 'checkbox' ? false :
                field.type === 'multiselect' ? [] :
                    field.type === 'rating' ? 0 :
                        field.type === 'range' ? (field.min ?? 0) : '');
            controls[field.key] = [{ value: def, disabled: !!field.disabled }, validators];
        }
        this.form = this.fb.group(controls);
        this.form.valueChanges.subscribe(v => this.formChange.emit(v));
    }
    toValidator(v) {
        switch (v.type) {
            case 'required': return Validators.required;
            case 'email': return Validators.email;
            case 'minLength': return Validators.minLength(v.value);
            case 'maxLength': return Validators.maxLength(v.value);
            case 'min': return Validators.min(v.value);
            case 'max': return Validators.max(v.value);
            case 'pattern': return Validators.pattern(v.value);
            default: return null;
        }
    }
    getError(key) {
        const ctrl = this.form?.get(key);
        if (!ctrl || !ctrl.touched || !ctrl.errors)
            return '';
        const field = this.fields.find(f => f.key === key);
        const errors = ctrl.errors;
        if (errors['required'])
            return `${field?.label || key} is required`;
        if (errors['email'])
            return 'Please enter a valid email';
        if (errors['minlength'])
            return `Minimum ${errors['minlength'].requiredLength} characters required`;
        if (errors['maxlength'])
            return `Maximum ${errors['maxlength'].requiredLength} characters allowed`;
        if (errors['min'])
            return `Minimum value is ${errors['min'].min}`;
        if (errors['max'])
            return `Maximum value is ${errors['max'].max}`;
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
    setSubmitting(v) { this.submitting.set(v); }
    patchValues(v) { this.form.patchValue(v); }
    getValue() { return this.form.getRawValue(); }
    isValid() { return this.form.valid; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDynamicFormComponent, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkDynamicFormComponent, isStandalone: true, selector: "uk-dynamic-form", inputs: { fields: "fields", columns: "columns", showActions: "showActions", showReset: "showReset", submitLabel: "submitLabel", resetLabel: "resetLabel", actionsAlign: "actionsAlign", initialValues: "initialValues" }, outputs: { formSubmit: "formSubmit", formChange: "formChange", formReset: "formReset" }, usesOnChanges: true, ngImport: i0, template: "<form class=\"uk-dform\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"uk-dform-grid\" [class.two-col]=\"columns === 2\" [class.three-col]=\"columns === 3\">\n    @for (field of sortedFields(); track field.key) {\n      @if (!field.hidden) {\n        <div class=\"uk-dform-field\" [class]=\"field.class ?? ''\" [style.grid-column]=\"field.fullWidth ? '1 / -1' : null\">\n          @switch (field.type) {\n            @case ('input') {\n              <uk-input\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? ''\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('textarea') {\n              <uk-textarea\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? ''\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [rows]=\"field.rows ?? 4\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('select') {\n              <uk-select\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select'\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [searchable]=\"true\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('multiselect') {\n              <uk-multi-select\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select options'\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('checkbox') {\n              <uk-checkbox\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('radio') {\n              <uk-radio-group\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('date-range') {\n              <uk-date-range-picker\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select date range'\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('otp') {\n              <uk-otp-input\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [length]=\"field.otpLength ?? 6\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('range') {\n              <uk-range\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [min]=\"field.min ?? 0\"\n                [max]=\"field.max ?? 100\"\n                [step]=\"field.step ?? 1\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n              />\n            }\n            @case ('rating') {\n              <uk-rating\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n              />\n            }\n            @case ('timepicker') {\n              <uk-timepicker\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n          }\n        </div>\n      }\n    }\n  </div>\n\n  @if (showActions) {\n    <div class=\"uk-dform-actions\" [class]=\"actionsAlign\">\n      @if (showReset) {\n        <button type=\"button\" class=\"uk-dform-btn uk-dform-btn-reset\" (click)=\"onReset()\">\n          {{ resetLabel }}\n        </button>\n      }\n      <button type=\"submit\" class=\"uk-dform-btn uk-dform-btn-submit\" [disabled]=\"submitting()\">\n        @if (submitting()) { <span class=\"uk-dform-spinner\"></span> }\n        {{ submitLabel }}\n      </button>\n    </div>\n  }\n</form>\n", styles: [".uk-dform{display:flex;flex-direction:column;gap:20px}.uk-dform-grid{display:grid;grid-template-columns:1fr;gap:20px}.uk-dform-grid.two-col{grid-template-columns:repeat(2,1fr)}.uk-dform-grid.three-col{grid-template-columns:repeat(3,1fr)}@media(max-width:640px){.uk-dform-grid.two-col,.uk-dform-grid.three-col{grid-template-columns:1fr}}.uk-dform-actions{display:flex;gap:12px;padding-top:8px}.uk-dform-actions.center{justify-content:center}.uk-dform-actions.right{justify-content:flex-end}.uk-dform-actions.left{justify-content:flex-start}.uk-dform-btn{border:none;border-radius:8px;padding:.5625rem 1.5rem;font-size:.9375rem;font-weight:600;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:8px}.uk-dform-btn-submit{background:#6366f1;color:#fff}.uk-dform-btn-submit:hover:not(:disabled){background:#4f46e5}.uk-dform-btn-submit:disabled{background:#c7d2fe;cursor:not-allowed}.uk-dform-btn-reset{background:#f3f4f6;color:#374151}.uk-dform-btn-reset:hover{background:#e5e7eb}.uk-dform-spinner{width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:uk-spin .6s linear infinite}@keyframes uk-spin{to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: UkInputComponent, selector: "uk-input", inputs: ["label", "placeholder", "type", "size", "required", "disabled", "readonly", "clearable", "prefixIcon", "suffixIcon", "hint", "errorMessage", "maxlength", "minlength", "autocomplete", "id"], outputs: ["valueChange", "cleared"] }, { kind: "component", type: UkTextareaComponent, selector: "uk-textarea", inputs: ["label", "placeholder", "size", "rows", "required", "disabled", "readonly", "resizable", "hint", "errorMessage", "maxlength"], outputs: ["valueChange"] }, { kind: "component", type: UkSelectComponent, selector: "uk-select", inputs: ["label", "placeholder", "options", "size", "required", "disabled", "searchable", "hint", "errorMessage"], outputs: ["selectionChange"] }, { kind: "component", type: UkMultiSelectComponent, selector: "uk-multi-select", inputs: ["label", "placeholder", "options", "size", "required", "disabled", "showSelectAll", "hint", "errorMessage"], outputs: ["selectionChange"] }, { kind: "component", type: UkCheckboxComponent, selector: "uk-checkbox", inputs: ["label", "required", "disabled", "indeterminate", "hint", "errorMessage"], outputs: ["checkedChange"] }, { kind: "component", type: UkRadioGroupComponent, selector: "uk-radio-group", inputs: ["label", "options", "direction", "required", "disabled", "hint", "errorMessage"], outputs: ["selectionChange"] }, { kind: "component", type: UkDateRangePickerComponent, selector: "uk-date-range-picker", inputs: ["label", "placeholder", "required", "disabled", "minDate", "maxDate", "showPresets", "errorMessage", "format"], outputs: ["rangeChange"] }, { kind: "component", type: UkOtpInputComponent, selector: "uk-otp-input", inputs: ["label", "length", "mask", "required", "disabled", "separator", "separatorAfter", "hint", "errorMessage"], outputs: ["completed", "valueChange"] }, { kind: "component", type: UkRangeComponent, selector: "uk-range", inputs: ["label", "min", "max", "step", "range", "showValue", "showTicks", "unit", "required", "disabled", "hint"], outputs: ["valueChange"] }, { kind: "component", type: UkRatingComponent, selector: "uk-rating", inputs: ["label", "max", "icon", "allowHalf", "readonly", "disabled", "showCount", "hint"], outputs: ["ratingChange"] }, { kind: "component", type: UkTimepickerComponent, selector: "uk-timepicker", inputs: ["label", "use24Hour", "showSeconds", "required", "disabled", "hint", "errorMessage"], outputs: ["timeChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDynamicFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-dynamic-form', standalone: true, imports: [
                        CommonModule, ReactiveFormsModule,
                        UkInputComponent, UkTextareaComponent, UkSelectComponent,
                        UkMultiSelectComponent, UkCheckboxComponent, UkRadioGroupComponent,
                        UkDateRangePickerComponent, UkOtpInputComponent, UkRangeComponent,
                        UkRatingComponent, UkTimepickerComponent
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<form class=\"uk-dform\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"uk-dform-grid\" [class.two-col]=\"columns === 2\" [class.three-col]=\"columns === 3\">\n    @for (field of sortedFields(); track field.key) {\n      @if (!field.hidden) {\n        <div class=\"uk-dform-field\" [class]=\"field.class ?? ''\" [style.grid-column]=\"field.fullWidth ? '1 / -1' : null\">\n          @switch (field.type) {\n            @case ('input') {\n              <uk-input\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? ''\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('textarea') {\n              <uk-textarea\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? ''\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [rows]=\"field.rows ?? 4\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('select') {\n              <uk-select\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select'\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [searchable]=\"true\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('multiselect') {\n              <uk-multi-select\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select options'\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('checkbox') {\n              <uk-checkbox\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('radio') {\n              <uk-radio-group\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('date-range') {\n              <uk-date-range-picker\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select date range'\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('otp') {\n              <uk-otp-input\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [length]=\"field.otpLength ?? 6\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('range') {\n              <uk-range\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [min]=\"field.min ?? 0\"\n                [max]=\"field.max ?? 100\"\n                [step]=\"field.step ?? 1\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n              />\n            }\n            @case ('rating') {\n              <uk-rating\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n              />\n            }\n            @case ('timepicker') {\n              <uk-timepicker\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [required]=\"!!field.required\"\n                [disabled]=\"!!field.disabled\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n          }\n        </div>\n      }\n    }\n  </div>\n\n  @if (showActions) {\n    <div class=\"uk-dform-actions\" [class]=\"actionsAlign\">\n      @if (showReset) {\n        <button type=\"button\" class=\"uk-dform-btn uk-dform-btn-reset\" (click)=\"onReset()\">\n          {{ resetLabel }}\n        </button>\n      }\n      <button type=\"submit\" class=\"uk-dform-btn uk-dform-btn-submit\" [disabled]=\"submitting()\">\n        @if (submitting()) { <span class=\"uk-dform-spinner\"></span> }\n        {{ submitLabel }}\n      </button>\n    </div>\n  }\n</form>\n", styles: [".uk-dform{display:flex;flex-direction:column;gap:20px}.uk-dform-grid{display:grid;grid-template-columns:1fr;gap:20px}.uk-dform-grid.two-col{grid-template-columns:repeat(2,1fr)}.uk-dform-grid.three-col{grid-template-columns:repeat(3,1fr)}@media(max-width:640px){.uk-dform-grid.two-col,.uk-dform-grid.three-col{grid-template-columns:1fr}}.uk-dform-actions{display:flex;gap:12px;padding-top:8px}.uk-dform-actions.center{justify-content:center}.uk-dform-actions.right{justify-content:flex-end}.uk-dform-actions.left{justify-content:flex-start}.uk-dform-btn{border:none;border-radius:8px;padding:.5625rem 1.5rem;font-size:.9375rem;font-weight:600;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:8px}.uk-dform-btn-submit{background:#6366f1;color:#fff}.uk-dform-btn-submit:hover:not(:disabled){background:#4f46e5}.uk-dform-btn-submit:disabled{background:#c7d2fe;cursor:not-allowed}.uk-dform-btn-reset{background:#f3f4f6;color:#374151}.uk-dform-btn-reset:hover{background:#e5e7eb}.uk-dform-spinner{width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:uk-spin .6s linear infinite}@keyframes uk-spin{to{transform:rotate(360deg)}}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }], propDecorators: { fields: [{
                type: Input
            }], columns: [{
                type: Input
            }], showActions: [{
                type: Input
            }], showReset: [{
                type: Input
            }], submitLabel: [{
                type: Input
            }], resetLabel: [{
                type: Input
            }], actionsAlign: [{
                type: Input
            }], initialValues: [{
                type: Input
            }], formSubmit: [{
                type: Output
            }], formChange: [{
                type: Output
            }], formReset: [{
                type: Output
            }] } });

class UkDynamicTableComponent {
    data = [];
    config = { columns: [] };
    loading = false;
    rowKey = (_, i) => i;
    rowClickable = false;
    searchPlaceholder = 'Search...';
    toolbarActions = [];
    rowClick = new EventEmitter();
    selectionChange = new EventEmitter();
    sortChange = new EventEmitter();
    pageChange = new EventEmitter();
    Math = Math;
    searchQuery = signal('', ...(ngDevMode ? [{ debugName: "searchQuery" }] : /* istanbul ignore next */ []));
    sortKey = signal(null, ...(ngDevMode ? [{ debugName: "sortKey" }] : /* istanbul ignore next */ []));
    sortDir = signal(null, ...(ngDevMode ? [{ debugName: "sortDir" }] : /* istanbul ignore next */ []));
    currentPage = signal(1, ...(ngDevMode ? [{ debugName: "currentPage" }] : /* istanbul ignore next */ []));
    pageSize = signal(this.config.pageSize ?? 10, ...(ngDevMode ? [{ debugName: "pageSize" }] : /* istanbul ignore next */ []));
    selectedRows = signal([], ...(ngDevMode ? [{ debugName: "selectedRows" }] : /* istanbul ignore next */ []));
    _loading = signal(false, ...(ngDevMode ? [{ debugName: "_loading" }] : /* istanbul ignore next */ []));
    ngOnChanges(changes) {
        if (changes['loading'])
            this._loading.set(this.loading);
        if (changes['config'])
            this.pageSize.set(this.config.pageSize ?? 10);
        if (changes['data']) {
            this.currentPage.set(1);
            this.clearSelection();
        }
    }
    filteredData = computed(() => {
        const q = this.searchQuery().toLowerCase();
        let d = q
            ? this.data.filter(row => this.config.columns.some(col => {
                const v = this.getCellValue(row, col);
                return v != null && String(v).toLowerCase().includes(q);
            }))
            : [...this.data];
        const key = this.sortKey();
        const dir = this.sortDir();
        if (key && dir) {
            d = d.slice().sort((a, b) => {
                const av = a[key];
                const bv = b[key];
                if (av == null)
                    return 1;
                if (bv == null)
                    return -1;
                return dir === 'asc' ? (av < bv ? -1 : av > bv ? 1 : 0) : (av > bv ? -1 : av < bv ? 1 : 0);
            });
        }
        return d;
    }, ...(ngDevMode ? [{ debugName: "filteredData" }] : /* istanbul ignore next */ []));
    totalPages = computed(() => Math.max(1, Math.ceil(this.filteredData().length / this.pageSize())), ...(ngDevMode ? [{ debugName: "totalPages" }] : /* istanbul ignore next */ []));
    pagedData = computed(() => {
        if (!this.config.paginate)
            return this.filteredData();
        const start = (this.currentPage() - 1) * this.pageSize();
        return this.filteredData().slice(start, start + this.pageSize());
    }, ...(ngDevMode ? [{ debugName: "pagedData" }] : /* istanbul ignore next */ []));
    allSelected = computed(() => this.pagedData().length > 0 && this.pagedData().every(r => this.isSelected(r)), ...(ngDevMode ? [{ debugName: "allSelected" }] : /* istanbul ignore next */ []));
    someSelected = computed(() => this.pagedData().some(r => this.isSelected(r)) && !this.allSelected(), ...(ngDevMode ? [{ debugName: "someSelected" }] : /* istanbul ignore next */ []));
    pageNumbers = computed(() => {
        const total = this.totalPages();
        const current = this.currentPage();
        if (total <= 7)
            return Array.from({ length: total }, (_, i) => i + 1);
        const pages = [1];
        if (current > 3)
            pages.push(-1);
        for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++)
            pages.push(i);
        if (current < total - 2)
            pages.push(-1);
        pages.push(total);
        return pages;
    }, ...(ngDevMode ? [{ debugName: "pageNumbers" }] : /* istanbul ignore next */ []));
    getCellValue(row, col) {
        const key = col.key;
        return key.split('.').reduce((o, k) => o?.[k], row);
    }
    getBadgeClass(col, val) {
        return col.badgeMap?.[String(val)] ?? 'uk-badge-neutral';
    }
    formatDate(val) {
        if (!val)
            return '';
        const d = val instanceof Date ? val : new Date(val);
        return isNaN(d.getTime()) ? String(val) : d.toLocaleDateString();
    }
    onSearch(e) {
        this.searchQuery.set(e.target.value);
        this.currentPage.set(1);
    }
    clearSearch() {
        this.searchQuery.set('');
        this.currentPage.set(1);
    }
    sortByCol(col) { this.sort(String(col.key)); }
    isLoading() { return this._loading(); }
    sort(key) {
        if (this.sortKey() === key) {
            if (this.sortDir() === 'asc')
                this.sortDir.set('desc');
            else if (this.sortDir() === 'desc') {
                this.sortKey.set(null);
                this.sortDir.set(null);
            }
            else
                this.sortDir.set('asc');
        }
        else {
            this.sortKey.set(key);
            this.sortDir.set('asc');
        }
        this.sortChange.emit({ key, dir: this.sortDir() });
        this.currentPage.set(1);
    }
    isSelected(row) { return this.selectedRows().some(r => r === row); }
    toggleRow(row) {
        const sel = this.selectedRows();
        const next = this.isSelected(row) ? sel.filter(r => r !== row) : [...sel, row];
        this.selectedRows.set(next);
        this.selectionChange.emit(next);
    }
    toggleAll() {
        if (this.allSelected()) {
            this.clearSelection();
        }
        else {
            this.selectedRows.set([...this.pagedData()]);
            this.selectionChange.emit(this.selectedRows());
        }
    }
    clearSelection() {
        this.selectedRows.set([]);
        this.selectionChange.emit([]);
    }
    onRowClick(row) { this.rowClick.emit(row); }
    goToPage(p) {
        this.currentPage.set(Math.max(1, Math.min(p, this.totalPages())));
        this.pageChange.emit(this.currentPage());
    }
    nextPage() { this.goToPage(this.currentPage() + 1); }
    prevPage() { this.goToPage(this.currentPage() - 1); }
    onPageSizeChange(e) {
        this.pageSize.set(+e.target.value);
        this.currentPage.set(1);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDynamicTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkDynamicTableComponent, isStandalone: true, selector: "uk-dynamic-table", inputs: { data: "data", config: "config", loading: "loading", rowKey: "rowKey", rowClickable: "rowClickable", searchPlaceholder: "searchPlaceholder", toolbarActions: "toolbarActions" }, outputs: { rowClick: "rowClick", selectionChange: "selectionChange", sortChange: "sortChange", pageChange: "pageChange" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"uk-table-container\">\n  @if (config.searchable || toolbarActions.length > 0) {\n    <div class=\"uk-table-toolbar\">\n      @if (config.searchable) {\n        <div class=\"uk-table-search\">\n          <span class=\"uk-table-search-icon\">&#128269;</span>\n          <input\n            type=\"text\"\n            class=\"uk-table-search-input\"\n            [placeholder]=\"searchPlaceholder\"\n            [value]=\"searchQuery()\"\n            (input)=\"onSearch($event)\"\n          />\n          @if (searchQuery()) {\n            <button class=\"uk-table-search-clear\" (click)=\"clearSearch()\">&#x2715;</button>\n          }\n        </div>\n      }\n      <div class=\"uk-table-toolbar-actions\">\n        <ng-content select=\"[ukTableActions]\" />\n      </div>\n      @if (config.selectable && selectedRows().length > 0) {\n        <div class=\"uk-table-selection-info\">\n          {{ selectedRows().length }} selected\n          <button class=\"uk-table-clear-sel\" (click)=\"clearSelection()\">Clear</button>\n        </div>\n      }\n    </div>\n  }\n\n  <div class=\"uk-table-scroll\">\n    <table class=\"uk-table\" [class.striped]=\"config.striped\" [class.sticky-header]=\"config.stickyHeader\">\n      <thead>\n        <tr>\n          @if (config.selectable) {\n            <th class=\"uk-th uk-th-check\">\n              <span class=\"uk-check-box\" [class.checked]=\"allSelected()\" (click)=\"toggleAll()\">\n                @if (allSelected()) { \u2713 } @else if (someSelected()) { \u2014 }\n              </span>\n            </th>\n          }\n          @for (col of config.columns; track col.key) {\n            <th\n              class=\"uk-th\"\n              [class.sortable]=\"col.sortable\"\n              [class.sorted-asc]=\"sortKey() === col.key && sortDir() === 'asc'\"\n              [class.sorted-desc]=\"sortKey() === col.key && sortDir() === 'desc'\"\n              [style.width]=\"col.width ?? null\"\n              [style.text-align]=\"col.align ?? 'left'\"\n              (click)=\"col.sortable && sortByCol(col)\"\n            >\n              {{ col.header }}\n              @if (col.sortable) {\n                <span class=\"uk-sort-icon\">\n                  {{ sortKey() === col.key ? (sortDir() === 'asc' ? '\u2191' : '\u2193') : '\u21C5' }}\n                </span>\n              }\n            </th>\n          }\n        </tr>\n      </thead>\n      <tbody>\n        @if (isLoading()) {\n          <tr>\n            <td [attr.colspan]=\"config.columns.length + (config.selectable ? 1 : 0)\" class=\"uk-td-center\">\n              <div class=\"uk-table-loading\">\n                <div class=\"uk-spinner\"></div>\n                <span>Loading...</span>\n              </div>\n            </td>\n          </tr>\n        } @else if (pagedData().length === 0) {\n          <tr>\n            <td [attr.colspan]=\"config.columns.length + (config.selectable ? 1 : 0)\" class=\"uk-td-center uk-td-empty\">\n              {{ config.emptyText ?? 'No data available' }}\n            </td>\n          </tr>\n        } @else {\n          @for (row of pagedData(); track rowKey(row, $index)) {\n            <tr\n              class=\"uk-tr\"\n              [class.selected]=\"isSelected(row)\"\n              [class.clickable]=\"rowClickable\"\n              (click)=\"onRowClick(row)\"\n            >\n              @if (config.selectable) {\n                <td class=\"uk-td uk-td-check\" (click)=\"$event.stopPropagation(); toggleRow(row)\">\n                  <span class=\"uk-check-box\" [class.checked]=\"isSelected(row)\">\n                    @if (isSelected(row)) { \u2713 }\n                  </span>\n                </td>\n              }\n              @for (col of config.columns; track col.key) {\n                <td class=\"uk-td\" [style.text-align]=\"col.align ?? 'left'\">\n                  @switch (col.type) {\n                    @case ('boolean') {\n                      <span class=\"uk-badge\" [class.uk-badge-success]=\"getCellValue(row, col)\" [class.uk-badge-neutral]=\"!getCellValue(row, col)\">\n                        {{ getCellValue(row, col) ? 'Yes' : 'No' }}\n                      </span>\n                    }\n                    @case ('badge') {\n                      <span class=\"uk-badge\" [class]=\"getBadgeClass(col, getCellValue(row, col))\">\n                        {{ getCellValue(row, col) }}\n                      </span>\n                    }\n                    @case ('date') {\n                      {{ formatDate(getCellValue(row, col)) }}\n                    }\n                    @case ('actions') {\n                      <div class=\"uk-td-actions\">\n                        <ng-container *ngTemplateOutlet=\"$any(col.cellTemplate); context: { $implicit: row }\" />\n                      </div>\n                    }\n                    @default {\n                      {{ col.format ? col.format(getCellValue(row, col), row) : getCellValue(row, col) }}\n                    }\n                  }\n                </td>\n              }\n            </tr>\n          }\n        }\n      </tbody>\n    </table>\n  </div>\n\n  @if (config.paginate && totalPages() > 1) {\n    <div class=\"uk-table-pagination\">\n      <div class=\"uk-page-size\">\n        <span>Rows per page:</span>\n        <select class=\"uk-page-size-select\" [value]=\"pageSize()\" (change)=\"onPageSizeChange($event)\">\n          @for (size of config.pageSizeOptions ?? [10, 25, 50, 100]; track size) {\n            <option [value]=\"size\">{{ size }}</option>\n          }\n        </select>\n      </div>\n      <span class=\"uk-page-info\">\n        {{ (currentPage() - 1) * pageSize() + 1 }}\u2013{{ Math.min(currentPage() * pageSize(), filteredData().length) }}\n        of {{ filteredData().length }}\n      </span>\n      <div class=\"uk-page-nav\">\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === 1\" (click)=\"goToPage(1)\">\u00AB</button>\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === 1\" (click)=\"prevPage()\">\u2039</button>\n        @for (p of pageNumbers(); track p) {\n          <button\n            class=\"uk-page-btn\"\n            [class.active]=\"p === currentPage()\"\n            [class.ellipsis]=\"p === -1\"\n            [disabled]=\"p === -1\"\n            (click)=\"p !== -1 ? goToPage(p) : null\"\n          >{{ p === -1 ? '...' : p }}</button>\n        }\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === totalPages()\" (click)=\"nextPage()\">\u203A</button>\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === totalPages()\" (click)=\"goToPage(totalPages())\">\u00BB</button>\n      </div>\n    </div>\n  }\n</div>\n", styles: [".uk-table-container{display:flex;flex-direction:column;gap:0;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden}.uk-table-toolbar{display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid #e5e7eb;background:#fff;flex-wrap:wrap}.uk-table-search{position:relative;display:flex;align-items:center;flex:1;max-width:340px}.uk-table-search-icon{position:absolute;left:10px;color:#9ca3af;font-size:.875rem}.uk-table-search-input{width:100%;border:1.5px solid #e5e7eb;border-radius:8px;padding:.4375rem 2rem .4375rem 2.25rem;font-size:.875rem;outline:none;transition:border-color .2s}.uk-table-search-input:focus{border-color:#6366f1}.uk-table-search-clear{position:absolute;right:8px;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem}.uk-table-search-clear:hover{color:#374151}.uk-table-toolbar-actions{display:flex;gap:8px;margin-left:auto}.uk-table-selection-info{display:flex;align-items:center;gap:8px;font-size:.875rem;color:#6366f1;font-weight:500;background:#ede9fe;padding:4px 12px;border-radius:20px}.uk-table-clear-sel{background:none;border:none;cursor:pointer;color:#6366f1;font-size:.8125rem;text-decoration:underline}.uk-table-scroll{overflow-x:auto}.uk-table{width:100%;border-collapse:collapse;background:#fff;font-size:.9375rem}.uk-th{padding:12px 16px;text-align:left;font-size:.8125rem;font-weight:700;color:#6b7280;background:#f9fafb;border-bottom:2px solid #e5e7eb;white-space:nowrap;text-transform:uppercase;letter-spacing:.05em;position:relative;-webkit-user-select:none;user-select:none}.uk-th.sortable{cursor:pointer}.uk-th.sortable:hover{background:#f3f4f6;color:#374151}.uk-th.sorted-asc,.uk-th.sorted-desc{color:#6366f1;background:#f5f3ff}.uk-th-check{width:48px}.uk-sort-icon{margin-left:6px;font-size:.75rem}.uk-table.sticky-header .uk-th{position:sticky;top:0;z-index:10}.uk-tr{transition:background .12s;border-bottom:1px solid #f3f4f6}.uk-tr:last-child{border-bottom:none}.uk-tr:hover{background:#fafafa}.uk-tr.selected{background:#f5f3ff}.uk-tr.clickable{cursor:pointer}.uk-table.striped .uk-tr:nth-child(2n){background:#fafafa}.uk-table.striped .uk-tr:nth-child(2n).selected{background:#f5f3ff}.uk-td{padding:12px 16px;color:#374151}.uk-td-check{width:48px}.uk-td-center{text-align:center;padding:32px 16px}.uk-td-empty{color:#9ca3af;font-size:.9375rem}.uk-td-actions{display:flex;gap:8px;align-items:center}.uk-check-box{width:18px;height:18px;border:2px solid #d1d5db;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.625rem;transition:all .15s}.uk-check-box.checked{background:#6366f1;border-color:#6366f1;color:#fff}.uk-badge{display:inline-flex;align-items:center;padding:2px 10px;border-radius:20px;font-size:.75rem;font-weight:600}.uk-badge-success{background:#dcfce7;color:#16a34a}.uk-badge-neutral{background:#f3f4f6;color:#6b7280}.uk-table-loading{display:flex;flex-direction:column;align-items:center;gap:12px;color:#9ca3af}.uk-spinner{width:28px;height:28px;border:3px solid #e5e7eb;border-top-color:#6366f1;border-radius:50%;animation:uk-spin .7s linear infinite}@keyframes uk-spin{to{transform:rotate(360deg)}}.uk-table-pagination{display:flex;align-items:center;gap:12px;padding:12px 16px;border-top:1px solid #e5e7eb;background:#fff;flex-wrap:wrap}.uk-page-size{display:flex;align-items:center;gap:8px;font-size:.875rem;color:#6b7280}.uk-page-size-select{border:1px solid #e5e7eb;border-radius:6px;padding:4px 8px;font-size:.875rem;outline:none;cursor:pointer}.uk-page-info{font-size:.875rem;color:#6b7280;margin-left:auto}.uk-page-nav{display:flex;gap:4px}.uk-page-btn{min-width:32px;height:32px;border:1.5px solid #e5e7eb;border-radius:6px;background:#fff;cursor:pointer;font-size:.875rem;color:#374151;display:flex;align-items:center;justify-content:center;transition:all .15s;padding:0 6px}.uk-page-btn:hover:not(:disabled){border-color:#6366f1;color:#6366f1}.uk-page-btn.active{background:#6366f1;border-color:#6366f1;color:#fff}.uk-page-btn:disabled{opacity:.4;cursor:not-allowed}.uk-page-btn.ellipsis{border:none;cursor:default}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDynamicTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-dynamic-table', standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"uk-table-container\">\n  @if (config.searchable || toolbarActions.length > 0) {\n    <div class=\"uk-table-toolbar\">\n      @if (config.searchable) {\n        <div class=\"uk-table-search\">\n          <span class=\"uk-table-search-icon\">&#128269;</span>\n          <input\n            type=\"text\"\n            class=\"uk-table-search-input\"\n            [placeholder]=\"searchPlaceholder\"\n            [value]=\"searchQuery()\"\n            (input)=\"onSearch($event)\"\n          />\n          @if (searchQuery()) {\n            <button class=\"uk-table-search-clear\" (click)=\"clearSearch()\">&#x2715;</button>\n          }\n        </div>\n      }\n      <div class=\"uk-table-toolbar-actions\">\n        <ng-content select=\"[ukTableActions]\" />\n      </div>\n      @if (config.selectable && selectedRows().length > 0) {\n        <div class=\"uk-table-selection-info\">\n          {{ selectedRows().length }} selected\n          <button class=\"uk-table-clear-sel\" (click)=\"clearSelection()\">Clear</button>\n        </div>\n      }\n    </div>\n  }\n\n  <div class=\"uk-table-scroll\">\n    <table class=\"uk-table\" [class.striped]=\"config.striped\" [class.sticky-header]=\"config.stickyHeader\">\n      <thead>\n        <tr>\n          @if (config.selectable) {\n            <th class=\"uk-th uk-th-check\">\n              <span class=\"uk-check-box\" [class.checked]=\"allSelected()\" (click)=\"toggleAll()\">\n                @if (allSelected()) { \u2713 } @else if (someSelected()) { \u2014 }\n              </span>\n            </th>\n          }\n          @for (col of config.columns; track col.key) {\n            <th\n              class=\"uk-th\"\n              [class.sortable]=\"col.sortable\"\n              [class.sorted-asc]=\"sortKey() === col.key && sortDir() === 'asc'\"\n              [class.sorted-desc]=\"sortKey() === col.key && sortDir() === 'desc'\"\n              [style.width]=\"col.width ?? null\"\n              [style.text-align]=\"col.align ?? 'left'\"\n              (click)=\"col.sortable && sortByCol(col)\"\n            >\n              {{ col.header }}\n              @if (col.sortable) {\n                <span class=\"uk-sort-icon\">\n                  {{ sortKey() === col.key ? (sortDir() === 'asc' ? '\u2191' : '\u2193') : '\u21C5' }}\n                </span>\n              }\n            </th>\n          }\n        </tr>\n      </thead>\n      <tbody>\n        @if (isLoading()) {\n          <tr>\n            <td [attr.colspan]=\"config.columns.length + (config.selectable ? 1 : 0)\" class=\"uk-td-center\">\n              <div class=\"uk-table-loading\">\n                <div class=\"uk-spinner\"></div>\n                <span>Loading...</span>\n              </div>\n            </td>\n          </tr>\n        } @else if (pagedData().length === 0) {\n          <tr>\n            <td [attr.colspan]=\"config.columns.length + (config.selectable ? 1 : 0)\" class=\"uk-td-center uk-td-empty\">\n              {{ config.emptyText ?? 'No data available' }}\n            </td>\n          </tr>\n        } @else {\n          @for (row of pagedData(); track rowKey(row, $index)) {\n            <tr\n              class=\"uk-tr\"\n              [class.selected]=\"isSelected(row)\"\n              [class.clickable]=\"rowClickable\"\n              (click)=\"onRowClick(row)\"\n            >\n              @if (config.selectable) {\n                <td class=\"uk-td uk-td-check\" (click)=\"$event.stopPropagation(); toggleRow(row)\">\n                  <span class=\"uk-check-box\" [class.checked]=\"isSelected(row)\">\n                    @if (isSelected(row)) { \u2713 }\n                  </span>\n                </td>\n              }\n              @for (col of config.columns; track col.key) {\n                <td class=\"uk-td\" [style.text-align]=\"col.align ?? 'left'\">\n                  @switch (col.type) {\n                    @case ('boolean') {\n                      <span class=\"uk-badge\" [class.uk-badge-success]=\"getCellValue(row, col)\" [class.uk-badge-neutral]=\"!getCellValue(row, col)\">\n                        {{ getCellValue(row, col) ? 'Yes' : 'No' }}\n                      </span>\n                    }\n                    @case ('badge') {\n                      <span class=\"uk-badge\" [class]=\"getBadgeClass(col, getCellValue(row, col))\">\n                        {{ getCellValue(row, col) }}\n                      </span>\n                    }\n                    @case ('date') {\n                      {{ formatDate(getCellValue(row, col)) }}\n                    }\n                    @case ('actions') {\n                      <div class=\"uk-td-actions\">\n                        <ng-container *ngTemplateOutlet=\"$any(col.cellTemplate); context: { $implicit: row }\" />\n                      </div>\n                    }\n                    @default {\n                      {{ col.format ? col.format(getCellValue(row, col), row) : getCellValue(row, col) }}\n                    }\n                  }\n                </td>\n              }\n            </tr>\n          }\n        }\n      </tbody>\n    </table>\n  </div>\n\n  @if (config.paginate && totalPages() > 1) {\n    <div class=\"uk-table-pagination\">\n      <div class=\"uk-page-size\">\n        <span>Rows per page:</span>\n        <select class=\"uk-page-size-select\" [value]=\"pageSize()\" (change)=\"onPageSizeChange($event)\">\n          @for (size of config.pageSizeOptions ?? [10, 25, 50, 100]; track size) {\n            <option [value]=\"size\">{{ size }}</option>\n          }\n        </select>\n      </div>\n      <span class=\"uk-page-info\">\n        {{ (currentPage() - 1) * pageSize() + 1 }}\u2013{{ Math.min(currentPage() * pageSize(), filteredData().length) }}\n        of {{ filteredData().length }}\n      </span>\n      <div class=\"uk-page-nav\">\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === 1\" (click)=\"goToPage(1)\">\u00AB</button>\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === 1\" (click)=\"prevPage()\">\u2039</button>\n        @for (p of pageNumbers(); track p) {\n          <button\n            class=\"uk-page-btn\"\n            [class.active]=\"p === currentPage()\"\n            [class.ellipsis]=\"p === -1\"\n            [disabled]=\"p === -1\"\n            (click)=\"p !== -1 ? goToPage(p) : null\"\n          >{{ p === -1 ? '...' : p }}</button>\n        }\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === totalPages()\" (click)=\"nextPage()\">\u203A</button>\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === totalPages()\" (click)=\"goToPage(totalPages())\">\u00BB</button>\n      </div>\n    </div>\n  }\n</div>\n", styles: [".uk-table-container{display:flex;flex-direction:column;gap:0;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden}.uk-table-toolbar{display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid #e5e7eb;background:#fff;flex-wrap:wrap}.uk-table-search{position:relative;display:flex;align-items:center;flex:1;max-width:340px}.uk-table-search-icon{position:absolute;left:10px;color:#9ca3af;font-size:.875rem}.uk-table-search-input{width:100%;border:1.5px solid #e5e7eb;border-radius:8px;padding:.4375rem 2rem .4375rem 2.25rem;font-size:.875rem;outline:none;transition:border-color .2s}.uk-table-search-input:focus{border-color:#6366f1}.uk-table-search-clear{position:absolute;right:8px;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem}.uk-table-search-clear:hover{color:#374151}.uk-table-toolbar-actions{display:flex;gap:8px;margin-left:auto}.uk-table-selection-info{display:flex;align-items:center;gap:8px;font-size:.875rem;color:#6366f1;font-weight:500;background:#ede9fe;padding:4px 12px;border-radius:20px}.uk-table-clear-sel{background:none;border:none;cursor:pointer;color:#6366f1;font-size:.8125rem;text-decoration:underline}.uk-table-scroll{overflow-x:auto}.uk-table{width:100%;border-collapse:collapse;background:#fff;font-size:.9375rem}.uk-th{padding:12px 16px;text-align:left;font-size:.8125rem;font-weight:700;color:#6b7280;background:#f9fafb;border-bottom:2px solid #e5e7eb;white-space:nowrap;text-transform:uppercase;letter-spacing:.05em;position:relative;-webkit-user-select:none;user-select:none}.uk-th.sortable{cursor:pointer}.uk-th.sortable:hover{background:#f3f4f6;color:#374151}.uk-th.sorted-asc,.uk-th.sorted-desc{color:#6366f1;background:#f5f3ff}.uk-th-check{width:48px}.uk-sort-icon{margin-left:6px;font-size:.75rem}.uk-table.sticky-header .uk-th{position:sticky;top:0;z-index:10}.uk-tr{transition:background .12s;border-bottom:1px solid #f3f4f6}.uk-tr:last-child{border-bottom:none}.uk-tr:hover{background:#fafafa}.uk-tr.selected{background:#f5f3ff}.uk-tr.clickable{cursor:pointer}.uk-table.striped .uk-tr:nth-child(2n){background:#fafafa}.uk-table.striped .uk-tr:nth-child(2n).selected{background:#f5f3ff}.uk-td{padding:12px 16px;color:#374151}.uk-td-check{width:48px}.uk-td-center{text-align:center;padding:32px 16px}.uk-td-empty{color:#9ca3af;font-size:.9375rem}.uk-td-actions{display:flex;gap:8px;align-items:center}.uk-check-box{width:18px;height:18px;border:2px solid #d1d5db;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.625rem;transition:all .15s}.uk-check-box.checked{background:#6366f1;border-color:#6366f1;color:#fff}.uk-badge{display:inline-flex;align-items:center;padding:2px 10px;border-radius:20px;font-size:.75rem;font-weight:600}.uk-badge-success{background:#dcfce7;color:#16a34a}.uk-badge-neutral{background:#f3f4f6;color:#6b7280}.uk-table-loading{display:flex;flex-direction:column;align-items:center;gap:12px;color:#9ca3af}.uk-spinner{width:28px;height:28px;border:3px solid #e5e7eb;border-top-color:#6366f1;border-radius:50%;animation:uk-spin .7s linear infinite}@keyframes uk-spin{to{transform:rotate(360deg)}}.uk-table-pagination{display:flex;align-items:center;gap:12px;padding:12px 16px;border-top:1px solid #e5e7eb;background:#fff;flex-wrap:wrap}.uk-page-size{display:flex;align-items:center;gap:8px;font-size:.875rem;color:#6b7280}.uk-page-size-select{border:1px solid #e5e7eb;border-radius:6px;padding:4px 8px;font-size:.875rem;outline:none;cursor:pointer}.uk-page-info{font-size:.875rem;color:#6b7280;margin-left:auto}.uk-page-nav{display:flex;gap:4px}.uk-page-btn{min-width:32px;height:32px;border:1.5px solid #e5e7eb;border-radius:6px;background:#fff;cursor:pointer;font-size:.875rem;color:#374151;display:flex;align-items:center;justify-content:center;transition:all .15s;padding:0 6px}.uk-page-btn:hover:not(:disabled){border-color:#6366f1;color:#6366f1}.uk-page-btn.active{background:#6366f1;border-color:#6366f1;color:#fff}.uk-page-btn:disabled{opacity:.4;cursor:not-allowed}.uk-page-btn.ellipsis{border:none;cursor:default}\n"] }]
        }], propDecorators: { data: [{
                type: Input
            }], config: [{
                type: Input
            }], loading: [{
                type: Input
            }], rowKey: [{
                type: Input
            }], rowClickable: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], toolbarActions: [{
                type: Input
            }], rowClick: [{
                type: Output
            }], selectionChange: [{
                type: Output
            }], sortChange: [{
                type: Output
            }], pageChange: [{
                type: Output
            }] } });

/*
 * Public API Surface of ui-kit
 */

/**
 * Generated bundle index. Do not edit.
 */

export { UkCheckboxComponent, UkDateRangePickerComponent, UkDynamicFormComponent, UkDynamicTableComponent, UkInputComponent, UkMultiSelectComponent, UkOtpInputComponent, UkRadioGroupComponent, UkRangeComponent, UkRatingComponent, UkSelectComponent, UkStepContentDirective, UkStepperComponent, UkTextareaComponent, UkTimepickerComponent };
//# sourceMappingURL=ui-kit.mjs.map
