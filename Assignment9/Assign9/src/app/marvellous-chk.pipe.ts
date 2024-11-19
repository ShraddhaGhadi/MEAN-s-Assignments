import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, Param: string): string {
    if (Param == "Prime") {
      if (value <= 1) {
        return "It is not Prime Number";
      }
      for (let i = 2; i < value; i++) {
        if (value % i === 0) {
          return "It is not Prime Number";
        }
      }
      return "It is Prime Number";
    }

    if (Param == "Perfect") {
        let sum = 0;
        for (let i = 1; i <= value / 2; i++) {
          if (value % i === 0) sum += i;
        }
        return sum === value ? "It is perfect number":"It is not perfect number";
      }

    if (Param == "Even") {
      if (value % 2 == 0) {
        return "It is even number";
      }
      return "It is not even number";
    }

    if (Param == "Odd") {
      if (value % 2 !== 0) {
        return "It is odd number";
      }
      return "It is not odd number";
    }
    return "Invalid";
  }
}
