import { Component, Input } from '@angular/core';
import { ARCH_DATA } from '../data';
import { ArchDataModel } from '../models';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  @Input() quizType!: string;
  heading!: string;
  item: ArchDataModel | null = null;
  choices: any = [];
  shuffledChoices: string[] = [];
  selectedOption!: string;
  hasSelected: boolean = false;
  answer: string | undefined = '';
  isLoading: boolean = true;
  score: number = 0;
  questionsCount: number = 0;

  ngOnInit(): void {
    this.initHeading();
    this.generateQuestion();

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  initHeading(): void {
    switch(this.quizType) {
      case 'name':
        this.heading = 'What is the name of this structure?';
        break;
      case 'location':
        this.heading = 'Where is this located?';
        break;
      case 'style':
        this.heading = 'What is the architectural style of this?';
        break;
      default:
        this.heading = '';
    }
  }

  generateRandomNum(arrLength: number): number {
    return Math.floor(Math.random() * arrLength);
  }

  nextQuestion(): void {
    this.isLoading = true;
    this.item = null;
    this.choices = [];
    this.shuffledChoices = [];
    this.hasSelected = false;
    this.answer = '';
    this.generateQuestion();

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  generateQuestion(): any {
    const index = this.generateRandomNum(ARCH_DATA.length);
    this.item = ARCH_DATA[index];
    this.choices.push(this.getPropValue(this.item));
    this.generateChoices();
    this.shuffledChoices = this.shuffleArray(this.choices);
    this.questionsCount += 1;
    console.log(this.item)
  }

  generateChoices(): void {
    while (this.choices.length < 5) {
      let item;
      if (this.quizType === 'location') {
        const sameContinent = ARCH_DATA.filter(c => this.item?.continent === c.continent);
        item = sameContinent[this.generateRandomNum(sameContinent.length)]
      } else {
        item = ARCH_DATA[this.generateRandomNum(ARCH_DATA.length)];
      }
      const choice = this.getPropValue(item);
      if (!(this.choices.includes(choice))) {
        this.choices.push(choice);
      }
    }
  }

  getPropValue(item: ArchDataModel): string {
    if (this.quizType === 'name') {
      return item.name;
    } else if (this.quizType === 'location') {
      return item.location;
    } else {
      return item.style;
    }
  }

  onSelect(): void {
    this.hasSelected = true;
    console.log(this.selectedOption)
  }

  getAnswer(): void {
    if (this.quizType === 'name') {
      this.answer = this.item?.name
    } else if (this.quizType === 'location') {
      this.answer = this.item?.location
    }
    if (this.answer === this.selectedOption) {
      this.score += 1;
    }
    this.hasSelected = false;
  }

  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
