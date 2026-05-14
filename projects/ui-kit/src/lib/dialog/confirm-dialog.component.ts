import {
  ChangeDetectionStrategy, Component,
  input, OnInit, output, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogConfig } from '../shared/types';

@Component({
  selector: 'uk-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class UkConfirmDialogComponent implements OnInit {
  readonly config = input.required<ConfirmDialogConfig>();
  readonly closed = output<boolean>();

  readonly visible   = signal(false);
  readonly animating = signal(false);

  get confirmBtnClass() {
    const v = this.config().confirmVariant ?? 'primary';
    return `uk-dialog-btn uk-dialog-btn--${v}`;
  }

  get dataPreview(): string | null {
    const d = this.config().data;
    if (d === undefined || d === null) return null;
    if (typeof d === 'object') return JSON.stringify(d, null, 2);
    return String(d);
  }

  ngOnInit() {
    this.visible.set(true);
    requestAnimationFrame(() => this.animating.set(true));
  }

  private dismiss(result: boolean) {
    this.animating.set(false);
    setTimeout(() => { this.visible.set(false); this.closed.emit(result); }, 220);
  }

  cancel()  { this.dismiss(false); }
  confirm() { this.dismiss(true); }

  onBackdropClick() {
    if (this.config().closeOnBackdrop === true) this.cancel();
  }
}
