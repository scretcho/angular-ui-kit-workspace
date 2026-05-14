import {
  ChangeDetectionStrategy, Component,
  input, OnInit, output, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogConfig } from '../shared/types';

const VARIANT_ICONS: Record<string, string> = {
  info:    'info-circle-fill',
  success: 'check-circle-fill',
  error:   'x-circle-fill',
  warning: 'exclamation-triangle-fill',
};

const VARIANT_TITLES: Record<string, string> = {
  info:    'Info',
  success: 'Success',
  error:   'Error',
  warning: 'Warning',
};

@Component({
  selector: 'uk-alert-dialog',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class UkAlertDialogComponent implements OnInit {
  readonly config = input.required<AlertDialogConfig>();
  readonly closed = output<void>();

  readonly visible   = signal(false);
  readonly animating = signal(false);

  get variant()  { return this.config().variant ?? 'info'; }
  get icon()     { return VARIANT_ICONS[this.variant]; }
  get autoTitle(){ return this.config().title ?? VARIANT_TITLES[this.variant]; }

  ngOnInit() {
    this.visible.set(true);
    requestAnimationFrame(() => this.animating.set(true));
  }

  close() {
    this.animating.set(false);
    setTimeout(() => { this.visible.set(false); this.closed.emit(); }, 220);
  }

  onBackdropClick() {
    if (this.config().closeOnBackdrop !== false) this.close();
  }
}
