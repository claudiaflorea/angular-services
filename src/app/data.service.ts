import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from './models/EmpModel';
import { empData } from './data';

@Injectable()
export class DataService implements OnInit, OnChanges {

  
  empDataArray:Employee[] = [];

  constructor() {
      this.empDataArray = empData;
  }

  ngOnInit(): void {
    this.empDataArray = empData;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.empDataArray = this.empDataArray;
  }

  public getAllEmployees():Employee[] {
    return this.empDataArray;
  }

  public getEmployeeById(id:number) : Employee | undefined {    
    return this.empDataArray.find(item => item.empno === id);   
  }

  public deleteById(id:number) : void {    
    let index = this.empDataArray.findIndex(item => item.empno === id);
    this.empDataArray.splice(index, 1);
    alert("You have deleted record with ID " + id);
  }

  public addEmployee(emp: Employee) : void {
    this.empDataArray.push(emp);
  }

}