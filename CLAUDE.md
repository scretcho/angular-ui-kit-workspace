# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Serve the demo app (localhost:4200)
npm start

# Build the library — REQUIRED after any change to projects/ui-kit/
npm run build:lib

# Build library in watch mode (dev workflow)
npm run build:lib:watch

# Build everything
npm run build:all

# Run tests
npm test

# Publish library to GitHub release branch
bash scripts/publish-lib.sh origin release
```

## Critical: lib → demo dependency

`tsconfig.json` maps the `ui-kit` import to `./dist/ui-kit` (the compiled output), **not** the source:

```json
"paths": { "ui-kit": ["./dist/ui-kit"] }
```

Any change to `projects/ui-kit/` **must be followed by `npm run build:lib`** before the demo app or TypeScript type-checking will reflect it. Forgetting this is the most common cause of "type does not exist" errors in the demo.

## Repository structure

```
projects/
  ui-kit/          # Angular library (ng-packagr)
    src/
      public-api.ts          # Single barrel — every export goes here
      lib/
        shared/types.ts      # All shared interfaces and types
        <component>/         # One folder per component
  demo/            # Angular app that imports from 'ui-kit'
    src/app/
      app.ts       # All demo logic in one component
      app.html     # All demo sections, toggled by activeSection() signal
      app.scss     # Demo styles + component CSS variable override examples
dist/ui-kit/       # Built library output (gitignored on master)
scripts/
  publish-lib.sh   # Builds lib, commits dist/ to an orphan release branch
```

## Architecture patterns

### All components are standalone + OnPush + Signals

Every library component uses:
```typescript
standalone: true
changeDetection: ChangeDetectionStrategy.OnPush
```
State is managed with `signal()` and `computed()`. There is no NgModule, no Zone-based state, no RxJS streams inside components.

### Form components use ControlValueAccessor

All input-like components (`uk-input`, `uk-select`, `uk-checkbox`, etc.) implement `ControlValueAccessor`. They work with both `ngModel` and `formControlName`. Key invariant:

- Disabled state is tracked via `readonly isDisabled = signal(false)` and wired through `setDisabledState(d) { this.isDisabled.set(d); }`.
- **Never bind `[disabled]` on a component that also has `formControlName`** — Angular calls `setDisabledState` automatically from the reactive form control. Using both causes "changed after checked" warnings.
- In `UkDynamicFormComponent`, disabled fields are set at control creation time: `[{ value: def, disabled: !!field.disabled }, validators]` inside `buildForm()`.

### Service-based UI (no template selector required)

`UkDialogService` and `UkToastService` are `providedIn: 'root'` services — consumers inject them and call methods; nothing is added to the host template.

`UkDialogService` uses Angular's `createComponent()` + `ApplicationRef.attachView()` to mount dialog components directly into `document.body` at runtime, then destroys them after the Promise resolves. This is the pattern to follow for any UI that must appear outside the normal component tree.

```typescript
// Alert
await this.dialog.info('Message', { title: 'Info', button: 'Got it' });
await this.dialog.success('Saved!');
await this.dialog.error('Failed');
await this.dialog.warning('Heads up');

// Confirmation — resolves true (confirm) or false (cancel)
const ok = await this.dialog.confirm({
  header: 'Delete?',
  message: 'This cannot be undone.',
  data: { id: 5 },           // shown as formatted block if provided
  cancelButton: 'No',        // false = hide cancel button
  confirmButton: 'Yes, delete',
  confirmVariant: 'danger',  // 'primary' | 'danger' | 'warning' | 'success'
  closeOnBackdrop: true,     // alert default: true; confirm default: false
});
```

### Shared types

All public interfaces live in `projects/ui-kit/src/lib/shared/types.ts` and are re-exported via `public-api.ts`. Key types:

- `NavItem` — sidebar/layout nav nodes; `show?: boolean` hides items (parent auto-hides when all children hidden)
- `TableConfig<T>` / `TableColumn<T>` / `RowAction<T>` — table configuration
  - `TableColumn.show?: boolean` — hides a column; change requires config object reassignment
  - `RowAction.show?: boolean | ((row: T) => boolean)` — per-row action visibility
- `DynamicFormField` / `DynamicValidator` — dynamic form schema; supported `type` values:
  `'input' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select' | 'multiselect' | 'checkbox' | 'radio' | 'date-range' | 'otp' | 'range' | 'rating' | 'timepicker'`
- `TabItem` — tab bar item: `id`, `label`, `icon?`, `disabled?`, `badge?`
- `AlertDialogConfig` — `variant`, `title?`, `message`, `button?`, `closeOnBackdrop?`
- `ConfirmDialogConfig` — `header?`, `message`, `subMessage?`, `data?`, `cancelButton?`, `confirmButton?`, `confirmVariant?`, `closeOnBackdrop?`
- `DialogVariant` — `'info' | 'success' | 'error' | 'warning'`
- `ChartConfig` / `ChartDataset` — chart (SVG-based, no external lib)
- `LayoutUser`, `HeaderAction` — shell layout

### Table reactivity

`UkDynamicTableComponent` stores data in `_data = signal<T[]>([])` and config in `_config = signal<TableConfig<T>>({columns:[]})`, both updated via `ngOnChanges`. **Array mutations (`push`, `splice`) do not trigger `ngOnChanges`** — always reassign: `this.tableData = [...this.tableData, newRow]`. Same for config: reassign the whole object to trigger column visibility changes.

### Accordion injection token

`uk-accordion` and `uk-accordion-item` communicate via `ACCORDION_TOKEN` (defined in `accordion-host.ts`). The parent provides itself (`useExisting: UkAccordionComponent`) and the item injects it. This is the pattern to follow for any parent–child component pair that needs shared state.

### CSS theming

Components use CSS custom properties declared on their root class (e.g., `.uk-accordion`). Size variants override the variables via modifier classes (`.uk-accordion--sm/md/lg`). Consumers override by setting variables on a wrapper class — no SCSS or component internals needed:

```css
.my-theme {
  --uk-accordion-border-color: #a5b4fc;
  --uk-accordion-hover-bg: #eef2ff;
  --uk-accordion-body-color: #4338ca;
}
```

### Icons

Bootstrap Icons are loaded via CDN in `projects/demo/src/index.html`. Components reference icons as `bi-<name>` class on `<i>` elements. The icon name is passed as a plain string input (e.g., `icon="trash"`).

## Component inventory

| Selector / Service | File | Notes |
|---|---|---|
| `uk-button` | `button/` | `label` input as alternative to `ng-content` |
| `uk-input` | `input/` | CVA; `type`: text/email/password/number/tel/url/search |
| `uk-textarea` | `textarea/` | CVA |
| `uk-select` | `select/` | CVA; searchable |
| `uk-multi-select` | `multi-select/` | CVA |
| `uk-checkbox` | `checkbox/` | CVA |
| `uk-radio-group` | `radio/` | CVA |
| `uk-otp-input` | `otp-input/` | CVA |
| `uk-range` | `range/` | CVA |
| `uk-rating` | `rating/` | CVA |
| `uk-timepicker` | `timepicker/` | CVA |
| `uk-datepicker` | `datepicker/` | CVA |
| `uk-date-range-picker` | `date-range-picker/` | CVA |
| `uk-stepper` | `stepper/` | uses `UkStepContentDirective` for step templates |
| `uk-dynamic-form` | `dynamic-form/` | schema-driven; `fields: DynamicFormField[]` |
| `uk-dynamic-table` | `dynamic-table/` | `config: TableConfig<T>`; column `show`, row action `show` |
| `uk-tabs` | `tab/` | `tabs: TabItem[]`; variants: line/pills/enclosed; sizes: sm/md/lg |
| `uk-accordion` + `uk-accordion-item` | `accordion/` | injection token; size: sm/md/lg; full CSS token override |
| `uk-alert` | `alert/` | |
| `uk-avatar` + `uk-avatar-group` | `avatar/` | |
| `uk-list-group` + `uk-list-item` | `list/` | |
| `uk-modal` | `modal/` | declarative; `[(open)]` two-way binding |
| `uk-offcanvas` | `offcanvas/` | positions: left/right/top/bottom |
| `uk-progress` | `progress/` | |
| `uk-spinner` | `spinner/` | |
| `UkToastService` | `toast/` | `providedIn: 'root'`; no selector needed |
| `UkDialogService` | `dialog/` | `providedIn: 'root'`; no selector needed; returns `Promise<void\|boolean>` |
| `uk-chart` | `chart/` | SVG only; types: bar/line/donut/pie |
| `uk-layout` | `layout/` | shell wrapper |
| `uk-header` | `header/` | |
| `uk-sidebar` | `sidebar/` | `NavItem.show?: boolean`; parent hides when all children hidden |

## Adding a new component

1. Create `projects/ui-kit/src/lib/<name>/<name>.component.ts/html/scss`
2. Add `export * from './lib/<name>/<name>.component';` to `public-api.ts`
3. Run `npm run build:lib`
4. Import and use in `projects/demo/src/app/app.ts` and `app.html`

## Adding a new service (no-selector pattern)

1. Create `projects/ui-kit/src/lib/<name>/<name>.service.ts` with `@Injectable({ providedIn: 'root' })`
2. If the service mounts components dynamically: inject `ApplicationRef` and `EnvironmentInjector`; use `createComponent()` + `appRef.attachView()` + `document.body.appendChild()` — see `dialog/dialog.service.ts` as reference
3. Add `export * from './lib/<name>/<name>.service';` to `public-api.ts`
4. Run `npm run build:lib`
