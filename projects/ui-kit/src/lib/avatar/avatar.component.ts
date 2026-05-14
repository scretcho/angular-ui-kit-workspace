import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

const COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899', '#8b5cf6', '#14b8a6'];

@Component({
  selector: 'uk-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkAvatarComponent {
  readonly src = input<string>();
  readonly name = input<string>();
  readonly size = input<AvatarSize>('md');
  readonly shape = input<AvatarShape>('circle');
  readonly status = input<AvatarStatus>();
  readonly alt = input<string>();

  get initials(): string {
    const n = this.name();
    if (!n) return '?';
    return n
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(w => w[0]?.toUpperCase() ?? '')
      .join('');
  }

  get bgColor(): string {
    const n = this.name();
    if (!n) return '#9ca3af';
    let hash = 0;
    for (let i = 0; i < n.length; i++) hash = n.charCodeAt(i) + ((hash << 5) - hash);
    return COLORS[Math.abs(hash) % COLORS.length];
  }
}
