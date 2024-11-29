import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  Addition : number = 0;
  Substraction : number = 0;
  constructor(private sobj : ArithmeticService) // DI
  {
    this.Addition = sobj.add(5,4);
    this.Substraction = sobj.sub(25,4);
  }
}
