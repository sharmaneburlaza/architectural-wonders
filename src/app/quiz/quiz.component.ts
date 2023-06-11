import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  onQuiz: boolean = false;
  quizType: string = '';

  constructor() {}

  handleButtonClick(buttonName: string): void {
    this.onQuiz = true;
    this.quizType = buttonName;
  }

  back(): void {
    this.onQuiz = false;
    this.quizType = '';
  }
}
