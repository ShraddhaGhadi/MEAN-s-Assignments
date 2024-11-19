import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    // return value.split('').reverse().join('');
    let reverseString : string = "";
    for(let i = value.length - 1; i >= 0; i--){
      reverseString += value[i];
    }
    return reverseString;

  }

}
