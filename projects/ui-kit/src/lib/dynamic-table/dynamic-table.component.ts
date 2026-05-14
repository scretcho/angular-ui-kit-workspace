import {
  Component, input, output, effect, untracked,
  ChangeDetectionStrategy, signal, computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableColumn, TableConfig } from '../shared/types';

type SortDir = 'asc' | 'desc' | null;

@Component({
  selector: 'uk-dynamic-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class UkDynamicTableComponent<T extends Record<string, unknown>> {
  readonly data = input<T[]>([]);
  readonly config = input<TableConfig<T>>({ columns: [] });
  readonly loading = input(false);
  readonly rowKey = input<(row: T, index: number) => string | number>((_, i) => i);
  readonly rowClickable = input(false);
  readonly searchPlaceholder = input('Search...');
  readonly toolbarActions = input<unknown[]>([]);
  readonly rowClick = output<T>();
  readonly selectionChange = output<T[]>();
  readonly sortChange = output<{ key: string; dir: SortDir }>();
  readonly pageChange = output<number>();
  readonly actionClick = output<{ action: string; row: T }>();
  readonly toggleChange = output<{ key: string; value: boolean; row: T }>();

  readonly Math = Math;
  readonly searchQuery = signal('');
  readonly sortKey = signal<string | null>(null);
  readonly sortDir = signal<SortDir>(null);
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly selectedRows = signal<T[]>([]);
  readonly _loading = signal(false);
  readonly _data = signal<T[]>([]);
  readonly _config = signal<TableConfig<T>>({ columns: [] });

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

  readonly visibleColumns = computed(() =>
    this._config().columns.filter(c => c.show !== false)
  );

  readonly filteredData = computed(() => {
    const data = this._data();
    const q = this.searchQuery().toLowerCase();
    let d = q
      ? data.filter(row =>
          this.config().columns.some(col => {
            const v = this.getCellValue(row, col);
            return v != null && String(v).toLowerCase().includes(q);
          })
        )
      : [...data];

    const key = this.sortKey();
    const dir = this.sortDir();
    if (key && dir) {
      d = d.slice().sort((a, b) => {
        const av = this.getValueByPath(a, key) as string | number;
        const bv = this.getValueByPath(b, key) as string | number;
        if (av == null) return 1;
        if (bv == null) return -1;
        return dir === 'asc' ? (av < bv ? -1 : av > bv ? 1 : 0) : (av > bv ? -1 : av < bv ? 1 : 0);
      });
    }
    return d;
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredData().length / this.pageSize()))
  );

  readonly pagedData = computed(() => {
    if (!this.config().paginate) return this.filteredData();
    const start = (this.currentPage() - 1) * this.pageSize();
    return this.filteredData().slice(start, start + this.pageSize());
  });

  readonly allSelected = computed(() =>
    this.pagedData().length > 0 && this.pagedData().every(r => this.isSelected(r))
  );
  readonly someSelected = computed(() =>
    this.pagedData().some(r => this.isSelected(r)) && !this.allSelected()
  );

  readonly pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: number[] = [1];
    if (current > 3) pages.push(-1);
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
    if (current < total - 2) pages.push(-1);
    pages.push(total);
    return pages;
  });

  getCellValue(row: T, col: TableColumn<T>): unknown {
    if (typeof col.key === 'function') return col.key(row);
    return this.getValueByPath(row, col.key as string);
  }

  getValueByPath(row: T, path: string): unknown {
    return path.split('.').reduce((o: unknown, k) => (o as Record<string, unknown>)?.[k], row);
  }

  getBadgeClass(col: TableColumn<T>, val: unknown): string {
    return col.badgeMap?.[String(val)] ?? 'uk-badge-neutral';
  }

  formatDate(val: unknown): string {
    if (!val) return '';
    const d = val instanceof Date ? val : new Date(val as string);
    return isNaN(d.getTime()) ? String(val) : d.toLocaleDateString();
  }

  onSearch(e: Event) {
    this.searchQuery.set((e.target as HTMLInputElement).value);
    this.currentPage.set(1);
  }

  clearSearch() {
    this.searchQuery.set('');
    this.currentPage.set(1);
  }

  sortByCol(col: TableColumn<T>) {
    if (typeof col.key !== 'function') this.sort(col.key as string);
  }

  isLoading() { return this._loading(); }

  sort(key: string) {
    if (this.sortKey() === key) {
      if (this.sortDir() === 'asc') this.sortDir.set('desc');
      else if (this.sortDir() === 'desc') { this.sortKey.set(null); this.sortDir.set(null); }
      else this.sortDir.set('asc');
    } else {
      this.sortKey.set(key);
      this.sortDir.set('asc');
    }
    this.sortChange.emit({ key, dir: this.sortDir() });
    this.currentPage.set(1);
  }

  isSelected(row: T) { return this.selectedRows().some(r => r === row); }

  toggleRow(row: T) {
    const sel = this.selectedRows();
    const next = this.isSelected(row) ? sel.filter(r => r !== row) : [...sel, row];
    this.selectedRows.set(next);
    this.selectionChange.emit(next);
  }

  toggleAll() {
    if (this.allSelected()) {
      this.clearSelection();
    } else {
      this.selectedRows.set([...this.pagedData()]);
      this.selectionChange.emit(this.selectedRows());
    }
  }

  clearSelection() {
    this.selectedRows.set([]);
    this.selectionChange.emit([]);
  }

  onRowClick(row: T) { this.rowClick.emit(row); }

  isActionVisible(act: { show?: boolean | ((row: T) => boolean) }, row: T): boolean {
    if (act.show === undefined || act.show === true) return true;
    if (act.show === false) return false;
    return act.show(row);
  }

  onActionClick(actionId: string, row: T, event: MouseEvent) {
    event.stopPropagation();
    this.actionClick.emit({ action: actionId, row });
  }

  onToggle(col: TableColumn<T>, row: T, event: Event) {
    event.stopPropagation();
    if (typeof col.key === 'function') return;
    const checked = (event.target as HTMLInputElement).checked;
    const parts = (col.key as string).split('.');
    let obj = row as Record<string, unknown>;
    for (let i = 0; i < parts.length - 1; i++) {
      obj = obj[parts[i]] as Record<string, unknown>;
    }
    obj[parts[parts.length - 1]] = checked;
    this.toggleChange.emit({ key: col.key as string, value: checked, row });
  }

  goToPage(p: number) {
    this.currentPage.set(Math.max(1, Math.min(p, this.totalPages())));
    this.pageChange.emit(this.currentPage());
  }

  nextPage() { this.goToPage(this.currentPage() + 1); }
  prevPage() { this.goToPage(this.currentPage() - 1); }

  onPageSizeChange(e: Event) {
    this.pageSize.set(+(e.target as HTMLSelectElement).value);
    this.currentPage.set(1);
  }
}
