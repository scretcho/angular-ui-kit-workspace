import {
  Component, input, output,
  ChangeDetectionStrategy, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../shared/types';

@Component({
  selector: 'uk-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class UkSidebarComponent {
  readonly items = input<NavItem[]>([]);
  readonly activeId = input('');
  readonly collapsed = input(false);
  readonly brandTitle = input('App');
  readonly brandLogo = input<string>();
  readonly brandRoute = input<string>();
  readonly itemClick = output<NavItem>();
  readonly collapsedChange = output<boolean>();

  readonly expanded = signal<Record<string, boolean>>({});

  toggleExpand(id: string) {
    this.expanded.update(s => ({ ...s, [id]: !s[id] }));
  }

  isExpanded(id: string): boolean {
    return this.expanded()[id] ?? false;
  }

  isActive(item: NavItem): boolean {
    if (item.id === this.activeId()) return true;
    return item.children?.some(c => c.id === this.activeId()) ?? false;
  }

  isChildActive(item: NavItem): boolean {
    return item.children?.some(c => c.id === this.activeId()) ?? false;
  }

  select(item: NavItem) {
    if (item.disabled) return;
    if (item.children?.length) {
      this.toggleExpand(item.id);
    } else {
      this.itemClick.emit(item);
    }
  }

  selectChild(child: NavItem) {
    if (child.disabled) return;
    this.itemClick.emit(child);
  }

  toggleCollapse() {
    this.collapsedChange.emit(!this.collapsed());
  }

  isVisible(item: NavItem): boolean {
    if (item.show === false) return false;
    if (item.children?.length) {
      return item.children.some(c => c.show !== false);
    }
    return true;
  }

  visibleChildren(item: NavItem): NavItem[] {
    return item.children?.filter(c => c.show !== false) ?? [];
  }

  badgeClass(variant = 'primary'): string {
    return `uk-badge-${variant}`;
  }
}
