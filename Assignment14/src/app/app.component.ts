import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompSuccessDirective } from './comp-success.directive';
import { CompFailureDirective } from './comp-failure.directive';
import { CustomStyleDirective } from './custom-style.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CompSuccessDirective,CustomStyleDirective,CompFailureDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment14';
}
