import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assgn8';
  public childData:any;

  public Message:string = "Hello from parent";

  public DatafromChild:any;

  public InputValue:any = "";

  public inputData:any="";
  
  ngOnInit() {
    const text = document.getElementById('InpValue') as HTMLInputElement;  
    text.addEventListener('input', () => {
      this.inputData = text.value;
    });
  }
}
