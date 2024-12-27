import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NumberConverterComponent } from "./number-converter/number-converter.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NumberConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProgrammerCalculator';
}
