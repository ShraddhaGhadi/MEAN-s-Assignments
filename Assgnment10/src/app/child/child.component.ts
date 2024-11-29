import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  public Answer : string = "";
  public num : number = 15;

  public str : string = "MarveLLous";
  public NumOfCapLetter : number = 0;
  
  constructor(public nobj : NumberService, public sobj : StringService)
  {
    this.Answer = nobj.ChkPrime(this.num);
    this.NumOfCapLetter = sobj.CountCapital(this.str)
  }
}
