import { Injectable } from '@angular/core';

@Injectable({
	providedIn : 'root'
})
export class HelloService {

  constructor() { }

  greeting(uname:string) : string {
    let str  =`Hi ${uname}, Welcome to Employees Dashboard`;
    return str;
  }
}