import * as i0 from '@angular/core';
import { input, output, computed, ChangeDetectionStrategy, Component, signal, forwardRef, HostListener, ViewChildren, Directive, ContentChildren, effect, untracked, model, Injectable, inject, InjectionToken, ApplicationRef, EnvironmentInjector, createComponent } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR, Validators, FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

class UkButtonComponent {
    variant = input('primary', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    icon = input(...(ngDevMode ? [undefined, { debugName: "icon" }] : /* istanbul ignore next */ []));
    iconPosition = input('left', ...(ngDevMode ? [{ debugName: "iconPosition" }] : /* istanbul ignore next */ []));
    iconOnly = input(false, ...(ngDevMode ? [{ debugName: "iconOnly" }] : /* istanbul ignore next */ []));
    label = input(...(ngDevMode ? [undefined, { debugName: "label" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    fullWidth = input(false, ...(ngDevMode ? [{ debugName: "fullWidth" }] : /* istanbul ignore next */ []));
    type = input('button', ...(ngDevMode ? [{ debugName: "type" }] : /* istanbul ignore next */ []));
    clicked = output();
    hostClass = computed(() => {
        const classes = [
            'uk-btn',
            `uk-btn-${this.variant()}`,
            `uk-btn-${this.size()}`,
        ];
        if (this.iconOnly())
            classes.push('uk-btn-icon-only');
        if (this.fullWidth())
            classes.push('uk-btn-full');
        if (this.loading())
            classes.push('uk-btn-loading');
        return classes.join(' ');
    }, ...(ngDevMode ? [{ debugName: "hostClass" }] : /* istanbul ignore next */ []));
    onClick(e) {
        if (this.disabled() || this.loading()) {
            e.stopPropagation();
            return;
        }
        this.clicked.emit(e);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkButtonComponent, isStandalone: true, selector: "uk-button", inputs: { variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, iconPosition: { classPropertyName: "iconPosition", publicName: "iconPosition", isSignal: true, isRequired: false, transformFunction: null }, iconOnly: { classPropertyName: "iconOnly", publicName: "iconOnly", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, fullWidth: { classPropertyName: "fullWidth", publicName: "fullWidth", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<button\n  [type]=\"type()\"\n  [class]=\"hostClass()\"\n  [disabled]=\"disabled() || loading()\"\n  [attr.aria-label]=\"iconOnly() ? icon() : null\"\n  (click)=\"onClick($event)\">\n\n  <!-- Loading spinner -->\n  @if (loading()) {\n    <span class=\"uk-btn-spinner\" aria-hidden=\"true\"></span>\n  }\n\n  <!-- Left icon (not loading) -->\n  @if (!loading() && icon() && iconPosition() === 'left') {\n    <i class=\"bi bi-{{ icon() }}\" aria-hidden=\"true\"></i>\n  }\n\n  <!-- Label text (hidden when icon-only) -->\n  @if (!iconOnly()) {\n    <span class=\"uk-btn-label\">\n      @if (label()) { {{ label() }} } @else { <ng-content /> }\n    </span>\n  }\n\n  <!-- Right icon (not loading) -->\n  @if (!loading() && icon() && iconPosition() === 'right') {\n    <i class=\"bi bi-{{ icon() }}\" aria-hidden=\"true\"></i>\n  }\n\n</button>\n", styles: ["@charset \"UTF-8\";:host{display:inline-block}:host(.uk-btn-full){display:block}.uk-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1.5px solid transparent;border-radius:8px;font-family:inherit;font-weight:600;cursor:pointer;white-space:nowrap;text-decoration:none;transition:background .15s,border-color .15s,color .15s,box-shadow .15s,opacity .15s;position:relative;vertical-align:middle}.uk-btn:focus-visible{outline:none;box-shadow:0 0 0 3px #6366f14d}.uk-btn:disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.uk-btn.uk-btn-full{width:100%}.uk-btn-label{line-height:1}.uk-btn-xs{height:28px;padding:0 10px;font-size:.75rem;border-radius:6px;gap:5px}.uk-btn-xs i{font-size:.8125rem}.uk-btn-sm{height:34px;padding:0 14px;font-size:.8125rem}.uk-btn-sm i{font-size:.875rem}.uk-btn-md{height:40px;padding:0 18px;font-size:.9375rem}.uk-btn-md i{font-size:1rem}.uk-btn-lg{height:48px;padding:0 24px;font-size:1.0625rem;gap:9px}.uk-btn-lg i{font-size:1.125rem}.uk-btn-icon-only{padding:0;aspect-ratio:1}.uk-btn-icon-only.uk-btn-xs{width:28px}.uk-btn-icon-only.uk-btn-sm{width:34px}.uk-btn-icon-only.uk-btn-md{width:40px}.uk-btn-icon-only.uk-btn-lg{width:48px}.uk-btn-primary{background:#6366f1;border-color:#6366f1;color:#fff}.uk-btn-primary:hover:not(:disabled){background:#4f46e5;border-color:#4f46e5}.uk-btn-primary:active:not(:disabled){background:#4338ca;border-color:#4338ca}.uk-btn-secondary{background:#f3f4f6;border-color:#e5e7eb;color:#374151}.uk-btn-secondary:hover:not(:disabled){background:#e5e7eb;border-color:#d1d5db}.uk-btn-secondary:active:not(:disabled){background:#d1d5db}.uk-btn-success{background:#22c55e;border-color:#22c55e;color:#fff}.uk-btn-success:hover:not(:disabled){background:#16a34a;border-color:#16a34a}.uk-btn-success:active:not(:disabled){background:#15803d}.uk-btn-success:focus-visible{box-shadow:0 0 0 3px #22c55e4d}.uk-btn-danger{background:#ef4444;border-color:#ef4444;color:#fff}.uk-btn-danger:hover:not(:disabled){background:#dc2626;border-color:#dc2626}.uk-btn-danger:active:not(:disabled){background:#b91c1c}.uk-btn-danger:focus-visible{box-shadow:0 0 0 3px #ef44444d}.uk-btn-warning{background:#f59e0b;border-color:#f59e0b;color:#fff}.uk-btn-warning:hover:not(:disabled){background:#d97706;border-color:#d97706}.uk-btn-warning:active:not(:disabled){background:#b45309}.uk-btn-warning:focus-visible{box-shadow:0 0 0 3px #f59e0b4d}.uk-btn-ghost{background:transparent;border-color:transparent;color:#6366f1}.uk-btn-ghost:hover:not(:disabled){background:#f5f3ff}.uk-btn-ghost:active:not(:disabled){background:#ede9fe}.uk-btn-outline{background:transparent;border-color:#6366f1;color:#6366f1}.uk-btn-outline:hover:not(:disabled){background:#6366f1;color:#fff}.uk-btn-outline:active:not(:disabled){background:#4f46e5;border-color:#4f46e5;color:#fff}.uk-btn-spinner{display:inline-block;width:1em;height:1em;border:2px solid rgba(255,255,255,.35);border-top-color:currentColor;border-radius:50%;animation:uk-btn-spin .6s linear infinite;flex-shrink:0}.uk-btn-secondary .uk-btn-spinner,.uk-btn-ghost .uk-btn-spinner,.uk-btn-outline .uk-btn-spinner{border-color:#6366f140;border-top-color:#6366f1}@keyframes uk-btn-spin{to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-button', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button\n  [type]=\"type()\"\n  [class]=\"hostClass()\"\n  [disabled]=\"disabled() || loading()\"\n  [attr.aria-label]=\"iconOnly() ? icon() : null\"\n  (click)=\"onClick($event)\">\n\n  <!-- Loading spinner -->\n  @if (loading()) {\n    <span class=\"uk-btn-spinner\" aria-hidden=\"true\"></span>\n  }\n\n  <!-- Left icon (not loading) -->\n  @if (!loading() && icon() && iconPosition() === 'left') {\n    <i class=\"bi bi-{{ icon() }}\" aria-hidden=\"true\"></i>\n  }\n\n  <!-- Label text (hidden when icon-only) -->\n  @if (!iconOnly()) {\n    <span class=\"uk-btn-label\">\n      @if (label()) { {{ label() }} } @else { <ng-content /> }\n    </span>\n  }\n\n  <!-- Right icon (not loading) -->\n  @if (!loading() && icon() && iconPosition() === 'right') {\n    <i class=\"bi bi-{{ icon() }}\" aria-hidden=\"true\"></i>\n  }\n\n</button>\n", styles: ["@charset \"UTF-8\";:host{display:inline-block}:host(.uk-btn-full){display:block}.uk-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1.5px solid transparent;border-radius:8px;font-family:inherit;font-weight:600;cursor:pointer;white-space:nowrap;text-decoration:none;transition:background .15s,border-color .15s,color .15s,box-shadow .15s,opacity .15s;position:relative;vertical-align:middle}.uk-btn:focus-visible{outline:none;box-shadow:0 0 0 3px #6366f14d}.uk-btn:disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.uk-btn.uk-btn-full{width:100%}.uk-btn-label{line-height:1}.uk-btn-xs{height:28px;padding:0 10px;font-size:.75rem;border-radius:6px;gap:5px}.uk-btn-xs i{font-size:.8125rem}.uk-btn-sm{height:34px;padding:0 14px;font-size:.8125rem}.uk-btn-sm i{font-size:.875rem}.uk-btn-md{height:40px;padding:0 18px;font-size:.9375rem}.uk-btn-md i{font-size:1rem}.uk-btn-lg{height:48px;padding:0 24px;font-size:1.0625rem;gap:9px}.uk-btn-lg i{font-size:1.125rem}.uk-btn-icon-only{padding:0;aspect-ratio:1}.uk-btn-icon-only.uk-btn-xs{width:28px}.uk-btn-icon-only.uk-btn-sm{width:34px}.uk-btn-icon-only.uk-btn-md{width:40px}.uk-btn-icon-only.uk-btn-lg{width:48px}.uk-btn-primary{background:#6366f1;border-color:#6366f1;color:#fff}.uk-btn-primary:hover:not(:disabled){background:#4f46e5;border-color:#4f46e5}.uk-btn-primary:active:not(:disabled){background:#4338ca;border-color:#4338ca}.uk-btn-secondary{background:#f3f4f6;border-color:#e5e7eb;color:#374151}.uk-btn-secondary:hover:not(:disabled){background:#e5e7eb;border-color:#d1d5db}.uk-btn-secondary:active:not(:disabled){background:#d1d5db}.uk-btn-success{background:#22c55e;border-color:#22c55e;color:#fff}.uk-btn-success:hover:not(:disabled){background:#16a34a;border-color:#16a34a}.uk-btn-success:active:not(:disabled){background:#15803d}.uk-btn-success:focus-visible{box-shadow:0 0 0 3px #22c55e4d}.uk-btn-danger{background:#ef4444;border-color:#ef4444;color:#fff}.uk-btn-danger:hover:not(:disabled){background:#dc2626;border-color:#dc2626}.uk-btn-danger:active:not(:disabled){background:#b91c1c}.uk-btn-danger:focus-visible{box-shadow:0 0 0 3px #ef44444d}.uk-btn-warning{background:#f59e0b;border-color:#f59e0b;color:#fff}.uk-btn-warning:hover:not(:disabled){background:#d97706;border-color:#d97706}.uk-btn-warning:active:not(:disabled){background:#b45309}.uk-btn-warning:focus-visible{box-shadow:0 0 0 3px #f59e0b4d}.uk-btn-ghost{background:transparent;border-color:transparent;color:#6366f1}.uk-btn-ghost:hover:not(:disabled){background:#f5f3ff}.uk-btn-ghost:active:not(:disabled){background:#ede9fe}.uk-btn-outline{background:transparent;border-color:#6366f1;color:#6366f1}.uk-btn-outline:hover:not(:disabled){background:#6366f1;color:#fff}.uk-btn-outline:active:not(:disabled){background:#4f46e5;border-color:#4f46e5;color:#fff}.uk-btn-spinner{display:inline-block;width:1em;height:1em;border:2px solid rgba(255,255,255,.35);border-top-color:currentColor;border-radius:50%;animation:uk-btn-spin .6s linear infinite;flex-shrink:0}.uk-btn-secondary .uk-btn-spinner,.uk-btn-ghost .uk-btn-spinner,.uk-btn-outline .uk-btn-spinner{border-color:#6366f140;border-top-color:#6366f1}@keyframes uk-btn-spin{to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], icon: [{ type: i0.Input, args: [{ isSignal: true, alias: "icon", required: false }] }], iconPosition: [{ type: i0.Input, args: [{ isSignal: true, alias: "iconPosition", required: false }] }], iconOnly: [{ type: i0.Input, args: [{ isSignal: true, alias: "iconOnly", required: false }] }], label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], loading: [{ type: i0.Input, args: [{ isSignal: true, alias: "loading", required: false }] }], fullWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "fullWidth", required: false }] }], type: [{ type: i0.Input, args: [{ isSignal: true, alias: "type", required: false }] }], clicked: [{ type: i0.Output, args: ["clicked"] }] } });

class UkInputComponent {
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    placeholder = input('', ...(ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []));
    type = input('text', ...(ngDevMode ? [{ debugName: "type" }] : /* istanbul ignore next */ []));
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    readonly = input(false, ...(ngDevMode ? [{ debugName: "readonly" }] : /* istanbul ignore next */ []));
    clearable = input(false, ...(ngDevMode ? [{ debugName: "clearable" }] : /* istanbul ignore next */ []));
    prefixIcon = input(false, ...(ngDevMode ? [{ debugName: "prefixIcon" }] : /* istanbul ignore next */ []));
    suffixIcon = input(false, ...(ngDevMode ? [{ debugName: "suffixIcon" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    maxlength = input(...(ngDevMode ? [undefined, { debugName: "maxlength" }] : /* istanbul ignore next */ []));
    minlength = input(...(ngDevMode ? [undefined, { debugName: "minlength" }] : /* istanbul ignore next */ []));
    autocomplete = input('off', ...(ngDevMode ? [{ debugName: "autocomplete" }] : /* istanbul ignore next */ []));
    id = input('', ...(ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []));
    valueChange = output();
    cleared = output();
    value = signal('', ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    focused = signal(false, ...(ngDevMode ? [{ debugName: "focused" }] : /* istanbul ignore next */ []));
    inputId = `uk-input-${Math.random().toString(36).slice(2)}`;
    wrapperClass = computed(() => {
        const classes = [this.size()];
        if (this.errorMessage())
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkInputComponent, isStandalone: true, selector: "uk-input", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: true, isRequired: false, transformFunction: null }, clearable: { classPropertyName: "clearable", publicName: "clearable", isSignal: true, isRequired: false, transformFunction: null }, prefixIcon: { classPropertyName: "prefixIcon", publicName: "prefixIcon", isSignal: true, isRequired: false, transformFunction: null }, suffixIcon: { classPropertyName: "suffixIcon", publicName: "suffixIcon", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null }, maxlength: { classPropertyName: "maxlength", publicName: "maxlength", isSignal: true, isRequired: false, transformFunction: null }, minlength: { classPropertyName: "minlength", publicName: "minlength", isSignal: true, isRequired: false, transformFunction: null }, autocomplete: { classPropertyName: "autocomplete", publicName: "autocomplete", isSignal: true, isRequired: false, transformFunction: null }, id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChange: "valueChange", cleared: "cleared" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkInputComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-input-wrapper\" [class]=\"wrapperClass()\">\n  @if (label()) {\n    <label [for]=\"inputId\" class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-input-container\" [class.uk-input--prefix]=\"prefixIcon()\" [class.uk-input--suffix]=\"suffixIcon() || clearable()\">\n    @if (prefixIcon()) {\n      <span class=\"uk-input-prefix\">\n        <ng-content select=\"[ukPrefix]\" />\n      </span>\n    }\n    <input\n      title=\"{{ label() ? label() + ' input' : 'Input field' }}\"\n      [id]=\"inputId\"\n      [type]=\"type()\"\n      [placeholder]=\"placeholder()\"\n      [disabled]=\"isDisabled()\"\n      [readonly]=\"readonly()\"\n      [value]=\"value()\"\n      [attr.maxlength]=\"maxlength() || null\"\n      [attr.minlength]=\"minlength() || null\"\n      [attr.autocomplete]=\"autocomplete()\"\n      class=\"uk-input\"\n      (input)=\"onInput($event)\"\n      (blur)=\"onTouched()\"\n      (focus)=\"focused.set(true)\"\n    />\n    @if (suffixIcon()) {\n      <span class=\"uk-input-suffix\">\n        <ng-content select=\"[ukSuffix]\" />\n      </span>\n    }\n    @if (clearable() && value()) {\n      <button type=\"button\" class=\"uk-input-clear\" (click)=\"clear()\">&#x2715;</button>\n    }\n  </div>\n  @if (hint() && !errorMessage()) {\n    <span class=\"uk-hint\">{{ hint() }}</span>\n  }\n  @if (errorMessage()) {\n    <span class=\"uk-error\">{{ errorMessage() }}</span>\n  }\n  @if (maxlength()) {\n    <span class=\"uk-char-count\">{{ value().length }} / {{ maxlength() }}</span>\n  }\n</div>\n", styles: [".uk-input-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-input-container{position:relative;display:flex;align-items:center}.uk-input{width:100%;border:1.5px solid #d1d5db;border-radius:8px;font-size:.9375rem;color:#111827;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s;padding:.5rem .75rem}.uk-input:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-input:disabled{background:#f9fafb;color:#9ca3af;cursor:not-allowed}.uk-input-wrapper.sm .uk-input{padding:.25rem .625rem;font-size:.8125rem;border-radius:6px}.uk-input-wrapper.lg .uk-input{padding:.75rem 1rem;font-size:1rem;border-radius:10px}.uk-input-wrapper.error .uk-input{border-color:#ef4444}.uk-input-wrapper.error .uk-input:focus{box-shadow:0 0 0 3px #ef444426}.uk-input-prefix,.uk-input-suffix{position:absolute;display:flex;align-items:center;color:#6b7280}.uk-input-prefix{left:.625rem}.uk-input-suffix{right:.625rem}.uk-input--prefix .uk-input{padding-left:2.25rem}.uk-input--suffix .uk-input{padding-right:2.25rem}.uk-input-clear{position:absolute;right:.5rem;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px;display:flex;align-items:center}.uk-input-clear:hover{color:#374151}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}.uk-char-count{font-size:.75rem;color:#9ca3af;text-align:right}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-input', standalone: true, imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkInputComponent),
                            multi: true
                        }], template: "<div class=\"uk-input-wrapper\" [class]=\"wrapperClass()\">\n  @if (label()) {\n    <label [for]=\"inputId\" class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-input-container\" [class.uk-input--prefix]=\"prefixIcon()\" [class.uk-input--suffix]=\"suffixIcon() || clearable()\">\n    @if (prefixIcon()) {\n      <span class=\"uk-input-prefix\">\n        <ng-content select=\"[ukPrefix]\" />\n      </span>\n    }\n    <input\n      title=\"{{ label() ? label() + ' input' : 'Input field' }}\"\n      [id]=\"inputId\"\n      [type]=\"type()\"\n      [placeholder]=\"placeholder()\"\n      [disabled]=\"isDisabled()\"\n      [readonly]=\"readonly()\"\n      [value]=\"value()\"\n      [attr.maxlength]=\"maxlength() || null\"\n      [attr.minlength]=\"minlength() || null\"\n      [attr.autocomplete]=\"autocomplete()\"\n      class=\"uk-input\"\n      (input)=\"onInput($event)\"\n      (blur)=\"onTouched()\"\n      (focus)=\"focused.set(true)\"\n    />\n    @if (suffixIcon()) {\n      <span class=\"uk-input-suffix\">\n        <ng-content select=\"[ukSuffix]\" />\n      </span>\n    }\n    @if (clearable() && value()) {\n      <button type=\"button\" class=\"uk-input-clear\" (click)=\"clear()\">&#x2715;</button>\n    }\n  </div>\n  @if (hint() && !errorMessage()) {\n    <span class=\"uk-hint\">{{ hint() }}</span>\n  }\n  @if (errorMessage()) {\n    <span class=\"uk-error\">{{ errorMessage() }}</span>\n  }\n  @if (maxlength()) {\n    <span class=\"uk-char-count\">{{ value().length }} / {{ maxlength() }}</span>\n  }\n</div>\n", styles: [".uk-input-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-input-container{position:relative;display:flex;align-items:center}.uk-input{width:100%;border:1.5px solid #d1d5db;border-radius:8px;font-size:.9375rem;color:#111827;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s;padding:.5rem .75rem}.uk-input:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-input:disabled{background:#f9fafb;color:#9ca3af;cursor:not-allowed}.uk-input-wrapper.sm .uk-input{padding:.25rem .625rem;font-size:.8125rem;border-radius:6px}.uk-input-wrapper.lg .uk-input{padding:.75rem 1rem;font-size:1rem;border-radius:10px}.uk-input-wrapper.error .uk-input{border-color:#ef4444}.uk-input-wrapper.error .uk-input:focus{box-shadow:0 0 0 3px #ef444426}.uk-input-prefix,.uk-input-suffix{position:absolute;display:flex;align-items:center;color:#6b7280}.uk-input-prefix{left:.625rem}.uk-input-suffix{right:.625rem}.uk-input--prefix .uk-input{padding-left:2.25rem}.uk-input--suffix .uk-input{padding-right:2.25rem}.uk-input-clear{position:absolute;right:.5rem;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px;display:flex;align-items:center}.uk-input-clear:hover{color:#374151}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}.uk-char-count{font-size:.75rem;color:#9ca3af;text-align:right}\n"] }]
        }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], placeholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], type: [{ type: i0.Input, args: [{ isSignal: true, alias: "type", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], readonly: [{ type: i0.Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], clearable: [{ type: i0.Input, args: [{ isSignal: true, alias: "clearable", required: false }] }], prefixIcon: [{ type: i0.Input, args: [{ isSignal: true, alias: "prefixIcon", required: false }] }], suffixIcon: [{ type: i0.Input, args: [{ isSignal: true, alias: "suffixIcon", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], maxlength: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxlength", required: false }] }], minlength: [{ type: i0.Input, args: [{ isSignal: true, alias: "minlength", required: false }] }], autocomplete: [{ type: i0.Input, args: [{ isSignal: true, alias: "autocomplete", required: false }] }], id: [{ type: i0.Input, args: [{ isSignal: true, alias: "id", required: false }] }], valueChange: [{ type: i0.Output, args: ["valueChange"] }], cleared: [{ type: i0.Output, args: ["cleared"] }] } });

class UkTextareaComponent {
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    placeholder = input('', ...(ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []));
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    rows = input(4, ...(ngDevMode ? [{ debugName: "rows" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    readonly = input(false, ...(ngDevMode ? [{ debugName: "readonly" }] : /* istanbul ignore next */ []));
    resizable = input(true, ...(ngDevMode ? [{ debugName: "resizable" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    maxlength = input(...(ngDevMode ? [undefined, { debugName: "maxlength" }] : /* istanbul ignore next */ []));
    valueChange = output();
    value = signal('', ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    textareaId = `uk-textarea-${Math.random().toString(36).slice(2)}`;
    wrapperClass = computed(() => {
        const classes = [this.size()];
        if (this.errorMessage())
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkTextareaComponent, isStandalone: true, selector: "uk-textarea", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, rows: { classPropertyName: "rows", publicName: "rows", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: true, isRequired: false, transformFunction: null }, resizable: { classPropertyName: "resizable", publicName: "resizable", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null }, maxlength: { classPropertyName: "maxlength", publicName: "maxlength", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChange: "valueChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkTextareaComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-textarea-wrapper\" [class]=\"wrapperClass()\">\n  @if (label()) {\n    <label [for]=\"textareaId\" class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <textarea\n    title=\"Text area {{textareaId ? 'for ' + label() : ''}}\"\n    [id]=\"textareaId\"\n    [placeholder]=\"placeholder()\"\n    [disabled]=\"isDisabled()\"\n    [readonly]=\"readonly()\"\n    [rows]=\"rows()\"\n    [attr.maxlength]=\"maxlength() || null\"\n    [class.uk-textarea--resize-none]=\"!resizable()\"\n    class=\"uk-textarea\"\n    (input)=\"onInput($event)\"\n    (blur)=\"onTouched()\"\n  >{{ value() }}</textarea>\n  <div class=\"uk-textarea-footer\">\n    @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n    @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n    @if (maxlength()) {\n      <span class=\"uk-char-count\">{{ value().length }} / {{ maxlength() }}</span>\n    }\n  </div>\n</div>\n", styles: [".uk-textarea-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-textarea{width:100%;border:1.5px solid #d1d5db;border-radius:8px;font-size:.9375rem;color:#111827;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s;padding:.5rem .75rem;font-family:inherit;resize:vertical;box-sizing:border-box}.uk-textarea:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-textarea:disabled{background:#f9fafb;color:#9ca3af;cursor:not-allowed}.uk-textarea--resize-none{resize:none}.uk-textarea-wrapper.sm .uk-textarea{padding:.25rem .625rem;font-size:.8125rem}.uk-textarea-wrapper.lg .uk-textarea{padding:.75rem 1rem;font-size:1rem}.uk-textarea-wrapper.error .uk-textarea{border-color:#ef4444}.uk-textarea-footer{display:flex;justify-content:space-between;align-items:center}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}.uk-char-count{font-size:.75rem;color:#9ca3af;margin-left:auto}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-textarea', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkTextareaComponent),
                            multi: true
                        }], template: "<div class=\"uk-textarea-wrapper\" [class]=\"wrapperClass()\">\n  @if (label()) {\n    <label [for]=\"textareaId\" class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <textarea\n    title=\"Text area {{textareaId ? 'for ' + label() : ''}}\"\n    [id]=\"textareaId\"\n    [placeholder]=\"placeholder()\"\n    [disabled]=\"isDisabled()\"\n    [readonly]=\"readonly()\"\n    [rows]=\"rows()\"\n    [attr.maxlength]=\"maxlength() || null\"\n    [class.uk-textarea--resize-none]=\"!resizable()\"\n    class=\"uk-textarea\"\n    (input)=\"onInput($event)\"\n    (blur)=\"onTouched()\"\n  >{{ value() }}</textarea>\n  <div class=\"uk-textarea-footer\">\n    @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n    @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n    @if (maxlength()) {\n      <span class=\"uk-char-count\">{{ value().length }} / {{ maxlength() }}</span>\n    }\n  </div>\n</div>\n", styles: [".uk-textarea-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-textarea{width:100%;border:1.5px solid #d1d5db;border-radius:8px;font-size:.9375rem;color:#111827;background:#fff;outline:none;transition:border-color .2s,box-shadow .2s;padding:.5rem .75rem;font-family:inherit;resize:vertical;box-sizing:border-box}.uk-textarea:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-textarea:disabled{background:#f9fafb;color:#9ca3af;cursor:not-allowed}.uk-textarea--resize-none{resize:none}.uk-textarea-wrapper.sm .uk-textarea{padding:.25rem .625rem;font-size:.8125rem}.uk-textarea-wrapper.lg .uk-textarea{padding:.75rem 1rem;font-size:1rem}.uk-textarea-wrapper.error .uk-textarea{border-color:#ef4444}.uk-textarea-footer{display:flex;justify-content:space-between;align-items:center}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}.uk-char-count{font-size:.75rem;color:#9ca3af;margin-left:auto}\n"] }]
        }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], placeholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], rows: [{ type: i0.Input, args: [{ isSignal: true, alias: "rows", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], readonly: [{ type: i0.Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], resizable: [{ type: i0.Input, args: [{ isSignal: true, alias: "resizable", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], maxlength: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxlength", required: false }] }], valueChange: [{ type: i0.Output, args: ["valueChange"] }] } });

class UkSelectComponent {
    el;
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    placeholder = input('Select an option', ...(ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []));
    options = input([], ...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    searchable = input(false, ...(ngDevMode ? [{ debugName: "searchable" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    selectionChange = output();
    value = signal(null, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    isOpen = signal(false, ...(ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    searchQuery = signal('', ...(ngDevMode ? [{ debugName: "searchQuery" }] : /* istanbul ignore next */ []));
    selectedOption = computed(() => this.options().find(o => o.value === this.value()) ?? null, ...(ngDevMode ? [{ debugName: "selectedOption" }] : /* istanbul ignore next */ []));
    filteredOptions = computed(() => {
        const q = this.searchQuery().toLowerCase();
        return q ? this.options().filter(o => o.label.toLowerCase().includes(q)) : this.options();
    }, ...(ngDevMode ? [{ debugName: "filteredOptions" }] : /* istanbul ignore next */ []));
    wrapperClass = computed(() => {
        const classes = [this.size()];
        if (this.errorMessage())
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkSelectComponent, isStandalone: true, selector: "uk-select", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, searchable: { classPropertyName: "searchable", publicName: "searchable", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { selectionChange: "selectionChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkSelectComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-select-wrapper\" [class]=\"wrapperClass()\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-select-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"toggle()\">\n    <span class=\"uk-select-value\" [class.placeholder]=\"!selectedOption()\">\n      {{ selectedOption()?.label || placeholder() }}\n    </span>\n    <span class=\"uk-select-arrow\" [class.rotated]=\"isOpen()\">&#9660;</span>\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-select-dropdown\">\n      @if (searchable()) {\n        <div class=\"uk-select-search-wrap\">\n          <input\n            type=\"text\"\n            class=\"uk-select-search\"\n            placeholder=\"Search...\"\n            [value]=\"searchQuery()\"\n            (input)=\"onSearch($event)\"\n            (click)=\"$event.stopPropagation()\"\n          />\n        </div>\n      }\n      <ul class=\"uk-select-options\">\n        @if (filteredOptions().length === 0) {\n          <li class=\"uk-select-empty\">No options found</li>\n        }\n        @for (opt of filteredOptions(); track opt.value) {\n          <li\n            class=\"uk-select-option\"\n            [class.selected]=\"value() === opt.value\"\n            [class.disabled]=\"opt.disabled\"\n            (click)=\"selectOption(opt)\"\n          >\n            <span class=\"uk-select-check\">{{ value() === opt.value ? '\u2713' : '' }}</span>\n            {{ opt.label }}\n          </li>\n        }\n      </ul>\n    </div>\n  }\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-select-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-select-trigger{display:flex;align-items:center;justify-content:space-between;border:1.5px solid #d1d5db;border-radius:8px;padding:.5rem .75rem;background:#fff;cursor:pointer;-webkit-user-select:none;user-select:none;transition:border-color .2s,box-shadow .2s;min-height:40px}.uk-select-trigger:hover:not(.disabled){border-color:#6366f1}.uk-select-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-select-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-select-value{font-size:.9375rem;color:#111827}.uk-select-value.placeholder{color:#9ca3af}.uk-select-arrow{font-size:.625rem;color:#6b7280;transition:transform .2s}.uk-select-arrow.rotated{transform:rotate(180deg)}.uk-select-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 20px #0000001f;z-index:1000;overflow:hidden}.uk-select-search-wrap{padding:8px;border-bottom:1px solid #f3f4f6}.uk-select-search{width:100%;border:1px solid #d1d5db;border-radius:6px;padding:.375rem .625rem;font-size:.875rem;outline:none;box-sizing:border-box}.uk-select-search:focus{border-color:#6366f1}.uk-select-options{list-style:none;margin:0;padding:4px;max-height:220px;overflow-y:auto}.uk-select-option{display:flex;align-items:center;gap:8px;padding:.5rem .75rem;border-radius:6px;cursor:pointer;font-size:.9375rem;color:#374151;transition:background .15s}.uk-select-option:hover:not(.disabled){background:#f5f3ff;color:#6366f1}.uk-select-option.selected{background:#f5f3ff;color:#6366f1;font-weight:500}.uk-select-option.disabled{color:#d1d5db;cursor:not-allowed}.uk-select-check{width:16px;font-size:.75rem;color:#6366f1;flex-shrink:0}.uk-select-empty{padding:1rem;text-align:center;color:#9ca3af;font-size:.875rem}.uk-select-wrapper.sm .uk-select-trigger{padding:.25rem .625rem;min-height:32px;font-size:.8125rem}.uk-select-wrapper.lg .uk-select-trigger{padding:.75rem 1rem;min-height:48px;font-size:1rem}.uk-select-wrapper.error .uk-select-trigger{border-color:#ef4444}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-select', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkSelectComponent),
                            multi: true
                        }], template: "<div class=\"uk-select-wrapper\" [class]=\"wrapperClass()\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-select-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"toggle()\">\n    <span class=\"uk-select-value\" [class.placeholder]=\"!selectedOption()\">\n      {{ selectedOption()?.label || placeholder() }}\n    </span>\n    <span class=\"uk-select-arrow\" [class.rotated]=\"isOpen()\">&#9660;</span>\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-select-dropdown\">\n      @if (searchable()) {\n        <div class=\"uk-select-search-wrap\">\n          <input\n            type=\"text\"\n            class=\"uk-select-search\"\n            placeholder=\"Search...\"\n            [value]=\"searchQuery()\"\n            (input)=\"onSearch($event)\"\n            (click)=\"$event.stopPropagation()\"\n          />\n        </div>\n      }\n      <ul class=\"uk-select-options\">\n        @if (filteredOptions().length === 0) {\n          <li class=\"uk-select-empty\">No options found</li>\n        }\n        @for (opt of filteredOptions(); track opt.value) {\n          <li\n            class=\"uk-select-option\"\n            [class.selected]=\"value() === opt.value\"\n            [class.disabled]=\"opt.disabled\"\n            (click)=\"selectOption(opt)\"\n          >\n            <span class=\"uk-select-check\">{{ value() === opt.value ? '\u2713' : '' }}</span>\n            {{ opt.label }}\n          </li>\n        }\n      </ul>\n    </div>\n  }\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-select-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-select-trigger{display:flex;align-items:center;justify-content:space-between;border:1.5px solid #d1d5db;border-radius:8px;padding:.5rem .75rem;background:#fff;cursor:pointer;-webkit-user-select:none;user-select:none;transition:border-color .2s,box-shadow .2s;min-height:40px}.uk-select-trigger:hover:not(.disabled){border-color:#6366f1}.uk-select-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-select-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-select-value{font-size:.9375rem;color:#111827}.uk-select-value.placeholder{color:#9ca3af}.uk-select-arrow{font-size:.625rem;color:#6b7280;transition:transform .2s}.uk-select-arrow.rotated{transform:rotate(180deg)}.uk-select-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 20px #0000001f;z-index:1000;overflow:hidden}.uk-select-search-wrap{padding:8px;border-bottom:1px solid #f3f4f6}.uk-select-search{width:100%;border:1px solid #d1d5db;border-radius:6px;padding:.375rem .625rem;font-size:.875rem;outline:none;box-sizing:border-box}.uk-select-search:focus{border-color:#6366f1}.uk-select-options{list-style:none;margin:0;padding:4px;max-height:220px;overflow-y:auto}.uk-select-option{display:flex;align-items:center;gap:8px;padding:.5rem .75rem;border-radius:6px;cursor:pointer;font-size:.9375rem;color:#374151;transition:background .15s}.uk-select-option:hover:not(.disabled){background:#f5f3ff;color:#6366f1}.uk-select-option.selected{background:#f5f3ff;color:#6366f1;font-weight:500}.uk-select-option.disabled{color:#d1d5db;cursor:not-allowed}.uk-select-check{width:16px;font-size:.75rem;color:#6366f1;flex-shrink:0}.uk-select-empty{padding:1rem;text-align:center;color:#9ca3af;font-size:.875rem}.uk-select-wrapper.sm .uk-select-trigger{padding:.25rem .625rem;min-height:32px;font-size:.8125rem}.uk-select-wrapper.lg .uk-select-trigger{padding:.75rem 1rem;min-height:48px;font-size:1rem}.uk-select-wrapper.error .uk-select-trigger{border-color:#ef4444}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], placeholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], searchable: [{ type: i0.Input, args: [{ isSignal: true, alias: "searchable", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], selectionChange: [{ type: i0.Output, args: ["selectionChange"] }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UkMultiSelectComponent {
    el;
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    placeholder = input('Select options', ...(ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []));
    options = input([], ...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    showSelectAll = input(true, ...(ngDevMode ? [{ debugName: "showSelectAll" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    selectionChange = output();
    values = signal([], ...(ngDevMode ? [{ debugName: "values" }] : /* istanbul ignore next */ []));
    isOpen = signal(false, ...(ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    searchQuery = signal('', ...(ngDevMode ? [{ debugName: "searchQuery" }] : /* istanbul ignore next */ []));
    selectedOptions = computed(() => this.options().filter(o => this.values().includes(o.value)), ...(ngDevMode ? [{ debugName: "selectedOptions" }] : /* istanbul ignore next */ []));
    filteredOptions = computed(() => {
        const q = this.searchQuery().toLowerCase();
        return q ? this.options().filter(o => o.label.toLowerCase().includes(q)) : this.options();
    }, ...(ngDevMode ? [{ debugName: "filteredOptions" }] : /* istanbul ignore next */ []));
    allSelected = computed(() => this.options().length > 0 && this.options().every(o => this.values().includes(o.value)), ...(ngDevMode ? [{ debugName: "allSelected" }] : /* istanbul ignore next */ []));
    wrapperClass = computed(() => {
        const classes = [];
        if (this.errorMessage())
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
            this.values.set(this.options().filter(o => !o.disabled).map(o => o.value));
        }
        this.onChange(this.values());
        this.selectionChange.emit(this.selectedOptions());
    }
    writeValue(val) { this.values.set(val ?? []); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkMultiSelectComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkMultiSelectComponent, isStandalone: true, selector: "uk-multi-select", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, showSelectAll: { classPropertyName: "showSelectAll", publicName: "showSelectAll", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { selectionChange: "selectionChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkMultiSelectComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-ms-wrapper\" [class]=\"wrapperClass()\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-ms-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"toggle()\">\n    <div class=\"uk-ms-tags\">\n      @if (selectedOptions().length === 0) {\n        <span class=\"uk-ms-placeholder\">{{ placeholder() }}</span>\n      }\n      @for (opt of selectedOptions(); track opt.value) {\n        <span class=\"uk-ms-tag\">\n          {{ opt.label }}\n          <button type=\"button\" class=\"uk-ms-tag-remove\" (click)=\"removeOption(opt, $event)\">&#x2715;</button>\n        </span>\n      }\n    </div>\n    <span class=\"uk-ms-arrow\" [class.rotated]=\"isOpen()\">&#9660;</span>\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-ms-dropdown\">\n      <div class=\"uk-ms-search-wrap\">\n        <input\n          type=\"text\"\n          class=\"uk-ms-search\"\n          placeholder=\"Search...\"\n          [value]=\"searchQuery()\"\n          (input)=\"onSearch($event)\"\n          (click)=\"$event.stopPropagation()\"\n        />\n      </div>\n      @if (showSelectAll()) {\n        <div class=\"uk-ms-select-all\" (click)=\"toggleAll()\">\n          <span class=\"uk-ms-check-box\" [class.checked]=\"allSelected()\">\n            @if (allSelected()) { \u2713 }\n          </span>\n          <span>{{ allSelected() ? 'Deselect All' : 'Select All' }}</span>\n        </div>\n      }\n      <ul class=\"uk-ms-options\">\n        @if (filteredOptions().length === 0) {\n          <li class=\"uk-ms-empty\">No options found</li>\n        }\n        @for (opt of filteredOptions(); track opt.value) {\n          <li\n            class=\"uk-ms-option\"\n            [class.selected]=\"isSelected(opt)\"\n            [class.disabled]=\"opt.disabled\"\n            (click)=\"toggleOption(opt)\"\n          >\n            <span class=\"uk-ms-check-box\" [class.checked]=\"isSelected(opt)\">\n              @if (isSelected(opt)) { \u2713 }\n            </span>\n            {{ opt.label }}\n          </li>\n        }\n      </ul>\n    </div>\n  }\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-ms-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-ms-trigger{display:flex;align-items:center;gap:6px;border:1.5px solid #d1d5db;border-radius:8px;padding:.375rem .75rem;background:#fff;cursor:pointer;min-height:40px;flex-wrap:wrap;transition:border-color .2s,box-shadow .2s}.uk-ms-trigger:hover:not(.disabled){border-color:#6366f1}.uk-ms-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-ms-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-ms-tags{display:flex;flex-wrap:wrap;gap:4px;flex:1;align-items:center}.uk-ms-placeholder{color:#9ca3af;font-size:.9375rem}.uk-ms-tag{display:inline-flex;align-items:center;gap:4px;background:#ede9fe;color:#6366f1;border-radius:4px;padding:2px 8px;font-size:.8125rem;font-weight:500}.uk-ms-tag-remove{background:none;border:none;cursor:pointer;color:#6366f1;padding:0;font-size:.625rem;line-height:1;display:flex;align-items:center}.uk-ms-tag-remove:hover{color:#4f46e5}.uk-ms-arrow{font-size:.625rem;color:#6b7280;transition:transform .2s;flex-shrink:0;margin-left:auto}.uk-ms-arrow.rotated{transform:rotate(180deg)}.uk-ms-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 20px #0000001f;z-index:1000;overflow:hidden}.uk-ms-search-wrap{padding:8px;border-bottom:1px solid #f3f4f6}.uk-ms-search{width:100%;border:1px solid #d1d5db;border-radius:6px;padding:.375rem .625rem;font-size:.875rem;outline:none;box-sizing:border-box}.uk-ms-search:focus{border-color:#6366f1}.uk-ms-select-all{display:flex;align-items:center;gap:10px;padding:.5rem .75rem;border-bottom:1px solid #f3f4f6;cursor:pointer;font-size:.875rem;color:#374151;font-weight:500}.uk-ms-select-all:hover{background:#f5f3ff}.uk-ms-options{list-style:none;margin:0;padding:4px;max-height:220px;overflow-y:auto}.uk-ms-option{display:flex;align-items:center;gap:10px;padding:.5rem .75rem;border-radius:6px;cursor:pointer;font-size:.9375rem;color:#374151;transition:background .15s}.uk-ms-option:hover:not(.disabled){background:#f5f3ff}.uk-ms-option.selected{color:#6366f1}.uk-ms-option.disabled{color:#d1d5db;cursor:not-allowed}.uk-ms-check-box{width:16px;height:16px;border:2px solid #d1d5db;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:.625rem;flex-shrink:0}.uk-ms-check-box.checked{border-color:#6366f1;background:#6366f1;color:#fff}.uk-ms-empty{padding:1rem;text-align:center;color:#9ca3af;font-size:.875rem}.uk-ms-wrapper.error .uk-ms-trigger{border-color:#ef4444}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkMultiSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-multi-select', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkMultiSelectComponent),
                            multi: true
                        }], template: "<div class=\"uk-ms-wrapper\" [class]=\"wrapperClass()\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-ms-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"toggle()\">\n    <div class=\"uk-ms-tags\">\n      @if (selectedOptions().length === 0) {\n        <span class=\"uk-ms-placeholder\">{{ placeholder() }}</span>\n      }\n      @for (opt of selectedOptions(); track opt.value) {\n        <span class=\"uk-ms-tag\">\n          {{ opt.label }}\n          <button type=\"button\" class=\"uk-ms-tag-remove\" (click)=\"removeOption(opt, $event)\">&#x2715;</button>\n        </span>\n      }\n    </div>\n    <span class=\"uk-ms-arrow\" [class.rotated]=\"isOpen()\">&#9660;</span>\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-ms-dropdown\">\n      <div class=\"uk-ms-search-wrap\">\n        <input\n          type=\"text\"\n          class=\"uk-ms-search\"\n          placeholder=\"Search...\"\n          [value]=\"searchQuery()\"\n          (input)=\"onSearch($event)\"\n          (click)=\"$event.stopPropagation()\"\n        />\n      </div>\n      @if (showSelectAll()) {\n        <div class=\"uk-ms-select-all\" (click)=\"toggleAll()\">\n          <span class=\"uk-ms-check-box\" [class.checked]=\"allSelected()\">\n            @if (allSelected()) { \u2713 }\n          </span>\n          <span>{{ allSelected() ? 'Deselect All' : 'Select All' }}</span>\n        </div>\n      }\n      <ul class=\"uk-ms-options\">\n        @if (filteredOptions().length === 0) {\n          <li class=\"uk-ms-empty\">No options found</li>\n        }\n        @for (opt of filteredOptions(); track opt.value) {\n          <li\n            class=\"uk-ms-option\"\n            [class.selected]=\"isSelected(opt)\"\n            [class.disabled]=\"opt.disabled\"\n            (click)=\"toggleOption(opt)\"\n          >\n            <span class=\"uk-ms-check-box\" [class.checked]=\"isSelected(opt)\">\n              @if (isSelected(opt)) { \u2713 }\n            </span>\n            {{ opt.label }}\n          </li>\n        }\n      </ul>\n    </div>\n  }\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-ms-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-ms-trigger{display:flex;align-items:center;gap:6px;border:1.5px solid #d1d5db;border-radius:8px;padding:.375rem .75rem;background:#fff;cursor:pointer;min-height:40px;flex-wrap:wrap;transition:border-color .2s,box-shadow .2s}.uk-ms-trigger:hover:not(.disabled){border-color:#6366f1}.uk-ms-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-ms-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-ms-tags{display:flex;flex-wrap:wrap;gap:4px;flex:1;align-items:center}.uk-ms-placeholder{color:#9ca3af;font-size:.9375rem}.uk-ms-tag{display:inline-flex;align-items:center;gap:4px;background:#ede9fe;color:#6366f1;border-radius:4px;padding:2px 8px;font-size:.8125rem;font-weight:500}.uk-ms-tag-remove{background:none;border:none;cursor:pointer;color:#6366f1;padding:0;font-size:.625rem;line-height:1;display:flex;align-items:center}.uk-ms-tag-remove:hover{color:#4f46e5}.uk-ms-arrow{font-size:.625rem;color:#6b7280;transition:transform .2s;flex-shrink:0;margin-left:auto}.uk-ms-arrow.rotated{transform:rotate(180deg)}.uk-ms-dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 20px #0000001f;z-index:1000;overflow:hidden}.uk-ms-search-wrap{padding:8px;border-bottom:1px solid #f3f4f6}.uk-ms-search{width:100%;border:1px solid #d1d5db;border-radius:6px;padding:.375rem .625rem;font-size:.875rem;outline:none;box-sizing:border-box}.uk-ms-search:focus{border-color:#6366f1}.uk-ms-select-all{display:flex;align-items:center;gap:10px;padding:.5rem .75rem;border-bottom:1px solid #f3f4f6;cursor:pointer;font-size:.875rem;color:#374151;font-weight:500}.uk-ms-select-all:hover{background:#f5f3ff}.uk-ms-options{list-style:none;margin:0;padding:4px;max-height:220px;overflow-y:auto}.uk-ms-option{display:flex;align-items:center;gap:10px;padding:.5rem .75rem;border-radius:6px;cursor:pointer;font-size:.9375rem;color:#374151;transition:background .15s}.uk-ms-option:hover:not(.disabled){background:#f5f3ff}.uk-ms-option.selected{color:#6366f1}.uk-ms-option.disabled{color:#d1d5db;cursor:not-allowed}.uk-ms-check-box{width:16px;height:16px;border:2px solid #d1d5db;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:.625rem;flex-shrink:0}.uk-ms-check-box.checked{border-color:#6366f1;background:#6366f1;color:#fff}.uk-ms-empty{padding:1rem;text-align:center;color:#9ca3af;font-size:.875rem}.uk-ms-wrapper.error .uk-ms-trigger{border-color:#ef4444}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], placeholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], showSelectAll: [{ type: i0.Input, args: [{ isSignal: true, alias: "showSelectAll", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], selectionChange: [{ type: i0.Output, args: ["selectionChange"] }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UkDateRangePickerComponent {
    el;
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    placeholder = input('Select date range', ...(ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    minDate = input(...(ngDevMode ? [undefined, { debugName: "minDate" }] : /* istanbul ignore next */ []));
    maxDate = input(...(ngDevMode ? [undefined, { debugName: "maxDate" }] : /* istanbul ignore next */ []));
    showPresets = input(true, ...(ngDevMode ? [{ debugName: "showPresets" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    format = input('MMM d, yyyy', ...(ngDevMode ? [{ debugName: "format" }] : /* istanbul ignore next */ []));
    rangeChange = output();
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
        const minDate = this.minDate();
        const maxDate = this.maxDate();
        return {
            date, isCurrentMonth,
            isToday: this.sameDay(date, this.today),
            isSelected: s || e,
            isInRange: inRange,
            isStart: s,
            isEnd: e,
            isDisabled: (!!minDate && date < minDate) || (!!maxDate && date > maxDate)
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
            return this.placeholder();
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkDateRangePickerComponent, isStandalone: true, selector: "uk-date-range-picker", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, minDate: { classPropertyName: "minDate", publicName: "minDate", isSignal: true, isRequired: false, transformFunction: null }, maxDate: { classPropertyName: "maxDate", publicName: "maxDate", isSignal: true, isRequired: false, transformFunction: null }, showPresets: { classPropertyName: "showPresets", publicName: "showPresets", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null }, format: { classPropertyName: "format", publicName: "format", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { rangeChange: "rangeChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkDateRangePickerComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-drp-wrapper\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-drp-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"openPicker()\">\n    <span class=\"uk-drp-icon\">&#128197;</span>\n    <span class=\"uk-drp-value\" [class.placeholder]=\"!dateRange().start\">\n      {{ displayValue() }}\n    </span>\n    @if (dateRange().start) {\n      <button type=\"button\" class=\"uk-drp-clear\" (click)=\"clear($event)\">&#x2715;</button>\n    }\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-drp-panel\">\n      <div class=\"uk-drp-calendars\">\n        <div class=\"uk-drp-cal\">\n          <div class=\"uk-drp-cal-header\">\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"prevMonth()\">&#8249;</button>\n            <span class=\"uk-drp-cal-title\">{{ formatMonth(leftYear(), leftMonth()) }}</span>\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"nextMonthLeft()\">&#8250;</button>\n          </div>\n          <div class=\"uk-drp-cal-grid\">\n            @for (d of weekDays; track d) {\n              <span class=\"uk-drp-weekday\">{{ d }}</span>\n            }\n            @for (day of leftDays(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-drp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.start]=\"day.isStart\"\n                [class.end]=\"day.isEnd\"\n                [class.in-range]=\"day.isInRange\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\"\n                (mouseenter)=\"hoverDate.set(day.date)\"\n              >{{ day.date.getDate() }}</button>\n            }\n          </div>\n        </div>\n        <div class=\"uk-drp-cal\">\n          <div class=\"uk-drp-cal-header\">\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"prevMonthRight()\">&#8249;</button>\n            <span class=\"uk-drp-cal-title\">{{ formatMonth(rightYear(), rightMonth()) }}</span>\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"nextMonth()\">&#8250;</button>\n          </div>\n          <div class=\"uk-drp-cal-grid\">\n            @for (d of weekDays; track d) {\n              <span class=\"uk-drp-weekday\">{{ d }}</span>\n            }\n            @for (day of rightDays(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-drp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.start]=\"day.isStart\"\n                [class.end]=\"day.isEnd\"\n                [class.in-range]=\"day.isInRange\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\"\n                (mouseenter)=\"hoverDate.set(day.date)\"\n              >{{ day.date.getDate() }}</button>\n            }\n          </div>\n        </div>\n      </div>\n      @if (showPresets()) {\n        <div class=\"uk-drp-presets\">\n          @for (p of presets; track p.label) {\n            <button type=\"button\" class=\"uk-drp-preset\" (click)=\"applyPreset(p)\">{{ p.label }}</button>\n          }\n        </div>\n      }\n      <div class=\"uk-drp-footer\">\n        <button type=\"button\" class=\"uk-drp-btn-cancel\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"uk-drp-btn-apply\" [disabled]=\"!dateRange().start\" (click)=\"apply()\">Apply</button>\n      </div>\n    </div>\n  }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-drp-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-drp-trigger{display:flex;align-items:center;gap:8px;border:1.5px solid #d1d5db;border-radius:8px;padding:.5rem .75rem;background:#fff;cursor:pointer;min-height:40px;transition:border-color .2s,box-shadow .2s}.uk-drp-trigger:hover:not(.disabled){border-color:#6366f1}.uk-drp-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-drp-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-drp-icon{color:#6b7280;font-size:1rem}.uk-drp-value{flex:1;font-size:.9375rem;color:#111827}.uk-drp-value.placeholder{color:#9ca3af}.uk-drp-clear{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem}.uk-drp-clear:hover{color:#374151}.uk-drp-panel{position:absolute;top:calc(100% + 4px);left:0;z-index:1000;background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 30px #00000026;overflow:hidden;min-width:580px}.uk-drp-calendars{display:flex}.uk-drp-cal{padding:16px;flex:1}.uk-drp-cal+.uk-drp-cal{border-left:1px solid #f3f4f6}.uk-drp-cal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.uk-drp-cal-title{font-size:.9375rem;font-weight:600;color:#111827}.uk-drp-nav{background:none;border:none;cursor:pointer;width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;color:#6b7280;transition:background .15s}.uk-drp-nav:hover{background:#f3f4f6;color:#374151}.uk-drp-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.uk-drp-weekday{text-align:center;font-size:.75rem;font-weight:600;color:#9ca3af;padding:4px 0;text-transform:uppercase}.uk-drp-day{width:32px;height:32px;border:none;border-radius:6px;background:none;font-size:.875rem;color:#374151;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center;margin:0 auto}.uk-drp-day:hover:not(:disabled){background:#ede9fe;color:#6366f1}.uk-drp-day.other-month{color:#d1d5db}.uk-drp-day.today{font-weight:700;color:#6366f1}.uk-drp-day.start,.uk-drp-day.end{background:#6366f1!important;color:#fff!important;border-radius:6px}.uk-drp-day.in-range{background:#ede9fe;color:#6366f1;border-radius:0}.uk-drp-day.disabled{color:#d1d5db;cursor:not-allowed}.uk-drp-presets{display:flex;gap:8px;flex-wrap:wrap;padding:8px 16px;border-top:1px solid #f3f4f6}.uk-drp-preset{background:#f3f4f6;border:none;border-radius:6px;padding:4px 12px;font-size:.8125rem;cursor:pointer;color:#374151;transition:background .15s}.uk-drp-preset:hover{background:#ede9fe;color:#6366f1}.uk-drp-footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid #f3f4f6}.uk-drp-btn-cancel{background:none;border:1.5px solid #e5e7eb;border-radius:6px;padding:.375rem 1rem;font-size:.875rem;cursor:pointer;color:#374151}.uk-drp-btn-cancel:hover{background:#f3f4f6}.uk-drp-btn-apply{background:#6366f1;border:none;border-radius:6px;padding:.375rem 1rem;font-size:.875rem;cursor:pointer;color:#fff}.uk-drp-btn-apply:hover:not(:disabled){background:#4f46e5}.uk-drp-btn-apply:disabled{background:#c7d2fe;cursor:not-allowed}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDateRangePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-date-range-picker', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkDateRangePickerComponent),
                            multi: true
                        }], template: "<div class=\"uk-drp-wrapper\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-drp-trigger\" [class.open]=\"isOpen()\" [class.disabled]=\"isDisabled()\" (click)=\"openPicker()\">\n    <span class=\"uk-drp-icon\">&#128197;</span>\n    <span class=\"uk-drp-value\" [class.placeholder]=\"!dateRange().start\">\n      {{ displayValue() }}\n    </span>\n    @if (dateRange().start) {\n      <button type=\"button\" class=\"uk-drp-clear\" (click)=\"clear($event)\">&#x2715;</button>\n    }\n  </div>\n  @if (isOpen()) {\n    <div class=\"uk-drp-panel\">\n      <div class=\"uk-drp-calendars\">\n        <div class=\"uk-drp-cal\">\n          <div class=\"uk-drp-cal-header\">\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"prevMonth()\">&#8249;</button>\n            <span class=\"uk-drp-cal-title\">{{ formatMonth(leftYear(), leftMonth()) }}</span>\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"nextMonthLeft()\">&#8250;</button>\n          </div>\n          <div class=\"uk-drp-cal-grid\">\n            @for (d of weekDays; track d) {\n              <span class=\"uk-drp-weekday\">{{ d }}</span>\n            }\n            @for (day of leftDays(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-drp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.start]=\"day.isStart\"\n                [class.end]=\"day.isEnd\"\n                [class.in-range]=\"day.isInRange\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\"\n                (mouseenter)=\"hoverDate.set(day.date)\"\n              >{{ day.date.getDate() }}</button>\n            }\n          </div>\n        </div>\n        <div class=\"uk-drp-cal\">\n          <div class=\"uk-drp-cal-header\">\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"prevMonthRight()\">&#8249;</button>\n            <span class=\"uk-drp-cal-title\">{{ formatMonth(rightYear(), rightMonth()) }}</span>\n            <button type=\"button\" class=\"uk-drp-nav\" (click)=\"nextMonth()\">&#8250;</button>\n          </div>\n          <div class=\"uk-drp-cal-grid\">\n            @for (d of weekDays; track d) {\n              <span class=\"uk-drp-weekday\">{{ d }}</span>\n            }\n            @for (day of rightDays(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-drp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.start]=\"day.isStart\"\n                [class.end]=\"day.isEnd\"\n                [class.in-range]=\"day.isInRange\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\"\n                (mouseenter)=\"hoverDate.set(day.date)\"\n              >{{ day.date.getDate() }}</button>\n            }\n          </div>\n        </div>\n      </div>\n      @if (showPresets()) {\n        <div class=\"uk-drp-presets\">\n          @for (p of presets; track p.label) {\n            <button type=\"button\" class=\"uk-drp-preset\" (click)=\"applyPreset(p)\">{{ p.label }}</button>\n          }\n        </div>\n      }\n      <div class=\"uk-drp-footer\">\n        <button type=\"button\" class=\"uk-drp-btn-cancel\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"uk-drp-btn-apply\" [disabled]=\"!dateRange().start\" (click)=\"apply()\">Apply</button>\n      </div>\n    </div>\n  }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-drp-wrapper{position:relative;display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-drp-trigger{display:flex;align-items:center;gap:8px;border:1.5px solid #d1d5db;border-radius:8px;padding:.5rem .75rem;background:#fff;cursor:pointer;min-height:40px;transition:border-color .2s,box-shadow .2s}.uk-drp-trigger:hover:not(.disabled){border-color:#6366f1}.uk-drp-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-drp-trigger.disabled{background:#f9fafb;cursor:not-allowed}.uk-drp-icon{color:#6b7280;font-size:1rem}.uk-drp-value{flex:1;font-size:.9375rem;color:#111827}.uk-drp-value.placeholder{color:#9ca3af}.uk-drp-clear{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem}.uk-drp-clear:hover{color:#374151}.uk-drp-panel{position:absolute;top:calc(100% + 4px);left:0;z-index:1000;background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 30px #00000026;overflow:hidden;min-width:580px}.uk-drp-calendars{display:flex}.uk-drp-cal{padding:16px;flex:1}.uk-drp-cal+.uk-drp-cal{border-left:1px solid #f3f4f6}.uk-drp-cal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.uk-drp-cal-title{font-size:.9375rem;font-weight:600;color:#111827}.uk-drp-nav{background:none;border:none;cursor:pointer;width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;color:#6b7280;transition:background .15s}.uk-drp-nav:hover{background:#f3f4f6;color:#374151}.uk-drp-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.uk-drp-weekday{text-align:center;font-size:.75rem;font-weight:600;color:#9ca3af;padding:4px 0;text-transform:uppercase}.uk-drp-day{width:32px;height:32px;border:none;border-radius:6px;background:none;font-size:.875rem;color:#374151;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center;margin:0 auto}.uk-drp-day:hover:not(:disabled){background:#ede9fe;color:#6366f1}.uk-drp-day.other-month{color:#d1d5db}.uk-drp-day.today{font-weight:700;color:#6366f1}.uk-drp-day.start,.uk-drp-day.end{background:#6366f1!important;color:#fff!important;border-radius:6px}.uk-drp-day.in-range{background:#ede9fe;color:#6366f1;border-radius:0}.uk-drp-day.disabled{color:#d1d5db;cursor:not-allowed}.uk-drp-presets{display:flex;gap:8px;flex-wrap:wrap;padding:8px 16px;border-top:1px solid #f3f4f6}.uk-drp-preset{background:#f3f4f6;border:none;border-radius:6px;padding:4px 12px;font-size:.8125rem;cursor:pointer;color:#374151;transition:background .15s}.uk-drp-preset:hover{background:#ede9fe;color:#6366f1}.uk-drp-footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid #f3f4f6}.uk-drp-btn-cancel{background:none;border:1.5px solid #e5e7eb;border-radius:6px;padding:.375rem 1rem;font-size:.875rem;cursor:pointer;color:#374151}.uk-drp-btn-cancel:hover{background:#f3f4f6}.uk-drp-btn-apply{background:#6366f1;border:none;border-radius:6px;padding:.375rem 1rem;font-size:.875rem;cursor:pointer;color:#fff}.uk-drp-btn-apply:hover:not(:disabled){background:#4f46e5}.uk-drp-btn-apply:disabled{background:#c7d2fe;cursor:not-allowed}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], placeholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], minDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "minDate", required: false }] }], maxDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxDate", required: false }] }], showPresets: [{ type: i0.Input, args: [{ isSignal: true, alias: "showPresets", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], format: [{ type: i0.Input, args: [{ isSignal: true, alias: "format", required: false }] }], rangeChange: [{ type: i0.Output, args: ["rangeChange"] }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UkDatepickerComponent {
    el;
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    placeholder = input('Select date', ...(ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    minDate = input(...(ngDevMode ? [undefined, { debugName: "minDate" }] : /* istanbul ignore next */ []));
    maxDate = input(...(ngDevMode ? [undefined, { debugName: "maxDate" }] : /* istanbul ignore next */ []));
    showTodayButton = input(true, ...(ngDevMode ? [{ debugName: "showTodayButton" }] : /* istanbul ignore next */ []));
    clearable = input(true, ...(ngDevMode ? [{ debugName: "clearable" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    dateChange = output();
    isOpen = signal(false, ...(ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    selected = signal(null, ...(ngDevMode ? [{ debugName: "selected" }] : /* istanbul ignore next */ []));
    viewYear = signal(new Date().getFullYear(), ...(ngDevMode ? [{ debugName: "viewYear" }] : /* istanbul ignore next */ []));
    viewMonth = signal(new Date().getMonth(), ...(ngDevMode ? [{ debugName: "viewMonth" }] : /* istanbul ignore next */ []));
    showYearPicker = signal(false, ...(ngDevMode ? [{ debugName: "showYearPicker" }] : /* istanbul ignore next */ []));
    weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    today = new Date();
    onChange = (_) => { };
    onTouched = () => { };
    constructor(el) {
        this.el = el;
    }
    onDocumentClick(e) {
        if (!this.el.nativeElement.contains(e.target)) {
            this.isOpen.set(false);
            this.showYearPicker.set(false);
        }
    }
    /* ── display ── */
    displayValue = computed(() => {
        const d = this.selected();
        if (!d)
            return '';
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }, ...(ngDevMode ? [{ debugName: "displayValue" }] : /* istanbul ignore next */ []));
    headerLabel = computed(() => new Date(this.viewYear(), this.viewMonth(), 1)
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' }), ...(ngDevMode ? [{ debugName: "headerLabel" }] : /* istanbul ignore next */ []));
    /* ── calendar grid ── */
    days = computed(() => this.buildDays(this.viewYear(), this.viewMonth()), ...(ngDevMode ? [{ debugName: "days" }] : /* istanbul ignore next */ []));
    buildDays(year, month) {
        const days = [];
        const first = new Date(year, month, 1);
        const last = new Date(year, month + 1, 0);
        for (let i = first.getDay() - 1; i >= 0; i--) {
            days.push(this.makeDay(new Date(year, month, -i), false));
        }
        for (let d = 1; d <= last.getDate(); d++) {
            days.push(this.makeDay(new Date(year, month, d), true));
        }
        const rem = 42 - days.length;
        for (let d = 1; d <= rem; d++) {
            days.push(this.makeDay(new Date(year, month + 1, d), false));
        }
        return days;
    }
    makeDay(date, isCurrentMonth) {
        const sel = this.selected();
        const minDate = this.minDate();
        const maxDate = this.maxDate();
        return {
            date,
            isCurrentMonth,
            isToday: this.sameDay(date, this.today),
            isSelected: !!sel && this.sameDay(date, sel),
            isDisabled: (!!minDate && date < minDate) ||
                (!!maxDate && date > maxDate),
        };
    }
    sameDay(a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    }
    /* ── year picker grid ── */
    yearRange = computed(() => {
        const base = Math.floor(this.viewYear() / 12) * 12;
        return Array.from({ length: 12 }, (_, i) => base + i);
    }, ...(ngDevMode ? [{ debugName: "yearRange" }] : /* istanbul ignore next */ []));
    /* ── interactions ── */
    open() {
        if (this.isDisabled())
            return;
        const sel = this.selected();
        if (sel) {
            this.viewYear.set(sel.getFullYear());
            this.viewMonth.set(sel.getMonth());
        }
        this.isOpen.update(v => !v);
        this.showYearPicker.set(false);
        this.onTouched();
    }
    selectDay(date) {
        if (this.isDisabled())
            return;
        this.selected.set(date);
        this.onChange(date);
        this.dateChange.emit(date);
        this.isOpen.set(false);
    }
    selectToday() { this.selectDay(new Date()); }
    clear(e) {
        e.stopPropagation();
        this.selected.set(null);
        this.onChange(null);
        this.dateChange.emit(null);
    }
    prevMonth() {
        if (this.viewMonth() === 0) {
            this.viewMonth.set(11);
            this.viewYear.update(y => y - 1);
        }
        else {
            this.viewMonth.update(m => m - 1);
        }
    }
    nextMonth() {
        if (this.viewMonth() === 11) {
            this.viewMonth.set(0);
            this.viewYear.update(y => y + 1);
        }
        else {
            this.viewMonth.update(m => m + 1);
        }
    }
    prevYearPage() { this.viewYear.update(y => y - 12); }
    nextYearPage() { this.viewYear.update(y => y + 12); }
    selectYear(year) {
        this.viewYear.set(year);
        this.showYearPicker.set(false);
    }
    /* ── ControlValueAccessor ── */
    writeValue(val) { this.selected.set(val ?? null); }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDatepickerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkDatepickerComponent, isStandalone: true, selector: "uk-datepicker", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, minDate: { classPropertyName: "minDate", publicName: "minDate", isSignal: true, isRequired: false, transformFunction: null }, maxDate: { classPropertyName: "maxDate", publicName: "maxDate", isSignal: true, isRequired: false, transformFunction: null }, showTodayButton: { classPropertyName: "showTodayButton", publicName: "showTodayButton", isSignal: true, isRequired: false, transformFunction: null }, clearable: { classPropertyName: "clearable", publicName: "clearable", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { dateChange: "dateChange" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkDatepickerComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-dp-wrapper\">\n\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n\n  <!-- Trigger -->\n  <div class=\"uk-dp-trigger\"\n       [class.open]=\"isOpen()\"\n       [class.has-value]=\"!!selected()\"\n       [class.disabled]=\"isDisabled()\"\n       (click)=\"open()\">\n    <i class=\"bi bi-calendar3 uk-dp-icon\"></i>\n    <span class=\"uk-dp-value\" [class.placeholder]=\"!selected()\">\n      {{ displayValue() || placeholder() }}\n    </span>\n    @if (clearable() && selected()) {\n      <button type=\"button\" class=\"uk-dp-clear\" (click)=\"clear($event)\" title=\"Clear\">&#x2715;</button>\n    }\n  </div>\n\n  <!-- Popover panel -->\n  @if (isOpen()) {\n    <div class=\"uk-dp-panel\">\n\n      <!-- Month header -->\n      <div class=\"uk-dp-header\">\n        <button type=\"button\" class=\"uk-dp-nav\" (click)=\"showYearPicker() ? prevYearPage() : prevMonth()\">&#8249;</button>\n\n        <button type=\"button\" class=\"uk-dp-header-label\" (click)=\"showYearPicker.update(v => !v)\">\n          {{ headerLabel() }}\n          <i class=\"bi\" [class.bi-chevron-down]=\"!showYearPicker()\" [class.bi-chevron-up]=\"showYearPicker()\"></i>\n        </button>\n\n        <button type=\"button\" class=\"uk-dp-nav\" (click)=\"showYearPicker() ? nextYearPage() : nextMonth()\">&#8250;</button>\n      </div>\n\n      <!-- Year picker grid -->\n      @if (showYearPicker()) {\n        <div class=\"uk-dp-year-grid\">\n          @for (y of yearRange(); track y) {\n            <button\n              type=\"button\"\n              class=\"uk-dp-year-btn\"\n              [class.current]=\"y === viewYear()\"\n              [class.today-year]=\"y === today.getFullYear()\"\n              (click)=\"selectYear(y)\">\n              {{ y }}\n            </button>\n          }\n        </div>\n      }\n\n      <!-- Calendar grid -->\n      @if (!showYearPicker()) {\n        <div class=\"uk-dp-cal\">\n          <div class=\"uk-dp-weekdays\">\n            @for (d of weekDays; track d) {\n              <span>{{ d }}</span>\n            }\n          </div>\n          <div class=\"uk-dp-days\">\n            @for (day of days(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-dp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.selected]=\"day.isSelected\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\">\n                {{ day.date.getDate() }}\n              </button>\n            }\n          </div>\n        </div>\n      }\n\n      <!-- Footer -->\n      <div class=\"uk-dp-footer\">\n        @if (showTodayButton()) {\n          <button type=\"button\" class=\"uk-dp-today-btn\" (click)=\"selectToday()\">Today</button>\n        }\n        <button type=\"button\" class=\"uk-dp-close-btn\" (click)=\"isOpen.set(false)\">Close</button>\n      </div>\n\n    </div>\n  }\n\n  @if (hint() && !errorMessage())    { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage())               { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: ["@charset \"UTF-8\";:host{display:block}.uk-label{display:block;font-size:.875rem;font-weight:600;color:#374151;margin-bottom:6px}.uk-required{color:#ef4444;margin-left:3px}.uk-hint{display:block;font-size:.75rem;color:#9ca3af;margin-top:4px}.uk-error{display:block;font-size:.75rem;color:#ef4444;margin-top:4px}.uk-dp-wrapper{position:relative;display:flex;flex-direction:column}.uk-dp-trigger{display:flex;align-items:center;gap:8px;padding:0 12px;height:40px;border:1.5px solid #d1d5db;border-radius:8px;background:#fff;cursor:pointer;transition:border-color .15s,box-shadow .15s;-webkit-user-select:none;user-select:none}.uk-dp-trigger:hover:not(.disabled){border-color:#6366f1}.uk-dp-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-dp-trigger.disabled{background:#f9fafb;cursor:not-allowed;opacity:.6}.uk-dp-icon{font-size:.9375rem;color:#9ca3af;flex-shrink:0}.uk-dp-value{flex:1;font-size:.9375rem;color:#111827}.uk-dp-value.placeholder{color:#9ca3af}.uk-dp-clear{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px 4px;border-radius:4px;line-height:1}.uk-dp-clear:hover{color:#374151;background:#f3f4f6}.uk-dp-panel{position:absolute;top:calc(100% + 6px);left:0;z-index:300;background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 32px #0000001f;width:288px;overflow:hidden;animation:uk-dp-in .15s ease}@keyframes uk-dp-in{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.uk-dp-header{display:flex;align-items:center;justify-content:space-between;padding:12px 12px 8px;border-bottom:1px solid #f3f4f6}.uk-dp-nav{width:28px;height:28px;border:none;border-radius:6px;background:transparent;color:#6b7280;font-size:1.125rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .12s,color .12s}.uk-dp-nav:hover{background:#f3f4f6;color:#111827}.uk-dp-header-label{display:flex;align-items:center;gap:5px;border:none;background:none;font-size:.9375rem;font-weight:700;color:#111827;cursor:pointer;border-radius:6px;padding:4px 8px;transition:background .12s}.uk-dp-header-label i{font-size:.75rem;color:#9ca3af}.uk-dp-header-label:hover{background:#f3f4f6}.uk-dp-year-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;padding:10px 12px}.uk-dp-year-btn{padding:8px 4px;border:none;border-radius:6px;background:transparent;font-size:.8125rem;color:#374151;cursor:pointer;transition:background .12s,color .12s;text-align:center}.uk-dp-year-btn:hover{background:#f3f4f6}.uk-dp-year-btn.current{background:#6366f1;color:#fff;font-weight:700}.uk-dp-year-btn.today-year:not(.current){color:#6366f1;font-weight:600}.uk-dp-cal{padding:8px 12px}.uk-dp-weekdays{display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:4px}.uk-dp-weekdays span{text-align:center;font-size:.6875rem;font-weight:700;color:#9ca3af;text-transform:uppercase;padding:4px 0}.uk-dp-days{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.uk-dp-day{aspect-ratio:1;border:none;border-radius:50%;background:transparent;font-size:.8125rem;color:#374151;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .12s,color .12s}.uk-dp-day:hover:not(.disabled):not(.selected){background:#f3f4f6}.uk-dp-day.other-month{color:#d1d5db}.uk-dp-day.today:not(.selected){color:#6366f1;font-weight:700;box-shadow:inset 0 0 0 1.5px #6366f1}.uk-dp-day.selected{background:#6366f1;color:#fff;font-weight:700}.uk-dp-day.disabled{color:#d1d5db;cursor:not-allowed}.uk-dp-footer{display:flex;align-items:center;justify-content:space-between;padding:8px 12px 12px;border-top:1px solid #f3f4f6;gap:8px}.uk-dp-today-btn{border:none;background:none;font-size:.8125rem;font-weight:600;color:#6366f1;cursor:pointer;padding:6px 10px;border-radius:6px;transition:background .12s}.uk-dp-today-btn:hover{background:#f5f3ff}.uk-dp-close-btn{border:1.5px solid #e5e7eb;background:#fff;font-size:.8125rem;font-weight:600;color:#6b7280;cursor:pointer;padding:5px 14px;border-radius:6px;transition:background .12s,border-color .12s;margin-left:auto}.uk-dp-close-btn:hover{background:#f9fafb;border-color:#d1d5db}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDatepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-datepicker', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkDatepickerComponent),
                            multi: true
                        }], template: "<div class=\"uk-dp-wrapper\">\n\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n\n  <!-- Trigger -->\n  <div class=\"uk-dp-trigger\"\n       [class.open]=\"isOpen()\"\n       [class.has-value]=\"!!selected()\"\n       [class.disabled]=\"isDisabled()\"\n       (click)=\"open()\">\n    <i class=\"bi bi-calendar3 uk-dp-icon\"></i>\n    <span class=\"uk-dp-value\" [class.placeholder]=\"!selected()\">\n      {{ displayValue() || placeholder() }}\n    </span>\n    @if (clearable() && selected()) {\n      <button type=\"button\" class=\"uk-dp-clear\" (click)=\"clear($event)\" title=\"Clear\">&#x2715;</button>\n    }\n  </div>\n\n  <!-- Popover panel -->\n  @if (isOpen()) {\n    <div class=\"uk-dp-panel\">\n\n      <!-- Month header -->\n      <div class=\"uk-dp-header\">\n        <button type=\"button\" class=\"uk-dp-nav\" (click)=\"showYearPicker() ? prevYearPage() : prevMonth()\">&#8249;</button>\n\n        <button type=\"button\" class=\"uk-dp-header-label\" (click)=\"showYearPicker.update(v => !v)\">\n          {{ headerLabel() }}\n          <i class=\"bi\" [class.bi-chevron-down]=\"!showYearPicker()\" [class.bi-chevron-up]=\"showYearPicker()\"></i>\n        </button>\n\n        <button type=\"button\" class=\"uk-dp-nav\" (click)=\"showYearPicker() ? nextYearPage() : nextMonth()\">&#8250;</button>\n      </div>\n\n      <!-- Year picker grid -->\n      @if (showYearPicker()) {\n        <div class=\"uk-dp-year-grid\">\n          @for (y of yearRange(); track y) {\n            <button\n              type=\"button\"\n              class=\"uk-dp-year-btn\"\n              [class.current]=\"y === viewYear()\"\n              [class.today-year]=\"y === today.getFullYear()\"\n              (click)=\"selectYear(y)\">\n              {{ y }}\n            </button>\n          }\n        </div>\n      }\n\n      <!-- Calendar grid -->\n      @if (!showYearPicker()) {\n        <div class=\"uk-dp-cal\">\n          <div class=\"uk-dp-weekdays\">\n            @for (d of weekDays; track d) {\n              <span>{{ d }}</span>\n            }\n          </div>\n          <div class=\"uk-dp-days\">\n            @for (day of days(); track day.date.getTime()) {\n              <button\n                type=\"button\"\n                class=\"uk-dp-day\"\n                [class.other-month]=\"!day.isCurrentMonth\"\n                [class.today]=\"day.isToday\"\n                [class.selected]=\"day.isSelected\"\n                [class.disabled]=\"day.isDisabled\"\n                [disabled]=\"day.isDisabled\"\n                (click)=\"selectDay(day.date)\">\n                {{ day.date.getDate() }}\n              </button>\n            }\n          </div>\n        </div>\n      }\n\n      <!-- Footer -->\n      <div class=\"uk-dp-footer\">\n        @if (showTodayButton()) {\n          <button type=\"button\" class=\"uk-dp-today-btn\" (click)=\"selectToday()\">Today</button>\n        }\n        <button type=\"button\" class=\"uk-dp-close-btn\" (click)=\"isOpen.set(false)\">Close</button>\n      </div>\n\n    </div>\n  }\n\n  @if (hint() && !errorMessage())    { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage())               { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: ["@charset \"UTF-8\";:host{display:block}.uk-label{display:block;font-size:.875rem;font-weight:600;color:#374151;margin-bottom:6px}.uk-required{color:#ef4444;margin-left:3px}.uk-hint{display:block;font-size:.75rem;color:#9ca3af;margin-top:4px}.uk-error{display:block;font-size:.75rem;color:#ef4444;margin-top:4px}.uk-dp-wrapper{position:relative;display:flex;flex-direction:column}.uk-dp-trigger{display:flex;align-items:center;gap:8px;padding:0 12px;height:40px;border:1.5px solid #d1d5db;border-radius:8px;background:#fff;cursor:pointer;transition:border-color .15s,box-shadow .15s;-webkit-user-select:none;user-select:none}.uk-dp-trigger:hover:not(.disabled){border-color:#6366f1}.uk-dp-trigger.open{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-dp-trigger.disabled{background:#f9fafb;cursor:not-allowed;opacity:.6}.uk-dp-icon{font-size:.9375rem;color:#9ca3af;flex-shrink:0}.uk-dp-value{flex:1;font-size:.9375rem;color:#111827}.uk-dp-value.placeholder{color:#9ca3af}.uk-dp-clear{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px 4px;border-radius:4px;line-height:1}.uk-dp-clear:hover{color:#374151;background:#f3f4f6}.uk-dp-panel{position:absolute;top:calc(100% + 6px);left:0;z-index:300;background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 32px #0000001f;width:288px;overflow:hidden;animation:uk-dp-in .15s ease}@keyframes uk-dp-in{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.uk-dp-header{display:flex;align-items:center;justify-content:space-between;padding:12px 12px 8px;border-bottom:1px solid #f3f4f6}.uk-dp-nav{width:28px;height:28px;border:none;border-radius:6px;background:transparent;color:#6b7280;font-size:1.125rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .12s,color .12s}.uk-dp-nav:hover{background:#f3f4f6;color:#111827}.uk-dp-header-label{display:flex;align-items:center;gap:5px;border:none;background:none;font-size:.9375rem;font-weight:700;color:#111827;cursor:pointer;border-radius:6px;padding:4px 8px;transition:background .12s}.uk-dp-header-label i{font-size:.75rem;color:#9ca3af}.uk-dp-header-label:hover{background:#f3f4f6}.uk-dp-year-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;padding:10px 12px}.uk-dp-year-btn{padding:8px 4px;border:none;border-radius:6px;background:transparent;font-size:.8125rem;color:#374151;cursor:pointer;transition:background .12s,color .12s;text-align:center}.uk-dp-year-btn:hover{background:#f3f4f6}.uk-dp-year-btn.current{background:#6366f1;color:#fff;font-weight:700}.uk-dp-year-btn.today-year:not(.current){color:#6366f1;font-weight:600}.uk-dp-cal{padding:8px 12px}.uk-dp-weekdays{display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:4px}.uk-dp-weekdays span{text-align:center;font-size:.6875rem;font-weight:700;color:#9ca3af;text-transform:uppercase;padding:4px 0}.uk-dp-days{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.uk-dp-day{aspect-ratio:1;border:none;border-radius:50%;background:transparent;font-size:.8125rem;color:#374151;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .12s,color .12s}.uk-dp-day:hover:not(.disabled):not(.selected){background:#f3f4f6}.uk-dp-day.other-month{color:#d1d5db}.uk-dp-day.today:not(.selected){color:#6366f1;font-weight:700;box-shadow:inset 0 0 0 1.5px #6366f1}.uk-dp-day.selected{background:#6366f1;color:#fff;font-weight:700}.uk-dp-day.disabled{color:#d1d5db;cursor:not-allowed}.uk-dp-footer{display:flex;align-items:center;justify-content:space-between;padding:8px 12px 12px;border-top:1px solid #f3f4f6;gap:8px}.uk-dp-today-btn{border:none;background:none;font-size:.8125rem;font-weight:600;color:#6366f1;cursor:pointer;padding:6px 10px;border-radius:6px;transition:background .12s}.uk-dp-today-btn:hover{background:#f5f3ff}.uk-dp-close-btn{border:1.5px solid #e5e7eb;background:#fff;font-size:.8125rem;font-weight:600;color:#6b7280;cursor:pointer;padding:5px 14px;border-radius:6px;transition:background .12s,border-color .12s;margin-left:auto}.uk-dp-close-btn:hover{background:#f9fafb;border-color:#d1d5db}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], placeholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], minDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "minDate", required: false }] }], maxDate: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxDate", required: false }] }], showTodayButton: [{ type: i0.Input, args: [{ isSignal: true, alias: "showTodayButton", required: false }] }], clearable: [{ type: i0.Input, args: [{ isSignal: true, alias: "clearable", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], dateChange: [{ type: i0.Output, args: ["dateChange"] }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UkTimepickerComponent {
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    use24Hour = input(false, ...(ngDevMode ? [{ debugName: "use24Hour" }] : /* istanbul ignore next */ []));
    showSeconds = input(false, ...(ngDevMode ? [{ debugName: "showSeconds" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    timeChange = output();
    time = signal({ hour: 12, minute: 0, second: 0, period: 'AM' }, ...(ngDevMode ? [{ debugName: "time" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    displayHour = computed(() => {
        const h = this.time().hour;
        if (this.use24Hour())
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
                next.hour = this.use24Hour() ? (t.hour + 1) % 24 : (t.hour % 12) + 1 + (t.period === 'PM' ? 12 : 0);
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
                next.hour = this.use24Hour() ? (t.hour - 1 + 24) % 24 : ((t.hour - 1 + 12) % 12) || 12 + (t.period === 'PM' ? 12 : 0);
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
            hour: Math.max(0, Math.min(this.use24Hour() ? 23 : 12, t.hour))
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkTimepickerComponent, isStandalone: true, selector: "uk-timepicker", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, use24Hour: { classPropertyName: "use24Hour", publicName: "use24Hour", isSignal: true, isRequired: false, transformFunction: null }, showSeconds: { classPropertyName: "showSeconds", publicName: "showSeconds", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { timeChange: "timeChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkTimepickerComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-tp-wrapper\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-tp-control\" [class.disabled]=\"isDisabled()\">\n    <div class=\"uk-tp-col\">\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('hour')\" [disabled]=\"isDisabled()\">&#8963;</button>\n      <input\n        title=\"Hour {{ use24Hour() ? '' : '(in 12-hour format)' }}\"\n        type=\"text\"\n        class=\"uk-tp-input\"\n        [value]=\"padded(displayHour())\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onHourInput($event)\"\n        (blur)=\"validateHour()\"\n        maxlength=\"2\"\n      />\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('hour')\" [disabled]=\"isDisabled()\">&#8964;</button>\n    </div>\n    <span class=\"uk-tp-sep\">:</span>\n    <div class=\"uk-tp-col\">\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('minute')\" [disabled]=\"isDisabled()\">&#8963;</button>\n      <input\n        title=\"Minute {{ use24Hour() ? '' : '(in 12-hour format)' }}\"\n        type=\"text\"\n        class=\"uk-tp-input\"\n        [value]=\"padded(time().minute)\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onMinuteInput($event)\"\n        (blur)=\"validateMinute()\"\n        maxlength=\"2\"\n      />\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('minute')\" [disabled]=\"isDisabled()\">&#8964;</button>\n    </div>\n    @if (showSeconds()) {\n      <span class=\"uk-tp-sep\">:</span>\n      <div class=\"uk-tp-col\">\n        <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('second')\" [disabled]=\"isDisabled()\">&#8963;</button>\n        <input\n          title=\"Second {{ use24Hour() ? '' : '(in 12-hour format)' }}\"\n          type=\"text\"\n          class=\"uk-tp-input\"\n          [value]=\"padded(time().second ?? 0)\"\n          [disabled]=\"isDisabled()\"\n          (input)=\"onSecondInput($event)\"\n          maxlength=\"2\"\n        />\n        <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('second')\" [disabled]=\"isDisabled()\">&#8964;</button>\n      </div>\n    }\n    @if (!use24Hour()) {\n      <div class=\"uk-tp-period\">\n        <button\n          type=\"button\"\n          class=\"uk-tp-period-btn\"\n          [class.active]=\"time().period === 'AM'\"\n          (click)=\"setPeriod('AM')\"\n          [disabled]=\"isDisabled()\"\n        >AM</button>\n        <button\n          type=\"button\"\n          class=\"uk-tp-period-btn\"\n          [class.active]=\"time().period === 'PM'\"\n          (click)=\"setPeriod('PM')\"\n          [disabled]=\"isDisabled()\"\n        >PM</button>\n      </div>\n    }\n  </div>\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-tp-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-tp-control{display:inline-flex;align-items:center;gap:4px;border:1.5px solid #d1d5db;border-radius:8px;padding:6px 12px;background:#fff;transition:border-color .2s}.uk-tp-control:focus-within{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-tp-control.disabled{background:#f9fafb}.uk-tp-col{display:flex;flex-direction:column;align-items:center;gap:2px}.uk-tp-btn{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px 6px;border-radius:4px;line-height:1;transition:background .15s,color .15s}.uk-tp-btn:hover:not(:disabled){background:#f3f4f6;color:#374151}.uk-tp-btn:disabled{cursor:not-allowed;opacity:.4}.uk-tp-input{width:36px;text-align:center;border:none;outline:none;font-size:1.125rem;font-weight:600;color:#111827;background:transparent;padding:4px 2px}.uk-tp-input:disabled{color:#9ca3af}.uk-tp-sep{font-size:1.25rem;font-weight:600;color:#6b7280;align-self:center}.uk-tp-period{display:flex;flex-direction:column;gap:2px;margin-left:8px}.uk-tp-period-btn{background:#f3f4f6;border:1px solid #e5e7eb;border-radius:4px;padding:2px 8px;font-size:.75rem;font-weight:600;cursor:pointer;color:#6b7280;transition:all .15s}.uk-tp-period-btn.active{background:#6366f1;border-color:#6366f1;color:#fff}.uk-tp-period-btn:hover:not(.active):not(:disabled){background:#e5e7eb}.uk-tp-period-btn:disabled{cursor:not-allowed;opacity:.4}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkTimepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-timepicker', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkTimepickerComponent),
                            multi: true
                        }], template: "<div class=\"uk-tp-wrapper\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-tp-control\" [class.disabled]=\"isDisabled()\">\n    <div class=\"uk-tp-col\">\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('hour')\" [disabled]=\"isDisabled()\">&#8963;</button>\n      <input\n        title=\"Hour {{ use24Hour() ? '' : '(in 12-hour format)' }}\"\n        type=\"text\"\n        class=\"uk-tp-input\"\n        [value]=\"padded(displayHour())\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onHourInput($event)\"\n        (blur)=\"validateHour()\"\n        maxlength=\"2\"\n      />\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('hour')\" [disabled]=\"isDisabled()\">&#8964;</button>\n    </div>\n    <span class=\"uk-tp-sep\">:</span>\n    <div class=\"uk-tp-col\">\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('minute')\" [disabled]=\"isDisabled()\">&#8963;</button>\n      <input\n        title=\"Minute {{ use24Hour() ? '' : '(in 12-hour format)' }}\"\n        type=\"text\"\n        class=\"uk-tp-input\"\n        [value]=\"padded(time().minute)\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onMinuteInput($event)\"\n        (blur)=\"validateMinute()\"\n        maxlength=\"2\"\n      />\n      <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('minute')\" [disabled]=\"isDisabled()\">&#8964;</button>\n    </div>\n    @if (showSeconds()) {\n      <span class=\"uk-tp-sep\">:</span>\n      <div class=\"uk-tp-col\">\n        <button type=\"button\" class=\"uk-tp-btn\" (click)=\"increment('second')\" [disabled]=\"isDisabled()\">&#8963;</button>\n        <input\n          title=\"Second {{ use24Hour() ? '' : '(in 12-hour format)' }}\"\n          type=\"text\"\n          class=\"uk-tp-input\"\n          [value]=\"padded(time().second ?? 0)\"\n          [disabled]=\"isDisabled()\"\n          (input)=\"onSecondInput($event)\"\n          maxlength=\"2\"\n        />\n        <button type=\"button\" class=\"uk-tp-btn\" (click)=\"decrement('second')\" [disabled]=\"isDisabled()\">&#8964;</button>\n      </div>\n    }\n    @if (!use24Hour()) {\n      <div class=\"uk-tp-period\">\n        <button\n          type=\"button\"\n          class=\"uk-tp-period-btn\"\n          [class.active]=\"time().period === 'AM'\"\n          (click)=\"setPeriod('AM')\"\n          [disabled]=\"isDisabled()\"\n        >AM</button>\n        <button\n          type=\"button\"\n          class=\"uk-tp-period-btn\"\n          [class.active]=\"time().period === 'PM'\"\n          (click)=\"setPeriod('PM')\"\n          [disabled]=\"isDisabled()\"\n        >PM</button>\n      </div>\n    }\n  </div>\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-tp-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-tp-control{display:inline-flex;align-items:center;gap:4px;border:1.5px solid #d1d5db;border-radius:8px;padding:6px 12px;background:#fff;transition:border-color .2s}.uk-tp-control:focus-within{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-tp-control.disabled{background:#f9fafb}.uk-tp-col{display:flex;flex-direction:column;align-items:center;gap:2px}.uk-tp-btn{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem;padding:2px 6px;border-radius:4px;line-height:1;transition:background .15s,color .15s}.uk-tp-btn:hover:not(:disabled){background:#f3f4f6;color:#374151}.uk-tp-btn:disabled{cursor:not-allowed;opacity:.4}.uk-tp-input{width:36px;text-align:center;border:none;outline:none;font-size:1.125rem;font-weight:600;color:#111827;background:transparent;padding:4px 2px}.uk-tp-input:disabled{color:#9ca3af}.uk-tp-sep{font-size:1.25rem;font-weight:600;color:#6b7280;align-self:center}.uk-tp-period{display:flex;flex-direction:column;gap:2px;margin-left:8px}.uk-tp-period-btn{background:#f3f4f6;border:1px solid #e5e7eb;border-radius:4px;padding:2px 8px;font-size:.75rem;font-weight:600;cursor:pointer;color:#6b7280;transition:all .15s}.uk-tp-period-btn.active{background:#6366f1;border-color:#6366f1;color:#fff}.uk-tp-period-btn:hover:not(.active):not(:disabled){background:#e5e7eb}.uk-tp-period-btn:disabled{cursor:not-allowed;opacity:.4}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], use24Hour: [{ type: i0.Input, args: [{ isSignal: true, alias: "use24Hour", required: false }] }], showSeconds: [{ type: i0.Input, args: [{ isSignal: true, alias: "showSeconds", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], timeChange: [{ type: i0.Output, args: ["timeChange"] }] } });

class UkCheckboxComponent {
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    indeterminate = input(false, ...(ngDevMode ? [{ debugName: "indeterminate" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    checkedChange = output();
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkCheckboxComponent, isStandalone: true, selector: "uk-checkbox", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, indeterminate: { classPropertyName: "indeterminate", publicName: "indeterminate", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checkedChange: "checkedChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkCheckboxComponent),
                multi: true
            }], ngImport: i0, template: "<label class=\"uk-cb-label\" [class.disabled]=\"isDisabled()\">\n  <span class=\"uk-cb-box-wrap\">\n    <input\n      type=\"checkbox\"\n      class=\"uk-cb-native\"\n      [checked]=\"checked()\"\n      [indeterminate]=\"indeterminate()\"\n      [disabled]=\"isDisabled()\"\n      (change)=\"onToggle($event)\"\n    />\n    <span class=\"uk-cb-box\" [class.checked]=\"checked()\" [class.indeterminate]=\"indeterminate()\">\n      @if (indeterminate()) { <span class=\"uk-cb-dash\">\u2014</span> }\n      @else if (checked()) { <span class=\"uk-cb-check\">\u2713</span> }\n    </span>\n  </span>\n  @if (label()) {\n    <span class=\"uk-cb-text\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </span>\n  }\n</label>\n@if (hint()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n@if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n", styles: [":host{display:inline-flex;flex-direction:column;gap:4px}.uk-cb-label{display:inline-flex;align-items:center;gap:10px;cursor:pointer;-webkit-user-select:none;user-select:none}.uk-cb-label.disabled{cursor:not-allowed;opacity:.5}.uk-cb-box-wrap{position:relative;flex-shrink:0}.uk-cb-native{position:absolute;opacity:0;width:0;height:0}.uk-cb-box{width:18px;height:18px;border:2px solid #d1d5db;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:all .15s;background:#fff}.uk-cb-box.checked,.uk-cb-box.indeterminate{background:#6366f1;border-color:#6366f1}.uk-cb-check{color:#fff;font-size:.6875rem;font-weight:700;line-height:1}.uk-cb-dash{color:#fff;font-size:.875rem;font-weight:700;line-height:1}.uk-cb-text{font-size:.9375rem;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-hint{font-size:.75rem;color:#6b7280;margin-left:28px}.uk-error{font-size:.75rem;color:#ef4444;margin-left:28px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-checkbox', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkCheckboxComponent),
                            multi: true
                        }], template: "<label class=\"uk-cb-label\" [class.disabled]=\"isDisabled()\">\n  <span class=\"uk-cb-box-wrap\">\n    <input\n      type=\"checkbox\"\n      class=\"uk-cb-native\"\n      [checked]=\"checked()\"\n      [indeterminate]=\"indeterminate()\"\n      [disabled]=\"isDisabled()\"\n      (change)=\"onToggle($event)\"\n    />\n    <span class=\"uk-cb-box\" [class.checked]=\"checked()\" [class.indeterminate]=\"indeterminate()\">\n      @if (indeterminate()) { <span class=\"uk-cb-dash\">\u2014</span> }\n      @else if (checked()) { <span class=\"uk-cb-check\">\u2713</span> }\n    </span>\n  </span>\n  @if (label()) {\n    <span class=\"uk-cb-text\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </span>\n  }\n</label>\n@if (hint()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n@if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n", styles: [":host{display:inline-flex;flex-direction:column;gap:4px}.uk-cb-label{display:inline-flex;align-items:center;gap:10px;cursor:pointer;-webkit-user-select:none;user-select:none}.uk-cb-label.disabled{cursor:not-allowed;opacity:.5}.uk-cb-box-wrap{position:relative;flex-shrink:0}.uk-cb-native{position:absolute;opacity:0;width:0;height:0}.uk-cb-box{width:18px;height:18px;border:2px solid #d1d5db;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:all .15s;background:#fff}.uk-cb-box.checked,.uk-cb-box.indeterminate{background:#6366f1;border-color:#6366f1}.uk-cb-check{color:#fff;font-size:.6875rem;font-weight:700;line-height:1}.uk-cb-dash{color:#fff;font-size:.875rem;font-weight:700;line-height:1}.uk-cb-text{font-size:.9375rem;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-hint{font-size:.75rem;color:#6b7280;margin-left:28px}.uk-error{font-size:.75rem;color:#ef4444;margin-left:28px}\n"] }]
        }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], indeterminate: [{ type: i0.Input, args: [{ isSignal: true, alias: "indeterminate", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], checkedChange: [{ type: i0.Output, args: ["checkedChange"] }] } });

class UkRadioGroupComponent {
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    options = input([], ...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    direction = input('vertical', ...(ngDevMode ? [{ debugName: "direction" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    selectionChange = output();
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkRadioGroupComponent, isStandalone: true, selector: "uk-radio-group", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, direction: { classPropertyName: "direction", publicName: "direction", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { selectionChange: "selectionChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkRadioGroupComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-rg-wrapper\">\n  @if (label()) {\n    <span class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </span>\n  }\n  <div class=\"uk-rg-options\" [class.horizontal]=\"direction() === 'horizontal'\">\n    @for (opt of options(); track opt.value) {\n      <label\n        class=\"uk-radio-label\"\n        [class.disabled]=\"isDisabled() || opt.disabled\"\n        [class.selected]=\"value() === opt.value\"\n      >\n        <input\n          type=\"radio\"\n          class=\"uk-radio-native\"\n          [name]=\"groupName\"\n          [value]=\"opt.value\"\n          [checked]=\"value() === opt.value\"\n          [disabled]=\"isDisabled() || !!opt.disabled\"\n          (change)=\"select(opt)\"\n        />\n        <span class=\"uk-radio-circle\">\n          @if (value() === opt.value) {\n            <span class=\"uk-radio-dot\"></span>\n          }\n        </span>\n        <span class=\"uk-radio-text\">{{ opt.label }}</span>\n      </label>\n    }\n  </div>\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-rg-wrapper{display:flex;flex-direction:column;gap:6px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-rg-options{display:flex;flex-direction:column;gap:10px}.uk-rg-options.horizontal{flex-direction:row;flex-wrap:wrap;gap:16px}.uk-radio-label{display:inline-flex;align-items:center;gap:10px;cursor:pointer;-webkit-user-select:none;user-select:none}.uk-radio-label.disabled{cursor:not-allowed;opacity:.5}.uk-radio-native{position:absolute;opacity:0;width:0;height:0}.uk-radio-circle{width:18px;height:18px;border:2px solid #d1d5db;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .15s;flex-shrink:0}.uk-radio-label.selected .uk-radio-circle{border-color:#6366f1}.uk-radio-dot{width:8px;height:8px;border-radius:50%;background:#6366f1;transition:all .15s}.uk-radio-text{font-size:.9375rem;color:#374151}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkRadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-radio-group', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkRadioGroupComponent),
                            multi: true
                        }], template: "<div class=\"uk-rg-wrapper\">\n  @if (label()) {\n    <span class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </span>\n  }\n  <div class=\"uk-rg-options\" [class.horizontal]=\"direction() === 'horizontal'\">\n    @for (opt of options(); track opt.value) {\n      <label\n        class=\"uk-radio-label\"\n        [class.disabled]=\"isDisabled() || opt.disabled\"\n        [class.selected]=\"value() === opt.value\"\n      >\n        <input\n          type=\"radio\"\n          class=\"uk-radio-native\"\n          [name]=\"groupName\"\n          [value]=\"opt.value\"\n          [checked]=\"value() === opt.value\"\n          [disabled]=\"isDisabled() || !!opt.disabled\"\n          (change)=\"select(opt)\"\n        />\n        <span class=\"uk-radio-circle\">\n          @if (value() === opt.value) {\n            <span class=\"uk-radio-dot\"></span>\n          }\n        </span>\n        <span class=\"uk-radio-text\">{{ opt.label }}</span>\n      </label>\n    }\n  </div>\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-rg-wrapper{display:flex;flex-direction:column;gap:6px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-rg-options{display:flex;flex-direction:column;gap:10px}.uk-rg-options.horizontal{flex-direction:row;flex-wrap:wrap;gap:16px}.uk-radio-label{display:inline-flex;align-items:center;gap:10px;cursor:pointer;-webkit-user-select:none;user-select:none}.uk-radio-label.disabled{cursor:not-allowed;opacity:.5}.uk-radio-native{position:absolute;opacity:0;width:0;height:0}.uk-radio-circle{width:18px;height:18px;border:2px solid #d1d5db;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .15s;flex-shrink:0}.uk-radio-label.selected .uk-radio-circle{border-color:#6366f1}.uk-radio-dot{width:8px;height:8px;border-radius:50%;background:#6366f1;transition:all .15s}.uk-radio-text{font-size:.9375rem;color:#374151}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: false }] }], direction: [{ type: i0.Input, args: [{ isSignal: true, alias: "direction", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], selectionChange: [{ type: i0.Output, args: ["selectionChange"] }] } });

class UkOtpInputComponent {
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    length = input(6, ...(ngDevMode ? [{ debugName: "length" }] : /* istanbul ignore next */ []));
    mask = input(false, ...(ngDevMode ? [{ debugName: "mask" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    separator = input('', ...(ngDevMode ? [{ debugName: "separator" }] : /* istanbul ignore next */ []));
    separatorAfter = input(3, ...(ngDevMode ? [{ debugName: "separatorAfter" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    errorMessage = input('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    completed = output();
    valueChange = output();
    inputRefs;
    digits = signal({}, ...(ngDevMode ? [{ debugName: "digits" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    focusedIndex = signal(-1, ...(ngDevMode ? [{ debugName: "focusedIndex" }] : /* istanbul ignore next */ []));
    get slots() { return Array.from({ length: this.length() }, (_, i) => i); }
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
            if (index < this.length() - 1)
                this.focusInput(index + 1);
        }
        this.emitChange();
    }
    onPaste(e) {
        e.preventDefault();
        const text = e.clipboardData?.getData('text') ?? '';
        const digits = text.replace(/\D/g, '').slice(0, this.length()).split('');
        const map = {};
        digits.forEach((d, i) => { map[i] = d; });
        this.digits.set(map);
        this.focusInput(Math.min(digits.length, this.length() - 1));
        this.emitChange();
    }
    emitChange() {
        const val = this.getOtpValue();
        this.onChange(val);
        this.valueChange.emit(val);
        if (val.length === this.length())
            this.completed.emit(val);
    }
    writeValue(val) {
        const map = {};
        (val ?? '').split('').slice(0, this.length()).forEach((c, i) => { map[i] = c; });
        this.digits.set(map);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(d) { this.isDisabled.set(d); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkOtpInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkOtpInputComponent, isStandalone: true, selector: "uk-otp-input", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, length: { classPropertyName: "length", publicName: "length", isSignal: true, isRequired: false, transformFunction: null }, mask: { classPropertyName: "mask", publicName: "mask", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, separator: { classPropertyName: "separator", publicName: "separator", isSignal: true, isRequired: false, transformFunction: null }, separatorAfter: { classPropertyName: "separatorAfter", publicName: "separatorAfter", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorMessage: { classPropertyName: "errorMessage", publicName: "errorMessage", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { completed: "completed", valueChange: "valueChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkOtpInputComponent),
                multi: true
            }], viewQueries: [{ propertyName: "inputRefs", predicate: ["otpInput"], descendants: true }], ngImport: i0, template: "<div class=\"uk-otp-wrapper\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-otp-boxes\" [class.error]=\"!!errorMessage()\">\n    @for (i of slots; track i) {\n      <input\n        title=\"Digit {{ i + 1 }} of {{ length() }}\"\n        #otpInput\n        [type]=\"mask() ? 'password' : 'text'\"\n        class=\"uk-otp-box\"\n        [value]=\"digits()[i] ?? ''\"\n        [disabled]=\"isDisabled()\"\n        maxlength=\"1\"\n        inputmode=\"numeric\"\n        autocomplete=\"one-time-code\"\n        (keydown)=\"onKeyDown($event, i)\"\n        (input)=\"onInput($event, i)\"\n        (paste)=\"onPaste($event)\"\n        (focus)=\"focusedIndex.set(i)\"\n      />\n      @if (separator() && i < length() - 1 && (i + 1) % separatorAfter() === 0) {\n        <span class=\"uk-otp-sep\">{{ separator() }}</span>\n      }\n    }\n  </div>\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-otp-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-otp-boxes{display:flex;align-items:center;gap:8px}.uk-otp-box{width:44px;height:52px;border:2px solid #d1d5db;border-radius:8px;text-align:center;font-size:1.375rem;font-weight:700;color:#111827;outline:none;transition:border-color .2s,box-shadow .2s;background:#fff}.uk-otp-box:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-otp-box:disabled{background:#f9fafb;cursor:not-allowed;color:#9ca3af}.uk-otp-boxes.error .uk-otp-box{border-color:#ef4444}.uk-otp-sep{font-size:1.25rem;color:#9ca3af;font-weight:600}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkOtpInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-otp-input', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkOtpInputComponent),
                            multi: true
                        }], template: "<div class=\"uk-otp-wrapper\">\n  @if (label()) {\n    <label class=\"uk-label\">\n      {{ label() }}\n      @if (required()) { <span class=\"uk-required\">*</span> }\n    </label>\n  }\n  <div class=\"uk-otp-boxes\" [class.error]=\"!!errorMessage()\">\n    @for (i of slots; track i) {\n      <input\n        title=\"Digit {{ i + 1 }} of {{ length() }}\"\n        #otpInput\n        [type]=\"mask() ? 'password' : 'text'\"\n        class=\"uk-otp-box\"\n        [value]=\"digits()[i] ?? ''\"\n        [disabled]=\"isDisabled()\"\n        maxlength=\"1\"\n        inputmode=\"numeric\"\n        autocomplete=\"one-time-code\"\n        (keydown)=\"onKeyDown($event, i)\"\n        (input)=\"onInput($event, i)\"\n        (paste)=\"onPaste($event)\"\n        (focus)=\"focusedIndex.set(i)\"\n      />\n      @if (separator() && i < length() - 1 && (i + 1) % separatorAfter() === 0) {\n        <span class=\"uk-otp-sep\">{{ separator() }}</span>\n      }\n    }\n  </div>\n  @if (hint() && !errorMessage()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n  @if (errorMessage()) { <span class=\"uk-error\">{{ errorMessage() }}</span> }\n</div>\n", styles: [".uk-otp-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-otp-boxes{display:flex;align-items:center;gap:8px}.uk-otp-box{width:44px;height:52px;border:2px solid #d1d5db;border-radius:8px;text-align:center;font-size:1.375rem;font-weight:700;color:#111827;outline:none;transition:border-color .2s,box-shadow .2s;background:#fff}.uk-otp-box:focus{border-color:#6366f1;box-shadow:0 0 0 3px #6366f126}.uk-otp-box:disabled{background:#f9fafb;cursor:not-allowed;color:#9ca3af}.uk-otp-boxes.error .uk-otp-box{border-color:#ef4444}.uk-otp-sep{font-size:1.25rem;color:#9ca3af;font-weight:600}.uk-hint{font-size:.75rem;color:#6b7280}.uk-error{font-size:.75rem;color:#ef4444}\n"] }]
        }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], length: [{ type: i0.Input, args: [{ isSignal: true, alias: "length", required: false }] }], mask: [{ type: i0.Input, args: [{ isSignal: true, alias: "mask", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], separator: [{ type: i0.Input, args: [{ isSignal: true, alias: "separator", required: false }] }], separatorAfter: [{ type: i0.Input, args: [{ isSignal: true, alias: "separatorAfter", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], errorMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], completed: [{ type: i0.Output, args: ["completed"] }], valueChange: [{ type: i0.Output, args: ["valueChange"] }], inputRefs: [{
                type: ViewChildren,
                args: ['otpInput']
            }] } });

class UkRangeComponent {
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    min = input(0, ...(ngDevMode ? [{ debugName: "min" }] : /* istanbul ignore next */ []));
    max = input(100, ...(ngDevMode ? [{ debugName: "max" }] : /* istanbul ignore next */ []));
    step = input(1, ...(ngDevMode ? [{ debugName: "step" }] : /* istanbul ignore next */ []));
    range = input(false, ...(ngDevMode ? [{ debugName: "range" }] : /* istanbul ignore next */ []));
    showValue = input(true, ...(ngDevMode ? [{ debugName: "showValue" }] : /* istanbul ignore next */ []));
    showTicks = input(true, ...(ngDevMode ? [{ debugName: "showTicks" }] : /* istanbul ignore next */ []));
    unit = input('', ...(ngDevMode ? [{ debugName: "unit" }] : /* istanbul ignore next */ []));
    required = input(false, ...(ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    valueChange = output();
    value = signal(0, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    lowValue = signal(0, ...(ngDevMode ? [{ debugName: "lowValue" }] : /* istanbul ignore next */ []));
    highValue = signal(100, ...(ngDevMode ? [{ debugName: "highValue" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    valuePercent = computed(() => ((this.value() - this.min()) / (this.max() - this.min())) * 100, ...(ngDevMode ? [{ debugName: "valuePercent" }] : /* istanbul ignore next */ []));
    lowPercent = computed(() => ((this.lowValue() - this.min()) / (this.max() - this.min())) * 100, ...(ngDevMode ? [{ debugName: "lowPercent" }] : /* istanbul ignore next */ []));
    highPercent = computed(() => ((this.highValue() - this.min()) / (this.max() - this.min())) * 100, ...(ngDevMode ? [{ debugName: "highPercent" }] : /* istanbul ignore next */ []));
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
        const v = Math.min(+e.target.value, this.highValue() - this.step());
        this.lowValue.set(v);
        this.emitRange();
    }
    onHighInput(e) {
        const v = Math.max(+e.target.value, this.lowValue() + this.step());
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkRangeComponent, isStandalone: true, selector: "uk-range", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, min: { classPropertyName: "min", publicName: "min", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, step: { classPropertyName: "step", publicName: "step", isSignal: true, isRequired: false, transformFunction: null }, range: { classPropertyName: "range", publicName: "range", isSignal: true, isRequired: false, transformFunction: null }, showValue: { classPropertyName: "showValue", publicName: "showValue", isSignal: true, isRequired: false, transformFunction: null }, showTicks: { classPropertyName: "showTicks", publicName: "showTicks", isSignal: true, isRequired: false, transformFunction: null }, unit: { classPropertyName: "unit", publicName: "unit", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChange: "valueChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkRangeComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-range-wrapper\">\n  @if (label()) {\n    <div class=\"uk-range-header\">\n      <label class=\"uk-label\">\n        {{ label() }}\n        @if (required()) { <span class=\"uk-required\">*</span> }\n      </label>\n      @if (showValue()) {\n        <span class=\"uk-range-val\">\n          @if (range()) { {{ lowValue() }} \u2013 {{ highValue() }} }\n          @else { {{ value() }} }\n          @if (unit()) { {{ unit() }} }\n        </span>\n      }\n    </div>\n  }\n  <div class=\"uk-range-track-wrap\" [class.disabled]=\"isDisabled()\">\n    @if (range()) {\n      <input\n        title=\"Minimum value\"\n        type=\"range\"\n        class=\"uk-range-input uk-range-low\"\n        [min]=\"min()\" [max]=\"max()\" [step]=\"step()\"\n        [value]=\"lowValue()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onLowInput($event)\"\n      />\n      <input\n        title=\"Maximum value\"\n        type=\"range\"\n        class=\"uk-range-input uk-range-high\"\n        [min]=\"min()\" [max]=\"max()\" [step]=\"step()\"\n        [value]=\"highValue()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onHighInput($event)\"\n      />\n      <div class=\"uk-range-track\">\n        <div class=\"uk-range-fill\" [style.left.%]=\"lowPercent()\" [style.width.%]=\"highPercent() - lowPercent()\"></div>\n      </div>\n    } @else {\n      <input\n        title=\"Select value\"\n        type=\"range\"\n        class=\"uk-range-input\"\n        [min]=\"min()\" [max]=\"max()\" [step]=\"step()\"\n        [value]=\"value()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onInput($event)\"\n      />\n      <div class=\"uk-range-track\">\n        <div class=\"uk-range-fill\" [style.width.%]=\"valuePercent()\"></div>\n      </div>\n    }\n  </div>\n  @if (showTicks()) {\n    <div class=\"uk-range-ticks\">\n      <span>{{ min() }}</span>\n      <span>{{ max() }}</span>\n    </div>\n  }\n  @if (hint()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n</div>\n", styles: [".uk-range-wrapper{display:flex;flex-direction:column;gap:8px}.uk-range-header{display:flex;justify-content:space-between;align-items:center}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-range-val{font-size:.875rem;font-weight:600;color:#6366f1}.uk-range-track-wrap{position:relative;height:20px;display:flex;align-items:center}.uk-range-track{position:absolute;left:0;right:0;height:6px;background:#e5e7eb;border-radius:3px;pointer-events:none}.uk-range-fill{position:absolute;height:100%;background:#6366f1;border-radius:3px;transition:width .1s,left .1s}.uk-range-input{position:absolute;width:100%;height:6px;opacity:0;cursor:pointer;z-index:2;-webkit-appearance:none;appearance:none;margin:0}.uk-range-input:disabled{cursor:not-allowed}.uk-range-track-wrap:not(.disabled):after{content:\"\";position:absolute;left:0;right:0;height:18px;display:flex;align-items:center}.uk-range-ticks{display:flex;justify-content:space-between}.uk-range-ticks span{font-size:.75rem;color:#9ca3af}.uk-hint{font-size:.75rem;color:#6b7280}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-range', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkRangeComponent),
                            multi: true
                        }], template: "<div class=\"uk-range-wrapper\">\n  @if (label()) {\n    <div class=\"uk-range-header\">\n      <label class=\"uk-label\">\n        {{ label() }}\n        @if (required()) { <span class=\"uk-required\">*</span> }\n      </label>\n      @if (showValue()) {\n        <span class=\"uk-range-val\">\n          @if (range()) { {{ lowValue() }} \u2013 {{ highValue() }} }\n          @else { {{ value() }} }\n          @if (unit()) { {{ unit() }} }\n        </span>\n      }\n    </div>\n  }\n  <div class=\"uk-range-track-wrap\" [class.disabled]=\"isDisabled()\">\n    @if (range()) {\n      <input\n        title=\"Minimum value\"\n        type=\"range\"\n        class=\"uk-range-input uk-range-low\"\n        [min]=\"min()\" [max]=\"max()\" [step]=\"step()\"\n        [value]=\"lowValue()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onLowInput($event)\"\n      />\n      <input\n        title=\"Maximum value\"\n        type=\"range\"\n        class=\"uk-range-input uk-range-high\"\n        [min]=\"min()\" [max]=\"max()\" [step]=\"step()\"\n        [value]=\"highValue()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onHighInput($event)\"\n      />\n      <div class=\"uk-range-track\">\n        <div class=\"uk-range-fill\" [style.left.%]=\"lowPercent()\" [style.width.%]=\"highPercent() - lowPercent()\"></div>\n      </div>\n    } @else {\n      <input\n        title=\"Select value\"\n        type=\"range\"\n        class=\"uk-range-input\"\n        [min]=\"min()\" [max]=\"max()\" [step]=\"step()\"\n        [value]=\"value()\"\n        [disabled]=\"isDisabled()\"\n        (input)=\"onInput($event)\"\n      />\n      <div class=\"uk-range-track\">\n        <div class=\"uk-range-fill\" [style.width.%]=\"valuePercent()\"></div>\n      </div>\n    }\n  </div>\n  @if (showTicks()) {\n    <div class=\"uk-range-ticks\">\n      <span>{{ min() }}</span>\n      <span>{{ max() }}</span>\n    </div>\n  }\n  @if (hint()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n</div>\n", styles: [".uk-range-wrapper{display:flex;flex-direction:column;gap:8px}.uk-range-header{display:flex;justify-content:space-between;align-items:center}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-required{color:#ef4444;margin-left:2px}.uk-range-val{font-size:.875rem;font-weight:600;color:#6366f1}.uk-range-track-wrap{position:relative;height:20px;display:flex;align-items:center}.uk-range-track{position:absolute;left:0;right:0;height:6px;background:#e5e7eb;border-radius:3px;pointer-events:none}.uk-range-fill{position:absolute;height:100%;background:#6366f1;border-radius:3px;transition:width .1s,left .1s}.uk-range-input{position:absolute;width:100%;height:6px;opacity:0;cursor:pointer;z-index:2;-webkit-appearance:none;appearance:none;margin:0}.uk-range-input:disabled{cursor:not-allowed}.uk-range-track-wrap:not(.disabled):after{content:\"\";position:absolute;left:0;right:0;height:18px;display:flex;align-items:center}.uk-range-ticks{display:flex;justify-content:space-between}.uk-range-ticks span{font-size:.75rem;color:#9ca3af}.uk-hint{font-size:.75rem;color:#6b7280}\n"] }]
        }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], min: [{ type: i0.Input, args: [{ isSignal: true, alias: "min", required: false }] }], max: [{ type: i0.Input, args: [{ isSignal: true, alias: "max", required: false }] }], step: [{ type: i0.Input, args: [{ isSignal: true, alias: "step", required: false }] }], range: [{ type: i0.Input, args: [{ isSignal: true, alias: "range", required: false }] }], showValue: [{ type: i0.Input, args: [{ isSignal: true, alias: "showValue", required: false }] }], showTicks: [{ type: i0.Input, args: [{ isSignal: true, alias: "showTicks", required: false }] }], unit: [{ type: i0.Input, args: [{ isSignal: true, alias: "unit", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], valueChange: [{ type: i0.Output, args: ["valueChange"] }] } });

class UkRatingComponent {
    label = input('', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    max = input(5, ...(ngDevMode ? [{ debugName: "max" }] : /* istanbul ignore next */ []));
    icon = input('star', ...(ngDevMode ? [{ debugName: "icon" }] : /* istanbul ignore next */ []));
    allowHalf = input(false, ...(ngDevMode ? [{ debugName: "allowHalf" }] : /* istanbul ignore next */ []));
    readonly = input(false, ...(ngDevMode ? [{ debugName: "readonly" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    showCount = input(false, ...(ngDevMode ? [{ debugName: "showCount" }] : /* istanbul ignore next */ []));
    hint = input('', ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    ratingChange = output();
    value = signal(0, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    hoverValue = signal(null, ...(ngDevMode ? [{ debugName: "hoverValue" }] : /* istanbul ignore next */ []));
    isDisabled = signal(false, ...(ngDevMode ? [{ debugName: "isDisabled" }] : /* istanbul ignore next */ []));
    get stars() { return Array.from({ length: this.max() }, (_, i) => i + 1); }
    onChange = (_) => { };
    onTouched = () => { };
    rate(star) {
        if (this.isDisabled() || this.readonly())
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkRatingComponent, isStandalone: true, selector: "uk-rating", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, allowHalf: { classPropertyName: "allowHalf", publicName: "allowHalf", isSignal: true, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, showCount: { classPropertyName: "showCount", publicName: "showCount", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { ratingChange: "ratingChange" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UkRatingComponent),
                multi: true
            }], ngImport: i0, template: "<div class=\"uk-rating-wrapper\">\n  @if (label()) {\n    <label class=\"uk-label\">{{ label() }}</label>\n  }\n  <div class=\"uk-rating-stars\" [class.disabled]=\"isDisabled()\" [class.readonly]=\"readonly()\">\n    @for (star of stars; track star) {\n      <button\n        type=\"button\"\n        class=\"uk-star\"\n        [class.filled]=\"star <= (hoverValue() ?? value())\"\n        [class.half]=\"allowHalf() && star - 0.5 === (hoverValue() ?? value())\"\n        [disabled]=\"isDisabled() || readonly()\"\n        (click)=\"rate(star)\"\n        (mouseenter)=\"hoverValue.set(star)\"\n        (mouseleave)=\"hoverValue.set(null)\"\n      >\n        @if (icon() === 'star') { \u2605 }\n        @else if (icon() === 'heart') { \u2665 }\n        @else { {{ icon() }} }\n      </button>\n    }\n    @if (showCount()) {\n      <span class=\"uk-rating-count\">{{ value() }}/{{ max() }}</span>\n    }\n  </div>\n  @if (hint()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n</div>\n", styles: [".uk-rating-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-rating-stars{display:flex;align-items:center;gap:4px}.uk-star{background:none;border:none;cursor:pointer;padding:2px;font-size:1.75rem;line-height:1;color:#d1d5db;transition:color .15s,transform .15s}.uk-star.filled{color:#f59e0b}.uk-star:hover:not(:disabled){transform:scale(1.15)}.uk-rating-stars.disabled .uk-star,.uk-rating-stars.readonly .uk-star{cursor:not-allowed}.uk-rating-stars.readonly .uk-star{cursor:default}.uk-rating-count{font-size:.875rem;color:#6b7280;margin-left:8px}.uk-hint{font-size:.75rem;color:#6b7280}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkRatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-rating', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UkRatingComponent),
                            multi: true
                        }], template: "<div class=\"uk-rating-wrapper\">\n  @if (label()) {\n    <label class=\"uk-label\">{{ label() }}</label>\n  }\n  <div class=\"uk-rating-stars\" [class.disabled]=\"isDisabled()\" [class.readonly]=\"readonly()\">\n    @for (star of stars; track star) {\n      <button\n        type=\"button\"\n        class=\"uk-star\"\n        [class.filled]=\"star <= (hoverValue() ?? value())\"\n        [class.half]=\"allowHalf() && star - 0.5 === (hoverValue() ?? value())\"\n        [disabled]=\"isDisabled() || readonly()\"\n        (click)=\"rate(star)\"\n        (mouseenter)=\"hoverValue.set(star)\"\n        (mouseleave)=\"hoverValue.set(null)\"\n      >\n        @if (icon() === 'star') { \u2605 }\n        @else if (icon() === 'heart') { \u2665 }\n        @else { {{ icon() }} }\n      </button>\n    }\n    @if (showCount()) {\n      <span class=\"uk-rating-count\">{{ value() }}/{{ max() }}</span>\n    }\n  </div>\n  @if (hint()) { <span class=\"uk-hint\">{{ hint() }}</span> }\n</div>\n", styles: [".uk-rating-wrapper{display:flex;flex-direction:column;gap:4px}.uk-label{font-size:.875rem;font-weight:500;color:#374151}.uk-rating-stars{display:flex;align-items:center;gap:4px}.uk-star{background:none;border:none;cursor:pointer;padding:2px;font-size:1.75rem;line-height:1;color:#d1d5db;transition:color .15s,transform .15s}.uk-star.filled{color:#f59e0b}.uk-star:hover:not(:disabled){transform:scale(1.15)}.uk-rating-stars.disabled .uk-star,.uk-rating-stars.readonly .uk-star{cursor:not-allowed}.uk-rating-stars.readonly .uk-star{cursor:default}.uk-rating-count{font-size:.875rem;color:#6b7280;margin-left:8px}.uk-hint{font-size:.75rem;color:#6b7280}\n"] }]
        }], propDecorators: { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], max: [{ type: i0.Input, args: [{ isSignal: true, alias: "max", required: false }] }], icon: [{ type: i0.Input, args: [{ isSignal: true, alias: "icon", required: false }] }], allowHalf: [{ type: i0.Input, args: [{ isSignal: true, alias: "allowHalf", required: false }] }], readonly: [{ type: i0.Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], showCount: [{ type: i0.Input, args: [{ isSignal: true, alias: "showCount", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], ratingChange: [{ type: i0.Output, args: ["ratingChange"] }] } });

class UkStepContentDirective {
    templateRef;
    stepIndex = input(0, { ...(ngDevMode ? { debugName: "stepIndex" } : /* istanbul ignore next */ {}), alias: 'ukStepContent' });
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkStepContentDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "21.2.9", type: UkStepContentDirective, isStandalone: true, selector: "[ukStepContent]", inputs: { stepIndex: { classPropertyName: "stepIndex", publicName: "ukStepContent", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkStepContentDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ukStepContent]', standalone: true }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { stepIndex: [{ type: i0.Input, args: [{ isSignal: true, alias: "ukStepContent", required: false }] }] } });
class UkStepperComponent {
    steps = input([], ...(ngDevMode ? [{ debugName: "steps" }] : /* istanbul ignore next */ []));
    direction = input('horizontal', ...(ngDevMode ? [{ debugName: "direction" }] : /* istanbul ignore next */ []));
    showNavigation = input(true, ...(ngDevMode ? [{ debugName: "showNavigation" }] : /* istanbul ignore next */ []));
    allowNavigation = input(false, ...(ngDevMode ? [{ debugName: "allowNavigation" }] : /* istanbul ignore next */ []));
    stepChange = output();
    finished = output();
    stepTemplates;
    currentStep = signal(0, ...(ngDevMode ? [{ debugName: "currentStep" }] : /* istanbul ignore next */ []));
    goTo(index) {
        this.currentStep.set(index);
        this.stepChange.emit(index);
    }
    next() {
        if (this.currentStep() < this.steps().length - 1) {
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkStepperComponent, isStandalone: true, selector: "uk-stepper", inputs: { steps: { classPropertyName: "steps", publicName: "steps", isSignal: true, isRequired: false, transformFunction: null }, direction: { classPropertyName: "direction", publicName: "direction", isSignal: true, isRequired: false, transformFunction: null }, showNavigation: { classPropertyName: "showNavigation", publicName: "showNavigation", isSignal: true, isRequired: false, transformFunction: null }, allowNavigation: { classPropertyName: "allowNavigation", publicName: "allowNavigation", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { stepChange: "stepChange", finished: "finished" }, queries: [{ propertyName: "stepTemplates", predicate: UkStepContentDirective }], ngImport: i0, template: "<div class=\"uk-stepper\" [class.vertical]=\"direction() === 'vertical'\">\n  <!-- Step Headers -->\n  <div class=\"uk-stepper-header\">\n    @for (step of steps(); track $index; let i = $index; let last = $last) {\n      <div\n        class=\"uk-step\"\n        [class.active]=\"currentStep() === i\"\n        [class.completed]=\"i < currentStep()\"\n        [class.clickable]=\"allowNavigation()\"\n        (click)=\"allowNavigation() ? goTo(i) : null\"\n      >\n        <div class=\"uk-step-indicator\">\n          <div class=\"uk-step-circle\">\n            @if (i < currentStep()) {\n              <span class=\"uk-step-check\">\u2713</span>\n            } @else if (step.icon && currentStep() !== i) {\n              <span>{{ step.icon }}</span>\n            } @else {\n              <span>{{ i + 1 }}</span>\n            }\n          </div>\n          @if (!last && direction() !== 'vertical') {\n            <div class=\"uk-step-line\" [class.done]=\"i < currentStep()\"></div>\n          }\n        </div>\n        <div class=\"uk-step-info\">\n          <span class=\"uk-step-label\">{{ step.label }}</span>\n          @if (step.description) {\n            <span class=\"uk-step-desc\">{{ step.description }}</span>\n          }\n          @if (step.optional) {\n            <span class=\"uk-step-optional\">Optional</span>\n          }\n        </div>\n      </div>\n    }\n  </div>\n\n  <!-- Step Content -->\n  <div class=\"uk-stepper-content\">\n    <ng-content />\n    @for (tmpl of stepTemplates; track $index) {\n      @if (tmpl.stepIndex() === currentStep()) {\n        <ng-container [ngTemplateOutlet]=\"tmpl.templateRef\" />\n      }\n    }\n  </div>\n\n  <!-- Navigation -->\n  @if (showNavigation()) {\n    <div class=\"uk-stepper-nav\">\n      <button\n        type=\"button\"\n        class=\"uk-step-btn uk-step-btn-back\"\n        [disabled]=\"currentStep() === 0\"\n        (click)=\"prev()\"\n      >&#8592; Back</button>\n      <div class=\"uk-step-progress\">{{ currentStep() + 1 }} of {{ steps().length }}</div>\n      @if (currentStep() < steps().length - 1) {\n        <button type=\"button\" class=\"uk-step-btn uk-step-btn-next\" (click)=\"next()\">\n          Next &#8594;\n        </button>\n      } @else {\n        <button type=\"button\" class=\"uk-step-btn uk-step-btn-finish\" (click)=\"finish()\">\n          Finish &#10003;\n        </button>\n      }\n    </div>\n  }\n</div>\n", styles: [".uk-stepper{display:flex;flex-direction:column;gap:24px}.uk-stepper-header{display:flex;align-items:flex-start;gap:0;overflow-x:auto}.uk-stepper.vertical .uk-stepper-header{flex-direction:column}.uk-step{display:flex;flex-direction:column;align-items:center;flex:1;min-width:80px}.uk-step.clickable{cursor:pointer}.uk-stepper.vertical .uk-step{flex-direction:row;gap:12px;flex:unset;align-items:flex-start;padding-bottom:16px}.uk-step-indicator{display:flex;flex-direction:column;align-items:center;width:100%}.uk-stepper.vertical .uk-step-indicator{flex-direction:column;width:auto}.uk-step-circle{width:36px;height:36px;border-radius:50%;border:2px solid #d1d5db;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:700;color:#9ca3af;background:#fff;transition:all .25s;flex-shrink:0;z-index:1}.uk-step.active .uk-step-circle{border-color:#6366f1;color:#6366f1;background:#ede9fe}.uk-step.completed .uk-step-circle{border-color:#6366f1;background:#6366f1;color:#fff}.uk-step-check{font-size:.875rem}.uk-step-line{flex:1;height:2px;background:#e5e7eb;width:100%;margin-top:-19px;transition:background .25s}.uk-step-line.done{background:#6366f1}.uk-step-info{display:flex;flex-direction:column;align-items:center;gap:2px;padding-top:8px}.uk-stepper.vertical .uk-step-info{align-items:flex-start;padding-top:6px}.uk-step-label{font-size:.8125rem;font-weight:600;color:#9ca3af;white-space:nowrap;transition:color .2s}.uk-step.active .uk-step-label{color:#6366f1}.uk-step.completed .uk-step-label{color:#374151}.uk-step-desc{font-size:.75rem;color:#9ca3af}.uk-step-optional{font-size:.6875rem;color:#9ca3af;font-style:italic}.uk-stepper-content{background:#fff;border:1.5px solid #e5e7eb;border-radius:10px;padding:24px;min-height:120px}.uk-stepper-nav{display:flex;align-items:center;justify-content:space-between;padding-top:8px}.uk-step-progress{font-size:.875rem;color:#9ca3af}.uk-step-btn{border:none;border-radius:8px;padding:.5rem 1.25rem;font-size:.9375rem;font-weight:600;cursor:pointer;transition:all .15s}.uk-step-btn:disabled{opacity:.4;cursor:not-allowed}.uk-step-btn-back{background:#f3f4f6;color:#374151}.uk-step-btn-back:hover:not(:disabled){background:#e5e7eb}.uk-step-btn-next{background:#6366f1;color:#fff}.uk-step-btn-next:hover{background:#4f46e5}.uk-step-btn-finish{background:#10b981;color:#fff}.uk-step-btn-finish:hover{background:#059669}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkStepperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-stepper', standalone: true, imports: [CommonModule, UkStepContentDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"uk-stepper\" [class.vertical]=\"direction() === 'vertical'\">\n  <!-- Step Headers -->\n  <div class=\"uk-stepper-header\">\n    @for (step of steps(); track $index; let i = $index; let last = $last) {\n      <div\n        class=\"uk-step\"\n        [class.active]=\"currentStep() === i\"\n        [class.completed]=\"i < currentStep()\"\n        [class.clickable]=\"allowNavigation()\"\n        (click)=\"allowNavigation() ? goTo(i) : null\"\n      >\n        <div class=\"uk-step-indicator\">\n          <div class=\"uk-step-circle\">\n            @if (i < currentStep()) {\n              <span class=\"uk-step-check\">\u2713</span>\n            } @else if (step.icon && currentStep() !== i) {\n              <span>{{ step.icon }}</span>\n            } @else {\n              <span>{{ i + 1 }}</span>\n            }\n          </div>\n          @if (!last && direction() !== 'vertical') {\n            <div class=\"uk-step-line\" [class.done]=\"i < currentStep()\"></div>\n          }\n        </div>\n        <div class=\"uk-step-info\">\n          <span class=\"uk-step-label\">{{ step.label }}</span>\n          @if (step.description) {\n            <span class=\"uk-step-desc\">{{ step.description }}</span>\n          }\n          @if (step.optional) {\n            <span class=\"uk-step-optional\">Optional</span>\n          }\n        </div>\n      </div>\n    }\n  </div>\n\n  <!-- Step Content -->\n  <div class=\"uk-stepper-content\">\n    <ng-content />\n    @for (tmpl of stepTemplates; track $index) {\n      @if (tmpl.stepIndex() === currentStep()) {\n        <ng-container [ngTemplateOutlet]=\"tmpl.templateRef\" />\n      }\n    }\n  </div>\n\n  <!-- Navigation -->\n  @if (showNavigation()) {\n    <div class=\"uk-stepper-nav\">\n      <button\n        type=\"button\"\n        class=\"uk-step-btn uk-step-btn-back\"\n        [disabled]=\"currentStep() === 0\"\n        (click)=\"prev()\"\n      >&#8592; Back</button>\n      <div class=\"uk-step-progress\">{{ currentStep() + 1 }} of {{ steps().length }}</div>\n      @if (currentStep() < steps().length - 1) {\n        <button type=\"button\" class=\"uk-step-btn uk-step-btn-next\" (click)=\"next()\">\n          Next &#8594;\n        </button>\n      } @else {\n        <button type=\"button\" class=\"uk-step-btn uk-step-btn-finish\" (click)=\"finish()\">\n          Finish &#10003;\n        </button>\n      }\n    </div>\n  }\n</div>\n", styles: [".uk-stepper{display:flex;flex-direction:column;gap:24px}.uk-stepper-header{display:flex;align-items:flex-start;gap:0;overflow-x:auto}.uk-stepper.vertical .uk-stepper-header{flex-direction:column}.uk-step{display:flex;flex-direction:column;align-items:center;flex:1;min-width:80px}.uk-step.clickable{cursor:pointer}.uk-stepper.vertical .uk-step{flex-direction:row;gap:12px;flex:unset;align-items:flex-start;padding-bottom:16px}.uk-step-indicator{display:flex;flex-direction:column;align-items:center;width:100%}.uk-stepper.vertical .uk-step-indicator{flex-direction:column;width:auto}.uk-step-circle{width:36px;height:36px;border-radius:50%;border:2px solid #d1d5db;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:700;color:#9ca3af;background:#fff;transition:all .25s;flex-shrink:0;z-index:1}.uk-step.active .uk-step-circle{border-color:#6366f1;color:#6366f1;background:#ede9fe}.uk-step.completed .uk-step-circle{border-color:#6366f1;background:#6366f1;color:#fff}.uk-step-check{font-size:.875rem}.uk-step-line{flex:1;height:2px;background:#e5e7eb;width:100%;margin-top:-19px;transition:background .25s}.uk-step-line.done{background:#6366f1}.uk-step-info{display:flex;flex-direction:column;align-items:center;gap:2px;padding-top:8px}.uk-stepper.vertical .uk-step-info{align-items:flex-start;padding-top:6px}.uk-step-label{font-size:.8125rem;font-weight:600;color:#9ca3af;white-space:nowrap;transition:color .2s}.uk-step.active .uk-step-label{color:#6366f1}.uk-step.completed .uk-step-label{color:#374151}.uk-step-desc{font-size:.75rem;color:#9ca3af}.uk-step-optional{font-size:.6875rem;color:#9ca3af;font-style:italic}.uk-stepper-content{background:#fff;border:1.5px solid #e5e7eb;border-radius:10px;padding:24px;min-height:120px}.uk-stepper-nav{display:flex;align-items:center;justify-content:space-between;padding-top:8px}.uk-step-progress{font-size:.875rem;color:#9ca3af}.uk-step-btn{border:none;border-radius:8px;padding:.5rem 1.25rem;font-size:.9375rem;font-weight:600;cursor:pointer;transition:all .15s}.uk-step-btn:disabled{opacity:.4;cursor:not-allowed}.uk-step-btn-back{background:#f3f4f6;color:#374151}.uk-step-btn-back:hover:not(:disabled){background:#e5e7eb}.uk-step-btn-next{background:#6366f1;color:#fff}.uk-step-btn-next:hover{background:#4f46e5}.uk-step-btn-finish{background:#10b981;color:#fff}.uk-step-btn-finish:hover{background:#059669}\n"] }]
        }], propDecorators: { steps: [{ type: i0.Input, args: [{ isSignal: true, alias: "steps", required: false }] }], direction: [{ type: i0.Input, args: [{ isSignal: true, alias: "direction", required: false }] }], showNavigation: [{ type: i0.Input, args: [{ isSignal: true, alias: "showNavigation", required: false }] }], allowNavigation: [{ type: i0.Input, args: [{ isSignal: true, alias: "allowNavigation", required: false }] }], stepChange: [{ type: i0.Output, args: ["stepChange"] }], finished: [{ type: i0.Output, args: ["finished"] }], stepTemplates: [{
                type: ContentChildren,
                args: [UkStepContentDirective]
            }] } });

class UkDynamicFormComponent {
    fb;
    fields = input([], ...(ngDevMode ? [{ debugName: "fields" }] : /* istanbul ignore next */ []));
    columns = input(1, ...(ngDevMode ? [{ debugName: "columns" }] : /* istanbul ignore next */ []));
    showActions = input(true, ...(ngDevMode ? [{ debugName: "showActions" }] : /* istanbul ignore next */ []));
    showReset = input(true, ...(ngDevMode ? [{ debugName: "showReset" }] : /* istanbul ignore next */ []));
    submitLabel = input('Submit', ...(ngDevMode ? [{ debugName: "submitLabel" }] : /* istanbul ignore next */ []));
    resetLabel = input('Reset', ...(ngDevMode ? [{ debugName: "resetLabel" }] : /* istanbul ignore next */ []));
    actionsAlign = input('right', ...(ngDevMode ? [{ debugName: "actionsAlign" }] : /* istanbul ignore next */ []));
    initialValues = input({}, ...(ngDevMode ? [{ debugName: "initialValues" }] : /* istanbul ignore next */ []));
    formSubmit = output();
    formChange = output();
    formReset = output();
    form;
    submitting = signal(false, ...(ngDevMode ? [{ debugName: "submitting" }] : /* istanbul ignore next */ []));
    sortedFields = computed(() => [...this.fields()].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)), ...(ngDevMode ? [{ debugName: "sortedFields" }] : /* istanbul ignore next */ []));
    constructor(fb) {
        this.fb = fb;
        effect(() => {
            // Read fields signal to track it — rebuild form when fields change (after first render)
            this.fields();
            untracked(() => {
                if (this.form)
                    this.buildForm();
            });
        });
        effect(() => {
            // React to initialValues changes
            const vals = this.initialValues();
            untracked(() => {
                if (this.form)
                    this.form.patchValue(vals);
            });
        });
    }
    ngOnInit() { this.buildForm(); }
    buildForm() {
        const controls = {};
        for (const field of this.fields()) {
            const validators = [];
            if (field.required)
                validators.push(Validators.required);
            for (const v of field.validators ?? []) {
                const vfn = this.toValidator(v);
                if (vfn)
                    validators.push(vfn);
            }
            const def = this.initialValues()[field.key] ?? field.defaultValue ?? (field.type === 'checkbox' ? false :
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
    INPUT_TYPES = new Set(['input', 'email', 'password', 'number', 'tel', 'url']);
    isInputField(type) {
        return this.INPUT_TYPES.has(type);
    }
    inputType(type) {
        return (type === 'input' ? 'text' : type);
    }
    getError(key) {
        const ctrl = this.form?.get(key);
        if (!ctrl || !ctrl.touched || !ctrl.errors)
            return '';
        const field = this.fields().find(f => f.key === key);
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkDynamicFormComponent, isStandalone: true, selector: "uk-dynamic-form", inputs: { fields: { classPropertyName: "fields", publicName: "fields", isSignal: true, isRequired: false, transformFunction: null }, columns: { classPropertyName: "columns", publicName: "columns", isSignal: true, isRequired: false, transformFunction: null }, showActions: { classPropertyName: "showActions", publicName: "showActions", isSignal: true, isRequired: false, transformFunction: null }, showReset: { classPropertyName: "showReset", publicName: "showReset", isSignal: true, isRequired: false, transformFunction: null }, submitLabel: { classPropertyName: "submitLabel", publicName: "submitLabel", isSignal: true, isRequired: false, transformFunction: null }, resetLabel: { classPropertyName: "resetLabel", publicName: "resetLabel", isSignal: true, isRequired: false, transformFunction: null }, actionsAlign: { classPropertyName: "actionsAlign", publicName: "actionsAlign", isSignal: true, isRequired: false, transformFunction: null }, initialValues: { classPropertyName: "initialValues", publicName: "initialValues", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { formSubmit: "formSubmit", formChange: "formChange", formReset: "formReset" }, ngImport: i0, template: "<form class=\"uk-dform\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"uk-dform-grid\" [class.two-col]=\"columns() === 2\" [class.three-col]=\"columns() === 3\">\n    @for (field of sortedFields(); track field.key) {\n      @if (!field.hidden) {\n        <div class=\"uk-dform-field\" [class]=\"field.class ?? ''\" [style.grid-column]=\"field.fullWidth ? '1 / -1' : null\">\n          @if (isInputField(field.type)) {\n            <uk-input\n              [formControlName]=\"field.key\"\n              [type]=\"inputType(field.type)\"\n              [label]=\"field.label\"\n              [placeholder]=\"field.placeholder ?? ''\"\n              [required]=\"!!field.required\"\n              [hint]=\"field.hint ?? ''\"\n              [errorMessage]=\"getError(field.key)\"\n            />\n          } @else {\n          @switch (field.type) {\n            @case ('textarea') {\n              <uk-textarea\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? ''\"\n                [required]=\"!!field.required\"\n                [rows]=\"field.rows ?? 4\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('select') {\n              <uk-select\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select'\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [searchable]=\"true\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('multiselect') {\n              <uk-multi-select\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select options'\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('checkbox') {\n              <uk-checkbox\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('radio') {\n              <uk-radio-group\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('date-range') {\n              <uk-date-range-picker\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select date range'\"\n                [required]=\"!!field.required\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('otp') {\n              <uk-otp-input\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [length]=\"field.otpLength ?? 6\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('range') {\n              <uk-range\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [min]=\"field.min ?? 0\"\n                [max]=\"field.max ?? 100\"\n                [step]=\"field.step ?? 1\"\n                [hint]=\"field.hint ?? ''\"\n              />\n            }\n            @case ('rating') {\n              <uk-rating\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [hint]=\"field.hint ?? ''\"\n              />\n            }\n            @case ('timepicker') {\n              <uk-timepicker\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n          }\n          }\n        </div>\n      }\n    }\n  </div>\n\n  @if (showActions()) {\n    <div class=\"uk-dform-actions\" [class]=\"actionsAlign()\">\n      @if (showReset()) {\n        <button type=\"button\" class=\"uk-dform-btn uk-dform-btn-reset\" (click)=\"onReset()\">\n          {{ resetLabel() }}\n        </button>\n      }\n      <button type=\"submit\" class=\"uk-dform-btn uk-dform-btn-submit\" [disabled]=\"submitting()\">\n        @if (submitting()) { <span class=\"uk-dform-spinner\"></span> }\n        {{ submitLabel() }}\n      </button>\n    </div>\n  }\n</form>\n", styles: [".uk-dform{display:flex;flex-direction:column;gap:20px}.uk-dform-grid{display:grid;grid-template-columns:1fr;gap:20px}.uk-dform-grid.two-col{grid-template-columns:repeat(2,1fr)}.uk-dform-grid.three-col{grid-template-columns:repeat(3,1fr)}@media(max-width:640px){.uk-dform-grid.two-col,.uk-dform-grid.three-col{grid-template-columns:1fr}}.uk-dform-actions{display:flex;gap:12px;padding-top:8px}.uk-dform-actions.center{justify-content:center}.uk-dform-actions.right{justify-content:flex-end}.uk-dform-actions.left{justify-content:flex-start}.uk-dform-btn{border:none;border-radius:8px;padding:.5625rem 1.5rem;font-size:.9375rem;font-weight:600;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:8px}.uk-dform-btn-submit{background:#6366f1;color:#fff}.uk-dform-btn-submit:hover:not(:disabled){background:#4f46e5}.uk-dform-btn-submit:disabled{background:#c7d2fe;cursor:not-allowed}.uk-dform-btn-reset{background:#f3f4f6;color:#374151}.uk-dform-btn-reset:hover{background:#e5e7eb}.uk-dform-spinner{width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:uk-spin .6s linear infinite}@keyframes uk-spin{to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: UkInputComponent, selector: "uk-input", inputs: ["label", "placeholder", "type", "size", "required", "disabled", "readonly", "clearable", "prefixIcon", "suffixIcon", "hint", "errorMessage", "maxlength", "minlength", "autocomplete", "id"], outputs: ["valueChange", "cleared"] }, { kind: "component", type: UkTextareaComponent, selector: "uk-textarea", inputs: ["label", "placeholder", "size", "rows", "required", "disabled", "readonly", "resizable", "hint", "errorMessage", "maxlength"], outputs: ["valueChange"] }, { kind: "component", type: UkSelectComponent, selector: "uk-select", inputs: ["label", "placeholder", "options", "size", "required", "disabled", "searchable", "hint", "errorMessage"], outputs: ["selectionChange"] }, { kind: "component", type: UkMultiSelectComponent, selector: "uk-multi-select", inputs: ["label", "placeholder", "options", "size", "required", "disabled", "showSelectAll", "hint", "errorMessage"], outputs: ["selectionChange"] }, { kind: "component", type: UkCheckboxComponent, selector: "uk-checkbox", inputs: ["label", "required", "disabled", "indeterminate", "hint", "errorMessage"], outputs: ["checkedChange"] }, { kind: "component", type: UkRadioGroupComponent, selector: "uk-radio-group", inputs: ["label", "options", "direction", "required", "disabled", "hint", "errorMessage"], outputs: ["selectionChange"] }, { kind: "component", type: UkDateRangePickerComponent, selector: "uk-date-range-picker", inputs: ["label", "placeholder", "required", "disabled", "minDate", "maxDate", "showPresets", "errorMessage", "format"], outputs: ["rangeChange"] }, { kind: "component", type: UkOtpInputComponent, selector: "uk-otp-input", inputs: ["label", "length", "mask", "required", "disabled", "separator", "separatorAfter", "hint", "errorMessage"], outputs: ["completed", "valueChange"] }, { kind: "component", type: UkRangeComponent, selector: "uk-range", inputs: ["label", "min", "max", "step", "range", "showValue", "showTicks", "unit", "required", "disabled", "hint"], outputs: ["valueChange"] }, { kind: "component", type: UkRatingComponent, selector: "uk-rating", inputs: ["label", "max", "icon", "allowHalf", "readonly", "disabled", "showCount", "hint"], outputs: ["ratingChange"] }, { kind: "component", type: UkTimepickerComponent, selector: "uk-timepicker", inputs: ["label", "use24Hour", "showSeconds", "required", "disabled", "hint", "errorMessage"], outputs: ["timeChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDynamicFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-dynamic-form', standalone: true, imports: [
                        CommonModule, ReactiveFormsModule,
                        UkInputComponent, UkTextareaComponent, UkSelectComponent,
                        UkMultiSelectComponent, UkCheckboxComponent, UkRadioGroupComponent,
                        UkDateRangePickerComponent, UkOtpInputComponent, UkRangeComponent,
                        UkRatingComponent, UkTimepickerComponent
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<form class=\"uk-dform\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"uk-dform-grid\" [class.two-col]=\"columns() === 2\" [class.three-col]=\"columns() === 3\">\n    @for (field of sortedFields(); track field.key) {\n      @if (!field.hidden) {\n        <div class=\"uk-dform-field\" [class]=\"field.class ?? ''\" [style.grid-column]=\"field.fullWidth ? '1 / -1' : null\">\n          @if (isInputField(field.type)) {\n            <uk-input\n              [formControlName]=\"field.key\"\n              [type]=\"inputType(field.type)\"\n              [label]=\"field.label\"\n              [placeholder]=\"field.placeholder ?? ''\"\n              [required]=\"!!field.required\"\n              [hint]=\"field.hint ?? ''\"\n              [errorMessage]=\"getError(field.key)\"\n            />\n          } @else {\n          @switch (field.type) {\n            @case ('textarea') {\n              <uk-textarea\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? ''\"\n                [required]=\"!!field.required\"\n                [rows]=\"field.rows ?? 4\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('select') {\n              <uk-select\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select'\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [searchable]=\"true\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('multiselect') {\n              <uk-multi-select\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select options'\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('checkbox') {\n              <uk-checkbox\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('radio') {\n              <uk-radio-group\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [options]=\"field.options ?? []\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('date-range') {\n              <uk-date-range-picker\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [placeholder]=\"field.placeholder ?? 'Select date range'\"\n                [required]=\"!!field.required\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('otp') {\n              <uk-otp-input\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [length]=\"field.otpLength ?? 6\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n            @case ('range') {\n              <uk-range\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [min]=\"field.min ?? 0\"\n                [max]=\"field.max ?? 100\"\n                [step]=\"field.step ?? 1\"\n                [hint]=\"field.hint ?? ''\"\n              />\n            }\n            @case ('rating') {\n              <uk-rating\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [hint]=\"field.hint ?? ''\"\n              />\n            }\n            @case ('timepicker') {\n              <uk-timepicker\n                [formControlName]=\"field.key\"\n                [label]=\"field.label\"\n                [required]=\"!!field.required\"\n                [hint]=\"field.hint ?? ''\"\n                [errorMessage]=\"getError(field.key)\"\n              />\n            }\n          }\n          }\n        </div>\n      }\n    }\n  </div>\n\n  @if (showActions()) {\n    <div class=\"uk-dform-actions\" [class]=\"actionsAlign()\">\n      @if (showReset()) {\n        <button type=\"button\" class=\"uk-dform-btn uk-dform-btn-reset\" (click)=\"onReset()\">\n          {{ resetLabel() }}\n        </button>\n      }\n      <button type=\"submit\" class=\"uk-dform-btn uk-dform-btn-submit\" [disabled]=\"submitting()\">\n        @if (submitting()) { <span class=\"uk-dform-spinner\"></span> }\n        {{ submitLabel() }}\n      </button>\n    </div>\n  }\n</form>\n", styles: [".uk-dform{display:flex;flex-direction:column;gap:20px}.uk-dform-grid{display:grid;grid-template-columns:1fr;gap:20px}.uk-dform-grid.two-col{grid-template-columns:repeat(2,1fr)}.uk-dform-grid.three-col{grid-template-columns:repeat(3,1fr)}@media(max-width:640px){.uk-dform-grid.two-col,.uk-dform-grid.three-col{grid-template-columns:1fr}}.uk-dform-actions{display:flex;gap:12px;padding-top:8px}.uk-dform-actions.center{justify-content:center}.uk-dform-actions.right{justify-content:flex-end}.uk-dform-actions.left{justify-content:flex-start}.uk-dform-btn{border:none;border-radius:8px;padding:.5625rem 1.5rem;font-size:.9375rem;font-weight:600;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:8px}.uk-dform-btn-submit{background:#6366f1;color:#fff}.uk-dform-btn-submit:hover:not(:disabled){background:#4f46e5}.uk-dform-btn-submit:disabled{background:#c7d2fe;cursor:not-allowed}.uk-dform-btn-reset{background:#f3f4f6;color:#374151}.uk-dform-btn-reset:hover{background:#e5e7eb}.uk-dform-spinner{width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:uk-spin .6s linear infinite}@keyframes uk-spin{to{transform:rotate(360deg)}}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }], propDecorators: { fields: [{ type: i0.Input, args: [{ isSignal: true, alias: "fields", required: false }] }], columns: [{ type: i0.Input, args: [{ isSignal: true, alias: "columns", required: false }] }], showActions: [{ type: i0.Input, args: [{ isSignal: true, alias: "showActions", required: false }] }], showReset: [{ type: i0.Input, args: [{ isSignal: true, alias: "showReset", required: false }] }], submitLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "submitLabel", required: false }] }], resetLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "resetLabel", required: false }] }], actionsAlign: [{ type: i0.Input, args: [{ isSignal: true, alias: "actionsAlign", required: false }] }], initialValues: [{ type: i0.Input, args: [{ isSignal: true, alias: "initialValues", required: false }] }], formSubmit: [{ type: i0.Output, args: ["formSubmit"] }], formChange: [{ type: i0.Output, args: ["formChange"] }], formReset: [{ type: i0.Output, args: ["formReset"] }] } });

class UkDynamicTableComponent {
    data = input([], ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    config = input({ columns: [] }, ...(ngDevMode ? [{ debugName: "config" }] : /* istanbul ignore next */ []));
    loading = input(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    rowKey = input((_, i) => i, ...(ngDevMode ? [{ debugName: "rowKey" }] : /* istanbul ignore next */ []));
    rowClickable = input(false, ...(ngDevMode ? [{ debugName: "rowClickable" }] : /* istanbul ignore next */ []));
    searchPlaceholder = input('Search...', ...(ngDevMode ? [{ debugName: "searchPlaceholder" }] : /* istanbul ignore next */ []));
    toolbarActions = input([], ...(ngDevMode ? [{ debugName: "toolbarActions" }] : /* istanbul ignore next */ []));
    rowClick = output();
    selectionChange = output();
    sortChange = output();
    pageChange = output();
    actionClick = output();
    toggleChange = output();
    Math = Math;
    searchQuery = signal('', ...(ngDevMode ? [{ debugName: "searchQuery" }] : /* istanbul ignore next */ []));
    sortKey = signal(null, ...(ngDevMode ? [{ debugName: "sortKey" }] : /* istanbul ignore next */ []));
    sortDir = signal(null, ...(ngDevMode ? [{ debugName: "sortDir" }] : /* istanbul ignore next */ []));
    currentPage = signal(1, ...(ngDevMode ? [{ debugName: "currentPage" }] : /* istanbul ignore next */ []));
    pageSize = signal(10, ...(ngDevMode ? [{ debugName: "pageSize" }] : /* istanbul ignore next */ []));
    selectedRows = signal([], ...(ngDevMode ? [{ debugName: "selectedRows" }] : /* istanbul ignore next */ []));
    _loading = signal(false, ...(ngDevMode ? [{ debugName: "_loading" }] : /* istanbul ignore next */ []));
    _data = signal([], ...(ngDevMode ? [{ debugName: "_data" }] : /* istanbul ignore next */ []));
    _config = signal({ columns: [] }, ...(ngDevMode ? [{ debugName: "_config" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            const l = this.loading();
            untracked(() => this._loading.set(l));
        });
        effect(() => {
            const cfg = this.config();
            untracked(() => {
                this._config.set(cfg);
                this.pageSize.set(cfg.pageSize ?? 10);
            });
        });
        effect(() => {
            const d = this.data();
            untracked(() => {
                this._data.set([...d]);
                this.currentPage.set(1);
                this.clearSelection();
            });
        });
    }
    visibleColumns = computed(() => this._config().columns.filter(c => c.show !== false), ...(ngDevMode ? [{ debugName: "visibleColumns" }] : /* istanbul ignore next */ []));
    filteredData = computed(() => {
        const data = this._data();
        const q = this.searchQuery().toLowerCase();
        let d = q
            ? data.filter(row => this.config().columns.some(col => {
                const v = this.getCellValue(row, col);
                return v != null && String(v).toLowerCase().includes(q);
            }))
            : [...data];
        const key = this.sortKey();
        const dir = this.sortDir();
        if (key && dir) {
            d = d.slice().sort((a, b) => {
                const av = this.getValueByPath(a, key);
                const bv = this.getValueByPath(b, key);
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
        if (!this.config().paginate)
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
        if (typeof col.key === 'function')
            return col.key(row);
        return this.getValueByPath(row, col.key);
    }
    getValueByPath(row, path) {
        return path.split('.').reduce((o, k) => o?.[k], row);
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
    sortByCol(col) {
        if (typeof col.key !== 'function')
            this.sort(col.key);
    }
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
    isActionVisible(act, row) {
        if (act.show === undefined || act.show === true)
            return true;
        if (act.show === false)
            return false;
        return act.show(row);
    }
    onActionClick(actionId, row, event) {
        event.stopPropagation();
        this.actionClick.emit({ action: actionId, row });
    }
    onToggle(col, row, event) {
        event.stopPropagation();
        if (typeof col.key === 'function')
            return;
        const checked = event.target.checked;
        const parts = col.key.split('.');
        let obj = row;
        for (let i = 0; i < parts.length - 1; i++) {
            obj = obj[parts[i]];
        }
        obj[parts[parts.length - 1]] = checked;
        this.toggleChange.emit({ key: col.key, value: checked, row });
    }
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkDynamicTableComponent, isStandalone: true, selector: "uk-dynamic-table", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null }, config: { classPropertyName: "config", publicName: "config", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, rowKey: { classPropertyName: "rowKey", publicName: "rowKey", isSignal: true, isRequired: false, transformFunction: null }, rowClickable: { classPropertyName: "rowClickable", publicName: "rowClickable", isSignal: true, isRequired: false, transformFunction: null }, searchPlaceholder: { classPropertyName: "searchPlaceholder", publicName: "searchPlaceholder", isSignal: true, isRequired: false, transformFunction: null }, toolbarActions: { classPropertyName: "toolbarActions", publicName: "toolbarActions", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { rowClick: "rowClick", selectionChange: "selectionChange", sortChange: "sortChange", pageChange: "pageChange", actionClick: "actionClick", toggleChange: "toggleChange" }, ngImport: i0, template: "<div class=\"uk-table-container\">\n  @if (config().searchable || toolbarActions().length > 0) {\n    <div class=\"uk-table-toolbar\">\n      @if (config().searchable) {\n        <div class=\"uk-table-search\">\n          <span class=\"uk-table-search-icon\">&#128269;</span>\n          <input\n            title=\"Search in table\"\n            type=\"text\"\n            class=\"uk-table-search-input\"\n            [placeholder]=\"searchPlaceholder()\"\n            [value]=\"searchQuery()\"\n            (input)=\"onSearch($event)\"\n          />\n          @if (searchQuery()) {\n            <button class=\"uk-table-search-clear\" (click)=\"clearSearch()\">&#x2715;</button>\n          }\n        </div>\n      }\n      <div class=\"uk-table-toolbar-actions\">\n        <ng-content select=\"[ukTableActions]\" />\n      </div>\n      @if (config().selectable && selectedRows().length > 0) {\n        <div class=\"uk-table-selection-info\">\n          {{ selectedRows().length }} selected\n          <button class=\"uk-table-clear-sel\" (click)=\"clearSelection()\">Clear</button>\n        </div>\n      }\n    </div>\n  }\n\n  <div class=\"uk-table-scroll\">\n    <table class=\"uk-table\" [class.striped]=\"config().striped\" [class.sticky-header]=\"config().stickyHeader\">\n      <thead>\n        <tr>\n          @if (config().selectable) {\n            <th class=\"uk-th uk-th-check\">\n              <span class=\"uk-check-box\" [class.checked]=\"allSelected()\" (click)=\"toggleAll()\">\n                @if (allSelected()) { \u2713 } @else if (someSelected()) { \u2014 }\n              </span>\n            </th>\n          }\n          @for (col of visibleColumns(); track col.header) {\n            <th\n              class=\"uk-th\"\n              [class.sortable]=\"col.sortable && typeof col.key !== 'function'\"\n              [class.sorted-asc]=\"typeof col.key !== 'function' && sortKey() === col.key && sortDir() === 'asc'\"\n              [class.sorted-desc]=\"typeof col.key !== 'function' && sortKey() === col.key && sortDir() === 'desc'\"\n              [style.width]=\"col.width ?? null\"\n              [style.text-align]=\"col.align ?? 'left'\"\n              (click)=\"col.sortable && sortByCol(col)\"\n            >\n              {{ col.header }}\n              @if (col.sortable) {\n                <span class=\"uk-sort-icon\">\n                  {{ sortKey() === col.key ? (sortDir() === 'asc' ? '\u2191' : '\u2193') : '\u21C5' }}\n                </span>\n              }\n            </th>\n          }\n          @if (config().rowActions?.length) {\n            <th class=\"uk-th uk-th-actions\">Actions</th>\n          }\n        </tr>\n      </thead>\n      <tbody>\n        @if (isLoading()) {\n          <tr>\n            <td [attr.colspan]=\"visibleColumns().length + (config().selectable ? 1 : 0) + (config().rowActions?.length ? 1 : 0)\" class=\"uk-td-center\">\n              <div class=\"uk-table-loading\">\n                <div class=\"uk-spinner\"></div>\n                <span>Loading...</span>\n              </div>\n            </td>\n          </tr>\n        } @else if (pagedData().length === 0) {\n          <tr>\n            <td [attr.colspan]=\"visibleColumns().length + (config().selectable ? 1 : 0) + (config().rowActions?.length ? 1 : 0)\" class=\"uk-td-center uk-td-empty\">\n              {{ config().emptyText ?? 'No data available' }}\n            </td>\n          </tr>\n        } @else {\n          @for (row of pagedData(); track rowKey()(row, $index)) {\n            <tr\n              class=\"uk-tr\"\n              [class.selected]=\"isSelected(row)\"\n              [class.clickable]=\"rowClickable()\"\n              (click)=\"onRowClick(row)\"\n            >\n              @if (config().selectable) {\n                <td class=\"uk-td uk-td-check\" (click)=\"$event.stopPropagation(); toggleRow(row)\">\n                  <span class=\"uk-check-box\" [class.checked]=\"isSelected(row)\">\n                    @if (isSelected(row)) { \u2713 }\n                  </span>\n                </td>\n              }\n              @for (col of visibleColumns(); track col.header) {\n                <td class=\"uk-td\" [style.text-align]=\"col.align ?? 'left'\">\n                  @switch (col.type) {\n                    @case ('boolean') {\n                      <span class=\"uk-badge\" [class.uk-badge-success]=\"getCellValue(row, col)\" [class.uk-badge-neutral]=\"!getCellValue(row, col)\">\n                        {{ getCellValue(row, col) ? 'Yes' : 'No' }}\n                      </span>\n                    }\n                    @case ('toggle') {\n                      <label class=\"uk-toggle\" (click)=\"$event.stopPropagation()\">\n                        <input\n                          title=\"Toggle {{ col.header }}\"\n                          type=\"checkbox\"\n                          [attr.aria-label]=\"col.header\"\n                          [checked]=\"!!getCellValue(row, col)\"\n                          (change)=\"onToggle(col, row, $event)\"\n                        />\n                        <span class=\"uk-toggle-slider\"></span>\n                      </label>\n                    }\n                    @case ('badge') {\n                      <span class=\"uk-badge\" [class]=\"getBadgeClass(col, getCellValue(row, col))\">\n                        {{ getCellValue(row, col) }}\n                      </span>\n                    }\n                    @case ('date') {\n                      {{ formatDate(getCellValue(row, col)) }}\n                    }\n                    @case ('actions') {\n                      <div class=\"uk-td-actions\">\n                        @if (col.cellTemplate) {\n                          <ng-container *ngTemplateOutlet=\"$any(col.cellTemplate); context: { $implicit: row }\" />\n                        }\n                      </div>\n                    }\n                    @default {\n                      {{ col.format ? col.format(getCellValue(row, col), row) : getCellValue(row, col) }}\n                    }\n                  }\n                </td>\n              }\n              @if (config().rowActions?.length) {\n                <td class=\"uk-td uk-td-actions\">\n                  @for (act of config().rowActions!; track act.id) {\n                    @if (isActionVisible(act, row)) {\n                      <button\n                        type=\"button\"\n                        [class]=\"'uk-action-btn uk-action-btn--' + (act.variant ?? 'default')\"\n                        [title]=\"act.label\"\n                        (click)=\"onActionClick(act.id, row, $event)\"\n                      >\n                        @if (act.icon) {\n                          <i class=\"bi bi-{{ act.icon }}\"></i>\n                        } @else {\n                          {{ act.label }}\n                        }\n                      </button>\n                    }\n                  }\n                </td>\n              }\n            </tr>\n          }\n        }\n      </tbody>\n    </table>\n  </div>\n\n  @if (config().paginate && totalPages() > 1) {\n    <div class=\"uk-table-pagination\">\n      <div class=\"uk-page-size\">\n        <span>Rows per page:</span>\n        <select title=\"Select page size\" class=\"uk-page-size-select\" [value]=\"pageSize()\" (change)=\"onPageSizeChange($event)\">\n          @for (size of config().pageSizeOptions ?? [10, 25, 50, 100]; track size) {\n            <option [value]=\"size\">{{ size }}</option>\n          }\n        </select>\n      </div>\n      <span class=\"uk-page-info\">\n        {{ (currentPage() - 1) * pageSize() + 1 }}\u2013{{ Math.min(currentPage() * pageSize(), filteredData().length) }}\n        of {{ filteredData().length }}\n      </span>\n      <div class=\"uk-page-nav\">\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === 1\" (click)=\"goToPage(1)\">\u00AB</button>\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === 1\" (click)=\"prevPage()\">\u2039</button>\n        @for (p of pageNumbers(); track p) {\n          <button\n            class=\"uk-page-btn\"\n            [class.active]=\"p === currentPage()\"\n            [class.ellipsis]=\"p === -1\"\n            [disabled]=\"p === -1\"\n            (click)=\"p !== -1 ? goToPage(p) : null\"\n          >{{ p === -1 ? '...' : p }}</button>\n        }\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === totalPages()\" (click)=\"nextPage()\">\u203A</button>\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === totalPages()\" (click)=\"goToPage(totalPages())\">\u00BB</button>\n      </div>\n    </div>\n  }\n</div>\n", styles: [".uk-table-container{display:flex;flex-direction:column;gap:0;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden}.uk-table-toolbar{display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid #e5e7eb;background:#fff;flex-wrap:wrap}.uk-table-search{position:relative;display:flex;align-items:center;flex:1;max-width:340px}.uk-table-search-icon{position:absolute;left:10px;color:#9ca3af;font-size:.875rem}.uk-table-search-input{width:100%;border:1.5px solid #e5e7eb;border-radius:8px;padding:.4375rem 2rem .4375rem 2.25rem;font-size:.875rem;outline:none;transition:border-color .2s}.uk-table-search-input:focus{border-color:#6366f1}.uk-table-search-clear{position:absolute;right:8px;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem}.uk-table-search-clear:hover{color:#374151}.uk-table-toolbar-actions{display:flex;gap:8px;margin-left:auto}.uk-table-selection-info{display:flex;align-items:center;gap:8px;font-size:.875rem;color:#6366f1;font-weight:500;background:#ede9fe;padding:4px 12px;border-radius:20px}.uk-table-clear-sel{background:none;border:none;cursor:pointer;color:#6366f1;font-size:.8125rem;text-decoration:underline}.uk-table-scroll{overflow-x:auto}.uk-table{width:100%;border-collapse:collapse;background:#fff;font-size:.9375rem}.uk-th{padding:12px 16px;text-align:left;font-size:.8125rem;font-weight:700;color:#6b7280;background:#f9fafb;border-bottom:2px solid #e5e7eb;white-space:nowrap;text-transform:uppercase;letter-spacing:.05em;position:relative;-webkit-user-select:none;user-select:none}.uk-th.sortable{cursor:pointer}.uk-th.sortable:hover{background:#f3f4f6;color:#374151}.uk-th.sorted-asc,.uk-th.sorted-desc{color:#6366f1;background:#f5f3ff}.uk-th-check{width:48px}.uk-sort-icon{margin-left:6px;font-size:.75rem}.uk-table.sticky-header .uk-th{position:sticky;top:0;z-index:10}.uk-tr{transition:background .12s;border-bottom:1px solid #f3f4f6}.uk-tr:last-child{border-bottom:none}.uk-tr:hover{background:#fafafa}.uk-tr.selected{background:#f5f3ff}.uk-tr.clickable{cursor:pointer}.uk-table.striped .uk-tr:nth-child(2n){background:#fafafa}.uk-table.striped .uk-tr:nth-child(2n).selected{background:#f5f3ff}.uk-td{padding:12px 16px;color:#374151}.uk-td-check{width:48px}.uk-td-center{text-align:center;padding:32px 16px}.uk-td-empty{color:#9ca3af;font-size:.9375rem}.uk-td-actions{display:flex;gap:6px;align-items:center}.uk-th-actions{text-align:center!important;width:120px}.uk-toggle{position:relative;display:inline-flex;align-items:center;cursor:pointer}.uk-toggle input{opacity:0;width:0;height:0;position:absolute}.uk-toggle input:checked+.uk-toggle-slider{background:#6366f1}.uk-toggle input:checked+.uk-toggle-slider:before{transform:translate(18px)}.uk-toggle input:focus-visible+.uk-toggle-slider{outline:2px solid #6366f1;outline-offset:2px}.uk-toggle-slider{position:relative;display:inline-block;width:38px;height:20px;background:#d1d5db;border-radius:20px;transition:background .2s}.uk-toggle-slider:before{content:\"\";position:absolute;top:2px;left:2px;width:16px;height:16px;background:#fff;border-radius:50%;transition:transform .2s;box-shadow:0 1px 3px #0003}.uk-action-btn{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:6px;border:1.5px solid transparent;background:transparent;cursor:pointer;font-size:.875rem;transition:background .15s,color .15s,border-color .15s;color:#6b7280}.uk-action-btn:hover{background:#f3f4f6;color:#374151}.uk-action-btn.uk-action-btn--default{color:#6b7280}.uk-action-btn.uk-action-btn--default:hover{background:#f3f4f6;color:#374151;border-color:#d1d5db}.uk-action-btn.uk-action-btn--primary{color:#6366f1}.uk-action-btn.uk-action-btn--primary:hover{background:#eef2ff;border-color:#a5b4fc}.uk-action-btn.uk-action-btn--success{color:#16a34a}.uk-action-btn.uk-action-btn--success:hover{background:#dcfce7;border-color:#86efac}.uk-action-btn.uk-action-btn--danger{color:#dc2626}.uk-action-btn.uk-action-btn--danger:hover{background:#fee2e2;border-color:#fca5a5}.uk-action-btn.uk-action-btn--warning{color:#d97706}.uk-action-btn.uk-action-btn--warning:hover{background:#fef3c7;border-color:#fcd34d}.uk-check-box{width:18px;height:18px;border:2px solid #d1d5db;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.625rem;transition:all .15s}.uk-check-box.checked{background:#6366f1;border-color:#6366f1;color:#fff}.uk-badge{display:inline-flex;align-items:center;padding:2px 10px;border-radius:20px;font-size:.75rem;font-weight:600}.uk-badge-success{background:#dcfce7;color:#16a34a}.uk-badge-neutral{background:#f3f4f6;color:#6b7280}.uk-table-loading{display:flex;flex-direction:column;align-items:center;gap:12px;color:#9ca3af}.uk-spinner{width:28px;height:28px;border:3px solid #e5e7eb;border-top-color:#6366f1;border-radius:50%;animation:uk-spin .7s linear infinite}@keyframes uk-spin{to{transform:rotate(360deg)}}.uk-table-pagination{display:flex;align-items:center;gap:12px;padding:12px 16px;border-top:1px solid #e5e7eb;background:#fff;flex-wrap:wrap}.uk-page-size{display:flex;align-items:center;gap:8px;font-size:.875rem;color:#6b7280}.uk-page-size-select{border:1px solid #e5e7eb;border-radius:6px;padding:4px 8px;font-size:.875rem;outline:none;cursor:pointer}.uk-page-info{font-size:.875rem;color:#6b7280;margin-left:auto}.uk-page-nav{display:flex;gap:4px}.uk-page-btn{min-width:32px;height:32px;border:1.5px solid #e5e7eb;border-radius:6px;background:#fff;cursor:pointer;font-size:.875rem;color:#374151;display:flex;align-items:center;justify-content:center;transition:all .15s;padding:0 6px}.uk-page-btn:hover:not(:disabled){border-color:#6366f1;color:#6366f1}.uk-page-btn.active{background:#6366f1;border-color:#6366f1;color:#fff}.uk-page-btn:disabled{opacity:.4;cursor:not-allowed}.uk-page-btn.ellipsis{border:none;cursor:default}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDynamicTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-dynamic-table', standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"uk-table-container\">\n  @if (config().searchable || toolbarActions().length > 0) {\n    <div class=\"uk-table-toolbar\">\n      @if (config().searchable) {\n        <div class=\"uk-table-search\">\n          <span class=\"uk-table-search-icon\">&#128269;</span>\n          <input\n            title=\"Search in table\"\n            type=\"text\"\n            class=\"uk-table-search-input\"\n            [placeholder]=\"searchPlaceholder()\"\n            [value]=\"searchQuery()\"\n            (input)=\"onSearch($event)\"\n          />\n          @if (searchQuery()) {\n            <button class=\"uk-table-search-clear\" (click)=\"clearSearch()\">&#x2715;</button>\n          }\n        </div>\n      }\n      <div class=\"uk-table-toolbar-actions\">\n        <ng-content select=\"[ukTableActions]\" />\n      </div>\n      @if (config().selectable && selectedRows().length > 0) {\n        <div class=\"uk-table-selection-info\">\n          {{ selectedRows().length }} selected\n          <button class=\"uk-table-clear-sel\" (click)=\"clearSelection()\">Clear</button>\n        </div>\n      }\n    </div>\n  }\n\n  <div class=\"uk-table-scroll\">\n    <table class=\"uk-table\" [class.striped]=\"config().striped\" [class.sticky-header]=\"config().stickyHeader\">\n      <thead>\n        <tr>\n          @if (config().selectable) {\n            <th class=\"uk-th uk-th-check\">\n              <span class=\"uk-check-box\" [class.checked]=\"allSelected()\" (click)=\"toggleAll()\">\n                @if (allSelected()) { \u2713 } @else if (someSelected()) { \u2014 }\n              </span>\n            </th>\n          }\n          @for (col of visibleColumns(); track col.header) {\n            <th\n              class=\"uk-th\"\n              [class.sortable]=\"col.sortable && typeof col.key !== 'function'\"\n              [class.sorted-asc]=\"typeof col.key !== 'function' && sortKey() === col.key && sortDir() === 'asc'\"\n              [class.sorted-desc]=\"typeof col.key !== 'function' && sortKey() === col.key && sortDir() === 'desc'\"\n              [style.width]=\"col.width ?? null\"\n              [style.text-align]=\"col.align ?? 'left'\"\n              (click)=\"col.sortable && sortByCol(col)\"\n            >\n              {{ col.header }}\n              @if (col.sortable) {\n                <span class=\"uk-sort-icon\">\n                  {{ sortKey() === col.key ? (sortDir() === 'asc' ? '\u2191' : '\u2193') : '\u21C5' }}\n                </span>\n              }\n            </th>\n          }\n          @if (config().rowActions?.length) {\n            <th class=\"uk-th uk-th-actions\">Actions</th>\n          }\n        </tr>\n      </thead>\n      <tbody>\n        @if (isLoading()) {\n          <tr>\n            <td [attr.colspan]=\"visibleColumns().length + (config().selectable ? 1 : 0) + (config().rowActions?.length ? 1 : 0)\" class=\"uk-td-center\">\n              <div class=\"uk-table-loading\">\n                <div class=\"uk-spinner\"></div>\n                <span>Loading...</span>\n              </div>\n            </td>\n          </tr>\n        } @else if (pagedData().length === 0) {\n          <tr>\n            <td [attr.colspan]=\"visibleColumns().length + (config().selectable ? 1 : 0) + (config().rowActions?.length ? 1 : 0)\" class=\"uk-td-center uk-td-empty\">\n              {{ config().emptyText ?? 'No data available' }}\n            </td>\n          </tr>\n        } @else {\n          @for (row of pagedData(); track rowKey()(row, $index)) {\n            <tr\n              class=\"uk-tr\"\n              [class.selected]=\"isSelected(row)\"\n              [class.clickable]=\"rowClickable()\"\n              (click)=\"onRowClick(row)\"\n            >\n              @if (config().selectable) {\n                <td class=\"uk-td uk-td-check\" (click)=\"$event.stopPropagation(); toggleRow(row)\">\n                  <span class=\"uk-check-box\" [class.checked]=\"isSelected(row)\">\n                    @if (isSelected(row)) { \u2713 }\n                  </span>\n                </td>\n              }\n              @for (col of visibleColumns(); track col.header) {\n                <td class=\"uk-td\" [style.text-align]=\"col.align ?? 'left'\">\n                  @switch (col.type) {\n                    @case ('boolean') {\n                      <span class=\"uk-badge\" [class.uk-badge-success]=\"getCellValue(row, col)\" [class.uk-badge-neutral]=\"!getCellValue(row, col)\">\n                        {{ getCellValue(row, col) ? 'Yes' : 'No' }}\n                      </span>\n                    }\n                    @case ('toggle') {\n                      <label class=\"uk-toggle\" (click)=\"$event.stopPropagation()\">\n                        <input\n                          title=\"Toggle {{ col.header }}\"\n                          type=\"checkbox\"\n                          [attr.aria-label]=\"col.header\"\n                          [checked]=\"!!getCellValue(row, col)\"\n                          (change)=\"onToggle(col, row, $event)\"\n                        />\n                        <span class=\"uk-toggle-slider\"></span>\n                      </label>\n                    }\n                    @case ('badge') {\n                      <span class=\"uk-badge\" [class]=\"getBadgeClass(col, getCellValue(row, col))\">\n                        {{ getCellValue(row, col) }}\n                      </span>\n                    }\n                    @case ('date') {\n                      {{ formatDate(getCellValue(row, col)) }}\n                    }\n                    @case ('actions') {\n                      <div class=\"uk-td-actions\">\n                        @if (col.cellTemplate) {\n                          <ng-container *ngTemplateOutlet=\"$any(col.cellTemplate); context: { $implicit: row }\" />\n                        }\n                      </div>\n                    }\n                    @default {\n                      {{ col.format ? col.format(getCellValue(row, col), row) : getCellValue(row, col) }}\n                    }\n                  }\n                </td>\n              }\n              @if (config().rowActions?.length) {\n                <td class=\"uk-td uk-td-actions\">\n                  @for (act of config().rowActions!; track act.id) {\n                    @if (isActionVisible(act, row)) {\n                      <button\n                        type=\"button\"\n                        [class]=\"'uk-action-btn uk-action-btn--' + (act.variant ?? 'default')\"\n                        [title]=\"act.label\"\n                        (click)=\"onActionClick(act.id, row, $event)\"\n                      >\n                        @if (act.icon) {\n                          <i class=\"bi bi-{{ act.icon }}\"></i>\n                        } @else {\n                          {{ act.label }}\n                        }\n                      </button>\n                    }\n                  }\n                </td>\n              }\n            </tr>\n          }\n        }\n      </tbody>\n    </table>\n  </div>\n\n  @if (config().paginate && totalPages() > 1) {\n    <div class=\"uk-table-pagination\">\n      <div class=\"uk-page-size\">\n        <span>Rows per page:</span>\n        <select title=\"Select page size\" class=\"uk-page-size-select\" [value]=\"pageSize()\" (change)=\"onPageSizeChange($event)\">\n          @for (size of config().pageSizeOptions ?? [10, 25, 50, 100]; track size) {\n            <option [value]=\"size\">{{ size }}</option>\n          }\n        </select>\n      </div>\n      <span class=\"uk-page-info\">\n        {{ (currentPage() - 1) * pageSize() + 1 }}\u2013{{ Math.min(currentPage() * pageSize(), filteredData().length) }}\n        of {{ filteredData().length }}\n      </span>\n      <div class=\"uk-page-nav\">\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === 1\" (click)=\"goToPage(1)\">\u00AB</button>\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === 1\" (click)=\"prevPage()\">\u2039</button>\n        @for (p of pageNumbers(); track p) {\n          <button\n            class=\"uk-page-btn\"\n            [class.active]=\"p === currentPage()\"\n            [class.ellipsis]=\"p === -1\"\n            [disabled]=\"p === -1\"\n            (click)=\"p !== -1 ? goToPage(p) : null\"\n          >{{ p === -1 ? '...' : p }}</button>\n        }\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === totalPages()\" (click)=\"nextPage()\">\u203A</button>\n        <button class=\"uk-page-btn\" [disabled]=\"currentPage() === totalPages()\" (click)=\"goToPage(totalPages())\">\u00BB</button>\n      </div>\n    </div>\n  }\n</div>\n", styles: [".uk-table-container{display:flex;flex-direction:column;gap:0;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden}.uk-table-toolbar{display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid #e5e7eb;background:#fff;flex-wrap:wrap}.uk-table-search{position:relative;display:flex;align-items:center;flex:1;max-width:340px}.uk-table-search-icon{position:absolute;left:10px;color:#9ca3af;font-size:.875rem}.uk-table-search-input{width:100%;border:1.5px solid #e5e7eb;border-radius:8px;padding:.4375rem 2rem .4375rem 2.25rem;font-size:.875rem;outline:none;transition:border-color .2s}.uk-table-search-input:focus{border-color:#6366f1}.uk-table-search-clear{position:absolute;right:8px;background:none;border:none;cursor:pointer;color:#9ca3af;font-size:.75rem}.uk-table-search-clear:hover{color:#374151}.uk-table-toolbar-actions{display:flex;gap:8px;margin-left:auto}.uk-table-selection-info{display:flex;align-items:center;gap:8px;font-size:.875rem;color:#6366f1;font-weight:500;background:#ede9fe;padding:4px 12px;border-radius:20px}.uk-table-clear-sel{background:none;border:none;cursor:pointer;color:#6366f1;font-size:.8125rem;text-decoration:underline}.uk-table-scroll{overflow-x:auto}.uk-table{width:100%;border-collapse:collapse;background:#fff;font-size:.9375rem}.uk-th{padding:12px 16px;text-align:left;font-size:.8125rem;font-weight:700;color:#6b7280;background:#f9fafb;border-bottom:2px solid #e5e7eb;white-space:nowrap;text-transform:uppercase;letter-spacing:.05em;position:relative;-webkit-user-select:none;user-select:none}.uk-th.sortable{cursor:pointer}.uk-th.sortable:hover{background:#f3f4f6;color:#374151}.uk-th.sorted-asc,.uk-th.sorted-desc{color:#6366f1;background:#f5f3ff}.uk-th-check{width:48px}.uk-sort-icon{margin-left:6px;font-size:.75rem}.uk-table.sticky-header .uk-th{position:sticky;top:0;z-index:10}.uk-tr{transition:background .12s;border-bottom:1px solid #f3f4f6}.uk-tr:last-child{border-bottom:none}.uk-tr:hover{background:#fafafa}.uk-tr.selected{background:#f5f3ff}.uk-tr.clickable{cursor:pointer}.uk-table.striped .uk-tr:nth-child(2n){background:#fafafa}.uk-table.striped .uk-tr:nth-child(2n).selected{background:#f5f3ff}.uk-td{padding:12px 16px;color:#374151}.uk-td-check{width:48px}.uk-td-center{text-align:center;padding:32px 16px}.uk-td-empty{color:#9ca3af;font-size:.9375rem}.uk-td-actions{display:flex;gap:6px;align-items:center}.uk-th-actions{text-align:center!important;width:120px}.uk-toggle{position:relative;display:inline-flex;align-items:center;cursor:pointer}.uk-toggle input{opacity:0;width:0;height:0;position:absolute}.uk-toggle input:checked+.uk-toggle-slider{background:#6366f1}.uk-toggle input:checked+.uk-toggle-slider:before{transform:translate(18px)}.uk-toggle input:focus-visible+.uk-toggle-slider{outline:2px solid #6366f1;outline-offset:2px}.uk-toggle-slider{position:relative;display:inline-block;width:38px;height:20px;background:#d1d5db;border-radius:20px;transition:background .2s}.uk-toggle-slider:before{content:\"\";position:absolute;top:2px;left:2px;width:16px;height:16px;background:#fff;border-radius:50%;transition:transform .2s;box-shadow:0 1px 3px #0003}.uk-action-btn{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:6px;border:1.5px solid transparent;background:transparent;cursor:pointer;font-size:.875rem;transition:background .15s,color .15s,border-color .15s;color:#6b7280}.uk-action-btn:hover{background:#f3f4f6;color:#374151}.uk-action-btn.uk-action-btn--default{color:#6b7280}.uk-action-btn.uk-action-btn--default:hover{background:#f3f4f6;color:#374151;border-color:#d1d5db}.uk-action-btn.uk-action-btn--primary{color:#6366f1}.uk-action-btn.uk-action-btn--primary:hover{background:#eef2ff;border-color:#a5b4fc}.uk-action-btn.uk-action-btn--success{color:#16a34a}.uk-action-btn.uk-action-btn--success:hover{background:#dcfce7;border-color:#86efac}.uk-action-btn.uk-action-btn--danger{color:#dc2626}.uk-action-btn.uk-action-btn--danger:hover{background:#fee2e2;border-color:#fca5a5}.uk-action-btn.uk-action-btn--warning{color:#d97706}.uk-action-btn.uk-action-btn--warning:hover{background:#fef3c7;border-color:#fcd34d}.uk-check-box{width:18px;height:18px;border:2px solid #d1d5db;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.625rem;transition:all .15s}.uk-check-box.checked{background:#6366f1;border-color:#6366f1;color:#fff}.uk-badge{display:inline-flex;align-items:center;padding:2px 10px;border-radius:20px;font-size:.75rem;font-weight:600}.uk-badge-success{background:#dcfce7;color:#16a34a}.uk-badge-neutral{background:#f3f4f6;color:#6b7280}.uk-table-loading{display:flex;flex-direction:column;align-items:center;gap:12px;color:#9ca3af}.uk-spinner{width:28px;height:28px;border:3px solid #e5e7eb;border-top-color:#6366f1;border-radius:50%;animation:uk-spin .7s linear infinite}@keyframes uk-spin{to{transform:rotate(360deg)}}.uk-table-pagination{display:flex;align-items:center;gap:12px;padding:12px 16px;border-top:1px solid #e5e7eb;background:#fff;flex-wrap:wrap}.uk-page-size{display:flex;align-items:center;gap:8px;font-size:.875rem;color:#6b7280}.uk-page-size-select{border:1px solid #e5e7eb;border-radius:6px;padding:4px 8px;font-size:.875rem;outline:none;cursor:pointer}.uk-page-info{font-size:.875rem;color:#6b7280;margin-left:auto}.uk-page-nav{display:flex;gap:4px}.uk-page-btn{min-width:32px;height:32px;border:1.5px solid #e5e7eb;border-radius:6px;background:#fff;cursor:pointer;font-size:.875rem;color:#374151;display:flex;align-items:center;justify-content:center;transition:all .15s;padding:0 6px}.uk-page-btn:hover:not(:disabled){border-color:#6366f1;color:#6366f1}.uk-page-btn.active{background:#6366f1;border-color:#6366f1;color:#fff}.uk-page-btn:disabled{opacity:.4;cursor:not-allowed}.uk-page-btn.ellipsis{border:none;cursor:default}\n"] }]
        }], ctorParameters: () => [], propDecorators: { data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: false }] }], config: [{ type: i0.Input, args: [{ isSignal: true, alias: "config", required: false }] }], loading: [{ type: i0.Input, args: [{ isSignal: true, alias: "loading", required: false }] }], rowKey: [{ type: i0.Input, args: [{ isSignal: true, alias: "rowKey", required: false }] }], rowClickable: [{ type: i0.Input, args: [{ isSignal: true, alias: "rowClickable", required: false }] }], searchPlaceholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false }] }], toolbarActions: [{ type: i0.Input, args: [{ isSignal: true, alias: "toolbarActions", required: false }] }], rowClick: [{ type: i0.Output, args: ["rowClick"] }], selectionChange: [{ type: i0.Output, args: ["selectionChange"] }], sortChange: [{ type: i0.Output, args: ["sortChange"] }], pageChange: [{ type: i0.Output, args: ["pageChange"] }], actionClick: [{ type: i0.Output, args: ["actionClick"] }], toggleChange: [{ type: i0.Output, args: ["toggleChange"] }] } });

class UkHeaderComponent {
    el;
    title = input('', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    logo = input(...(ngDevMode ? [undefined, { debugName: "logo" }] : /* istanbul ignore next */ []));
    actions = input([], ...(ngDevMode ? [{ debugName: "actions" }] : /* istanbul ignore next */ []));
    user = input(...(ngDevMode ? [undefined, { debugName: "user" }] : /* istanbul ignore next */ []));
    sidebarCollapsed = input(false, ...(ngDevMode ? [{ debugName: "sidebarCollapsed" }] : /* istanbul ignore next */ []));
    showMenuToggle = input(true, ...(ngDevMode ? [{ debugName: "showMenuToggle" }] : /* istanbul ignore next */ []));
    menuToggle = output();
    actionClick = output();
    userMenuClick = output();
    userMenuOpen = signal(false, ...(ngDevMode ? [{ debugName: "userMenuOpen" }] : /* istanbul ignore next */ []));
    constructor(el) {
        this.el = el;
    }
    onDocumentClick(e) {
        if (!this.el.nativeElement.contains(e.target))
            this.userMenuOpen.set(false);
    }
    get initials() {
        const u = this.user();
        if (!u)
            return '';
        return u.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
    }
    toggleUserMenu() { this.userMenuOpen.update(v => !v); }
    onActionClick(id) { this.actionClick.emit(id); }
    onUserMenuClick(id) {
        this.userMenuClick.emit(id);
        this.userMenuOpen.set(false);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkHeaderComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkHeaderComponent, isStandalone: true, selector: "uk-header", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, logo: { classPropertyName: "logo", publicName: "logo", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: false, transformFunction: null }, user: { classPropertyName: "user", publicName: "user", isSignal: true, isRequired: false, transformFunction: null }, sidebarCollapsed: { classPropertyName: "sidebarCollapsed", publicName: "sidebarCollapsed", isSignal: true, isRequired: false, transformFunction: null }, showMenuToggle: { classPropertyName: "showMenuToggle", publicName: "showMenuToggle", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { menuToggle: "menuToggle", actionClick: "actionClick", userMenuClick: "userMenuClick" }, host: { listeners: { "document:click": "onDocumentClick($event)" } }, ngImport: i0, template: "<header class=\"uk-header\">\n  <div class=\"uk-header-left\">\n    @if (showMenuToggle()) {\n      <button title=\"Toggle sidebar {{title()}}\" type=\"button\" class=\"uk-header-toggle\" (click)=\"menuToggle.emit()\" [title]=\"sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'\">\n        <i class=\"bi bi-list\"></i>\n      </button>\n    }\n    @if (logo()) {\n      <img class=\"uk-header-logo\" [src]=\"logo()\" alt=\"logo\" />\n    }\n    @if (title()) {\n      <span class=\"uk-header-title\">{{ title() }}</span>\n    }\n  </div>\n\n  <div class=\"uk-header-right\">\n    @for (action of actions(); track action.id) {\n      <button type=\"button\" class=\"uk-header-action\" [title]=\"action.label ?? action.id\" (click)=\"onActionClick(action.id)\">\n        <i class=\"bi bi-{{ action.icon }}\"></i>\n        @if (action.badge) {\n          <span class=\"uk-header-badge uk-badge-{{ action.badgeVariant ?? 'danger' }}\">{{ action.badge }}</span>\n        }\n      </button>\n    }\n\n    @if (user()) {\n      <div class=\"uk-header-user\">\n        <button type=\"button\" class=\"uk-header-avatar\" (click)=\"toggleUserMenu()\">\n          @if (user()!.avatar) {\n            <img title=\"User avatar\" [src]=\"user()!.avatar\" [alt]=\"user()!.name\" />\n          } @else {\n            <span class=\"uk-header-initials\">{{ initials }}</span>\n          }\n          <span class=\"uk-header-username\">{{ user()!.name }}</span>\n          <i class=\"bi bi-chevron-down uk-header-chevron\" [class.open]=\"userMenuOpen()\"></i>\n        </button>\n\n        @if (userMenuOpen()) {\n          <div class=\"uk-header-dropdown\">\n            <div class=\"uk-header-dropdown-user\">\n              <strong>{{ user()!.name }}</strong>\n              @if (user()!.email) { <small>{{ user()!.email }}</small> }\n            </div>\n            <div class=\"uk-header-dropdown-divider\"></div>\n            @for (item of user()!.menuItems ?? []; track item.id) {\n              <button type=\"button\" class=\"uk-header-dropdown-item\" (click)=\"onUserMenuClick(item.id)\">\n                @if (item.icon) { <i class=\"bi bi-{{ item.icon }}\"></i> }\n                {{ item.label }}\n              </button>\n            }\n          </div>\n        }\n      </div>\n    }\n  </div>\n</header>\n", styles: [":host{display:block}.uk-header{display:flex;align-items:center;justify-content:space-between;height:60px;padding:0 20px;background:#fff;border-bottom:1.5px solid #e5e7eb;position:sticky;top:0;z-index:100;gap:12px}.uk-header-left{display:flex;align-items:center;gap:12px}.uk-header-toggle{width:36px;height:36px;border:none;border-radius:8px;background:transparent;color:#6b7280;font-size:1.25rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s,color .15s}.uk-header-toggle:hover{background:#f3f4f6;color:#111827}.uk-header-logo{height:32px;width:auto}.uk-header-title{font-size:1.0625rem;font-weight:700;color:#111827;letter-spacing:-.01em}.uk-header-right{display:flex;align-items:center;gap:4px}.uk-header-action{position:relative;width:38px;height:38px;border:none;border-radius:8px;background:transparent;color:#6b7280;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s,color .15s}.uk-header-action:hover{background:#f3f4f6;color:#111827}.uk-header-badge{position:absolute;top:4px;right:4px;min-width:16px;height:16px;border-radius:8px;font-size:.625rem;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 4px;border:2px solid #fff}.uk-badge-danger{background:#ef4444;color:#fff}.uk-badge-primary{background:#6366f1;color:#fff}.uk-badge-success{background:#22c55e;color:#fff}.uk-badge-warning{background:#f59e0b;color:#fff}.uk-header-user{position:relative;margin-left:8px}.uk-header-avatar{display:flex;align-items:center;gap:8px;padding:4px 10px;border:none;border-radius:8px;background:transparent;cursor:pointer;transition:background .15s}.uk-header-avatar:hover{background:#f3f4f6}.uk-header-avatar img{width:32px;height:32px;border-radius:50%;object-fit:cover}.uk-header-initials{width:32px;height:32px;border-radius:50%;background:#6366f1;color:#fff;font-size:.75rem;font-weight:700;display:flex;align-items:center;justify-content:center}.uk-header-username{font-size:.875rem;font-weight:600;color:#374151}.uk-header-chevron{font-size:.75rem;color:#9ca3af;transition:transform .2s}.uk-header-chevron.open{transform:rotate(180deg)}.uk-header-dropdown{position:absolute;top:calc(100% + 8px);right:0;min-width:200px;background:#fff;border:1.5px solid #e5e7eb;border-radius:10px;box-shadow:0 8px 24px #0000001a;z-index:200;overflow:hidden;animation:uk-dropdown-in .15s ease}@keyframes uk-dropdown-in{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.uk-header-dropdown-user{padding:12px 16px;display:flex;flex-direction:column;gap:2px}.uk-header-dropdown-user strong{font-size:.875rem;color:#111827}.uk-header-dropdown-user small{font-size:.75rem;color:#9ca3af}.uk-header-dropdown-divider{height:1px;background:#f3f4f6;margin:2px 0}.uk-header-dropdown-item{display:flex;align-items:center;gap:10px;width:100%;padding:10px 16px;border:none;background:transparent;font-size:.875rem;color:#374151;cursor:pointer;text-align:left;transition:background .12s}.uk-header-dropdown-item i{font-size:.9375rem;color:#6b7280}.uk-header-dropdown-item:hover{background:#f9fafb}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-header', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"uk-header\">\n  <div class=\"uk-header-left\">\n    @if (showMenuToggle()) {\n      <button title=\"Toggle sidebar {{title()}}\" type=\"button\" class=\"uk-header-toggle\" (click)=\"menuToggle.emit()\" [title]=\"sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'\">\n        <i class=\"bi bi-list\"></i>\n      </button>\n    }\n    @if (logo()) {\n      <img class=\"uk-header-logo\" [src]=\"logo()\" alt=\"logo\" />\n    }\n    @if (title()) {\n      <span class=\"uk-header-title\">{{ title() }}</span>\n    }\n  </div>\n\n  <div class=\"uk-header-right\">\n    @for (action of actions(); track action.id) {\n      <button type=\"button\" class=\"uk-header-action\" [title]=\"action.label ?? action.id\" (click)=\"onActionClick(action.id)\">\n        <i class=\"bi bi-{{ action.icon }}\"></i>\n        @if (action.badge) {\n          <span class=\"uk-header-badge uk-badge-{{ action.badgeVariant ?? 'danger' }}\">{{ action.badge }}</span>\n        }\n      </button>\n    }\n\n    @if (user()) {\n      <div class=\"uk-header-user\">\n        <button type=\"button\" class=\"uk-header-avatar\" (click)=\"toggleUserMenu()\">\n          @if (user()!.avatar) {\n            <img title=\"User avatar\" [src]=\"user()!.avatar\" [alt]=\"user()!.name\" />\n          } @else {\n            <span class=\"uk-header-initials\">{{ initials }}</span>\n          }\n          <span class=\"uk-header-username\">{{ user()!.name }}</span>\n          <i class=\"bi bi-chevron-down uk-header-chevron\" [class.open]=\"userMenuOpen()\"></i>\n        </button>\n\n        @if (userMenuOpen()) {\n          <div class=\"uk-header-dropdown\">\n            <div class=\"uk-header-dropdown-user\">\n              <strong>{{ user()!.name }}</strong>\n              @if (user()!.email) { <small>{{ user()!.email }}</small> }\n            </div>\n            <div class=\"uk-header-dropdown-divider\"></div>\n            @for (item of user()!.menuItems ?? []; track item.id) {\n              <button type=\"button\" class=\"uk-header-dropdown-item\" (click)=\"onUserMenuClick(item.id)\">\n                @if (item.icon) { <i class=\"bi bi-{{ item.icon }}\"></i> }\n                {{ item.label }}\n              </button>\n            }\n          </div>\n        }\n      </div>\n    }\n  </div>\n</header>\n", styles: [":host{display:block}.uk-header{display:flex;align-items:center;justify-content:space-between;height:60px;padding:0 20px;background:#fff;border-bottom:1.5px solid #e5e7eb;position:sticky;top:0;z-index:100;gap:12px}.uk-header-left{display:flex;align-items:center;gap:12px}.uk-header-toggle{width:36px;height:36px;border:none;border-radius:8px;background:transparent;color:#6b7280;font-size:1.25rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s,color .15s}.uk-header-toggle:hover{background:#f3f4f6;color:#111827}.uk-header-logo{height:32px;width:auto}.uk-header-title{font-size:1.0625rem;font-weight:700;color:#111827;letter-spacing:-.01em}.uk-header-right{display:flex;align-items:center;gap:4px}.uk-header-action{position:relative;width:38px;height:38px;border:none;border-radius:8px;background:transparent;color:#6b7280;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s,color .15s}.uk-header-action:hover{background:#f3f4f6;color:#111827}.uk-header-badge{position:absolute;top:4px;right:4px;min-width:16px;height:16px;border-radius:8px;font-size:.625rem;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 4px;border:2px solid #fff}.uk-badge-danger{background:#ef4444;color:#fff}.uk-badge-primary{background:#6366f1;color:#fff}.uk-badge-success{background:#22c55e;color:#fff}.uk-badge-warning{background:#f59e0b;color:#fff}.uk-header-user{position:relative;margin-left:8px}.uk-header-avatar{display:flex;align-items:center;gap:8px;padding:4px 10px;border:none;border-radius:8px;background:transparent;cursor:pointer;transition:background .15s}.uk-header-avatar:hover{background:#f3f4f6}.uk-header-avatar img{width:32px;height:32px;border-radius:50%;object-fit:cover}.uk-header-initials{width:32px;height:32px;border-radius:50%;background:#6366f1;color:#fff;font-size:.75rem;font-weight:700;display:flex;align-items:center;justify-content:center}.uk-header-username{font-size:.875rem;font-weight:600;color:#374151}.uk-header-chevron{font-size:.75rem;color:#9ca3af;transition:transform .2s}.uk-header-chevron.open{transform:rotate(180deg)}.uk-header-dropdown{position:absolute;top:calc(100% + 8px);right:0;min-width:200px;background:#fff;border:1.5px solid #e5e7eb;border-radius:10px;box-shadow:0 8px 24px #0000001a;z-index:200;overflow:hidden;animation:uk-dropdown-in .15s ease}@keyframes uk-dropdown-in{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.uk-header-dropdown-user{padding:12px 16px;display:flex;flex-direction:column;gap:2px}.uk-header-dropdown-user strong{font-size:.875rem;color:#111827}.uk-header-dropdown-user small{font-size:.75rem;color:#9ca3af}.uk-header-dropdown-divider{height:1px;background:#f3f4f6;margin:2px 0}.uk-header-dropdown-item{display:flex;align-items:center;gap:10px;width:100%;padding:10px 16px;border:none;background:transparent;font-size:.875rem;color:#374151;cursor:pointer;text-align:left;transition:background .12s}.uk-header-dropdown-item i{font-size:.9375rem;color:#6b7280}.uk-header-dropdown-item:hover{background:#f9fafb}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], logo: [{ type: i0.Input, args: [{ isSignal: true, alias: "logo", required: false }] }], actions: [{ type: i0.Input, args: [{ isSignal: true, alias: "actions", required: false }] }], user: [{ type: i0.Input, args: [{ isSignal: true, alias: "user", required: false }] }], sidebarCollapsed: [{ type: i0.Input, args: [{ isSignal: true, alias: "sidebarCollapsed", required: false }] }], showMenuToggle: [{ type: i0.Input, args: [{ isSignal: true, alias: "showMenuToggle", required: false }] }], menuToggle: [{ type: i0.Output, args: ["menuToggle"] }], actionClick: [{ type: i0.Output, args: ["actionClick"] }], userMenuClick: [{ type: i0.Output, args: ["userMenuClick"] }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UkSidebarComponent {
    items = input([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    activeId = input('', ...(ngDevMode ? [{ debugName: "activeId" }] : /* istanbul ignore next */ []));
    collapsed = input(false, ...(ngDevMode ? [{ debugName: "collapsed" }] : /* istanbul ignore next */ []));
    brandTitle = input('App', ...(ngDevMode ? [{ debugName: "brandTitle" }] : /* istanbul ignore next */ []));
    brandLogo = input(...(ngDevMode ? [undefined, { debugName: "brandLogo" }] : /* istanbul ignore next */ []));
    brandRoute = input(...(ngDevMode ? [undefined, { debugName: "brandRoute" }] : /* istanbul ignore next */ []));
    itemClick = output();
    collapsedChange = output();
    expanded = signal({}, ...(ngDevMode ? [{ debugName: "expanded" }] : /* istanbul ignore next */ []));
    toggleExpand(id) {
        this.expanded.update(s => ({ ...s, [id]: !s[id] }));
    }
    isExpanded(id) {
        return this.expanded()[id] ?? false;
    }
    isActive(item) {
        if (item.id === this.activeId())
            return true;
        return item.children?.some(c => c.id === this.activeId()) ?? false;
    }
    isChildActive(item) {
        return item.children?.some(c => c.id === this.activeId()) ?? false;
    }
    select(item) {
        if (item.disabled)
            return;
        if (item.children?.length) {
            this.toggleExpand(item.id);
        }
        else {
            this.itemClick.emit(item);
        }
    }
    selectChild(child) {
        if (child.disabled)
            return;
        this.itemClick.emit(child);
    }
    toggleCollapse() {
        this.collapsedChange.emit(!this.collapsed());
    }
    isVisible(item) {
        if (item.show === false)
            return false;
        if (item.children?.length) {
            return item.children.some(c => c.show !== false);
        }
        return true;
    }
    visibleChildren(item) {
        return item.children?.filter(c => c.show !== false) ?? [];
    }
    badgeClass(variant = 'primary') {
        return `uk-badge-${variant}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkSidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkSidebarComponent, isStandalone: true, selector: "uk-sidebar", inputs: { items: { classPropertyName: "items", publicName: "items", isSignal: true, isRequired: false, transformFunction: null }, activeId: { classPropertyName: "activeId", publicName: "activeId", isSignal: true, isRequired: false, transformFunction: null }, collapsed: { classPropertyName: "collapsed", publicName: "collapsed", isSignal: true, isRequired: false, transformFunction: null }, brandTitle: { classPropertyName: "brandTitle", publicName: "brandTitle", isSignal: true, isRequired: false, transformFunction: null }, brandLogo: { classPropertyName: "brandLogo", publicName: "brandLogo", isSignal: true, isRequired: false, transformFunction: null }, brandRoute: { classPropertyName: "brandRoute", publicName: "brandRoute", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { itemClick: "itemClick", collapsedChange: "collapsedChange" }, ngImport: i0, template: "<nav class=\"uk-sidebar\" [class.collapsed]=\"collapsed()\">\n\n  <!-- Brand -->\n  <div class=\"uk-sidebar-brand\">\n    @if (brandRoute()) {\n      <a class=\"uk-sidebar-brand-inner\" [routerLink]=\"brandRoute()\">\n        @if (brandLogo()) {\n          <img class=\"uk-sidebar-logo\" [src]=\"brandLogo()\" alt=\"logo\" />\n        } @else {\n          <span class=\"uk-sidebar-logo-icon\"><i class=\"bi bi-layers-fill\"></i></span>\n        }\n        @if (!collapsed()) {\n          <span class=\"uk-sidebar-brand-title\">{{ brandTitle() }}</span>\n        }\n      </a>\n    } @else {\n      <div class=\"uk-sidebar-brand-inner\">\n        @if (brandLogo()) {\n          <img class=\"uk-sidebar-logo\" [src]=\"brandLogo()\" alt=\"logo\" />\n        } @else {\n          <span class=\"uk-sidebar-logo-icon\"><i class=\"bi bi-layers-fill\"></i></span>\n        }\n        @if (!collapsed()) {\n          <span class=\"uk-sidebar-brand-title\">{{ brandTitle() }}</span>\n        }\n      </div>\n    }\n  </div>\n\n  <!-- Nav items -->\n  <ul class=\"uk-sidebar-nav\">\n    @for (item of items(); track item.id) {\n      @if (isVisible(item)) {\n      @if (item.dividerBefore) {\n        <li class=\"uk-sidebar-divider\"></li>\n      }\n      <li class=\"uk-sidebar-item\"\n          [class.active]=\"isActive(item)\"\n          [class.disabled]=\"item.disabled\"\n          [class.has-children]=\"item.children?.length\">\n\n        <!-- Route link (no children) -->\n        @if (item.route && !item.children?.length) {\n          <a\n            class=\"uk-sidebar-link\"\n            [routerLink]=\"item.route\"\n            routerLinkActive=\"active\"\n            [title]=\"collapsed() ? item.label : ''\"\n            [class.disabled]=\"item.disabled\"\n            (click)=\"itemClick.emit(item)\">\n            @if (item.icon) {\n              <i class=\"bi bi-{{ item.icon }} uk-sidebar-icon\"></i>\n            }\n            @if (!collapsed()) {\n              <span class=\"uk-sidebar-label\">{{ item.label }}</span>\n              @if (item.badge != null) {\n                <span class=\"uk-sidebar-badge\" [class]=\"badgeClass(item.badgeVariant)\">{{ item.badge }}</span>\n              }\n            } @else {\n              @if (item.badge != null) {\n                <span class=\"uk-sidebar-badge uk-sidebar-badge-dot\" [class]=\"badgeClass(item.badgeVariant)\"></span>\n              }\n            }\n          </a>\n        }\n\n        <!-- Button (no route, or has children) -->\n        @if (!item.route || item.children?.length) {\n          <button\n            type=\"button\"\n            class=\"uk-sidebar-link\"\n            [class.active]=\"isActive(item)\"\n            [class.child-active]=\"isChildActive(item)\"\n            [title]=\"collapsed() ? item.label : ''\"\n            (click)=\"select(item)\">\n            @if (item.icon) {\n              <i class=\"bi bi-{{ item.icon }} uk-sidebar-icon\"></i>\n            }\n            @if (!collapsed()) {\n              <span class=\"uk-sidebar-label\">{{ item.label }}</span>\n              @if (item.badge != null) {\n                <span class=\"uk-sidebar-badge\" [class]=\"badgeClass(item.badgeVariant)\">{{ item.badge }}</span>\n              }\n              @if (item.children?.length) {\n                <i class=\"bi uk-sidebar-arrow\"\n                   [class.bi-chevron-down]=\"!isExpanded(item.id)\"\n                   [class.bi-chevron-up]=\"isExpanded(item.id)\"></i>\n              }\n            } @else {\n              @if (item.badge != null) {\n                <span class=\"uk-sidebar-badge uk-sidebar-badge-dot\" [class]=\"badgeClass(item.badgeVariant)\"></span>\n              }\n            }\n          </button>\n        }\n\n        <!-- Children -->\n        @if (visibleChildren(item).length && !collapsed() && isExpanded(item.id)) {\n          <ul class=\"uk-sidebar-children\">\n            @for (child of visibleChildren(item); track child.id) {\n              <li>\n                @if (child.route) {\n                  <a\n                    class=\"uk-sidebar-child-link\"\n                    [routerLink]=\"child.route\"\n                    routerLinkActive=\"active\"\n                    [class.disabled]=\"child.disabled\"\n                    (click)=\"itemClick.emit(child)\">\n                    @if (child.icon) {\n                      <i class=\"bi bi-{{ child.icon }}\"></i>\n                    } @else {\n                      <span class=\"uk-sidebar-child-dot\"></span>\n                    }\n                    {{ child.label }}\n                    @if (child.badge != null) {\n                      <span class=\"uk-sidebar-badge\" [class]=\"badgeClass(child.badgeVariant)\">{{ child.badge }}</span>\n                    }\n                  </a>\n                } @else {\n                  <button\n                    type=\"button\"\n                    class=\"uk-sidebar-child-link\"\n                    [class.active]=\"child.id === activeId()\"\n                    [class.disabled]=\"child.disabled\"\n                    (click)=\"selectChild(child)\">\n                    @if (child.icon) {\n                      <i class=\"bi bi-{{ child.icon }}\"></i>\n                    } @else {\n                      <span class=\"uk-sidebar-child-dot\"></span>\n                    }\n                    {{ child.label }}\n                    @if (child.badge != null) {\n                      <span class=\"uk-sidebar-badge\" [class]=\"badgeClass(child.badgeVariant)\">{{ child.badge }}</span>\n                    }\n                  </button>\n                }\n              </li>\n            }\n          </ul>\n        }\n      </li>\n      } <!-- @if isVisible -->\n    }\n  </ul>\n\n  <!-- Collapse toggle -->\n  <button type=\"button\" class=\"uk-sidebar-collapse-btn\" (click)=\"toggleCollapse()\" [title]=\"collapsed() ? 'Expand' : 'Collapse'\">\n    <i class=\"bi\" [class.bi-chevron-double-left]=\"!collapsed()\" [class.bi-chevron-double-right]=\"collapsed()\"></i>\n    @if (!collapsed()) { <span>Collapse</span> }\n  </button>\n</nav>\n", styles: ["@charset \"UTF-8\";:host{display:block;height:100%}.uk-sidebar{display:flex;flex-direction:column;width:240px;height:100%;background:#1e1b4b;transition:width .22s ease;overflow:hidden}.uk-sidebar.collapsed{width:64px}.uk-sidebar.collapsed .uk-sidebar-brand-title,.uk-sidebar.collapsed .uk-sidebar-label,.uk-sidebar.collapsed .uk-sidebar-arrow{display:none}.uk-sidebar-brand{display:flex;align-items:center;gap:10px;padding:18px 16px;border-bottom:1px solid rgba(255,255,255,.08);min-height:60px}.uk-sidebar-brand-inner{display:flex;align-items:center;gap:10px;text-decoration:none;width:100%}.uk-sidebar-logo{height:28px;width:auto;flex-shrink:0}.uk-sidebar-logo-icon{width:32px;height:32px;border-radius:8px;background:#4f46e5;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem;color:#fff}.uk-sidebar-brand-title{font-size:1rem;font-weight:700;color:#fff;white-space:nowrap;letter-spacing:-.01em}.uk-sidebar-nav{list-style:none;margin:0;padding:8px;flex:1;overflow-y:auto;overflow-x:hidden}.uk-sidebar-nav::-webkit-scrollbar{width:4px}.uk-sidebar-nav::-webkit-scrollbar-track{background:transparent}.uk-sidebar-nav::-webkit-scrollbar-thumb{background:#ffffff26;border-radius:4px}.uk-sidebar-divider{height:1px;background:#ffffff14;margin:6px 4px}.uk-sidebar-link{display:flex;align-items:center;gap:10px;width:100%;padding:9px 10px;border:none;border-radius:8px;background:transparent;color:#c7d2fe;font-size:.875rem;cursor:pointer;text-align:left;text-decoration:none;transition:background .15s,color .15s;white-space:nowrap;position:relative}.uk-sidebar-link:hover{background:#ffffff14;color:#fff}.uk-sidebar-link.active{background:#4f46e5;color:#fff}.uk-sidebar-link.active .uk-sidebar-icon{color:#fff}.uk-sidebar-link.child-active:not(.active){background:#6366f126;color:#a5b4fc}.uk-sidebar-icon{font-size:1.0625rem;width:20px;text-align:center;flex-shrink:0;color:#a5b4fc}.uk-sidebar-label{flex:1}.uk-sidebar-arrow{font-size:.75rem;color:#6b7280;transition:transform .2s}.uk-sidebar-badge{font-size:.6875rem;font-weight:700;padding:1px 7px;border-radius:20px;margin-left:auto;flex-shrink:0}.uk-sidebar-badge-dot{position:absolute;top:8px;right:8px;width:8px;height:8px;padding:0;border-radius:50%}.uk-badge-primary{background:#6366f1;color:#fff}.uk-badge-success{background:#22c55e;color:#fff}.uk-badge-danger{background:#ef4444;color:#fff}.uk-badge-warning{background:#f59e0b;color:#fff}.uk-sidebar-children{list-style:none;margin:2px 0;padding:0 0 0 8px;animation:uk-slide-down .18s ease}@keyframes uk-slide-down{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.uk-sidebar-child-link{display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:none;border-radius:6px;background:transparent;color:#a5b4fc;font-size:.8125rem;cursor:pointer;text-align:left;text-decoration:none;transition:background .15s,color .15s}.uk-sidebar-child-link i{font-size:.875rem}.uk-sidebar-child-link:hover{background:#ffffff0f;color:#e0e7ff}.uk-sidebar-child-link.active{color:#fff;background:#6366f140}.uk-sidebar-child-link.disabled{opacity:.4;cursor:not-allowed}.uk-sidebar-child-dot{width:5px;height:5px;border-radius:50%;background:#6b7280;flex-shrink:0;margin:0 7px}.uk-sidebar-collapse-btn{display:flex;align-items:center;gap:8px;width:100%;padding:12px 16px;border:none;border-top:1px solid rgba(255,255,255,.08);background:transparent;color:#6b7280;font-size:.8125rem;cursor:pointer;transition:color .15s;white-space:nowrap}.uk-sidebar-collapse-btn i{font-size:.875rem;flex-shrink:0}.uk-sidebar-collapse-btn:hover{color:#c7d2fe}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-sidebar', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav class=\"uk-sidebar\" [class.collapsed]=\"collapsed()\">\n\n  <!-- Brand -->\n  <div class=\"uk-sidebar-brand\">\n    @if (brandRoute()) {\n      <a class=\"uk-sidebar-brand-inner\" [routerLink]=\"brandRoute()\">\n        @if (brandLogo()) {\n          <img class=\"uk-sidebar-logo\" [src]=\"brandLogo()\" alt=\"logo\" />\n        } @else {\n          <span class=\"uk-sidebar-logo-icon\"><i class=\"bi bi-layers-fill\"></i></span>\n        }\n        @if (!collapsed()) {\n          <span class=\"uk-sidebar-brand-title\">{{ brandTitle() }}</span>\n        }\n      </a>\n    } @else {\n      <div class=\"uk-sidebar-brand-inner\">\n        @if (brandLogo()) {\n          <img class=\"uk-sidebar-logo\" [src]=\"brandLogo()\" alt=\"logo\" />\n        } @else {\n          <span class=\"uk-sidebar-logo-icon\"><i class=\"bi bi-layers-fill\"></i></span>\n        }\n        @if (!collapsed()) {\n          <span class=\"uk-sidebar-brand-title\">{{ brandTitle() }}</span>\n        }\n      </div>\n    }\n  </div>\n\n  <!-- Nav items -->\n  <ul class=\"uk-sidebar-nav\">\n    @for (item of items(); track item.id) {\n      @if (isVisible(item)) {\n      @if (item.dividerBefore) {\n        <li class=\"uk-sidebar-divider\"></li>\n      }\n      <li class=\"uk-sidebar-item\"\n          [class.active]=\"isActive(item)\"\n          [class.disabled]=\"item.disabled\"\n          [class.has-children]=\"item.children?.length\">\n\n        <!-- Route link (no children) -->\n        @if (item.route && !item.children?.length) {\n          <a\n            class=\"uk-sidebar-link\"\n            [routerLink]=\"item.route\"\n            routerLinkActive=\"active\"\n            [title]=\"collapsed() ? item.label : ''\"\n            [class.disabled]=\"item.disabled\"\n            (click)=\"itemClick.emit(item)\">\n            @if (item.icon) {\n              <i class=\"bi bi-{{ item.icon }} uk-sidebar-icon\"></i>\n            }\n            @if (!collapsed()) {\n              <span class=\"uk-sidebar-label\">{{ item.label }}</span>\n              @if (item.badge != null) {\n                <span class=\"uk-sidebar-badge\" [class]=\"badgeClass(item.badgeVariant)\">{{ item.badge }}</span>\n              }\n            } @else {\n              @if (item.badge != null) {\n                <span class=\"uk-sidebar-badge uk-sidebar-badge-dot\" [class]=\"badgeClass(item.badgeVariant)\"></span>\n              }\n            }\n          </a>\n        }\n\n        <!-- Button (no route, or has children) -->\n        @if (!item.route || item.children?.length) {\n          <button\n            type=\"button\"\n            class=\"uk-sidebar-link\"\n            [class.active]=\"isActive(item)\"\n            [class.child-active]=\"isChildActive(item)\"\n            [title]=\"collapsed() ? item.label : ''\"\n            (click)=\"select(item)\">\n            @if (item.icon) {\n              <i class=\"bi bi-{{ item.icon }} uk-sidebar-icon\"></i>\n            }\n            @if (!collapsed()) {\n              <span class=\"uk-sidebar-label\">{{ item.label }}</span>\n              @if (item.badge != null) {\n                <span class=\"uk-sidebar-badge\" [class]=\"badgeClass(item.badgeVariant)\">{{ item.badge }}</span>\n              }\n              @if (item.children?.length) {\n                <i class=\"bi uk-sidebar-arrow\"\n                   [class.bi-chevron-down]=\"!isExpanded(item.id)\"\n                   [class.bi-chevron-up]=\"isExpanded(item.id)\"></i>\n              }\n            } @else {\n              @if (item.badge != null) {\n                <span class=\"uk-sidebar-badge uk-sidebar-badge-dot\" [class]=\"badgeClass(item.badgeVariant)\"></span>\n              }\n            }\n          </button>\n        }\n\n        <!-- Children -->\n        @if (visibleChildren(item).length && !collapsed() && isExpanded(item.id)) {\n          <ul class=\"uk-sidebar-children\">\n            @for (child of visibleChildren(item); track child.id) {\n              <li>\n                @if (child.route) {\n                  <a\n                    class=\"uk-sidebar-child-link\"\n                    [routerLink]=\"child.route\"\n                    routerLinkActive=\"active\"\n                    [class.disabled]=\"child.disabled\"\n                    (click)=\"itemClick.emit(child)\">\n                    @if (child.icon) {\n                      <i class=\"bi bi-{{ child.icon }}\"></i>\n                    } @else {\n                      <span class=\"uk-sidebar-child-dot\"></span>\n                    }\n                    {{ child.label }}\n                    @if (child.badge != null) {\n                      <span class=\"uk-sidebar-badge\" [class]=\"badgeClass(child.badgeVariant)\">{{ child.badge }}</span>\n                    }\n                  </a>\n                } @else {\n                  <button\n                    type=\"button\"\n                    class=\"uk-sidebar-child-link\"\n                    [class.active]=\"child.id === activeId()\"\n                    [class.disabled]=\"child.disabled\"\n                    (click)=\"selectChild(child)\">\n                    @if (child.icon) {\n                      <i class=\"bi bi-{{ child.icon }}\"></i>\n                    } @else {\n                      <span class=\"uk-sidebar-child-dot\"></span>\n                    }\n                    {{ child.label }}\n                    @if (child.badge != null) {\n                      <span class=\"uk-sidebar-badge\" [class]=\"badgeClass(child.badgeVariant)\">{{ child.badge }}</span>\n                    }\n                  </button>\n                }\n              </li>\n            }\n          </ul>\n        }\n      </li>\n      } <!-- @if isVisible -->\n    }\n  </ul>\n\n  <!-- Collapse toggle -->\n  <button type=\"button\" class=\"uk-sidebar-collapse-btn\" (click)=\"toggleCollapse()\" [title]=\"collapsed() ? 'Expand' : 'Collapse'\">\n    <i class=\"bi\" [class.bi-chevron-double-left]=\"!collapsed()\" [class.bi-chevron-double-right]=\"collapsed()\"></i>\n    @if (!collapsed()) { <span>Collapse</span> }\n  </button>\n</nav>\n", styles: ["@charset \"UTF-8\";:host{display:block;height:100%}.uk-sidebar{display:flex;flex-direction:column;width:240px;height:100%;background:#1e1b4b;transition:width .22s ease;overflow:hidden}.uk-sidebar.collapsed{width:64px}.uk-sidebar.collapsed .uk-sidebar-brand-title,.uk-sidebar.collapsed .uk-sidebar-label,.uk-sidebar.collapsed .uk-sidebar-arrow{display:none}.uk-sidebar-brand{display:flex;align-items:center;gap:10px;padding:18px 16px;border-bottom:1px solid rgba(255,255,255,.08);min-height:60px}.uk-sidebar-brand-inner{display:flex;align-items:center;gap:10px;text-decoration:none;width:100%}.uk-sidebar-logo{height:28px;width:auto;flex-shrink:0}.uk-sidebar-logo-icon{width:32px;height:32px;border-radius:8px;background:#4f46e5;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem;color:#fff}.uk-sidebar-brand-title{font-size:1rem;font-weight:700;color:#fff;white-space:nowrap;letter-spacing:-.01em}.uk-sidebar-nav{list-style:none;margin:0;padding:8px;flex:1;overflow-y:auto;overflow-x:hidden}.uk-sidebar-nav::-webkit-scrollbar{width:4px}.uk-sidebar-nav::-webkit-scrollbar-track{background:transparent}.uk-sidebar-nav::-webkit-scrollbar-thumb{background:#ffffff26;border-radius:4px}.uk-sidebar-divider{height:1px;background:#ffffff14;margin:6px 4px}.uk-sidebar-link{display:flex;align-items:center;gap:10px;width:100%;padding:9px 10px;border:none;border-radius:8px;background:transparent;color:#c7d2fe;font-size:.875rem;cursor:pointer;text-align:left;text-decoration:none;transition:background .15s,color .15s;white-space:nowrap;position:relative}.uk-sidebar-link:hover{background:#ffffff14;color:#fff}.uk-sidebar-link.active{background:#4f46e5;color:#fff}.uk-sidebar-link.active .uk-sidebar-icon{color:#fff}.uk-sidebar-link.child-active:not(.active){background:#6366f126;color:#a5b4fc}.uk-sidebar-icon{font-size:1.0625rem;width:20px;text-align:center;flex-shrink:0;color:#a5b4fc}.uk-sidebar-label{flex:1}.uk-sidebar-arrow{font-size:.75rem;color:#6b7280;transition:transform .2s}.uk-sidebar-badge{font-size:.6875rem;font-weight:700;padding:1px 7px;border-radius:20px;margin-left:auto;flex-shrink:0}.uk-sidebar-badge-dot{position:absolute;top:8px;right:8px;width:8px;height:8px;padding:0;border-radius:50%}.uk-badge-primary{background:#6366f1;color:#fff}.uk-badge-success{background:#22c55e;color:#fff}.uk-badge-danger{background:#ef4444;color:#fff}.uk-badge-warning{background:#f59e0b;color:#fff}.uk-sidebar-children{list-style:none;margin:2px 0;padding:0 0 0 8px;animation:uk-slide-down .18s ease}@keyframes uk-slide-down{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.uk-sidebar-child-link{display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:none;border-radius:6px;background:transparent;color:#a5b4fc;font-size:.8125rem;cursor:pointer;text-align:left;text-decoration:none;transition:background .15s,color .15s}.uk-sidebar-child-link i{font-size:.875rem}.uk-sidebar-child-link:hover{background:#ffffff0f;color:#e0e7ff}.uk-sidebar-child-link.active{color:#fff;background:#6366f140}.uk-sidebar-child-link.disabled{opacity:.4;cursor:not-allowed}.uk-sidebar-child-dot{width:5px;height:5px;border-radius:50%;background:#6b7280;flex-shrink:0;margin:0 7px}.uk-sidebar-collapse-btn{display:flex;align-items:center;gap:8px;width:100%;padding:12px 16px;border:none;border-top:1px solid rgba(255,255,255,.08);background:transparent;color:#6b7280;font-size:.8125rem;cursor:pointer;transition:color .15s;white-space:nowrap}.uk-sidebar-collapse-btn i{font-size:.875rem;flex-shrink:0}.uk-sidebar-collapse-btn:hover{color:#c7d2fe}\n"] }]
        }], propDecorators: { items: [{ type: i0.Input, args: [{ isSignal: true, alias: "items", required: false }] }], activeId: [{ type: i0.Input, args: [{ isSignal: true, alias: "activeId", required: false }] }], collapsed: [{ type: i0.Input, args: [{ isSignal: true, alias: "collapsed", required: false }] }], brandTitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "brandTitle", required: false }] }], brandLogo: [{ type: i0.Input, args: [{ isSignal: true, alias: "brandLogo", required: false }] }], brandRoute: [{ type: i0.Input, args: [{ isSignal: true, alias: "brandRoute", required: false }] }], itemClick: [{ type: i0.Output, args: ["itemClick"] }], collapsedChange: [{ type: i0.Output, args: ["collapsedChange"] }] } });

class UkLayoutComponent {
    title = input('', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    logo = input(...(ngDevMode ? [undefined, { debugName: "logo" }] : /* istanbul ignore next */ []));
    brandRoute = input(...(ngDevMode ? [undefined, { debugName: "brandRoute" }] : /* istanbul ignore next */ []));
    navItems = input([], ...(ngDevMode ? [{ debugName: "navItems" }] : /* istanbul ignore next */ []));
    headerActions = input([], ...(ngDevMode ? [{ debugName: "headerActions" }] : /* istanbul ignore next */ []));
    user = input(...(ngDevMode ? [undefined, { debugName: "user" }] : /* istanbul ignore next */ []));
    activeNavId = input('', ...(ngDevMode ? [{ debugName: "activeNavId" }] : /* istanbul ignore next */ []));
    defaultCollapsed = input(false, ...(ngDevMode ? [{ debugName: "defaultCollapsed" }] : /* istanbul ignore next */ []));
    navItemClick = output();
    headerActionClick = output();
    userMenuClick = output();
    sidebarCollapsed = signal(false, ...(ngDevMode ? [{ debugName: "sidebarCollapsed" }] : /* istanbul ignore next */ []));
    ngOnInit() { this.sidebarCollapsed.set(this.defaultCollapsed()); }
    toggleSidebar() { this.sidebarCollapsed.update(v => !v); }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.9", type: UkLayoutComponent, isStandalone: true, selector: "uk-layout", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, logo: { classPropertyName: "logo", publicName: "logo", isSignal: true, isRequired: false, transformFunction: null }, brandRoute: { classPropertyName: "brandRoute", publicName: "brandRoute", isSignal: true, isRequired: false, transformFunction: null }, navItems: { classPropertyName: "navItems", publicName: "navItems", isSignal: true, isRequired: false, transformFunction: null }, headerActions: { classPropertyName: "headerActions", publicName: "headerActions", isSignal: true, isRequired: false, transformFunction: null }, user: { classPropertyName: "user", publicName: "user", isSignal: true, isRequired: false, transformFunction: null }, activeNavId: { classPropertyName: "activeNavId", publicName: "activeNavId", isSignal: true, isRequired: false, transformFunction: null }, defaultCollapsed: { classPropertyName: "defaultCollapsed", publicName: "defaultCollapsed", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { navItemClick: "navItemClick", headerActionClick: "headerActionClick", userMenuClick: "userMenuClick" }, ngImport: i0, template: "<div class=\"uk-layout\">\n  <uk-header\n    [title]=\"title()\"\n    [logo]=\"logo()\"\n    [actions]=\"headerActions()\"\n    [user]=\"user()\"\n    [sidebarCollapsed]=\"sidebarCollapsed()\"\n    (menuToggle)=\"toggleSidebar()\"\n    (actionClick)=\"headerActionClick.emit($event)\"\n    (userMenuClick)=\"userMenuClick.emit($event)\"\n  />\n\n  <div class=\"uk-layout-body\">\n    <uk-sidebar\n      [items]=\"navItems()\"\n      [activeId]=\"activeNavId()\"\n      [collapsed]=\"sidebarCollapsed()\"\n      [brandTitle]=\"title()\"\n      [brandLogo]=\"logo()\"\n      [brandRoute]=\"brandRoute()\"\n      (itemClick)=\"navItemClick.emit($event)\"\n      (collapsedChange)=\"sidebarCollapsed.set($event)\"\n    />\n\n    <main class=\"uk-layout-content\">\n      <ng-content />\n    </main>\n  </div>\n</div>\n", styles: [":host{display:block;height:100vh}.uk-layout{display:flex;flex-direction:column;height:100vh;overflow:hidden}.uk-layout-body{display:flex;flex:1;overflow:hidden}.uk-layout-content{flex:1;overflow-y:auto;padding:28px;background:#f8fafc}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: UkHeaderComponent, selector: "uk-header", inputs: ["title", "logo", "actions", "user", "sidebarCollapsed", "showMenuToggle"], outputs: ["menuToggle", "actionClick", "userMenuClick"] }, { kind: "component", type: UkSidebarComponent, selector: "uk-sidebar", inputs: ["items", "activeId", "collapsed", "brandTitle", "brandLogo", "brandRoute"], outputs: ["itemClick", "collapsedChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-layout', standalone: true, imports: [CommonModule, UkHeaderComponent, UkSidebarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"uk-layout\">\n  <uk-header\n    [title]=\"title()\"\n    [logo]=\"logo()\"\n    [actions]=\"headerActions()\"\n    [user]=\"user()\"\n    [sidebarCollapsed]=\"sidebarCollapsed()\"\n    (menuToggle)=\"toggleSidebar()\"\n    (actionClick)=\"headerActionClick.emit($event)\"\n    (userMenuClick)=\"userMenuClick.emit($event)\"\n  />\n\n  <div class=\"uk-layout-body\">\n    <uk-sidebar\n      [items]=\"navItems()\"\n      [activeId]=\"activeNavId()\"\n      [collapsed]=\"sidebarCollapsed()\"\n      [brandTitle]=\"title()\"\n      [brandLogo]=\"logo()\"\n      [brandRoute]=\"brandRoute()\"\n      (itemClick)=\"navItemClick.emit($event)\"\n      (collapsedChange)=\"sidebarCollapsed.set($event)\"\n    />\n\n    <main class=\"uk-layout-content\">\n      <ng-content />\n    </main>\n  </div>\n</div>\n", styles: [":host{display:block;height:100vh}.uk-layout{display:flex;flex-direction:column;height:100vh;overflow:hidden}.uk-layout-body{display:flex;flex:1;overflow:hidden}.uk-layout-content{flex:1;overflow-y:auto;padding:28px;background:#f8fafc}\n"] }]
        }], propDecorators: { title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], logo: [{ type: i0.Input, args: [{ isSignal: true, alias: "logo", required: false }] }], brandRoute: [{ type: i0.Input, args: [{ isSignal: true, alias: "brandRoute", required: false }] }], navItems: [{ type: i0.Input, args: [{ isSignal: true, alias: "navItems", required: false }] }], headerActions: [{ type: i0.Input, args: [{ isSignal: true, alias: "headerActions", required: false }] }], user: [{ type: i0.Input, args: [{ isSignal: true, alias: "user", required: false }] }], activeNavId: [{ type: i0.Input, args: [{ isSignal: true, alias: "activeNavId", required: false }] }], defaultCollapsed: [{ type: i0.Input, args: [{ isSignal: true, alias: "defaultCollapsed", required: false }] }], navItemClick: [{ type: i0.Output, args: ["navItemClick"] }], headerActionClick: [{ type: i0.Output, args: ["headerActionClick"] }], userMenuClick: [{ type: i0.Output, args: ["userMenuClick"] }] } });

class UkOffcanvasComponent {
    open = model(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    title = input('', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    position = input('right', ...(ngDevMode ? [{ debugName: "position" }] : /* istanbul ignore next */ []));
    size = input('', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    backdrop = input(true, ...(ngDevMode ? [{ debugName: "backdrop" }] : /* istanbul ignore next */ []));
    closeOnBackdrop = input(true, ...(ngDevMode ? [{ debugName: "closeOnBackdrop" }] : /* istanbul ignore next */ []));
    closed = output();
    isVisible = signal(false, ...(ngDevMode ? [{ debugName: "isVisible" }] : /* istanbul ignore next */ []));
    isAnimating = signal(false, ...(ngDevMode ? [{ debugName: "isAnimating" }] : /* istanbul ignore next */ []));
    closeTimer = null;
    constructor() {
        effect(() => {
            const isOpen = this.open();
            untracked(() => {
                if (isOpen) {
                    this.show();
                }
                else {
                    this.hide();
                }
            });
        });
    }
    show() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
        this.isVisible.set(true);
        requestAnimationFrame(() => this.isAnimating.set(true));
    }
    hide() {
        this.isAnimating.set(false);
        this.closeTimer = setTimeout(() => {
            this.isVisible.set(false);
            this.closeTimer = null;
        }, 300);
    }
    close() {
        this.open.set(false);
        this.closed.emit();
        this.hide();
    }
    onBackdropClick() {
        if (this.closeOnBackdrop())
            this.close();
    }
    onEscape() {
        if (this.open())
            this.close();
    }
    get panelStyle() {
        const sz = this.size();
        if (!sz)
            return {};
        const pos = this.position();
        if (pos === 'left' || pos === 'right') {
            return { width: sz };
        }
        return { height: sz };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkOffcanvasComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkOffcanvasComponent, isStandalone: true, selector: "uk-offcanvas", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, backdrop: { classPropertyName: "backdrop", publicName: "backdrop", isSignal: true, isRequired: false, transformFunction: null }, closeOnBackdrop: { classPropertyName: "closeOnBackdrop", publicName: "closeOnBackdrop", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { open: "openChange", closed: "closed" }, host: { listeners: { "document:keydown.escape": "onEscape()" } }, ngImport: i0, template: "@if (isVisible()) {\n  <div\n    class=\"uk-offcanvas-backdrop\"\n    [class.uk-offcanvas-backdrop--visible]=\"backdrop() && isAnimating()\"\n    (click)=\"onBackdropClick()\"\n  ></div>\n}\n\n@if (isVisible()) {\n  <div\n    class=\"uk-offcanvas-panel uk-offcanvas-panel--{{ position() }}\"\n    [class.uk-offcanvas-panel--open]=\"isAnimating()\"\n    [ngStyle]=\"panelStyle\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    [attr.aria-label]=\"title() || 'Offcanvas panel'\"\n  >\n    <div class=\"uk-offcanvas-header\">\n      <span class=\"uk-offcanvas-title\">{{ title() }}</span>\n      <button class=\"uk-offcanvas-close\" type=\"button\" (click)=\"close()\" aria-label=\"Close\">\n        <i class=\"bi bi-x-lg\"></i>\n      </button>\n    </div>\n\n    <div class=\"uk-offcanvas-body\">\n      <ng-content />\n    </div>\n\n    <div class=\"uk-offcanvas-footer\">\n      <ng-content select=\"[ukOffcanvasFooter]\" />\n    </div>\n  </div>\n}\n", styles: ["@charset \"UTF-8\";.uk-offcanvas-backdrop{position:fixed;inset:0;background:#0000;z-index:1040;transition:background .3s cubic-bezier(.4,0,.2,1)}.uk-offcanvas-backdrop--visible{background:#00000073}.uk-offcanvas-panel{position:fixed;z-index:1050;background:#fff;display:flex;flex-direction:column;box-shadow:0 8px 32px #0000002e;transition:transform .3s cubic-bezier(.4,0,.2,1)}.uk-offcanvas-panel--right{top:0;right:0;bottom:0;width:420px;transform:translate(100%);border-left:1px solid #e5e7eb}.uk-offcanvas-panel--right.uk-offcanvas-panel--open{transform:translate(0)}.uk-offcanvas-panel--left{top:0;left:0;bottom:0;width:420px;transform:translate(-100%);border-right:1px solid #e5e7eb}.uk-offcanvas-panel--left.uk-offcanvas-panel--open{transform:translate(0)}.uk-offcanvas-panel--top{top:0;left:0;right:0;height:320px;transform:translateY(-100%);border-bottom:1px solid #e5e7eb}.uk-offcanvas-panel--top.uk-offcanvas-panel--open{transform:translateY(0)}.uk-offcanvas-panel--bottom{bottom:0;left:0;right:0;height:320px;transform:translateY(100%);border-top:1px solid #e5e7eb}.uk-offcanvas-panel--bottom.uk-offcanvas-panel--open{transform:translateY(0)}.uk-offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e5e7eb;flex-shrink:0}.uk-offcanvas-title{font-size:1rem;font-weight:600;color:#111827}.uk-offcanvas-close{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border:none;background:transparent;color:#6b7280;border-radius:6px;cursor:pointer;transition:background .15s,color .15s;font-size:1rem}.uk-offcanvas-close:hover{background:#f3f4f6;color:#111827}.uk-offcanvas-body{flex:1;padding:20px;overflow-y:auto}.uk-offcanvas-footer{padding:14px 20px;border-top:1px solid #e5e7eb;flex-shrink:0}.uk-offcanvas-footer:empty{display:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkOffcanvasComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-offcanvas', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (isVisible()) {\n  <div\n    class=\"uk-offcanvas-backdrop\"\n    [class.uk-offcanvas-backdrop--visible]=\"backdrop() && isAnimating()\"\n    (click)=\"onBackdropClick()\"\n  ></div>\n}\n\n@if (isVisible()) {\n  <div\n    class=\"uk-offcanvas-panel uk-offcanvas-panel--{{ position() }}\"\n    [class.uk-offcanvas-panel--open]=\"isAnimating()\"\n    [ngStyle]=\"panelStyle\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    [attr.aria-label]=\"title() || 'Offcanvas panel'\"\n  >\n    <div class=\"uk-offcanvas-header\">\n      <span class=\"uk-offcanvas-title\">{{ title() }}</span>\n      <button class=\"uk-offcanvas-close\" type=\"button\" (click)=\"close()\" aria-label=\"Close\">\n        <i class=\"bi bi-x-lg\"></i>\n      </button>\n    </div>\n\n    <div class=\"uk-offcanvas-body\">\n      <ng-content />\n    </div>\n\n    <div class=\"uk-offcanvas-footer\">\n      <ng-content select=\"[ukOffcanvasFooter]\" />\n    </div>\n  </div>\n}\n", styles: ["@charset \"UTF-8\";.uk-offcanvas-backdrop{position:fixed;inset:0;background:#0000;z-index:1040;transition:background .3s cubic-bezier(.4,0,.2,1)}.uk-offcanvas-backdrop--visible{background:#00000073}.uk-offcanvas-panel{position:fixed;z-index:1050;background:#fff;display:flex;flex-direction:column;box-shadow:0 8px 32px #0000002e;transition:transform .3s cubic-bezier(.4,0,.2,1)}.uk-offcanvas-panel--right{top:0;right:0;bottom:0;width:420px;transform:translate(100%);border-left:1px solid #e5e7eb}.uk-offcanvas-panel--right.uk-offcanvas-panel--open{transform:translate(0)}.uk-offcanvas-panel--left{top:0;left:0;bottom:0;width:420px;transform:translate(-100%);border-right:1px solid #e5e7eb}.uk-offcanvas-panel--left.uk-offcanvas-panel--open{transform:translate(0)}.uk-offcanvas-panel--top{top:0;left:0;right:0;height:320px;transform:translateY(-100%);border-bottom:1px solid #e5e7eb}.uk-offcanvas-panel--top.uk-offcanvas-panel--open{transform:translateY(0)}.uk-offcanvas-panel--bottom{bottom:0;left:0;right:0;height:320px;transform:translateY(100%);border-top:1px solid #e5e7eb}.uk-offcanvas-panel--bottom.uk-offcanvas-panel--open{transform:translateY(0)}.uk-offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e5e7eb;flex-shrink:0}.uk-offcanvas-title{font-size:1rem;font-weight:600;color:#111827}.uk-offcanvas-close{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border:none;background:transparent;color:#6b7280;border-radius:6px;cursor:pointer;transition:background .15s,color .15s;font-size:1rem}.uk-offcanvas-close:hover{background:#f3f4f6;color:#111827}.uk-offcanvas-body{flex:1;padding:20px;overflow-y:auto}.uk-offcanvas-footer{padding:14px 20px;border-top:1px solid #e5e7eb;flex-shrink:0}.uk-offcanvas-footer:empty{display:none}\n"] }]
        }], ctorParameters: () => [], propDecorators: { open: [{ type: i0.Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: i0.Output, args: ["openChange"] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], position: [{ type: i0.Input, args: [{ isSignal: true, alias: "position", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], backdrop: [{ type: i0.Input, args: [{ isSignal: true, alias: "backdrop", required: false }] }], closeOnBackdrop: [{ type: i0.Input, args: [{ isSignal: true, alias: "closeOnBackdrop", required: false }] }], closed: [{ type: i0.Output, args: ["closed"] }], onEscape: [{
                type: HostListener,
                args: ['document:keydown.escape']
            }] } });

class UkSpinnerComponent {
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    variant = input('primary', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    label = input('Loading…', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkSpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.9", type: UkSpinnerComponent, isStandalone: true, selector: "uk-spinner", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<span\n  class=\"uk-spinner uk-spinner--{{ size() }} uk-spinner--{{ variant() }}\"\n  role=\"status\"\n  [attr.aria-label]=\"label()\"\n>\n  <span class=\"uk-sr-only\">{{ label() }}</span>\n</span>\n", styles: ["@keyframes uk-spin{to{transform:rotate(360deg)}}.uk-spinner{display:inline-block;border-radius:50%;border:3px solid currentColor;border-right-color:transparent;animation:uk-spin .65s linear infinite;flex-shrink:0}.uk-spinner--xs{width:14px;height:14px;border-width:2px}.uk-spinner--sm{width:20px;height:20px;border-width:2px}.uk-spinner--md{width:28px;height:28px;border-width:3px}.uk-spinner--lg{width:40px;height:40px;border-width:4px}.uk-spinner--xl{width:56px;height:56px;border-width:5px}.uk-spinner--primary{color:#6366f1}.uk-spinner--secondary{color:#6b7280}.uk-spinner--success{color:#22c55e}.uk-spinner--danger{color:#ef4444}.uk-spinner--warning{color:#f59e0b}.uk-spinner--light{color:#e5e7eb}.uk-spinner--dark{color:#111827}.uk-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-spinner', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<span\n  class=\"uk-spinner uk-spinner--{{ size() }} uk-spinner--{{ variant() }}\"\n  role=\"status\"\n  [attr.aria-label]=\"label()\"\n>\n  <span class=\"uk-sr-only\">{{ label() }}</span>\n</span>\n", styles: ["@keyframes uk-spin{to{transform:rotate(360deg)}}.uk-spinner{display:inline-block;border-radius:50%;border:3px solid currentColor;border-right-color:transparent;animation:uk-spin .65s linear infinite;flex-shrink:0}.uk-spinner--xs{width:14px;height:14px;border-width:2px}.uk-spinner--sm{width:20px;height:20px;border-width:2px}.uk-spinner--md{width:28px;height:28px;border-width:3px}.uk-spinner--lg{width:40px;height:40px;border-width:4px}.uk-spinner--xl{width:56px;height:56px;border-width:5px}.uk-spinner--primary{color:#6366f1}.uk-spinner--secondary{color:#6b7280}.uk-spinner--success{color:#22c55e}.uk-spinner--danger{color:#ef4444}.uk-spinner--warning{color:#f59e0b}.uk-spinner--light{color:#e5e7eb}.uk-spinner--dark{color:#111827}.uk-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}\n"] }]
        }], propDecorators: { size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }] } });

class UkToastService {
    _toasts = signal([], ...(ngDevMode ? [{ debugName: "_toasts" }] : /* istanbul ignore next */ []));
    toasts = this._toasts.asReadonly();
    show(item) {
        const id = item.id ?? crypto.randomUUID();
        this._toasts.update(list => [...list, { ...item, id }]);
        if (item.duration > 0) {
            setTimeout(() => this.dismiss(id), item.duration);
        }
        return id;
    }
    success(message, title, duration = 4000) {
        return this.show({ message, title, variant: 'success', duration, icon: 'check-circle-fill' });
    }
    error(message, title, duration = 6000) {
        return this.show({ message, title, variant: 'danger', duration, icon: 'exclamation-circle-fill' });
    }
    warning(message, title, duration = 5000) {
        return this.show({ message, title, variant: 'warning', duration, icon: 'exclamation-triangle-fill' });
    }
    info(message, title, duration = 4000) {
        return this.show({ message, title, variant: 'info', duration, icon: 'info-circle-fill' });
    }
    dismiss(id) {
        this._toasts.update(list => list.filter(t => t.id !== id));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkToastService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkToastService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class UkToasterComponent {
    position = input('top-right', ...(ngDevMode ? [{ debugName: "position" }] : /* istanbul ignore next */ []));
    toastService = inject(UkToastService);
    dismiss(id) {
        this.toastService.dismiss(id);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkToasterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkToasterComponent, isStandalone: true, selector: "uk-toaster", inputs: { position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"uk-toaster uk-toaster--{{ position() }}\">\n  @for (toast of toastService.toasts(); track toast.id) {\n    <div class=\"uk-toast uk-toast--{{ toast.variant }}\" role=\"alert\" aria-live=\"assertive\">\n      @if (toast.icon) {\n        <i class=\"bi bi-{{ toast.icon }} uk-toast-icon\"></i>\n      }\n      <div class=\"uk-toast-body\">\n        @if (toast.title) {\n          <div class=\"uk-toast-title\">{{ toast.title }}</div>\n        }\n        <div class=\"uk-toast-message\">{{ toast.message }}</div>\n      </div>\n      <button class=\"uk-toast-close\" type=\"button\" (click)=\"dismiss(toast.id)\" aria-label=\"Close\">\n        <i class=\"bi bi-x-lg\"></i>\n      </button>\n    </div>\n  }\n</div>\n", styles: [".uk-toaster{position:fixed;z-index:1090;display:flex;flex-direction:column;gap:10px;pointer-events:none;max-width:360px;width:100%}.uk-toaster--top-right{top:16px;right:16px}.uk-toaster--top-left{top:16px;left:16px}.uk-toaster--top-center{top:16px;left:50%;transform:translate(-50%)}.uk-toaster--bottom-right{bottom:16px;right:16px;flex-direction:column-reverse}.uk-toaster--bottom-left{bottom:16px;left:16px;flex-direction:column-reverse}.uk-toaster--bottom-center{bottom:16px;left:50%;transform:translate(-50%);flex-direction:column-reverse}.uk-toast{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border-radius:10px;border:1px solid;box-shadow:0 4px 16px #0000001f;pointer-events:all;animation:uk-toast-in .22s ease;font-size:.875rem}.uk-toast--success{background:#f0fdf4;border-color:#bbf7d0;color:#15803d}.uk-toast--danger{background:#fef2f2;border-color:#fecaca;color:#b91c1c}.uk-toast--warning{background:#fffbeb;border-color:#fde68a;color:#92400e}.uk-toast--info{background:#eff6ff;border-color:#bfdbfe;color:#1d4ed8}.uk-toast-icon{font-size:1rem;flex-shrink:0;margin-top:1px}.uk-toast-body{flex:1;min-width:0}.uk-toast-title{font-weight:600;margin-bottom:2px}.uk-toast-message{line-height:1.45}.uk-toast-close{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:none;background:transparent;color:inherit;opacity:.6;cursor:pointer;border-radius:4px;flex-shrink:0;transition:opacity .15s}.uk-toast-close:hover{opacity:1}@keyframes uk-toast-in{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkToasterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-toaster', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"uk-toaster uk-toaster--{{ position() }}\">\n  @for (toast of toastService.toasts(); track toast.id) {\n    <div class=\"uk-toast uk-toast--{{ toast.variant }}\" role=\"alert\" aria-live=\"assertive\">\n      @if (toast.icon) {\n        <i class=\"bi bi-{{ toast.icon }} uk-toast-icon\"></i>\n      }\n      <div class=\"uk-toast-body\">\n        @if (toast.title) {\n          <div class=\"uk-toast-title\">{{ toast.title }}</div>\n        }\n        <div class=\"uk-toast-message\">{{ toast.message }}</div>\n      </div>\n      <button class=\"uk-toast-close\" type=\"button\" (click)=\"dismiss(toast.id)\" aria-label=\"Close\">\n        <i class=\"bi bi-x-lg\"></i>\n      </button>\n    </div>\n  }\n</div>\n", styles: [".uk-toaster{position:fixed;z-index:1090;display:flex;flex-direction:column;gap:10px;pointer-events:none;max-width:360px;width:100%}.uk-toaster--top-right{top:16px;right:16px}.uk-toaster--top-left{top:16px;left:16px}.uk-toaster--top-center{top:16px;left:50%;transform:translate(-50%)}.uk-toaster--bottom-right{bottom:16px;right:16px;flex-direction:column-reverse}.uk-toaster--bottom-left{bottom:16px;left:16px;flex-direction:column-reverse}.uk-toaster--bottom-center{bottom:16px;left:50%;transform:translate(-50%);flex-direction:column-reverse}.uk-toast{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border-radius:10px;border:1px solid;box-shadow:0 4px 16px #0000001f;pointer-events:all;animation:uk-toast-in .22s ease;font-size:.875rem}.uk-toast--success{background:#f0fdf4;border-color:#bbf7d0;color:#15803d}.uk-toast--danger{background:#fef2f2;border-color:#fecaca;color:#b91c1c}.uk-toast--warning{background:#fffbeb;border-color:#fde68a;color:#92400e}.uk-toast--info{background:#eff6ff;border-color:#bfdbfe;color:#1d4ed8}.uk-toast-icon{font-size:1rem;flex-shrink:0;margin-top:1px}.uk-toast-body{flex:1;min-width:0}.uk-toast-title{font-weight:600;margin-bottom:2px}.uk-toast-message{line-height:1.45}.uk-toast-close{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:none;background:transparent;color:inherit;opacity:.6;cursor:pointer;border-radius:4px;flex-shrink:0;transition:opacity .15s}.uk-toast-close:hover{opacity:1}@keyframes uk-toast-in{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}\n"] }]
        }], propDecorators: { position: [{ type: i0.Input, args: [{ isSignal: true, alias: "position", required: false }] }] } });

class UkProgressComponent {
    value = input(0, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    max = input(100, ...(ngDevMode ? [{ debugName: "max" }] : /* istanbul ignore next */ []));
    label = input(...(ngDevMode ? [undefined, { debugName: "label" }] : /* istanbul ignore next */ []));
    showLabel = input(false, ...(ngDevMode ? [{ debugName: "showLabel" }] : /* istanbul ignore next */ []));
    striped = input(false, ...(ngDevMode ? [{ debugName: "striped" }] : /* istanbul ignore next */ []));
    animated = input(false, ...(ngDevMode ? [{ debugName: "animated" }] : /* istanbul ignore next */ []));
    indeterminate = input(false, ...(ngDevMode ? [{ debugName: "indeterminate" }] : /* istanbul ignore next */ []));
    variant = input('primary', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    get percent() {
        return Math.min(100, Math.max(0, (this.value() / this.max()) * 100));
    }
    get roundedPercent() {
        return Math.round(this.percent);
    }
    get displayLabel() {
        return this.label() ?? `${this.roundedPercent}%`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkProgressComponent, isStandalone: true, selector: "uk-progress", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, showLabel: { classPropertyName: "showLabel", publicName: "showLabel", isSignal: true, isRequired: false, transformFunction: null }, striped: { classPropertyName: "striped", publicName: "striped", isSignal: true, isRequired: false, transformFunction: null }, animated: { classPropertyName: "animated", publicName: "animated", isSignal: true, isRequired: false, transformFunction: null }, indeterminate: { classPropertyName: "indeterminate", publicName: "indeterminate", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"uk-progress-wrapper\">\n  @if (showLabel()) {\n    <div class=\"uk-progress-label-row\">\n      <span class=\"uk-progress-label\">{{ displayLabel }}</span>\n      @if (!indeterminate()) {\n        <span class=\"uk-progress-pct\">{{ roundedPercent }}%</span>\n      }\n    </div>\n  }\n  <div\n    class=\"uk-progress uk-progress--{{ size() }}\"\n    role=\"progressbar\"\n    [attr.aria-valuenow]=\"indeterminate() ? null : value()\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuemax]=\"max()\"\n    [attr.aria-label]=\"displayLabel\"\n  >\n    <div\n      class=\"uk-progress-bar uk-progress-bar--{{ variant() }}\"\n      [class.uk-progress-bar--striped]=\"striped() || animated()\"\n      [class.uk-progress-bar--animated]=\"animated()\"\n      [class.uk-progress-bar--indeterminate]=\"indeterminate()\"\n      [style.width.%]=\"indeterminate() ? null : percent\"\n    ></div>\n  </div>\n</div>\n", styles: ["@keyframes uk-progress-stripe{0%{background-position:40px 0}to{background-position:0 0}}@keyframes uk-progress-indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}.uk-progress-wrapper{width:100%}.uk-progress-label-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;font-size:.875rem;color:#374151}.uk-progress-label{font-weight:500}.uk-progress-pct{color:#6b7280}.uk-progress{width:100%;background:#e5e7eb;border-radius:9999px;overflow:hidden;position:relative}.uk-progress--sm{height:6px}.uk-progress--md{height:10px}.uk-progress--lg{height:16px}.uk-progress-bar{height:100%;border-radius:inherit;transition:width .4s ease;position:relative;overflow:hidden}.uk-progress-bar--primary{background:#6366f1}.uk-progress-bar--success{background:#22c55e}.uk-progress-bar--danger{background:#ef4444}.uk-progress-bar--warning{background:#f59e0b}.uk-progress-bar--info{background:#06b6d4}.uk-progress-bar--striped{background-image:linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent);background-size:40px 40px}.uk-progress-bar--animated{animation:uk-progress-stripe .8s linear infinite}.uk-progress-bar--indeterminate{width:35%!important;animation:uk-progress-indeterminate 1.6s cubic-bezier(.65,.815,.735,.395) infinite;position:absolute;left:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkProgressComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-progress', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"uk-progress-wrapper\">\n  @if (showLabel()) {\n    <div class=\"uk-progress-label-row\">\n      <span class=\"uk-progress-label\">{{ displayLabel }}</span>\n      @if (!indeterminate()) {\n        <span class=\"uk-progress-pct\">{{ roundedPercent }}%</span>\n      }\n    </div>\n  }\n  <div\n    class=\"uk-progress uk-progress--{{ size() }}\"\n    role=\"progressbar\"\n    [attr.aria-valuenow]=\"indeterminate() ? null : value()\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuemax]=\"max()\"\n    [attr.aria-label]=\"displayLabel\"\n  >\n    <div\n      class=\"uk-progress-bar uk-progress-bar--{{ variant() }}\"\n      [class.uk-progress-bar--striped]=\"striped() || animated()\"\n      [class.uk-progress-bar--animated]=\"animated()\"\n      [class.uk-progress-bar--indeterminate]=\"indeterminate()\"\n      [style.width.%]=\"indeterminate() ? null : percent\"\n    ></div>\n  </div>\n</div>\n", styles: ["@keyframes uk-progress-stripe{0%{background-position:40px 0}to{background-position:0 0}}@keyframes uk-progress-indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}.uk-progress-wrapper{width:100%}.uk-progress-label-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;font-size:.875rem;color:#374151}.uk-progress-label{font-weight:500}.uk-progress-pct{color:#6b7280}.uk-progress{width:100%;background:#e5e7eb;border-radius:9999px;overflow:hidden;position:relative}.uk-progress--sm{height:6px}.uk-progress--md{height:10px}.uk-progress--lg{height:16px}.uk-progress-bar{height:100%;border-radius:inherit;transition:width .4s ease;position:relative;overflow:hidden}.uk-progress-bar--primary{background:#6366f1}.uk-progress-bar--success{background:#22c55e}.uk-progress-bar--danger{background:#ef4444}.uk-progress-bar--warning{background:#f59e0b}.uk-progress-bar--info{background:#06b6d4}.uk-progress-bar--striped{background-image:linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent);background-size:40px 40px}.uk-progress-bar--animated{animation:uk-progress-stripe .8s linear infinite}.uk-progress-bar--indeterminate{width:35%!important;animation:uk-progress-indeterminate 1.6s cubic-bezier(.65,.815,.735,.395) infinite;position:absolute;left:0}\n"] }]
        }], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }], max: [{ type: i0.Input, args: [{ isSignal: true, alias: "max", required: false }] }], label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], showLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "showLabel", required: false }] }], striped: [{ type: i0.Input, args: [{ isSignal: true, alias: "striped", required: false }] }], animated: [{ type: i0.Input, args: [{ isSignal: true, alias: "animated", required: false }] }], indeterminate: [{ type: i0.Input, args: [{ isSignal: true, alias: "indeterminate", required: false }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }] } });

class UkModalComponent {
    open = model(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    title = input('', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    backdrop = input(true, ...(ngDevMode ? [{ debugName: "backdrop" }] : /* istanbul ignore next */ []));
    closeOnBackdrop = input(true, ...(ngDevMode ? [{ debugName: "closeOnBackdrop" }] : /* istanbul ignore next */ []));
    showClose = input(true, ...(ngDevMode ? [{ debugName: "showClose" }] : /* istanbul ignore next */ []));
    closed = output();
    isVisible = signal(false, ...(ngDevMode ? [{ debugName: "isVisible" }] : /* istanbul ignore next */ []));
    isAnimating = signal(false, ...(ngDevMode ? [{ debugName: "isAnimating" }] : /* istanbul ignore next */ []));
    closeTimer = null;
    constructor() {
        effect(() => {
            const isOpen = this.open();
            untracked(() => {
                if (isOpen)
                    this.show();
                else
                    this.hide();
            });
        });
    }
    show() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
        this.isVisible.set(true);
        requestAnimationFrame(() => this.isAnimating.set(true));
    }
    hide() {
        this.isAnimating.set(false);
        this.closeTimer = setTimeout(() => { this.isVisible.set(false); this.closeTimer = null; }, 300);
    }
    close() {
        this.open.set(false);
        this.closed.emit();
        this.hide();
    }
    onBackdropClick(event) {
        if (this.closeOnBackdrop() && event.target === event.currentTarget)
            this.close();
    }
    onEscape() {
        if (this.open())
            this.close();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkModalComponent, isStandalone: true, selector: "uk-modal", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, backdrop: { classPropertyName: "backdrop", publicName: "backdrop", isSignal: true, isRequired: false, transformFunction: null }, closeOnBackdrop: { classPropertyName: "closeOnBackdrop", publicName: "closeOnBackdrop", isSignal: true, isRequired: false, transformFunction: null }, showClose: { classPropertyName: "showClose", publicName: "showClose", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { open: "openChange", closed: "closed" }, host: { listeners: { "document:keydown.escape": "onEscape()" } }, ngImport: i0, template: "@if (isVisible()) {\n  <div\n    class=\"uk-modal-backdrop\"\n    [class.uk-modal-backdrop--visible]=\"backdrop() && isAnimating()\"\n    (click)=\"onBackdropClick($event)\"\n    role=\"presentation\"\n  >\n    <div\n      class=\"uk-modal uk-modal--{{ size() }}\"\n      [class.uk-modal--open]=\"isAnimating()\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      [attr.aria-label]=\"title() || 'Dialog'\"\n    >\n      <div class=\"uk-modal-header\">\n        <span class=\"uk-modal-title\">{{ title() }}</span>\n        @if (showClose()) {\n          <button class=\"uk-modal-close\" type=\"button\" (click)=\"close()\" aria-label=\"Close\">\n            <i class=\"bi bi-x-lg\"></i>\n          </button>\n        }\n      </div>\n\n      <div class=\"uk-modal-body\">\n        <ng-content />\n      </div>\n\n      <div class=\"uk-modal-footer\">\n        <ng-content select=\"[ukModalFooter]\" />\n      </div>\n    </div>\n  </div>\n}\n", styles: [".uk-modal-backdrop{position:fixed;inset:0;background:#0000;z-index:1050;display:flex;align-items:center;justify-content:center;padding:16px;transition:background .25s ease}.uk-modal-backdrop--visible{background:#00000080}.uk-modal{background:#fff;border-radius:12px;box-shadow:0 20px 60px #0003;display:flex;flex-direction:column;max-height:calc(100vh - 32px);width:100%;transform:scale(.92) translateY(12px);opacity:0;transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .25s ease}.uk-modal--open{transform:scale(1) translateY(0);opacity:1}.uk-modal--sm{max-width:400px}.uk-modal--md{max-width:560px}.uk-modal--lg{max-width:760px}.uk-modal--xl{max-width:1024px}.uk-modal--full{max-width:calc(100vw - 32px);height:calc(100vh - 32px)}.uk-modal-header{display:flex;align-items:center;justify-content:space-between;padding:18px 20px 16px;border-bottom:1px solid #e5e7eb;flex-shrink:0}.uk-modal-title{font-size:1.0625rem;font-weight:600;color:#111827}.uk-modal-close{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border:none;background:transparent;color:#6b7280;border-radius:6px;cursor:pointer;font-size:1rem;transition:background .15s,color .15s}.uk-modal-close:hover{background:#f3f4f6;color:#111827}.uk-modal-body{flex:1;padding:20px;overflow-y:auto}.uk-modal-footer{padding:14px 20px;border-top:1px solid #e5e7eb;flex-shrink:0}.uk-modal-footer:empty{display:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-modal', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (isVisible()) {\n  <div\n    class=\"uk-modal-backdrop\"\n    [class.uk-modal-backdrop--visible]=\"backdrop() && isAnimating()\"\n    (click)=\"onBackdropClick($event)\"\n    role=\"presentation\"\n  >\n    <div\n      class=\"uk-modal uk-modal--{{ size() }}\"\n      [class.uk-modal--open]=\"isAnimating()\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      [attr.aria-label]=\"title() || 'Dialog'\"\n    >\n      <div class=\"uk-modal-header\">\n        <span class=\"uk-modal-title\">{{ title() }}</span>\n        @if (showClose()) {\n          <button class=\"uk-modal-close\" type=\"button\" (click)=\"close()\" aria-label=\"Close\">\n            <i class=\"bi bi-x-lg\"></i>\n          </button>\n        }\n      </div>\n\n      <div class=\"uk-modal-body\">\n        <ng-content />\n      </div>\n\n      <div class=\"uk-modal-footer\">\n        <ng-content select=\"[ukModalFooter]\" />\n      </div>\n    </div>\n  </div>\n}\n", styles: [".uk-modal-backdrop{position:fixed;inset:0;background:#0000;z-index:1050;display:flex;align-items:center;justify-content:center;padding:16px;transition:background .25s ease}.uk-modal-backdrop--visible{background:#00000080}.uk-modal{background:#fff;border-radius:12px;box-shadow:0 20px 60px #0003;display:flex;flex-direction:column;max-height:calc(100vh - 32px);width:100%;transform:scale(.92) translateY(12px);opacity:0;transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .25s ease}.uk-modal--open{transform:scale(1) translateY(0);opacity:1}.uk-modal--sm{max-width:400px}.uk-modal--md{max-width:560px}.uk-modal--lg{max-width:760px}.uk-modal--xl{max-width:1024px}.uk-modal--full{max-width:calc(100vw - 32px);height:calc(100vh - 32px)}.uk-modal-header{display:flex;align-items:center;justify-content:space-between;padding:18px 20px 16px;border-bottom:1px solid #e5e7eb;flex-shrink:0}.uk-modal-title{font-size:1.0625rem;font-weight:600;color:#111827}.uk-modal-close{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border:none;background:transparent;color:#6b7280;border-radius:6px;cursor:pointer;font-size:1rem;transition:background .15s,color .15s}.uk-modal-close:hover{background:#f3f4f6;color:#111827}.uk-modal-body{flex:1;padding:20px;overflow-y:auto}.uk-modal-footer{padding:14px 20px;border-top:1px solid #e5e7eb;flex-shrink:0}.uk-modal-footer:empty{display:none}\n"] }]
        }], ctorParameters: () => [], propDecorators: { open: [{ type: i0.Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: i0.Output, args: ["openChange"] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], backdrop: [{ type: i0.Input, args: [{ isSignal: true, alias: "backdrop", required: false }] }], closeOnBackdrop: [{ type: i0.Input, args: [{ isSignal: true, alias: "closeOnBackdrop", required: false }] }], showClose: [{ type: i0.Input, args: [{ isSignal: true, alias: "showClose", required: false }] }], closed: [{ type: i0.Output, args: ["closed"] }], onEscape: [{
                type: HostListener,
                args: ['document:keydown.escape']
            }] } });

class UkListGroupComponent {
    flush = input(false, ...(ngDevMode ? [{ debugName: "flush" }] : /* istanbul ignore next */ []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkListGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.9", type: UkListGroupComponent, isStandalone: true, selector: "uk-list-group", inputs: { flush: { classPropertyName: "flush", publicName: "flush", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: `<ul class="uk-list-group" [class.uk-list-group--flush]="flush()"><ng-content /></ul>`, isInline: true, styles: [".uk-list-group{list-style:none;margin:0;padding:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden}.uk-list-group--flush{border-left:none;border-right:none;border-radius:0}.uk-list-item{display:flex;align-items:center;gap:10px;padding:11px 16px;font-size:.9rem;color:#374151;border-bottom:1px solid #f3f4f6;transition:background .12s}.uk-list-item:last-child{border-bottom:none}.uk-list-item--active{background:#eff6ff;color:#1d4ed8;font-weight:500}.uk-list-item--disabled{opacity:.45;pointer-events:none}.uk-list-item--action{cursor:pointer}.uk-list-item--action:hover{background:#f9fafb}.uk-list-item--action:active{background:#f3f4f6}.uk-list-item-icon{font-size:1rem;flex-shrink:0;color:#6b7280}.uk-list-item--active .uk-list-item-icon{color:#1d4ed8}.uk-list-item-label{flex:1}.uk-badge{display:inline-flex;align-items:center;justify-content:center;padding:2px 7px;border-radius:9999px;font-size:.75rem;font-weight:600;line-height:1.4}.uk-badge--primary{background:#ede9fe;color:#6366f1}.uk-badge--success{background:#dcfce7;color:#16a34a}.uk-badge--danger{background:#fee2e2;color:#dc2626}.uk-badge--warning{background:#fef3c7;color:#d97706}.uk-badge--info{background:#dbeafe;color:#2563eb}.uk-badge--secondary{background:#f3f4f6;color:#6b7280}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkListGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-list-group', standalone: true, template: `<ul class="uk-list-group" [class.uk-list-group--flush]="flush()"><ng-content /></ul>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".uk-list-group{list-style:none;margin:0;padding:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden}.uk-list-group--flush{border-left:none;border-right:none;border-radius:0}.uk-list-item{display:flex;align-items:center;gap:10px;padding:11px 16px;font-size:.9rem;color:#374151;border-bottom:1px solid #f3f4f6;transition:background .12s}.uk-list-item:last-child{border-bottom:none}.uk-list-item--active{background:#eff6ff;color:#1d4ed8;font-weight:500}.uk-list-item--disabled{opacity:.45;pointer-events:none}.uk-list-item--action{cursor:pointer}.uk-list-item--action:hover{background:#f9fafb}.uk-list-item--action:active{background:#f3f4f6}.uk-list-item-icon{font-size:1rem;flex-shrink:0;color:#6b7280}.uk-list-item--active .uk-list-item-icon{color:#1d4ed8}.uk-list-item-label{flex:1}.uk-badge{display:inline-flex;align-items:center;justify-content:center;padding:2px 7px;border-radius:9999px;font-size:.75rem;font-weight:600;line-height:1.4}.uk-badge--primary{background:#ede9fe;color:#6366f1}.uk-badge--success{background:#dcfce7;color:#16a34a}.uk-badge--danger{background:#fee2e2;color:#dc2626}.uk-badge--warning{background:#fef3c7;color:#d97706}.uk-badge--info{background:#dbeafe;color:#2563eb}.uk-badge--secondary{background:#f3f4f6;color:#6b7280}\n"] }]
        }], propDecorators: { flush: [{ type: i0.Input, args: [{ isSignal: true, alias: "flush", required: false }] }] } });

class UkListItemComponent {
    icon = input(...(ngDevMode ? [undefined, { debugName: "icon" }] : /* istanbul ignore next */ []));
    active = input(false, ...(ngDevMode ? [{ debugName: "active" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    badge = input(...(ngDevMode ? [undefined, { debugName: "badge" }] : /* istanbul ignore next */ []));
    badgeVariant = input('primary', ...(ngDevMode ? [{ debugName: "badgeVariant" }] : /* istanbul ignore next */ []));
    action = input(false, ...(ngDevMode ? [{ debugName: "action" }] : /* istanbul ignore next */ []));
    itemClick = output();
    onClick() {
        if (this.action() && !this.disabled())
            this.itemClick.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkListItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkListItemComponent, isStandalone: true, selector: "uk-list-item", inputs: { icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, active: { classPropertyName: "active", publicName: "active", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, badge: { classPropertyName: "badge", publicName: "badge", isSignal: true, isRequired: false, transformFunction: null }, badgeVariant: { classPropertyName: "badgeVariant", publicName: "badgeVariant", isSignal: true, isRequired: false, transformFunction: null }, action: { classPropertyName: "action", publicName: "action", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { itemClick: "itemClick" }, ngImport: i0, template: "<li\n  class=\"uk-list-item\"\n  [class.uk-list-item--active]=\"active()\"\n  [class.uk-list-item--disabled]=\"disabled()\"\n  [class.uk-list-item--action]=\"action()\"\n  (click)=\"onClick()\"\n>\n  @if (icon()) {\n    <i class=\"bi bi-{{ icon() }} uk-list-item-icon\"></i>\n  }\n  <span class=\"uk-list-item-label\"><ng-content /></span>\n  @if (badge() != null) {\n    <span class=\"uk-badge uk-badge--{{ badgeVariant() }}\">{{ badge() }}</span>\n  }\n</li>\n", styles: [".uk-list-group{list-style:none;margin:0;padding:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden}.uk-list-group--flush{border-left:none;border-right:none;border-radius:0}.uk-list-item{display:flex;align-items:center;gap:10px;padding:11px 16px;font-size:.9rem;color:#374151;border-bottom:1px solid #f3f4f6;transition:background .12s}.uk-list-item:last-child{border-bottom:none}.uk-list-item--active{background:#eff6ff;color:#1d4ed8;font-weight:500}.uk-list-item--disabled{opacity:.45;pointer-events:none}.uk-list-item--action{cursor:pointer}.uk-list-item--action:hover{background:#f9fafb}.uk-list-item--action:active{background:#f3f4f6}.uk-list-item-icon{font-size:1rem;flex-shrink:0;color:#6b7280}.uk-list-item--active .uk-list-item-icon{color:#1d4ed8}.uk-list-item-label{flex:1}.uk-badge{display:inline-flex;align-items:center;justify-content:center;padding:2px 7px;border-radius:9999px;font-size:.75rem;font-weight:600;line-height:1.4}.uk-badge--primary{background:#ede9fe;color:#6366f1}.uk-badge--success{background:#dcfce7;color:#16a34a}.uk-badge--danger{background:#fee2e2;color:#dc2626}.uk-badge--warning{background:#fef3c7;color:#d97706}.uk-badge--info{background:#dbeafe;color:#2563eb}.uk-badge--secondary{background:#f3f4f6;color:#6b7280}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkListItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-list-item', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<li\n  class=\"uk-list-item\"\n  [class.uk-list-item--active]=\"active()\"\n  [class.uk-list-item--disabled]=\"disabled()\"\n  [class.uk-list-item--action]=\"action()\"\n  (click)=\"onClick()\"\n>\n  @if (icon()) {\n    <i class=\"bi bi-{{ icon() }} uk-list-item-icon\"></i>\n  }\n  <span class=\"uk-list-item-label\"><ng-content /></span>\n  @if (badge() != null) {\n    <span class=\"uk-badge uk-badge--{{ badgeVariant() }}\">{{ badge() }}</span>\n  }\n</li>\n", styles: [".uk-list-group{list-style:none;margin:0;padding:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden}.uk-list-group--flush{border-left:none;border-right:none;border-radius:0}.uk-list-item{display:flex;align-items:center;gap:10px;padding:11px 16px;font-size:.9rem;color:#374151;border-bottom:1px solid #f3f4f6;transition:background .12s}.uk-list-item:last-child{border-bottom:none}.uk-list-item--active{background:#eff6ff;color:#1d4ed8;font-weight:500}.uk-list-item--disabled{opacity:.45;pointer-events:none}.uk-list-item--action{cursor:pointer}.uk-list-item--action:hover{background:#f9fafb}.uk-list-item--action:active{background:#f3f4f6}.uk-list-item-icon{font-size:1rem;flex-shrink:0;color:#6b7280}.uk-list-item--active .uk-list-item-icon{color:#1d4ed8}.uk-list-item-label{flex:1}.uk-badge{display:inline-flex;align-items:center;justify-content:center;padding:2px 7px;border-radius:9999px;font-size:.75rem;font-weight:600;line-height:1.4}.uk-badge--primary{background:#ede9fe;color:#6366f1}.uk-badge--success{background:#dcfce7;color:#16a34a}.uk-badge--danger{background:#fee2e2;color:#dc2626}.uk-badge--warning{background:#fef3c7;color:#d97706}.uk-badge--info{background:#dbeafe;color:#2563eb}.uk-badge--secondary{background:#f3f4f6;color:#6b7280}\n"] }]
        }], propDecorators: { icon: [{ type: i0.Input, args: [{ isSignal: true, alias: "icon", required: false }] }], active: [{ type: i0.Input, args: [{ isSignal: true, alias: "active", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], badge: [{ type: i0.Input, args: [{ isSignal: true, alias: "badge", required: false }] }], badgeVariant: [{ type: i0.Input, args: [{ isSignal: true, alias: "badgeVariant", required: false }] }], action: [{ type: i0.Input, args: [{ isSignal: true, alias: "action", required: false }] }], itemClick: [{ type: i0.Output, args: ["itemClick"] }] } });

const COLORS$1 = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899', '#8b5cf6', '#14b8a6'];
class UkAvatarComponent {
    src = input(...(ngDevMode ? [undefined, { debugName: "src" }] : /* istanbul ignore next */ []));
    name = input(...(ngDevMode ? [undefined, { debugName: "name" }] : /* istanbul ignore next */ []));
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    shape = input('circle', ...(ngDevMode ? [{ debugName: "shape" }] : /* istanbul ignore next */ []));
    status = input(...(ngDevMode ? [undefined, { debugName: "status" }] : /* istanbul ignore next */ []));
    alt = input(...(ngDevMode ? [undefined, { debugName: "alt" }] : /* istanbul ignore next */ []));
    get initials() {
        const n = this.name();
        if (!n)
            return '?';
        return n
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map(w => w[0]?.toUpperCase() ?? '')
            .join('');
    }
    get bgColor() {
        const n = this.name();
        if (!n)
            return '#9ca3af';
        let hash = 0;
        for (let i = 0; i < n.length; i++)
            hash = n.charCodeAt(i) + ((hash << 5) - hash);
        return COLORS$1[Math.abs(hash) % COLORS$1.length];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkAvatarComponent, isStandalone: true, selector: "uk-avatar", inputs: { src: { classPropertyName: "src", publicName: "src", isSignal: true, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, shape: { classPropertyName: "shape", publicName: "shape", isSignal: true, isRequired: false, transformFunction: null }, status: { classPropertyName: "status", publicName: "status", isSignal: true, isRequired: false, transformFunction: null }, alt: { classPropertyName: "alt", publicName: "alt", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<span\n  class=\"uk-avatar uk-avatar--{{ size() }} uk-avatar--{{ shape() }}\"\n  [attr.title]=\"name()\"\n>\n  @if (src()) {\n    <img title=\"{{ name() }}\" [src]=\"src()\" [alt]=\"alt() ?? name() ?? 'Avatar'\" class=\"uk-avatar-img\" />\n  } @else {\n    <span class=\"uk-avatar-initials\" [style.background]=\"bgColor\">{{ initials }}</span>\n  }\n  @if (status()) {\n    <span class=\"uk-avatar-status uk-avatar-status--{{ status() }}\"></span>\n  }\n</span>\n", styles: [".uk-avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;flex-shrink:0;vertical-align:middle}.uk-avatar--xs{width:24px;height:24px}.uk-avatar--xs .uk-avatar-initials{font-size:.6875rem}.uk-avatar--sm{width:32px;height:32px}.uk-avatar--sm .uk-avatar-initials{font-size:.75rem}.uk-avatar--md{width:40px;height:40px}.uk-avatar--md .uk-avatar-initials{font-size:.875rem}.uk-avatar--lg{width:52px;height:52px}.uk-avatar--lg .uk-avatar-initials{font-size:1rem}.uk-avatar--xl{width:68px;height:68px}.uk-avatar--xl .uk-avatar-initials{font-size:1.25rem}.uk-avatar--circle{border-radius:50%}.uk-avatar--square{border-radius:8px}.uk-avatar-img{width:100%;height:100%;object-fit:cover;border-radius:inherit}.uk-avatar-initials{width:100%;height:100%;border-radius:inherit;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;letter-spacing:.02em;-webkit-user-select:none;user-select:none}.uk-avatar-status{position:absolute;bottom:1px;right:1px;width:10px;height:10px;border-radius:50%;border:2px solid #fff}.uk-avatar-status--online{background:#22c55e}.uk-avatar-status--offline{background:#9ca3af}.uk-avatar-status--busy{background:#ef4444}.uk-avatar-status--away{background:#f59e0b}.uk-avatar-group{display:flex;align-items:center}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar{border:2px solid #fff;margin-left:-8px;transition:transform .15s}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar:first-child{margin-left:0}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar:hover{transform:translateY(-3px);z-index:1}.uk-avatar-group--xs ::ng-deep uk-avatar .uk-avatar{margin-left:-6px}.uk-avatar-group--sm ::ng-deep uk-avatar .uk-avatar{margin-left:-8px}.uk-avatar-group--md ::ng-deep uk-avatar .uk-avatar{margin-left:-10px}.uk-avatar-group--lg ::ng-deep uk-avatar .uk-avatar{margin-left:-13px}.uk-avatar-group--xl ::ng-deep uk-avatar .uk-avatar{margin-left:-17px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-avatar', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<span\n  class=\"uk-avatar uk-avatar--{{ size() }} uk-avatar--{{ shape() }}\"\n  [attr.title]=\"name()\"\n>\n  @if (src()) {\n    <img title=\"{{ name() }}\" [src]=\"src()\" [alt]=\"alt() ?? name() ?? 'Avatar'\" class=\"uk-avatar-img\" />\n  } @else {\n    <span class=\"uk-avatar-initials\" [style.background]=\"bgColor\">{{ initials }}</span>\n  }\n  @if (status()) {\n    <span class=\"uk-avatar-status uk-avatar-status--{{ status() }}\"></span>\n  }\n</span>\n", styles: [".uk-avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;flex-shrink:0;vertical-align:middle}.uk-avatar--xs{width:24px;height:24px}.uk-avatar--xs .uk-avatar-initials{font-size:.6875rem}.uk-avatar--sm{width:32px;height:32px}.uk-avatar--sm .uk-avatar-initials{font-size:.75rem}.uk-avatar--md{width:40px;height:40px}.uk-avatar--md .uk-avatar-initials{font-size:.875rem}.uk-avatar--lg{width:52px;height:52px}.uk-avatar--lg .uk-avatar-initials{font-size:1rem}.uk-avatar--xl{width:68px;height:68px}.uk-avatar--xl .uk-avatar-initials{font-size:1.25rem}.uk-avatar--circle{border-radius:50%}.uk-avatar--square{border-radius:8px}.uk-avatar-img{width:100%;height:100%;object-fit:cover;border-radius:inherit}.uk-avatar-initials{width:100%;height:100%;border-radius:inherit;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;letter-spacing:.02em;-webkit-user-select:none;user-select:none}.uk-avatar-status{position:absolute;bottom:1px;right:1px;width:10px;height:10px;border-radius:50%;border:2px solid #fff}.uk-avatar-status--online{background:#22c55e}.uk-avatar-status--offline{background:#9ca3af}.uk-avatar-status--busy{background:#ef4444}.uk-avatar-status--away{background:#f59e0b}.uk-avatar-group{display:flex;align-items:center}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar{border:2px solid #fff;margin-left:-8px;transition:transform .15s}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar:first-child{margin-left:0}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar:hover{transform:translateY(-3px);z-index:1}.uk-avatar-group--xs ::ng-deep uk-avatar .uk-avatar{margin-left:-6px}.uk-avatar-group--sm ::ng-deep uk-avatar .uk-avatar{margin-left:-8px}.uk-avatar-group--md ::ng-deep uk-avatar .uk-avatar{margin-left:-10px}.uk-avatar-group--lg ::ng-deep uk-avatar .uk-avatar{margin-left:-13px}.uk-avatar-group--xl ::ng-deep uk-avatar .uk-avatar{margin-left:-17px}\n"] }]
        }], propDecorators: { src: [{ type: i0.Input, args: [{ isSignal: true, alias: "src", required: false }] }], name: [{ type: i0.Input, args: [{ isSignal: true, alias: "name", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], shape: [{ type: i0.Input, args: [{ isSignal: true, alias: "shape", required: false }] }], status: [{ type: i0.Input, args: [{ isSignal: true, alias: "status", required: false }] }], alt: [{ type: i0.Input, args: [{ isSignal: true, alias: "alt", required: false }] }] } });

class UkAvatarGroupComponent {
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAvatarGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.9", type: UkAvatarGroupComponent, isStandalone: true, selector: "uk-avatar-group", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: `<div class="uk-avatar-group uk-avatar-group--{{ size() }}"><ng-content /></div>`, isInline: true, styles: [".uk-avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;flex-shrink:0;vertical-align:middle}.uk-avatar--xs{width:24px;height:24px}.uk-avatar--xs .uk-avatar-initials{font-size:.6875rem}.uk-avatar--sm{width:32px;height:32px}.uk-avatar--sm .uk-avatar-initials{font-size:.75rem}.uk-avatar--md{width:40px;height:40px}.uk-avatar--md .uk-avatar-initials{font-size:.875rem}.uk-avatar--lg{width:52px;height:52px}.uk-avatar--lg .uk-avatar-initials{font-size:1rem}.uk-avatar--xl{width:68px;height:68px}.uk-avatar--xl .uk-avatar-initials{font-size:1.25rem}.uk-avatar--circle{border-radius:50%}.uk-avatar--square{border-radius:8px}.uk-avatar-img{width:100%;height:100%;object-fit:cover;border-radius:inherit}.uk-avatar-initials{width:100%;height:100%;border-radius:inherit;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;letter-spacing:.02em;-webkit-user-select:none;user-select:none}.uk-avatar-status{position:absolute;bottom:1px;right:1px;width:10px;height:10px;border-radius:50%;border:2px solid #fff}.uk-avatar-status--online{background:#22c55e}.uk-avatar-status--offline{background:#9ca3af}.uk-avatar-status--busy{background:#ef4444}.uk-avatar-status--away{background:#f59e0b}.uk-avatar-group{display:flex;align-items:center}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar{border:2px solid #fff;margin-left:-8px;transition:transform .15s}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar:first-child{margin-left:0}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar:hover{transform:translateY(-3px);z-index:1}.uk-avatar-group--xs ::ng-deep uk-avatar .uk-avatar{margin-left:-6px}.uk-avatar-group--sm ::ng-deep uk-avatar .uk-avatar{margin-left:-8px}.uk-avatar-group--md ::ng-deep uk-avatar .uk-avatar{margin-left:-10px}.uk-avatar-group--lg ::ng-deep uk-avatar .uk-avatar{margin-left:-13px}.uk-avatar-group--xl ::ng-deep uk-avatar .uk-avatar{margin-left:-17px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAvatarGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-avatar-group', standalone: true, template: `<div class="uk-avatar-group uk-avatar-group--{{ size() }}"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".uk-avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;flex-shrink:0;vertical-align:middle}.uk-avatar--xs{width:24px;height:24px}.uk-avatar--xs .uk-avatar-initials{font-size:.6875rem}.uk-avatar--sm{width:32px;height:32px}.uk-avatar--sm .uk-avatar-initials{font-size:.75rem}.uk-avatar--md{width:40px;height:40px}.uk-avatar--md .uk-avatar-initials{font-size:.875rem}.uk-avatar--lg{width:52px;height:52px}.uk-avatar--lg .uk-avatar-initials{font-size:1rem}.uk-avatar--xl{width:68px;height:68px}.uk-avatar--xl .uk-avatar-initials{font-size:1.25rem}.uk-avatar--circle{border-radius:50%}.uk-avatar--square{border-radius:8px}.uk-avatar-img{width:100%;height:100%;object-fit:cover;border-radius:inherit}.uk-avatar-initials{width:100%;height:100%;border-radius:inherit;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;letter-spacing:.02em;-webkit-user-select:none;user-select:none}.uk-avatar-status{position:absolute;bottom:1px;right:1px;width:10px;height:10px;border-radius:50%;border:2px solid #fff}.uk-avatar-status--online{background:#22c55e}.uk-avatar-status--offline{background:#9ca3af}.uk-avatar-status--busy{background:#ef4444}.uk-avatar-status--away{background:#f59e0b}.uk-avatar-group{display:flex;align-items:center}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar{border:2px solid #fff;margin-left:-8px;transition:transform .15s}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar:first-child{margin-left:0}.uk-avatar-group ::ng-deep uk-avatar .uk-avatar:hover{transform:translateY(-3px);z-index:1}.uk-avatar-group--xs ::ng-deep uk-avatar .uk-avatar{margin-left:-6px}.uk-avatar-group--sm ::ng-deep uk-avatar .uk-avatar{margin-left:-8px}.uk-avatar-group--md ::ng-deep uk-avatar .uk-avatar{margin-left:-10px}.uk-avatar-group--lg ::ng-deep uk-avatar .uk-avatar{margin-left:-13px}.uk-avatar-group--xl ::ng-deep uk-avatar .uk-avatar{margin-left:-17px}\n"] }]
        }], propDecorators: { size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }] } });

const DEFAULT_ICONS = {
    success: 'check-circle-fill',
    danger: 'exclamation-circle-fill',
    warning: 'exclamation-triangle-fill',
    info: 'info-circle-fill',
    primary: 'info-circle-fill',
    secondary: 'chat-square-fill',
};
class UkAlertComponent {
    variant = input('info', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    title = input(...(ngDevMode ? [undefined, { debugName: "title" }] : /* istanbul ignore next */ []));
    message = input(...(ngDevMode ? [undefined, { debugName: "message" }] : /* istanbul ignore next */ []));
    icon = input(...(ngDevMode ? [undefined, { debugName: "icon" }] : /* istanbul ignore next */ []));
    dismissible = input(false, ...(ngDevMode ? [{ debugName: "dismissible" }] : /* istanbul ignore next */ []));
    dismissed = output();
    isDismissed = signal(false, ...(ngDevMode ? [{ debugName: "isDismissed" }] : /* istanbul ignore next */ []));
    get resolvedIcon() {
        return this.icon() ?? DEFAULT_ICONS[this.variant()];
    }
    dismiss() {
        this.isDismissed.set(true);
        this.dismissed.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkAlertComponent, isStandalone: true, selector: "uk-alert", inputs: { variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, message: { classPropertyName: "message", publicName: "message", isSignal: true, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, dismissible: { classPropertyName: "dismissible", publicName: "dismissible", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { dismissed: "dismissed" }, ngImport: i0, template: "@if (!isDismissed()) {\n  <div class=\"uk-alert uk-alert--{{ variant() }}\" role=\"alert\">\n    <i class=\"bi bi-{{ resolvedIcon }} uk-alert-icon\"></i>\n    <div class=\"uk-alert-content\">\n      @if (title()) {\n        <div class=\"uk-alert-title\">{{ title() }}</div>\n      }\n      @if (message()) {\n        <div class=\"uk-alert-message\">{{ message() }}</div>\n      }\n      <ng-content />\n    </div>\n    @if (dismissible()) {\n      <button class=\"uk-alert-close\" type=\"button\" (click)=\"dismiss()\" aria-label=\"Dismiss\">\n        <i class=\"bi bi-x-lg\"></i>\n      </button>\n    }\n  </div>\n}\n", styles: [".uk-alert{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:10px;border:1px solid;font-size:.9rem;line-height:1.5}.uk-alert--success{background:#f0fdf4;border-color:#bbf7d0;color:#15803d}.uk-alert--danger{background:#fef2f2;border-color:#fecaca;color:#b91c1c}.uk-alert--warning{background:#fffbeb;border-color:#fde68a;color:#92400e}.uk-alert--info{background:#eff6ff;border-color:#bfdbfe;color:#1d4ed8}.uk-alert--primary{background:#eff6ff;border-color:#c7d2fe;color:#4338ca}.uk-alert--secondary{background:#f9fafb;border-color:#e5e7eb;color:#374151}.uk-alert-icon{font-size:1.125rem;flex-shrink:0;margin-top:1px}.uk-alert-content{flex:1;min-width:0}.uk-alert-title{font-weight:600;margin-bottom:3px}.uk-alert-message{opacity:.9}.uk-alert-close{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:none;background:transparent;color:inherit;opacity:.5;cursor:pointer;border-radius:4px;flex-shrink:0;transition:opacity .15s;font-size:.875rem}.uk-alert-close:hover{opacity:1}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-alert', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (!isDismissed()) {\n  <div class=\"uk-alert uk-alert--{{ variant() }}\" role=\"alert\">\n    <i class=\"bi bi-{{ resolvedIcon }} uk-alert-icon\"></i>\n    <div class=\"uk-alert-content\">\n      @if (title()) {\n        <div class=\"uk-alert-title\">{{ title() }}</div>\n      }\n      @if (message()) {\n        <div class=\"uk-alert-message\">{{ message() }}</div>\n      }\n      <ng-content />\n    </div>\n    @if (dismissible()) {\n      <button class=\"uk-alert-close\" type=\"button\" (click)=\"dismiss()\" aria-label=\"Dismiss\">\n        <i class=\"bi bi-x-lg\"></i>\n      </button>\n    }\n  </div>\n}\n", styles: [".uk-alert{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:10px;border:1px solid;font-size:.9rem;line-height:1.5}.uk-alert--success{background:#f0fdf4;border-color:#bbf7d0;color:#15803d}.uk-alert--danger{background:#fef2f2;border-color:#fecaca;color:#b91c1c}.uk-alert--warning{background:#fffbeb;border-color:#fde68a;color:#92400e}.uk-alert--info{background:#eff6ff;border-color:#bfdbfe;color:#1d4ed8}.uk-alert--primary{background:#eff6ff;border-color:#c7d2fe;color:#4338ca}.uk-alert--secondary{background:#f9fafb;border-color:#e5e7eb;color:#374151}.uk-alert-icon{font-size:1.125rem;flex-shrink:0;margin-top:1px}.uk-alert-content{flex:1;min-width:0}.uk-alert-title{font-weight:600;margin-bottom:3px}.uk-alert-message{opacity:.9}.uk-alert-close{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:none;background:transparent;color:inherit;opacity:.5;cursor:pointer;border-radius:4px;flex-shrink:0;transition:opacity .15s;font-size:.875rem}.uk-alert-close:hover{opacity:1}\n"] }]
        }], propDecorators: { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], message: [{ type: i0.Input, args: [{ isSignal: true, alias: "message", required: false }] }], icon: [{ type: i0.Input, args: [{ isSignal: true, alias: "icon", required: false }] }], dismissible: [{ type: i0.Input, args: [{ isSignal: true, alias: "dismissible", required: false }] }], dismissed: [{ type: i0.Output, args: ["dismissed"] }] } });

const ACCORDION_TOKEN = new InjectionToken('uk-accordion');

class UkAccordionComponent {
    _multiple = input(false, { ...(ngDevMode ? { debugName: "_multiple" } : /* istanbul ignore next */ {}), alias: 'multiple' });
    _size = input('md', { ...(ngDevMode ? { debugName: "_size" } : /* istanbul ignore next */ {}), alias: 'size' });
    // Satisfy AccordionHost interface (accordion-item reads openIds + toggle only)
    get multiple() { return this._multiple(); }
    get size() { return this._size(); }
    openIds = signal(new Set(), ...(ngDevMode ? [{ debugName: "openIds" }] : /* istanbul ignore next */ []));
    toggle(id) {
        this.openIds.update(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            }
            else {
                if (!this._multiple())
                    next.clear();
                next.add(id);
            }
            return next;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.2.9", type: UkAccordionComponent, isStandalone: true, selector: "uk-accordion", inputs: { _multiple: { classPropertyName: "_multiple", publicName: "multiple", isSignal: true, isRequired: false, transformFunction: null }, _size: { classPropertyName: "_size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, providers: [{ provide: ACCORDION_TOKEN, useExisting: UkAccordionComponent }], ngImport: i0, template: `<div [class]="'uk-accordion uk-accordion--' + _size()"><ng-content /></div>`, isInline: true, styles: ["@charset \"UTF-8\";.uk-accordion{--uk-accordion-radius: 10px;--uk-accordion-border-color: #e5e7eb;--uk-accordion-hover-bg: #f9fafb;--uk-accordion-open-bg: #f9fafb;--uk-accordion-padding-x: 18px;--uk-accordion-trigger-py: 15px;--uk-accordion-trigger-font: .9375rem;--uk-accordion-trigger-color: #111827;--uk-accordion-body-pt: 4px;--uk-accordion-body-pb: 18px;--uk-accordion-body-font: .9rem;--uk-accordion-body-color: #4b5563;--uk-accordion-icon-font: 1rem;--uk-accordion-icon-color: #6b7280;--uk-accordion-chevron-font: .875rem;--uk-accordion-chevron-color: #9ca3af;--uk-accordion-gap: 10px}.uk-accordion.uk-accordion--sm{--uk-accordion-padding-x: 14px;--uk-accordion-trigger-py: 10px;--uk-accordion-trigger-font: .8125rem;--uk-accordion-body-pt: 2px;--uk-accordion-body-pb: 12px;--uk-accordion-body-font: .8125rem;--uk-accordion-icon-font: .875rem;--uk-accordion-chevron-font: .75rem;--uk-accordion-gap: 8px}.uk-accordion.uk-accordion--lg{--uk-accordion-padding-x: 24px;--uk-accordion-trigger-py: 20px;--uk-accordion-trigger-font: 1.0625rem;--uk-accordion-body-pt: 6px;--uk-accordion-body-pb: 24px;--uk-accordion-body-font: 1rem;--uk-accordion-icon-font: 1.125rem;--uk-accordion-chevron-font: 1rem;--uk-accordion-gap: 12px}.uk-accordion{border:1px solid var(--uk-accordion-border-color);border-radius:var(--uk-accordion-radius);overflow:hidden}.uk-accordion-item{border-bottom:1px solid var(--uk-accordion-border-color)}.uk-accordion-item:last-child{border-bottom:none}.uk-accordion-item--disabled .uk-accordion-trigger{opacity:.45;cursor:not-allowed}.uk-accordion-trigger{width:100%;display:flex;align-items:center;gap:var(--uk-accordion-gap);padding:var(--uk-accordion-trigger-py) var(--uk-accordion-padding-x);background:transparent;border:none;text-align:left;cursor:pointer;font-size:var(--uk-accordion-trigger-font);font-weight:500;color:var(--uk-accordion-trigger-color);transition:background .12s}.uk-accordion-trigger:hover{background:var(--uk-accordion-hover-bg)}.uk-accordion-item--open .uk-accordion-trigger{background:var(--uk-accordion-open-bg)}.uk-accordion-icon{font-size:var(--uk-accordion-icon-font);color:var(--uk-accordion-icon-color);flex-shrink:0}.uk-accordion-title{flex:1}.uk-accordion-chevron{font-size:var(--uk-accordion-chevron-font);color:var(--uk-accordion-chevron-color);flex-shrink:0;transition:transform .25s ease}.uk-accordion-item--open .uk-accordion-chevron{transform:rotate(180deg)}.uk-accordion-body{max-height:0;overflow:hidden;transition:max-height .3s cubic-bezier(.4,0,.2,1)}.uk-accordion-body--open{max-height:600px}.uk-accordion-body-inner{padding:var(--uk-accordion-body-pt) var(--uk-accordion-padding-x) var(--uk-accordion-body-pb);font-size:var(--uk-accordion-body-font);color:var(--uk-accordion-body-color);line-height:1.6}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-accordion', standalone: true, template: `<div [class]="'uk-accordion uk-accordion--' + _size()"><ng-content /></div>`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: ACCORDION_TOKEN, useExisting: UkAccordionComponent }], styles: ["@charset \"UTF-8\";.uk-accordion{--uk-accordion-radius: 10px;--uk-accordion-border-color: #e5e7eb;--uk-accordion-hover-bg: #f9fafb;--uk-accordion-open-bg: #f9fafb;--uk-accordion-padding-x: 18px;--uk-accordion-trigger-py: 15px;--uk-accordion-trigger-font: .9375rem;--uk-accordion-trigger-color: #111827;--uk-accordion-body-pt: 4px;--uk-accordion-body-pb: 18px;--uk-accordion-body-font: .9rem;--uk-accordion-body-color: #4b5563;--uk-accordion-icon-font: 1rem;--uk-accordion-icon-color: #6b7280;--uk-accordion-chevron-font: .875rem;--uk-accordion-chevron-color: #9ca3af;--uk-accordion-gap: 10px}.uk-accordion.uk-accordion--sm{--uk-accordion-padding-x: 14px;--uk-accordion-trigger-py: 10px;--uk-accordion-trigger-font: .8125rem;--uk-accordion-body-pt: 2px;--uk-accordion-body-pb: 12px;--uk-accordion-body-font: .8125rem;--uk-accordion-icon-font: .875rem;--uk-accordion-chevron-font: .75rem;--uk-accordion-gap: 8px}.uk-accordion.uk-accordion--lg{--uk-accordion-padding-x: 24px;--uk-accordion-trigger-py: 20px;--uk-accordion-trigger-font: 1.0625rem;--uk-accordion-body-pt: 6px;--uk-accordion-body-pb: 24px;--uk-accordion-body-font: 1rem;--uk-accordion-icon-font: 1.125rem;--uk-accordion-chevron-font: 1rem;--uk-accordion-gap: 12px}.uk-accordion{border:1px solid var(--uk-accordion-border-color);border-radius:var(--uk-accordion-radius);overflow:hidden}.uk-accordion-item{border-bottom:1px solid var(--uk-accordion-border-color)}.uk-accordion-item:last-child{border-bottom:none}.uk-accordion-item--disabled .uk-accordion-trigger{opacity:.45;cursor:not-allowed}.uk-accordion-trigger{width:100%;display:flex;align-items:center;gap:var(--uk-accordion-gap);padding:var(--uk-accordion-trigger-py) var(--uk-accordion-padding-x);background:transparent;border:none;text-align:left;cursor:pointer;font-size:var(--uk-accordion-trigger-font);font-weight:500;color:var(--uk-accordion-trigger-color);transition:background .12s}.uk-accordion-trigger:hover{background:var(--uk-accordion-hover-bg)}.uk-accordion-item--open .uk-accordion-trigger{background:var(--uk-accordion-open-bg)}.uk-accordion-icon{font-size:var(--uk-accordion-icon-font);color:var(--uk-accordion-icon-color);flex-shrink:0}.uk-accordion-title{flex:1}.uk-accordion-chevron{font-size:var(--uk-accordion-chevron-font);color:var(--uk-accordion-chevron-color);flex-shrink:0;transition:transform .25s ease}.uk-accordion-item--open .uk-accordion-chevron{transform:rotate(180deg)}.uk-accordion-body{max-height:0;overflow:hidden;transition:max-height .3s cubic-bezier(.4,0,.2,1)}.uk-accordion-body--open{max-height:600px}.uk-accordion-body-inner{padding:var(--uk-accordion-body-pt) var(--uk-accordion-padding-x) var(--uk-accordion-body-pb);font-size:var(--uk-accordion-body-font);color:var(--uk-accordion-body-color);line-height:1.6}\n"] }]
        }], propDecorators: { _multiple: [{ type: i0.Input, args: [{ isSignal: true, alias: "multiple", required: false }] }], _size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }] } });

class UkAccordionItemComponent {
    itemId = input.required(...(ngDevMode ? [{ debugName: "itemId" }] : /* istanbul ignore next */ []));
    title = input('', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    icon = input(...(ngDevMode ? [undefined, { debugName: "icon" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    accordion = inject(ACCORDION_TOKEN);
    isOpen = computed(() => this.accordion.openIds().has(this.itemId()), ...(ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []));
    toggle() {
        if (!this.disabled())
            this.accordion.toggle(this.itemId());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkAccordionItemComponent, isStandalone: true, selector: "uk-accordion-item", inputs: { itemId: { classPropertyName: "itemId", publicName: "itemId", isSignal: true, isRequired: true, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"uk-accordion-item\" [class.uk-accordion-item--open]=\"isOpen()\" [class.uk-accordion-item--disabled]=\"disabled()\">\n  <button\n    class=\"uk-accordion-trigger\"\n    type=\"button\"\n    [attr.aria-expanded]=\"isOpen()\"\n    [disabled]=\"disabled() || null\"\n    (click)=\"toggle()\"\n  >\n    @if (icon()) {\n      <i class=\"bi bi-{{ icon() }} uk-accordion-icon\"></i>\n    }\n    <span class=\"uk-accordion-title\">{{ title() }}</span>\n    <i class=\"bi bi-chevron-down uk-accordion-chevron\"></i>\n  </button>\n  <div class=\"uk-accordion-body\" [class.uk-accordion-body--open]=\"isOpen()\">\n    <div class=\"uk-accordion-body-inner\">\n      <ng-content />\n    </div>\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";.uk-accordion{--uk-accordion-radius: 10px;--uk-accordion-border-color: #e5e7eb;--uk-accordion-hover-bg: #f9fafb;--uk-accordion-open-bg: #f9fafb;--uk-accordion-padding-x: 18px;--uk-accordion-trigger-py: 15px;--uk-accordion-trigger-font: .9375rem;--uk-accordion-trigger-color: #111827;--uk-accordion-body-pt: 4px;--uk-accordion-body-pb: 18px;--uk-accordion-body-font: .9rem;--uk-accordion-body-color: #4b5563;--uk-accordion-icon-font: 1rem;--uk-accordion-icon-color: #6b7280;--uk-accordion-chevron-font: .875rem;--uk-accordion-chevron-color: #9ca3af;--uk-accordion-gap: 10px}.uk-accordion.uk-accordion--sm{--uk-accordion-padding-x: 14px;--uk-accordion-trigger-py: 10px;--uk-accordion-trigger-font: .8125rem;--uk-accordion-body-pt: 2px;--uk-accordion-body-pb: 12px;--uk-accordion-body-font: .8125rem;--uk-accordion-icon-font: .875rem;--uk-accordion-chevron-font: .75rem;--uk-accordion-gap: 8px}.uk-accordion.uk-accordion--lg{--uk-accordion-padding-x: 24px;--uk-accordion-trigger-py: 20px;--uk-accordion-trigger-font: 1.0625rem;--uk-accordion-body-pt: 6px;--uk-accordion-body-pb: 24px;--uk-accordion-body-font: 1rem;--uk-accordion-icon-font: 1.125rem;--uk-accordion-chevron-font: 1rem;--uk-accordion-gap: 12px}.uk-accordion{border:1px solid var(--uk-accordion-border-color);border-radius:var(--uk-accordion-radius);overflow:hidden}.uk-accordion-item{border-bottom:1px solid var(--uk-accordion-border-color)}.uk-accordion-item:last-child{border-bottom:none}.uk-accordion-item--disabled .uk-accordion-trigger{opacity:.45;cursor:not-allowed}.uk-accordion-trigger{width:100%;display:flex;align-items:center;gap:var(--uk-accordion-gap);padding:var(--uk-accordion-trigger-py) var(--uk-accordion-padding-x);background:transparent;border:none;text-align:left;cursor:pointer;font-size:var(--uk-accordion-trigger-font);font-weight:500;color:var(--uk-accordion-trigger-color);transition:background .12s}.uk-accordion-trigger:hover{background:var(--uk-accordion-hover-bg)}.uk-accordion-item--open .uk-accordion-trigger{background:var(--uk-accordion-open-bg)}.uk-accordion-icon{font-size:var(--uk-accordion-icon-font);color:var(--uk-accordion-icon-color);flex-shrink:0}.uk-accordion-title{flex:1}.uk-accordion-chevron{font-size:var(--uk-accordion-chevron-font);color:var(--uk-accordion-chevron-color);flex-shrink:0;transition:transform .25s ease}.uk-accordion-item--open .uk-accordion-chevron{transform:rotate(180deg)}.uk-accordion-body{max-height:0;overflow:hidden;transition:max-height .3s cubic-bezier(.4,0,.2,1)}.uk-accordion-body--open{max-height:600px}.uk-accordion-body-inner{padding:var(--uk-accordion-body-pt) var(--uk-accordion-padding-x) var(--uk-accordion-body-pb);font-size:var(--uk-accordion-body-font);color:var(--uk-accordion-body-color);line-height:1.6}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAccordionItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-accordion-item', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"uk-accordion-item\" [class.uk-accordion-item--open]=\"isOpen()\" [class.uk-accordion-item--disabled]=\"disabled()\">\n  <button\n    class=\"uk-accordion-trigger\"\n    type=\"button\"\n    [attr.aria-expanded]=\"isOpen()\"\n    [disabled]=\"disabled() || null\"\n    (click)=\"toggle()\"\n  >\n    @if (icon()) {\n      <i class=\"bi bi-{{ icon() }} uk-accordion-icon\"></i>\n    }\n    <span class=\"uk-accordion-title\">{{ title() }}</span>\n    <i class=\"bi bi-chevron-down uk-accordion-chevron\"></i>\n  </button>\n  <div class=\"uk-accordion-body\" [class.uk-accordion-body--open]=\"isOpen()\">\n    <div class=\"uk-accordion-body-inner\">\n      <ng-content />\n    </div>\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";.uk-accordion{--uk-accordion-radius: 10px;--uk-accordion-border-color: #e5e7eb;--uk-accordion-hover-bg: #f9fafb;--uk-accordion-open-bg: #f9fafb;--uk-accordion-padding-x: 18px;--uk-accordion-trigger-py: 15px;--uk-accordion-trigger-font: .9375rem;--uk-accordion-trigger-color: #111827;--uk-accordion-body-pt: 4px;--uk-accordion-body-pb: 18px;--uk-accordion-body-font: .9rem;--uk-accordion-body-color: #4b5563;--uk-accordion-icon-font: 1rem;--uk-accordion-icon-color: #6b7280;--uk-accordion-chevron-font: .875rem;--uk-accordion-chevron-color: #9ca3af;--uk-accordion-gap: 10px}.uk-accordion.uk-accordion--sm{--uk-accordion-padding-x: 14px;--uk-accordion-trigger-py: 10px;--uk-accordion-trigger-font: .8125rem;--uk-accordion-body-pt: 2px;--uk-accordion-body-pb: 12px;--uk-accordion-body-font: .8125rem;--uk-accordion-icon-font: .875rem;--uk-accordion-chevron-font: .75rem;--uk-accordion-gap: 8px}.uk-accordion.uk-accordion--lg{--uk-accordion-padding-x: 24px;--uk-accordion-trigger-py: 20px;--uk-accordion-trigger-font: 1.0625rem;--uk-accordion-body-pt: 6px;--uk-accordion-body-pb: 24px;--uk-accordion-body-font: 1rem;--uk-accordion-icon-font: 1.125rem;--uk-accordion-chevron-font: 1rem;--uk-accordion-gap: 12px}.uk-accordion{border:1px solid var(--uk-accordion-border-color);border-radius:var(--uk-accordion-radius);overflow:hidden}.uk-accordion-item{border-bottom:1px solid var(--uk-accordion-border-color)}.uk-accordion-item:last-child{border-bottom:none}.uk-accordion-item--disabled .uk-accordion-trigger{opacity:.45;cursor:not-allowed}.uk-accordion-trigger{width:100%;display:flex;align-items:center;gap:var(--uk-accordion-gap);padding:var(--uk-accordion-trigger-py) var(--uk-accordion-padding-x);background:transparent;border:none;text-align:left;cursor:pointer;font-size:var(--uk-accordion-trigger-font);font-weight:500;color:var(--uk-accordion-trigger-color);transition:background .12s}.uk-accordion-trigger:hover{background:var(--uk-accordion-hover-bg)}.uk-accordion-item--open .uk-accordion-trigger{background:var(--uk-accordion-open-bg)}.uk-accordion-icon{font-size:var(--uk-accordion-icon-font);color:var(--uk-accordion-icon-color);flex-shrink:0}.uk-accordion-title{flex:1}.uk-accordion-chevron{font-size:var(--uk-accordion-chevron-font);color:var(--uk-accordion-chevron-color);flex-shrink:0;transition:transform .25s ease}.uk-accordion-item--open .uk-accordion-chevron{transform:rotate(180deg)}.uk-accordion-body{max-height:0;overflow:hidden;transition:max-height .3s cubic-bezier(.4,0,.2,1)}.uk-accordion-body--open{max-height:600px}.uk-accordion-body-inner{padding:var(--uk-accordion-body-pt) var(--uk-accordion-padding-x) var(--uk-accordion-body-pb);font-size:var(--uk-accordion-body-font);color:var(--uk-accordion-body-color);line-height:1.6}\n"] }]
        }], propDecorators: { itemId: [{ type: i0.Input, args: [{ isSignal: true, alias: "itemId", required: true }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], icon: [{ type: i0.Input, args: [{ isSignal: true, alias: "icon", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }] } });

const COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899', '#8b5cf6', '#14b8a6'];
const W = 560, H = 260;
const PAD = { top: 20, right: 20, bottom: 44, left: 52 };
const IW = W - PAD.left - PAD.right;
const IH = H - PAD.top - PAD.bottom;
function niceMax(val) {
    if (val === 0)
        return 10;
    const exp = Math.pow(10, Math.floor(Math.log10(val)));
    return Math.ceil(val / exp) * exp;
}
function yTicks(max, count = 5) {
    return Array.from({ length: count + 1 }, (_, i) => ({
        value: Math.round((max * i) / count),
        y: PAD.top + IH - (i / count) * IH,
    }));
}
class UkChartComponent {
    config = input.required(...(ngDevMode ? [{ debugName: "config" }] : /* istanbul ignore next */ []));
    barData = signal(null, ...(ngDevMode ? [{ debugName: "barData" }] : /* istanbul ignore next */ []));
    lineData = signal(null, ...(ngDevMode ? [{ debugName: "lineData" }] : /* istanbul ignore next */ []));
    donutData = signal(null, ...(ngDevMode ? [{ debugName: "donutData" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            const cfg = this.config();
            untracked(() => {
                if (cfg.type === 'bar')
                    this.barData.set(this.buildBarData(cfg));
                else if (cfg.type === 'line')
                    this.lineData.set(this.buildLineData(cfg));
                else
                    this.donutData.set(this.buildDonutData(cfg));
            });
        });
    }
    buildBarData(cfg) {
        const { labels, datasets } = cfg;
        const allVals = datasets.flatMap(d => d.data);
        const max = niceMax(Math.max(...allVals, 0));
        const ticks = yTicks(max);
        const groupW = IW / Math.max(labels.length, 1);
        const totalBarW = groupW * 0.72;
        const barW = totalBarW / Math.max(datasets.length, 1);
        const bars = [];
        datasets.forEach((ds, di) => {
            ds.data.forEach((val, li) => {
                const bh = max > 0 ? (val / max) * IH : 0;
                bars.push({
                    x: PAD.left + li * groupW + (groupW - totalBarW) / 2 + di * barW,
                    y: PAD.top + IH - bh,
                    w: barW - 2,
                    h: bh,
                    color: ds.color ?? COLORS[di % COLORS.length],
                    label: ds.label,
                    value: val,
                });
            });
        });
        const xLabels = labels.map((text, i) => ({
            x: PAD.left + i * groupW + groupW / 2,
            text,
        }));
        const legend = datasets.map((ds, i) => ({
            color: ds.color ?? COLORS[i % COLORS.length],
            label: ds.label,
        }));
        return { bars, xLabels, ticks, legend, W, H };
    }
    buildLineData(cfg) {
        const { labels, datasets } = cfg;
        const allVals = datasets.flatMap(d => d.data);
        const max = niceMax(Math.max(...allVals, 0));
        const ticks = yTicks(max);
        const n = Math.max(labels.length, 2);
        const xStep = IW / (n - 1);
        const series = datasets.map((ds, di) => {
            const color = ds.color ?? COLORS[di % COLORS.length];
            const pts = ds.data.map((val, i) => ({
                x: PAD.left + i * xStep,
                y: PAD.top + IH - (max > 0 ? (val / max) * IH : 0),
            }));
            const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');
            const fill = pts.length > 0
                ? `${polyline} ${PAD.left + (pts.length - 1) * xStep},${PAD.top + IH} ${PAD.left},${PAD.top + IH}`
                : '';
            return { points: pts, polyline, fill, color, label: ds.label };
        });
        const xLabels = labels.map((text, i) => ({
            x: PAD.left + i * xStep,
            text,
        }));
        const legend = datasets.map((ds, i) => ({
            color: ds.color ?? COLORS[i % COLORS.length],
            label: ds.label,
        }));
        return { series, xLabels, ticks, legend, W, H };
    }
    buildDonutData(cfg) {
        const { labels, datasets, type } = cfg;
        const data = datasets[0]?.data ?? [];
        const total = data.reduce((a, b) => a + b, 0);
        const VW = 320, VH = 280;
        const cx = 140, cy = 130;
        const R = 110, r = type === 'donut' ? 60 : 0;
        if (total === 0) {
            return { segments: [], legend: [], cx, cy, R, r, VW, VH, isEmpty: true };
        }
        let angle = -Math.PI / 2;
        const segments = data.map((val, i) => {
            const sweep = (val / total) * 2 * Math.PI;
            const endAngle = angle + sweep;
            const cos1 = Math.cos(angle), sin1 = Math.sin(angle);
            const cos2 = Math.cos(endAngle), sin2 = Math.sin(endAngle);
            const large = sweep > Math.PI ? 1 : 0;
            const color = COLORS[i % COLORS.length];
            const pct = Math.round((val / total) * 100);
            let d;
            if (r > 0) {
                d = [
                    `M ${cx + R * cos1} ${cy + R * sin1}`,
                    `A ${R} ${R} 0 ${large} 1 ${cx + R * cos2} ${cy + R * sin2}`,
                    `L ${cx + r * cos2} ${cy + r * sin2}`,
                    `A ${r} ${r} 0 ${large} 0 ${cx + r * cos1} ${cy + r * sin1}`,
                    'Z',
                ].join(' ');
            }
            else {
                d = [
                    `M ${cx} ${cy}`,
                    `L ${cx + R * cos1} ${cy + R * sin1}`,
                    `A ${R} ${R} 0 ${large} 1 ${cx + R * cos2} ${cy + R * sin2}`,
                    'Z',
                ].join(' ');
            }
            angle = endAngle;
            return { d, color, label: labels[i] ?? `Item ${i + 1}`, value: val, pct };
        });
        const legend = segments.map(s => ({ color: s.color, label: s.label, value: s.value, pct: s.pct }));
        return { segments, legend, cx, cy, R, r, VW, VH, isEmpty: false };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkChartComponent, isStandalone: true, selector: "uk-chart", inputs: { config: { classPropertyName: "config", publicName: "config", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "@if (config().type === 'bar' && barData()) {\n  <div class=\"uk-chart\">\n    <svg [attr.viewBox]=\"'0 0 ' + barData()!.W + ' ' + barData()!.H\" class=\"uk-chart-svg\">\n      <!-- Y-axis grid + ticks -->\n      @for (tick of barData()!.ticks; track tick.value) {\n        <line [attr.x1]=\"52\" [attr.y1]=\"tick.y\" [attr.x2]=\"barData()!.W - 20\" [attr.y2]=\"tick.y\"\n              stroke=\"#e5e7eb\" stroke-width=\"1\" />\n        <text [attr.x]=\"48\" [attr.y]=\"tick.y + 4\" text-anchor=\"end\" class=\"uk-chart-tick\">{{ tick.value }}</text>\n      }\n      <!-- Bars -->\n      @for (bar of barData()!.bars; track $index) {\n        <rect [attr.x]=\"bar.x\" [attr.y]=\"bar.y\" [attr.width]=\"bar.w\" [attr.height]=\"bar.h\"\n              [attr.fill]=\"bar.color\" rx=\"3\">\n          <title>{{ bar.label }}: {{ bar.value }}</title>\n        </rect>\n      }\n      <!-- X labels -->\n      @for (xl of barData()!.xLabels; track $index) {\n        <text [attr.x]=\"xl.x\" [attr.y]=\"barData()!.H - 6\" text-anchor=\"middle\" class=\"uk-chart-label\">{{ xl.text }}</text>\n      }\n    </svg>\n    <div class=\"uk-chart-legend\">\n      @for (item of barData()!.legend; track item.label) {\n        <span class=\"uk-chart-legend-item\">\n          <span class=\"uk-chart-legend-dot\" [style.background]=\"item.color\"></span>{{ item.label }}\n        </span>\n      }\n    </div>\n  </div>\n}\n\n@if (config().type === 'line' && lineData()) {\n  <div class=\"uk-chart\">\n    <svg [attr.viewBox]=\"'0 0 ' + lineData()!.W + ' ' + lineData()!.H\" class=\"uk-chart-svg\">\n      @for (tick of lineData()!.ticks; track tick.value) {\n        <line [attr.x1]=\"52\" [attr.y1]=\"tick.y\" [attr.x2]=\"lineData()!.W - 20\" [attr.y2]=\"tick.y\"\n              stroke=\"#e5e7eb\" stroke-width=\"1\" />\n        <text [attr.x]=\"48\" [attr.y]=\"tick.y + 4\" text-anchor=\"end\" class=\"uk-chart-tick\">{{ tick.value }}</text>\n      }\n      @for (s of lineData()!.series; track s.label) {\n        <polygon [attr.points]=\"s.fill\" [attr.fill]=\"s.color\" fill-opacity=\"0.1\" />\n        <polyline [attr.points]=\"s.polyline\" [attr.stroke]=\"s.color\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n        @for (pt of s.points; track $index) {\n          <circle [attr.cx]=\"pt.x\" [attr.cy]=\"pt.y\" r=\"4\" [attr.fill]=\"s.color\" stroke=\"#fff\" stroke-width=\"2\" />\n        }\n      }\n      @for (xl of lineData()!.xLabels; track $index) {\n        <text [attr.x]=\"xl.x\" [attr.y]=\"lineData()!.H - 6\" text-anchor=\"middle\" class=\"uk-chart-label\">{{ xl.text }}</text>\n      }\n    </svg>\n    <div class=\"uk-chart-legend\">\n      @for (item of lineData()!.legend; track item.label) {\n        <span class=\"uk-chart-legend-item\">\n          <span class=\"uk-chart-legend-dot\" [style.background]=\"item.color\"></span>{{ item.label }}\n        </span>\n      }\n    </div>\n  </div>\n}\n\n@if ((config().type === 'donut' || config().type === 'pie') && donutData()) {\n  <div class=\"uk-chart uk-chart--donut\">\n    <svg [attr.viewBox]=\"'0 0 ' + donutData()!.VW + ' ' + donutData()!.VH\" class=\"uk-chart-svg uk-chart-svg--donut\">\n      @if (donutData()!.isEmpty) {\n        <circle [attr.cx]=\"donutData()!.cx\" [attr.cy]=\"donutData()!.cy\" [attr.r]=\"donutData()!.R\" fill=\"#f3f4f6\" />\n        <text [attr.x]=\"donutData()!.cx\" [attr.y]=\"donutData()!.cy + 5\" text-anchor=\"middle\" class=\"uk-chart-empty\">No data</text>\n      } @else {\n        @for (seg of donutData()!.segments; track seg.label) {\n          <path [attr.d]=\"seg.d\" [attr.fill]=\"seg.color\" stroke=\"#fff\" stroke-width=\"2\">\n            <title>{{ seg.label }}: {{ seg.value }} ({{ seg.pct }}%)</title>\n          </path>\n        }\n      }\n    </svg>\n    <div class=\"uk-chart-legend uk-chart-legend--donut\">\n      @for (item of donutData()!.legend; track item.label) {\n        <span class=\"uk-chart-legend-item\">\n          <span class=\"uk-chart-legend-dot\" [style.background]=\"item.color\"></span>\n          {{ item.label }} <span class=\"uk-chart-legend-pct\">{{ item.pct }}%</span>\n        </span>\n      }\n    </div>\n  </div>\n}\n", styles: [".uk-chart{width:100%}.uk-chart-svg{width:100%;height:auto;display:block;overflow:visible}.uk-chart-svg--donut{max-width:360px;margin:0 auto;display:block}.uk-chart-tick{font-size:11px;fill:#9ca3af;font-family:system-ui,sans-serif}.uk-chart-label{font-size:11px;fill:#6b7280;font-family:system-ui,sans-serif}.uk-chart-empty{font-size:13px;fill:#9ca3af;font-family:system-ui,sans-serif}.uk-chart-legend{display:flex;flex-wrap:wrap;gap:10px 18px;margin-top:12px;justify-content:center;font-size:.8125rem;color:#6b7280}.uk-chart-legend--donut{margin-top:4px}.uk-chart-legend-item{display:flex;align-items:center;gap:6px}.uk-chart-legend-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}.uk-chart-legend-pct{color:#9ca3af;margin-left:2px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-chart', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (config().type === 'bar' && barData()) {\n  <div class=\"uk-chart\">\n    <svg [attr.viewBox]=\"'0 0 ' + barData()!.W + ' ' + barData()!.H\" class=\"uk-chart-svg\">\n      <!-- Y-axis grid + ticks -->\n      @for (tick of barData()!.ticks; track tick.value) {\n        <line [attr.x1]=\"52\" [attr.y1]=\"tick.y\" [attr.x2]=\"barData()!.W - 20\" [attr.y2]=\"tick.y\"\n              stroke=\"#e5e7eb\" stroke-width=\"1\" />\n        <text [attr.x]=\"48\" [attr.y]=\"tick.y + 4\" text-anchor=\"end\" class=\"uk-chart-tick\">{{ tick.value }}</text>\n      }\n      <!-- Bars -->\n      @for (bar of barData()!.bars; track $index) {\n        <rect [attr.x]=\"bar.x\" [attr.y]=\"bar.y\" [attr.width]=\"bar.w\" [attr.height]=\"bar.h\"\n              [attr.fill]=\"bar.color\" rx=\"3\">\n          <title>{{ bar.label }}: {{ bar.value }}</title>\n        </rect>\n      }\n      <!-- X labels -->\n      @for (xl of barData()!.xLabels; track $index) {\n        <text [attr.x]=\"xl.x\" [attr.y]=\"barData()!.H - 6\" text-anchor=\"middle\" class=\"uk-chart-label\">{{ xl.text }}</text>\n      }\n    </svg>\n    <div class=\"uk-chart-legend\">\n      @for (item of barData()!.legend; track item.label) {\n        <span class=\"uk-chart-legend-item\">\n          <span class=\"uk-chart-legend-dot\" [style.background]=\"item.color\"></span>{{ item.label }}\n        </span>\n      }\n    </div>\n  </div>\n}\n\n@if (config().type === 'line' && lineData()) {\n  <div class=\"uk-chart\">\n    <svg [attr.viewBox]=\"'0 0 ' + lineData()!.W + ' ' + lineData()!.H\" class=\"uk-chart-svg\">\n      @for (tick of lineData()!.ticks; track tick.value) {\n        <line [attr.x1]=\"52\" [attr.y1]=\"tick.y\" [attr.x2]=\"lineData()!.W - 20\" [attr.y2]=\"tick.y\"\n              stroke=\"#e5e7eb\" stroke-width=\"1\" />\n        <text [attr.x]=\"48\" [attr.y]=\"tick.y + 4\" text-anchor=\"end\" class=\"uk-chart-tick\">{{ tick.value }}</text>\n      }\n      @for (s of lineData()!.series; track s.label) {\n        <polygon [attr.points]=\"s.fill\" [attr.fill]=\"s.color\" fill-opacity=\"0.1\" />\n        <polyline [attr.points]=\"s.polyline\" [attr.stroke]=\"s.color\" fill=\"none\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" />\n        @for (pt of s.points; track $index) {\n          <circle [attr.cx]=\"pt.x\" [attr.cy]=\"pt.y\" r=\"4\" [attr.fill]=\"s.color\" stroke=\"#fff\" stroke-width=\"2\" />\n        }\n      }\n      @for (xl of lineData()!.xLabels; track $index) {\n        <text [attr.x]=\"xl.x\" [attr.y]=\"lineData()!.H - 6\" text-anchor=\"middle\" class=\"uk-chart-label\">{{ xl.text }}</text>\n      }\n    </svg>\n    <div class=\"uk-chart-legend\">\n      @for (item of lineData()!.legend; track item.label) {\n        <span class=\"uk-chart-legend-item\">\n          <span class=\"uk-chart-legend-dot\" [style.background]=\"item.color\"></span>{{ item.label }}\n        </span>\n      }\n    </div>\n  </div>\n}\n\n@if ((config().type === 'donut' || config().type === 'pie') && donutData()) {\n  <div class=\"uk-chart uk-chart--donut\">\n    <svg [attr.viewBox]=\"'0 0 ' + donutData()!.VW + ' ' + donutData()!.VH\" class=\"uk-chart-svg uk-chart-svg--donut\">\n      @if (donutData()!.isEmpty) {\n        <circle [attr.cx]=\"donutData()!.cx\" [attr.cy]=\"donutData()!.cy\" [attr.r]=\"donutData()!.R\" fill=\"#f3f4f6\" />\n        <text [attr.x]=\"donutData()!.cx\" [attr.y]=\"donutData()!.cy + 5\" text-anchor=\"middle\" class=\"uk-chart-empty\">No data</text>\n      } @else {\n        @for (seg of donutData()!.segments; track seg.label) {\n          <path [attr.d]=\"seg.d\" [attr.fill]=\"seg.color\" stroke=\"#fff\" stroke-width=\"2\">\n            <title>{{ seg.label }}: {{ seg.value }} ({{ seg.pct }}%)</title>\n          </path>\n        }\n      }\n    </svg>\n    <div class=\"uk-chart-legend uk-chart-legend--donut\">\n      @for (item of donutData()!.legend; track item.label) {\n        <span class=\"uk-chart-legend-item\">\n          <span class=\"uk-chart-legend-dot\" [style.background]=\"item.color\"></span>\n          {{ item.label }} <span class=\"uk-chart-legend-pct\">{{ item.pct }}%</span>\n        </span>\n      }\n    </div>\n  </div>\n}\n", styles: [".uk-chart{width:100%}.uk-chart-svg{width:100%;height:auto;display:block;overflow:visible}.uk-chart-svg--donut{max-width:360px;margin:0 auto;display:block}.uk-chart-tick{font-size:11px;fill:#9ca3af;font-family:system-ui,sans-serif}.uk-chart-label{font-size:11px;fill:#6b7280;font-family:system-ui,sans-serif}.uk-chart-empty{font-size:13px;fill:#9ca3af;font-family:system-ui,sans-serif}.uk-chart-legend{display:flex;flex-wrap:wrap;gap:10px 18px;margin-top:12px;justify-content:center;font-size:.8125rem;color:#6b7280}.uk-chart-legend--donut{margin-top:4px}.uk-chart-legend-item{display:flex;align-items:center;gap:6px}.uk-chart-legend-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}.uk-chart-legend-pct{color:#9ca3af;margin-left:2px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { config: [{ type: i0.Input, args: [{ isSignal: true, alias: "config", required: true }] }] } });

class UkTabsComponent {
    tabs = input([], ...(ngDevMode ? [{ debugName: "tabs" }] : /* istanbul ignore next */ []));
    variant = input('line', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    size = input('md', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    activeTab = input('', ...(ngDevMode ? [{ debugName: "activeTab" }] : /* istanbul ignore next */ []));
    tabChange = output();
    activeId = signal('', ...(ngDevMode ? [{ debugName: "activeId" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            const at = this.activeTab();
            untracked(() => {
                this.activeId.set(at);
            });
        });
        effect(() => {
            const tabList = this.tabs();
            untracked(() => {
                if (!this.activeId() && tabList.length) {
                    const first = tabList.find(t => !t.disabled);
                    if (first)
                        this.activeId.set(first.id);
                }
            });
        });
    }
    select(tab) {
        if (tab.disabled)
            return;
        this.activeId.set(tab.id);
        this.tabChange.emit(tab.id);
    }
    isActive(tab) { return this.activeId() === tab.id; }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkTabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkTabsComponent, isStandalone: true, selector: "uk-tabs", inputs: { tabs: { classPropertyName: "tabs", publicName: "tabs", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, activeTab: { classPropertyName: "activeTab", publicName: "activeTab", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { tabChange: "tabChange" }, ngImport: i0, template: "<div class=\"uk-tabs uk-tabs--{{ variant() }} uk-tabs--{{ size() }}\">\n  <div class=\"uk-tabs-nav\" role=\"tablist\">\n    @for (tab of tabs(); track tab.id) {\n      <button\n        type=\"button\"\n        class=\"uk-tab\"\n        role=\"tab\"\n        [class.active]=\"isActive(tab)\"\n        [class.disabled]=\"tab.disabled\"\n        [attr.aria-selected]=\"isActive(tab)\"\n        [attr.aria-disabled]=\"tab.disabled || null\"\n        [disabled]=\"tab.disabled || null\"\n        (click)=\"select(tab)\"\n      >\n        @if (tab.icon) {\n          <i class=\"bi bi-{{ tab.icon }} uk-tab-icon\"></i>\n        }\n        <span class=\"uk-tab-label\">{{ tab.label }}</span>\n        @if (tab.badge != null) {\n          <span class=\"uk-tab-badge\">{{ tab.badge }}</span>\n        }\n      </button>\n    }\n  </div>\n  <div class=\"uk-tabs-content\">\n    <ng-content />\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";.uk-tabs{--uk-tab-color: #6b7280;--uk-tab-active-color: #4f46e5;--uk-tab-hover-color: #374151;--uk-tab-disabled-color: #d1d5db;--uk-tab-font-size: .875rem;--uk-tab-gap: 4px;--uk-tab-padding: 8px 16px;--uk-tab-radius: 6px;--uk-tab-badge-bg: #e5e7eb;--uk-tab-badge-color: #374151;display:flex;flex-direction:column}.uk-tabs.uk-tabs--sm{--uk-tab-font-size: .8125rem;--uk-tab-padding: 6px 12px}.uk-tabs.uk-tabs--lg{--uk-tab-font-size: .9375rem;--uk-tab-padding: 10px 20px}.uk-tabs-nav{display:flex;align-items:center;gap:var(--uk-tab-gap)}.uk-tab{display:inline-flex;align-items:center;gap:6px;padding:var(--uk-tab-padding);border:none;background:transparent;color:var(--uk-tab-color);font-size:var(--uk-tab-font-size);font-weight:500;cursor:pointer;white-space:nowrap;border-radius:var(--uk-tab-radius);transition:color .15s,background .15s,border-color .15s;text-decoration:none}.uk-tab:hover:not(.disabled){color:var(--uk-tab-hover-color)}.uk-tab.disabled{color:var(--uk-tab-disabled-color);cursor:not-allowed;pointer-events:none}.uk-tab-icon{font-size:1em}.uk-tab-label{line-height:1.4}.uk-tab-badge{font-size:.6875rem;font-weight:700;padding:1px 6px;border-radius:20px;background:var(--uk-tab-badge-bg);color:var(--uk-tab-badge-color);margin-left:2px}.uk-tabs--line .uk-tabs-nav{gap:0;border-bottom:2px solid #e5e7eb}.uk-tabs--line .uk-tab{border-radius:0;border-bottom:2px solid transparent;margin-bottom:-2px;padding-left:12px;padding-right:12px}.uk-tabs--line .uk-tab:hover:not(.disabled){color:var(--uk-tab-hover-color);border-bottom-color:#d1d5db}.uk-tabs--line .uk-tab.active{color:var(--uk-tab-active-color);border-bottom-color:var(--uk-tab-active-color)}.uk-tabs--pills .uk-tabs-nav{gap:4px}.uk-tabs--pills .uk-tab:hover:not(.disabled){background:#f3f4f6}.uk-tabs--pills .uk-tab.active{background:#4f46e5;color:#fff}.uk-tabs--pills .uk-tab.active .uk-tab-badge{background:#ffffff40;color:#fff}.uk-tabs--enclosed .uk-tabs-nav{gap:0;border:1px solid #e5e7eb;border-radius:var(--uk-tab-radius) var(--uk-tab-radius) 0 0;border-bottom:none;background:#f9fafb;padding:4px 4px 0}.uk-tabs--enclosed .uk-tab{border-radius:var(--uk-tab-radius) var(--uk-tab-radius) 0 0}.uk-tabs--enclosed .uk-tab:hover:not(.disabled){background:#f3f4f6}.uk-tabs--enclosed .uk-tab.active{background:#fff;color:var(--uk-tab-active-color);box-shadow:0 -1px #e5e7eb,1px 0 #e5e7eb,-1px 0 #e5e7eb}.uk-tabs--enclosed .uk-tabs-content{border:1px solid #e5e7eb;border-top:none;border-radius:0 0 var(--uk-tab-radius) var(--uk-tab-radius);padding:16px}.uk-tabs-content{padding-top:16px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkTabsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-tabs', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"uk-tabs uk-tabs--{{ variant() }} uk-tabs--{{ size() }}\">\n  <div class=\"uk-tabs-nav\" role=\"tablist\">\n    @for (tab of tabs(); track tab.id) {\n      <button\n        type=\"button\"\n        class=\"uk-tab\"\n        role=\"tab\"\n        [class.active]=\"isActive(tab)\"\n        [class.disabled]=\"tab.disabled\"\n        [attr.aria-selected]=\"isActive(tab)\"\n        [attr.aria-disabled]=\"tab.disabled || null\"\n        [disabled]=\"tab.disabled || null\"\n        (click)=\"select(tab)\"\n      >\n        @if (tab.icon) {\n          <i class=\"bi bi-{{ tab.icon }} uk-tab-icon\"></i>\n        }\n        <span class=\"uk-tab-label\">{{ tab.label }}</span>\n        @if (tab.badge != null) {\n          <span class=\"uk-tab-badge\">{{ tab.badge }}</span>\n        }\n      </button>\n    }\n  </div>\n  <div class=\"uk-tabs-content\">\n    <ng-content />\n  </div>\n</div>\n", styles: ["@charset \"UTF-8\";.uk-tabs{--uk-tab-color: #6b7280;--uk-tab-active-color: #4f46e5;--uk-tab-hover-color: #374151;--uk-tab-disabled-color: #d1d5db;--uk-tab-font-size: .875rem;--uk-tab-gap: 4px;--uk-tab-padding: 8px 16px;--uk-tab-radius: 6px;--uk-tab-badge-bg: #e5e7eb;--uk-tab-badge-color: #374151;display:flex;flex-direction:column}.uk-tabs.uk-tabs--sm{--uk-tab-font-size: .8125rem;--uk-tab-padding: 6px 12px}.uk-tabs.uk-tabs--lg{--uk-tab-font-size: .9375rem;--uk-tab-padding: 10px 20px}.uk-tabs-nav{display:flex;align-items:center;gap:var(--uk-tab-gap)}.uk-tab{display:inline-flex;align-items:center;gap:6px;padding:var(--uk-tab-padding);border:none;background:transparent;color:var(--uk-tab-color);font-size:var(--uk-tab-font-size);font-weight:500;cursor:pointer;white-space:nowrap;border-radius:var(--uk-tab-radius);transition:color .15s,background .15s,border-color .15s;text-decoration:none}.uk-tab:hover:not(.disabled){color:var(--uk-tab-hover-color)}.uk-tab.disabled{color:var(--uk-tab-disabled-color);cursor:not-allowed;pointer-events:none}.uk-tab-icon{font-size:1em}.uk-tab-label{line-height:1.4}.uk-tab-badge{font-size:.6875rem;font-weight:700;padding:1px 6px;border-radius:20px;background:var(--uk-tab-badge-bg);color:var(--uk-tab-badge-color);margin-left:2px}.uk-tabs--line .uk-tabs-nav{gap:0;border-bottom:2px solid #e5e7eb}.uk-tabs--line .uk-tab{border-radius:0;border-bottom:2px solid transparent;margin-bottom:-2px;padding-left:12px;padding-right:12px}.uk-tabs--line .uk-tab:hover:not(.disabled){color:var(--uk-tab-hover-color);border-bottom-color:#d1d5db}.uk-tabs--line .uk-tab.active{color:var(--uk-tab-active-color);border-bottom-color:var(--uk-tab-active-color)}.uk-tabs--pills .uk-tabs-nav{gap:4px}.uk-tabs--pills .uk-tab:hover:not(.disabled){background:#f3f4f6}.uk-tabs--pills .uk-tab.active{background:#4f46e5;color:#fff}.uk-tabs--pills .uk-tab.active .uk-tab-badge{background:#ffffff40;color:#fff}.uk-tabs--enclosed .uk-tabs-nav{gap:0;border:1px solid #e5e7eb;border-radius:var(--uk-tab-radius) var(--uk-tab-radius) 0 0;border-bottom:none;background:#f9fafb;padding:4px 4px 0}.uk-tabs--enclosed .uk-tab{border-radius:var(--uk-tab-radius) var(--uk-tab-radius) 0 0}.uk-tabs--enclosed .uk-tab:hover:not(.disabled){background:#f3f4f6}.uk-tabs--enclosed .uk-tab.active{background:#fff;color:var(--uk-tab-active-color);box-shadow:0 -1px #e5e7eb,1px 0 #e5e7eb,-1px 0 #e5e7eb}.uk-tabs--enclosed .uk-tabs-content{border:1px solid #e5e7eb;border-top:none;border-radius:0 0 var(--uk-tab-radius) var(--uk-tab-radius);padding:16px}.uk-tabs-content{padding-top:16px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { tabs: [{ type: i0.Input, args: [{ isSignal: true, alias: "tabs", required: false }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], activeTab: [{ type: i0.Input, args: [{ isSignal: true, alias: "activeTab", required: false }] }], tabChange: [{ type: i0.Output, args: ["tabChange"] }] } });

const VARIANT_ICONS = {
    info: 'info-circle-fill',
    success: 'check-circle-fill',
    error: 'x-circle-fill',
    warning: 'exclamation-triangle-fill',
};
const VARIANT_TITLES = {
    info: 'Info',
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
};
class UkAlertDialogComponent {
    config = input.required(...(ngDevMode ? [{ debugName: "config" }] : /* istanbul ignore next */ []));
    closed = output();
    visible = signal(false, ...(ngDevMode ? [{ debugName: "visible" }] : /* istanbul ignore next */ []));
    animating = signal(false, ...(ngDevMode ? [{ debugName: "animating" }] : /* istanbul ignore next */ []));
    get variant() { return this.config().variant ?? 'info'; }
    get icon() { return VARIANT_ICONS[this.variant]; }
    get autoTitle() { return this.config().title ?? VARIANT_TITLES[this.variant]; }
    ngOnInit() {
        this.visible.set(true);
        requestAnimationFrame(() => this.animating.set(true));
    }
    close() {
        this.animating.set(false);
        setTimeout(() => { this.visible.set(false); this.closed.emit(); }, 220);
    }
    onBackdropClick() {
        if (this.config().closeOnBackdrop !== false)
            this.close();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAlertDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkAlertDialogComponent, isStandalone: true, selector: "uk-alert-dialog", inputs: { config: { classPropertyName: "config", publicName: "config", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { closed: "closed" }, ngImport: i0, template: "@if (visible()) {\n  <div\n    class=\"uk-dialog-backdrop\"\n    [class.uk-dialog-backdrop--in]=\"animating()\"\n    (click)=\"onBackdropClick()\"\n  >\n    <div\n      class=\"uk-dialog uk-dialog--alert uk-dialog--{{ variant }}\"\n      [class.uk-dialog--in]=\"animating()\"\n      role=\"alertdialog\"\n      aria-modal=\"true\"\n      (click)=\"$event.stopPropagation()\"\n    >\n      <div class=\"uk-dialog-icon uk-dialog-icon--{{ variant }}\">\n        <i class=\"bi bi-{{ icon }}\"></i>\n      </div>\n\n      <h3 class=\"uk-dialog-title\">{{ autoTitle }}</h3>\n      <p class=\"uk-dialog-message\">{{ config().message }}</p>\n\n      <div class=\"uk-dialog-actions uk-dialog-actions--center\">\n        <button\n          type=\"button\"\n          class=\"uk-dialog-btn uk-dialog-btn--{{ variant }}\"\n          (click)=\"close()\"\n        >\n          {{ config().button ?? 'Ok' }}\n        </button>\n      </div>\n    </div>\n  </div>\n}\n", styles: ["@charset \"UTF-8\";.uk-dialog-backdrop{position:fixed;inset:0;background:#0000;z-index:1200;display:flex;align-items:center;justify-content:center;padding:16px;transition:background .22s ease}.uk-dialog-backdrop--in{background:#00000080}.uk-dialog{background:#fff;border-radius:16px;box-shadow:0 24px 64px #0000002e;width:100%;max-width:400px;transform:scale(.9) translateY(16px);opacity:0;transition:transform .22s cubic-bezier(.34,1.4,.64,1),opacity .22s ease}.uk-dialog--in{transform:scale(1) translateY(0);opacity:1}.uk-dialog--alert{padding:28px 24px 24px;text-align:center}.uk-dialog-icon{font-size:2.5rem;margin-bottom:12px;line-height:1}.uk-dialog-icon--info{color:#3b82f6}.uk-dialog-icon--success{color:#22c55e}.uk-dialog-icon--error{color:#ef4444}.uk-dialog-icon--warning{color:#f59e0b}.uk-dialog-title{font-size:1.0625rem;font-weight:700;color:#111827;margin:0 0 8px}.uk-dialog-message{font-size:.9375rem;color:#4b5563;margin:0 0 20px;line-height:1.5}.uk-dialog-actions{display:flex;gap:10px}.uk-dialog-actions--center{justify-content:center}.uk-dialog-btn{flex:1;padding:9px 20px;border:none;border-radius:8px;font-size:.9375rem;font-weight:600;cursor:pointer;transition:filter .15s,opacity .15s}.uk-dialog-btn--center{flex:0 0 auto;min-width:100px}.uk-dialog-btn:hover{filter:brightness(.92)}.uk-dialog-btn:active{filter:brightness(.85)}.uk-dialog-btn--info{background:#3b82f6;color:#fff}.uk-dialog-btn--success{background:#22c55e;color:#fff}.uk-dialog-btn--error{background:#ef4444;color:#fff}.uk-dialog-btn--warning{background:#f59e0b;color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkAlertDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-alert-dialog', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (visible()) {\n  <div\n    class=\"uk-dialog-backdrop\"\n    [class.uk-dialog-backdrop--in]=\"animating()\"\n    (click)=\"onBackdropClick()\"\n  >\n    <div\n      class=\"uk-dialog uk-dialog--alert uk-dialog--{{ variant }}\"\n      [class.uk-dialog--in]=\"animating()\"\n      role=\"alertdialog\"\n      aria-modal=\"true\"\n      (click)=\"$event.stopPropagation()\"\n    >\n      <div class=\"uk-dialog-icon uk-dialog-icon--{{ variant }}\">\n        <i class=\"bi bi-{{ icon }}\"></i>\n      </div>\n\n      <h3 class=\"uk-dialog-title\">{{ autoTitle }}</h3>\n      <p class=\"uk-dialog-message\">{{ config().message }}</p>\n\n      <div class=\"uk-dialog-actions uk-dialog-actions--center\">\n        <button\n          type=\"button\"\n          class=\"uk-dialog-btn uk-dialog-btn--{{ variant }}\"\n          (click)=\"close()\"\n        >\n          {{ config().button ?? 'Ok' }}\n        </button>\n      </div>\n    </div>\n  </div>\n}\n", styles: ["@charset \"UTF-8\";.uk-dialog-backdrop{position:fixed;inset:0;background:#0000;z-index:1200;display:flex;align-items:center;justify-content:center;padding:16px;transition:background .22s ease}.uk-dialog-backdrop--in{background:#00000080}.uk-dialog{background:#fff;border-radius:16px;box-shadow:0 24px 64px #0000002e;width:100%;max-width:400px;transform:scale(.9) translateY(16px);opacity:0;transition:transform .22s cubic-bezier(.34,1.4,.64,1),opacity .22s ease}.uk-dialog--in{transform:scale(1) translateY(0);opacity:1}.uk-dialog--alert{padding:28px 24px 24px;text-align:center}.uk-dialog-icon{font-size:2.5rem;margin-bottom:12px;line-height:1}.uk-dialog-icon--info{color:#3b82f6}.uk-dialog-icon--success{color:#22c55e}.uk-dialog-icon--error{color:#ef4444}.uk-dialog-icon--warning{color:#f59e0b}.uk-dialog-title{font-size:1.0625rem;font-weight:700;color:#111827;margin:0 0 8px}.uk-dialog-message{font-size:.9375rem;color:#4b5563;margin:0 0 20px;line-height:1.5}.uk-dialog-actions{display:flex;gap:10px}.uk-dialog-actions--center{justify-content:center}.uk-dialog-btn{flex:1;padding:9px 20px;border:none;border-radius:8px;font-size:.9375rem;font-weight:600;cursor:pointer;transition:filter .15s,opacity .15s}.uk-dialog-btn--center{flex:0 0 auto;min-width:100px}.uk-dialog-btn:hover{filter:brightness(.92)}.uk-dialog-btn:active{filter:brightness(.85)}.uk-dialog-btn--info{background:#3b82f6;color:#fff}.uk-dialog-btn--success{background:#22c55e;color:#fff}.uk-dialog-btn--error{background:#ef4444;color:#fff}.uk-dialog-btn--warning{background:#f59e0b;color:#fff}\n"] }]
        }], propDecorators: { config: [{ type: i0.Input, args: [{ isSignal: true, alias: "config", required: true }] }], closed: [{ type: i0.Output, args: ["closed"] }] } });

class UkConfirmDialogComponent {
    config = input.required(...(ngDevMode ? [{ debugName: "config" }] : /* istanbul ignore next */ []));
    closed = output();
    visible = signal(false, ...(ngDevMode ? [{ debugName: "visible" }] : /* istanbul ignore next */ []));
    animating = signal(false, ...(ngDevMode ? [{ debugName: "animating" }] : /* istanbul ignore next */ []));
    get confirmBtnClass() {
        const v = this.config().confirmVariant ?? 'primary';
        return `uk-dialog-btn uk-dialog-btn--${v}`;
    }
    get dataPreview() {
        const d = this.config().data;
        if (d === undefined || d === null)
            return null;
        if (typeof d === 'object')
            return JSON.stringify(d, null, 2);
        return String(d);
    }
    ngOnInit() {
        this.visible.set(true);
        requestAnimationFrame(() => this.animating.set(true));
    }
    dismiss(result) {
        this.animating.set(false);
        setTimeout(() => { this.visible.set(false); this.closed.emit(result); }, 220);
    }
    cancel() { this.dismiss(false); }
    confirm() { this.dismiss(true); }
    onBackdropClick() {
        if (this.config().closeOnBackdrop === true)
            this.cancel();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkConfirmDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.9", type: UkConfirmDialogComponent, isStandalone: true, selector: "uk-confirm-dialog", inputs: { config: { classPropertyName: "config", publicName: "config", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { closed: "closed" }, ngImport: i0, template: "@if (visible()) {\n  <div\n    class=\"uk-dialog-backdrop\"\n    [class.uk-dialog-backdrop--in]=\"animating()\"\n    (click)=\"onBackdropClick()\"\n  >\n    <div\n      class=\"uk-dialog uk-dialog--confirm\"\n      [class.uk-dialog--in]=\"animating()\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      (click)=\"$event.stopPropagation()\"\n    >\n      @if (config().header) {\n        <div class=\"uk-dialog-header\">\n          <h3 class=\"uk-dialog-title\">{{ config().header }}</h3>\n        </div>\n      }\n\n      <div class=\"uk-dialog-body\">\n        <p class=\"uk-dialog-message\">{{ config().message }}</p>\n\n        @if (config().subMessage) {\n          <p class=\"uk-dialog-sub-message\">{{ config().subMessage }}</p>\n        }\n\n        @if (dataPreview !== null) {\n          <pre class=\"uk-dialog-data\">{{ dataPreview }}</pre>\n        }\n      </div>\n\n      <div class=\"uk-dialog-actions\">\n        @if (config().cancelButton !== false) {\n          <button type=\"button\" class=\"uk-dialog-btn uk-dialog-btn--cancel\" (click)=\"cancel()\">\n            {{ config().cancelButton ?? 'Cancel' }}\n          </button>\n        }\n        <button type=\"button\" [class]=\"confirmBtnClass\" (click)=\"confirm()\">\n          {{ config().confirmButton ?? 'Confirm' }}\n        </button>\n      </div>\n    </div>\n  </div>\n}\n", styles: ["@charset \"UTF-8\";.uk-dialog-backdrop{position:fixed;inset:0;background:#0000;z-index:1200;display:flex;align-items:center;justify-content:center;padding:16px;transition:background .22s ease}.uk-dialog-backdrop--in{background:#00000080}.uk-dialog{background:#fff;border-radius:16px;box-shadow:0 24px 64px #0000002e;width:100%;max-width:480px;transform:scale(.9) translateY(16px);opacity:0;transition:transform .22s cubic-bezier(.34,1.4,.64,1),opacity .22s ease}.uk-dialog--in{transform:scale(1) translateY(0);opacity:1}.uk-dialog--confirm{overflow:hidden}.uk-dialog-header{padding:18px 20px 14px;border-bottom:1px solid #f3f4f6}.uk-dialog-title{font-size:1.0625rem;font-weight:700;color:#111827;margin:0}.uk-dialog-body{padding:18px 20px}.uk-dialog-message{font-size:.9375rem;color:#374151;margin:0;line-height:1.55}.uk-dialog-sub-message{font-size:.875rem;color:#6b7280;margin:8px 0 0;line-height:1.5}.uk-dialog-data{margin:12px 0 0;padding:10px 12px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;font-size:.8125rem;color:#374151;font-family:ui-monospace,Cascadia Code,Source Code Pro,monospace;white-space:pre-wrap;word-break:break-all;max-height:140px;overflow-y:auto}.uk-dialog-actions{display:flex;gap:10px;padding:14px 20px;border-top:1px solid #f3f4f6;justify-content:flex-end}.uk-dialog-btn{padding:9px 20px;border:none;border-radius:8px;font-size:.9375rem;font-weight:600;cursor:pointer;transition:filter .15s}.uk-dialog-btn:hover{filter:brightness(.92)}.uk-dialog-btn:active{filter:brightness(.85)}.uk-dialog-btn--cancel{background:#f3f4f6;color:#374151}.uk-dialog-btn--primary{background:#4f46e5;color:#fff}.uk-dialog-btn--danger{background:#ef4444;color:#fff}.uk-dialog-btn--warning{background:#f59e0b;color:#fff}.uk-dialog-btn--success{background:#22c55e;color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkConfirmDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uk-confirm-dialog', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (visible()) {\n  <div\n    class=\"uk-dialog-backdrop\"\n    [class.uk-dialog-backdrop--in]=\"animating()\"\n    (click)=\"onBackdropClick()\"\n  >\n    <div\n      class=\"uk-dialog uk-dialog--confirm\"\n      [class.uk-dialog--in]=\"animating()\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      (click)=\"$event.stopPropagation()\"\n    >\n      @if (config().header) {\n        <div class=\"uk-dialog-header\">\n          <h3 class=\"uk-dialog-title\">{{ config().header }}</h3>\n        </div>\n      }\n\n      <div class=\"uk-dialog-body\">\n        <p class=\"uk-dialog-message\">{{ config().message }}</p>\n\n        @if (config().subMessage) {\n          <p class=\"uk-dialog-sub-message\">{{ config().subMessage }}</p>\n        }\n\n        @if (dataPreview !== null) {\n          <pre class=\"uk-dialog-data\">{{ dataPreview }}</pre>\n        }\n      </div>\n\n      <div class=\"uk-dialog-actions\">\n        @if (config().cancelButton !== false) {\n          <button type=\"button\" class=\"uk-dialog-btn uk-dialog-btn--cancel\" (click)=\"cancel()\">\n            {{ config().cancelButton ?? 'Cancel' }}\n          </button>\n        }\n        <button type=\"button\" [class]=\"confirmBtnClass\" (click)=\"confirm()\">\n          {{ config().confirmButton ?? 'Confirm' }}\n        </button>\n      </div>\n    </div>\n  </div>\n}\n", styles: ["@charset \"UTF-8\";.uk-dialog-backdrop{position:fixed;inset:0;background:#0000;z-index:1200;display:flex;align-items:center;justify-content:center;padding:16px;transition:background .22s ease}.uk-dialog-backdrop--in{background:#00000080}.uk-dialog{background:#fff;border-radius:16px;box-shadow:0 24px 64px #0000002e;width:100%;max-width:480px;transform:scale(.9) translateY(16px);opacity:0;transition:transform .22s cubic-bezier(.34,1.4,.64,1),opacity .22s ease}.uk-dialog--in{transform:scale(1) translateY(0);opacity:1}.uk-dialog--confirm{overflow:hidden}.uk-dialog-header{padding:18px 20px 14px;border-bottom:1px solid #f3f4f6}.uk-dialog-title{font-size:1.0625rem;font-weight:700;color:#111827;margin:0}.uk-dialog-body{padding:18px 20px}.uk-dialog-message{font-size:.9375rem;color:#374151;margin:0;line-height:1.55}.uk-dialog-sub-message{font-size:.875rem;color:#6b7280;margin:8px 0 0;line-height:1.5}.uk-dialog-data{margin:12px 0 0;padding:10px 12px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;font-size:.8125rem;color:#374151;font-family:ui-monospace,Cascadia Code,Source Code Pro,monospace;white-space:pre-wrap;word-break:break-all;max-height:140px;overflow-y:auto}.uk-dialog-actions{display:flex;gap:10px;padding:14px 20px;border-top:1px solid #f3f4f6;justify-content:flex-end}.uk-dialog-btn{padding:9px 20px;border:none;border-radius:8px;font-size:.9375rem;font-weight:600;cursor:pointer;transition:filter .15s}.uk-dialog-btn:hover{filter:brightness(.92)}.uk-dialog-btn:active{filter:brightness(.85)}.uk-dialog-btn--cancel{background:#f3f4f6;color:#374151}.uk-dialog-btn--primary{background:#4f46e5;color:#fff}.uk-dialog-btn--danger{background:#ef4444;color:#fff}.uk-dialog-btn--warning{background:#f59e0b;color:#fff}.uk-dialog-btn--success{background:#22c55e;color:#fff}\n"] }]
        }], propDecorators: { config: [{ type: i0.Input, args: [{ isSignal: true, alias: "config", required: true }] }], closed: [{ type: i0.Output, args: ["closed"] }] } });

class UkDialogService {
    appRef = inject(ApplicationRef);
    injector = inject(EnvironmentInjector);
    /* ── Internal: mount component into body ── */
    mount(ref) {
        this.appRef.attachView(ref.hostView);
        const host = ref.hostView.rootNodes[0];
        document.body.appendChild(host);
        ref.changeDetectorRef.detectChanges();
        return host;
    }
    destroy(ref, host) {
        this.appRef.detachView(ref.hostView);
        ref.destroy();
        host.remove();
    }
    /* ── Alert dialog (info / success / error / warning) ── */
    alert(config) {
        return new Promise(resolve => {
            const ref = createComponent(UkAlertDialogComponent, { environmentInjector: this.injector });
            ref.setInput('config', config);
            const host = this.mount(ref);
            ref.instance.closed.subscribe(() => { this.destroy(ref, host); resolve(); });
        });
    }
    info(message, options = {}) {
        return this.alert({ ...options, variant: 'info', message });
    }
    success(message, options = {}) {
        return this.alert({ ...options, variant: 'success', message });
    }
    error(message, options = {}) {
        return this.alert({ ...options, variant: 'error', message });
    }
    warning(message, options = {}) {
        return this.alert({ ...options, variant: 'warning', message });
    }
    /* ── Confirmation dialog ── */
    confirm(config) {
        return new Promise(resolve => {
            const ref = createComponent(UkConfirmDialogComponent, { environmentInjector: this.injector });
            ref.setInput('config', config);
            const host = this.mount(ref);
            ref.instance.closed.subscribe((result) => { this.destroy(ref, host); resolve(result); });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDialogService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDialogService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.9", ngImport: i0, type: UkDialogService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/*
 * Public API Surface of ui-kit
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ACCORDION_TOKEN, UkAccordionComponent, UkAccordionItemComponent, UkAlertComponent, UkAlertDialogComponent, UkAvatarComponent, UkAvatarGroupComponent, UkButtonComponent, UkChartComponent, UkCheckboxComponent, UkConfirmDialogComponent, UkDateRangePickerComponent, UkDatepickerComponent, UkDialogService, UkDynamicFormComponent, UkDynamicTableComponent, UkHeaderComponent, UkInputComponent, UkLayoutComponent, UkListGroupComponent, UkListItemComponent, UkModalComponent, UkMultiSelectComponent, UkOffcanvasComponent, UkOtpInputComponent, UkProgressComponent, UkRadioGroupComponent, UkRangeComponent, UkRatingComponent, UkSelectComponent, UkSidebarComponent, UkSpinnerComponent, UkStepContentDirective, UkStepperComponent, UkTabsComponent, UkTextareaComponent, UkTimepickerComponent, UkToastService, UkToasterComponent };
//# sourceMappingURL=ui-kit.mjs.map
