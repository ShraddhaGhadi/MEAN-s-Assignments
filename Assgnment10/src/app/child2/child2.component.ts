import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  public str : string = "Shra  ddhA";
  public NumOfCapLetter : number = 0;
  
  constructor(public sobj : StringService){
  this.NumOfCapLetter = sobj.CountCapital(this.str)

  }
}
