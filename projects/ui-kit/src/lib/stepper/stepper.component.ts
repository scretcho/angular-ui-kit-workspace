import {
  Component, input, output, ContentChildren, QueryList,
  ChangeDetectionStrategy, signal, Directive, TemplateRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StepperStep {
  label: string;
  description?: string;
  icon?: string;
  optional?: boolean;
}

@Directive({ selector: '[ukStepContent]', standalone: true })
export class UkStepContentDirective {
  readonly stepIndex = input(0, { alias: 'ukStepContent' });
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'uk-stepper',
  standalone: true,
  imports: [CommonModule, UkStepContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class UkStepperComponent {
  readonly steps = input<StepperStep[]>([]);
  readonly direction = input<'horizontal' | 'vertical'>('horizontal');
  readonly showNavigation = input(true);
  readonly allowNavigation = input(false);
  readonly stepChange = output<number>();
  readonly finished = output<void>();

  @ContentChildren(UkStepContentDirective) stepTemplates!: QueryList<UkStepContentDirective>;

  readonly currentStep = signal(0);

  goTo(index: number) {
    this.currentStep.set(index);
    this.stepChange.emit(index);
  }

  next() {
    if (this.currentStep() < this.steps().length - 1) {
      this.currentStep.update(s => s + 1);
      this.stepChange.emit(this.currentStep());
    }
  }

  prev() {
    if (this.currentStep() > 0) {
      this.currentStep.update(s => s - 1);
      this.stepChange.emit(this.currentStep());
    }
  }

  finish() { this.finished.emit(); }

  reset() { this.currentStep.set(0); }
}
