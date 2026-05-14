import {
  Component, input, output, HostListener,
  ChangeDetectionStrategy, signal, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAction, LayoutUser } from '../shared/types';

@Component({
  selector: 'uk-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class UkHeaderComponent {
  readonly title = input('');
  readonly logo = input<string>();
  readonly actions = input<HeaderAction[]>([]);
  readonly user = input<LayoutUser>();
  readonly sidebarCollapsed = input(false);
  readonly showMenuToggle = input(true);
  readonly menuToggle = output<void>();
  readonly actionClick = output<string>();
  readonly userMenuClick = output<string>();

  readonly userMenuOpen = signal(false);

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    if (!this.el.nativeElement.contains(e.target)) this.userMenuOpen.set(false);
  }

  get initials(): string {
    const u = this.user();
    if (!u) return '';
    return u.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  }

  toggleUserMenu() { this.userMenuOpen.update(v => !v); }

  onActionClick(id: string) { this.actionClick.emit(id); }

  onUserMenuClick(id: string) {
    this.userMenuClick.emit(id);
    this.userMenuOpen.set(false);
  }
}
