import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  public result = 0;
  CountCapital(val : string) : number
  {
  for (let i = 0; i < val.length; i += 1) {
  if (val[i].toUpperCase() === val[i] && val[i] != " ") 
    {
        this.result++;
      }
    }
    return this.result;
  }
  
}
