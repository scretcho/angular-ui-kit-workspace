import {
  Component, input, output, OnInit,
  ChangeDetectionStrategy, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem, HeaderAction, LayoutUser } from '../shared/types';
import { UkHeaderComponent } from '../header/header.component';
import { UkSidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'uk-layout',
  standalone: true,
  imports: [CommonModule, UkHeaderComponent, UkSidebarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class UkLayoutComponent implements OnInit {
  readonly title = input('');
  readonly logo = input<string>();
  readonly brandRoute = input<string>();
  readonly navItems = input<NavItem[]>([]);
  readonly headerActions = input<HeaderAction[]>([]);
  readonly user = input<LayoutUser>();
  readonly activeNavId = input('');
  readonly defaultCollapsed = input(false);
  readonly navItemClick = output<NavItem>();
  readonly headerActionClick = output<string>();
  readonly userMenuClick = output<string>();

  readonly sidebarCollapsed = signal(false);

  ngOnInit() { this.sidebarCollapsed.set(this.defaultCollapsed()); }

  toggleSidebar() { this.sidebarCollapsed.update(v => !v); }
}
