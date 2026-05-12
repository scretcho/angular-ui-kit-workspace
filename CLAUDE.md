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
bash scripts/publish-lib.sh origin v1.0.0
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

### Shared types

All public interfaces live in `projects/ui-kit/src/lib/shared/types.ts` and are re-exported via `public-api.ts`. Key types:

- `NavItem` — sidebar/layout nav nodes; `show?: boolean` hides items (parent auto-hides when all children hidden)
- `TableConfig<T>` / `TableColumn<T>` / `RowAction` — table configuration
- `DynamicFormField` / `DynamicValidator` — dynamic form schema
- `ChartConfig` / `ChartDataset` — chart (SVG-based, no external charting lib)
- `LayoutUser`, `HeaderAction` — shell layout

### Table reactivity

`UkDynamicTableComponent` stores data in an internal `_data = signal<T[]>([])` updated via `ngOnChanges`. The `filteredData` computed depends on this signal. **Array mutations (`push`, `splice`) do not trigger `ngOnChanges`** — always reassign: `this.tableData = [...this.tableData, newRow]`.

### Accordion injection token

`uk-accordion` and `uk-accordion-item` communicate via `ACCORDION_TOKEN` (defined in `accordion-host.ts`). The parent provides itself (`useExisting: UkAccordionComponent`) and the item injects it. This is the pattern to follow for any parent–child component pair that needs shared state.

### CSS theming

Components use CSS custom properties declared on their root class (e.g., `.uk-accordion`). Size variants override the variables via modifier classes (`.uk-accordion--sm/md/lg`). Consumers override by setting variables on a wrapper class — no SCSS or component internals needed. Example from `demo/src/app/app.scss`:

```css
.my-theme {
  --uk-accordion-border-color: #a5b4fc;
  --uk-accordion-hover-bg: #eef2ff;
  --uk-accordion-body-color: #4338ca;
}
```

### Icons

Bootstrap Icons are loaded via CDN in `projects/demo/src/index.html`. Components reference icons as `bi-<name>` class on `<i>` elements. The icon name is passed as a plain string input (e.g., `icon="trash"`).

## Adding a new component

1. Create `projects/ui-kit/src/lib/<name>/<name>.component.ts/html/scss`
2. Add `export * from './lib/<name>/<name>.component';` to `public-api.ts`
3. Run `npm run build:lib`
4. Import and use in `projects/demo/src/app/app.ts` and `app.html`
