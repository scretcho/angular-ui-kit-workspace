import {
  Component, Input, Output, EventEmitter, OnInit,
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
  @Input() title = '';
  @Input() logo?: string;
  @Input() navItems: NavItem[] = [];
  @Input() headerActions: HeaderAction[] = [];
  @Input() user?: LayoutUser;
  @Input() activeNavId = '';
  @Input() defaultCollapsed = false;
  @Output() navItemClick = new EventEmitter<NavItem>();
  @Output() headerActionClick = new EventEmitter<string>();
  @Output() userMenuClick = new EventEmitter<string>();

  readonly sidebarCollapsed = signal(false);


  ngOnInit() { this.sidebarCollapsed.set(this.defaultCollapsed); }

  toggleSidebar() { this.sidebarCollapsed.update(v => !v); }
}
