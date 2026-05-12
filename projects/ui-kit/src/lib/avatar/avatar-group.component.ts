import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AvatarSize } from './avatar.component';

@Component({
  selector: 'uk-avatar-group',
  standalone: true,
  template: `<div class="uk-avatar-group uk-avatar-group--{{ size }}"><ng-content /></div>`,
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkAvatarGroupComponent {
  @Input() size: AvatarSize = 'md';
}
