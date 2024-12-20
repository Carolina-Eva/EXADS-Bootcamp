import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-tracker',
  imports: [CommonModule],
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.scss'
})
export class ProgressTrackerComponent {
  @Input() totalSteps: number = 0;
  @Input() currentStep: number = 0;

  get steps(): number[] {
    return Array(this.totalSteps).fill(0).map((_, i) => i + 1);
  }
}
