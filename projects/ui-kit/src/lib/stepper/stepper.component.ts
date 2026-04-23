import {
  Component, Input, Output, EventEmitter, ContentChildren, QueryList,
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
  @Input('ukStepContent') stepIndex = 0;
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
  @Input() steps: StepperStep[] = [];
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
  @Input() showNavigation = true;
  @Input() allowNavigation = false;
  @Output() stepChange = new EventEmitter<number>();
  @Output() finished = new EventEmitter<void>();

  @ContentChildren(UkStepContentDirective) stepTemplates!: QueryList<UkStepContentDirective>;

  readonly currentStep = signal(0);

  goTo(index: number) {
    this.currentStep.set(index);
    this.stepChange.emit(index);
  }

  next() {
    if (this.currentStep() < this.steps.length - 1) {
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
