import { CommonModule } from '@angular/common';
import { Component,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Output() public myEvent = new EventEmitter();
public transferData(val:any)
{
  this.myEvent.emit(val);
}

@Input() public Pdata:string = "";

@Output() public myEvt = new EventEmitter();
public sendData(){
  this.myEvt.emit("Hello from Child");
}
}
