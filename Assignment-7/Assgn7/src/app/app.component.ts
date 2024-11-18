import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assgn7';
  public fun()
  {
    return "Marvellous Infosystems";
  }

  public text:string = "Marvellous Infosystems";
  public UpdateText()
  {
    this.text = "Educating for Better tomorrow";
  }

  public name = "Marvellous Infosystem";

  public upper(){
   this.name = this.name.toUpperCase();
  }
  public lower(){
    this.name = this.name.toLowerCase();
  }
}
