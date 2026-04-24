import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from '../shared/types';

@Component({
  selector: 'uk-sidebar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class UkSidebarComponent {
  @Input() items: NavItem[] = [];
  @Input() activeId = '';
  @Input() collapsed = false;
  @Input() brandTitle = 'App';
  @Input() brandLogo?: string;
  @Output() itemClick = new EventEmitter<NavItem>();
  @Output() collapsedChange = new EventEmitter<boolean>();

  readonly expanded = signal<Record<string, boolean>>({});

  toggleExpand(item: NavItem, e: Event) {
    e.stopPropagation();
    this.expanded.update(s => ({ ...s, [item.id]: !s[item.id] }));
  }

  isExpanded(id: string): boolean {
    return this.expanded()[id] ?? false;
  }

  isActive(item: NavItem): boolean {
    if (item.id === this.activeId) return true;
    return item.children?.some(c => c.id === this.activeId) ?? false;
  }

  isChildActive(item: NavItem): boolean {
    return item.children?.some(c => c.id === this.activeId) ?? false;
  }

  select(item: NavItem) {
    if (item.disabled) return;
    if (item.children?.length) {
      this.expanded.update(s => ({ ...s, [item.id]: !s[item.id] }));
    } else {
      this.itemClick.emit(item);
    }
  }

  selectChild(child: NavItem) {
    if (child.disabled) return;
    this.itemClick.emit(child);
  }

  toggleCollapse() {
    this.collapsedChange.emit(!this.collapsed);
  }

  badgeClass(variant = 'primary'): string {
    return `uk-badge-${variant}`;
  }
}
