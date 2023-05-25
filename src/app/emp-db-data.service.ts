import { Injectable, SimpleChanges } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './models/EmpModel';
import { empData } from './data';

@Injectable({
  providedIn: 'root'
})
export class EmpDbDataService implements DataService {

  
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

  public deleteById(id: number): void {
    let index = this.empDataArray.findIndex(item => item.empno === id);
    this.empDataArray.splice(index, 1);
  }

  public addEmployee(emp: Employee): void {
    this.empDataArray.push(emp);
  }

  public getAllEmployees():Employee[] {
    return this.empDataArray;
  }

  public getEmployeeById(id:number) : Employee | undefined {    
    console.log("Message from EmpDbDataService");
    return this.empDataArray.find(item => item.empno === id); 
  }
}
;