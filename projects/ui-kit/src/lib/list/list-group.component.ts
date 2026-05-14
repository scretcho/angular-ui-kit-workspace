import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'uk-list-group',
  standalone: true,
  template: `<ul class="uk-list-group" [class.uk-list-group--flush]="flush()"><ng-content /></ul>`,
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkListGroupComponent {
  readonly flush = input(false);
}
