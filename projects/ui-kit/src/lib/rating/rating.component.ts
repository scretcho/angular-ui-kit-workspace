import {
  Component, input, output, forwardRef,
  ChangeDetectionStrategy, signal
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uk-rating',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UkRatingComponent),
    multi: true
  }]
})
export class UkRatingComponent implements ControlValueAccessor {
  readonly label = input('');
  readonly max = input(5);
  readonly icon = input<'star' | 'heart' | string>('star');
  readonly allowHalf = input(false);
  readonly readonly = input(false);
  readonly disabled = input(false);
  readonly showCount = input(false);
  readonly hint = input('');
  readonly ratingChange = output<number>();

  readonly value = signal(0);
  readonly hoverValue = signal<number | null>(null);
  readonly isDisabled = signal(false);

  get stars() { return Array.from({ length: this.max() }, (_, i) => i + 1); }

  private onChange = (_: number) => {};
  onTouched = () => {};

  rate(star: number) {
    if (this.isDisabled() || this.readonly()) return;
    const v = this.value() === star ? 0 : star;
    this.value.set(v);
    this.onChange(v);
    this.ratingChange.emit(v);
    this.onTouched();
  }

  writeValue(val: number) { this.value.set(val ?? 0); }
  registerOnChange(fn: (v: number) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled.set(d); }
}
