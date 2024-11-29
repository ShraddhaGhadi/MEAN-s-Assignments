import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  ChkPrime(num: number): string {
    if (num <= 1) {
      return "It is not prime number"; 
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return "It is not prime number"; 
      }
    }
    return "It is prime number"; 
  }
}
