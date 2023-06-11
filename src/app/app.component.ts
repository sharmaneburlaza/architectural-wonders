import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'archtl-wonders';
  isDarkMode: boolean = false;
  paths: string[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('isDarkMode') === 'true' ? true : false;
    this.changeStyle(this.isDarkMode);
    this.paths = [
      'alphabetical',
      'chronological',
      'location',
      'programmatic',
      'style'
    ]
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.changeStyle(this.isDarkMode);
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
  }

  changeStyle(isDarkMode: boolean): void {
    const element = document.body;
    if (isDarkMode) {
      element.style.background = '#222222';
      element.style.color = '#FFF5EE';
    } else {
      element.style.background = 'transparent';
      element.style.color = 'black';
    }
  }

  onQuizClick() {
    this.router.navigate(['/quiz']);
  }
}
