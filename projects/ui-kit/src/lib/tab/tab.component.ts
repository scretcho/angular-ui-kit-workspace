import {
  Component, input, output, effect, untracked,
  ChangeDetectionStrategy, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItem } from '../shared/types';

@Component({
  selector: 'uk-tabs',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class UkTabsComponent {
  readonly tabs = input<TabItem[]>([]);
  readonly variant = input<'line' | 'pills' | 'enclosed'>('line');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly activeTab = input('');
  readonly tabChange = output<string>();

  readonly activeId = signal('');

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
          if (first) this.activeId.set(first.id);
        }
      });
    });
  }

  select(tab: TabItem) {
    if (tab.disabled) return;
    this.activeId.set(tab.id);
    this.tabChange.emit(tab.id);
  }

  isActive(tab: TabItem) { return this.activeId() === tab.id; }
}
