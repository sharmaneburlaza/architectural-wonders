import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'archtl-wonders';
  mode: string | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    const mode = localStorage.getItem('mode');
    this.mode = mode ? mode : 'light-mode';
    localStorage.setItem('mode', 'light-mode');
    this.changeStyle(this.mode);
  }

  toggleMode() {
    this.mode = this.mode === 'light-mode' ? 'dark-mode': 'light-mode';
    this.changeStyle(this.mode);
  }

  changeStyle(mode: string): void {
    const element = document.body;
    if (mode === 'dark-mode') {
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
