import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../models/EmpModel';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']  
})
export class EmpDetailsComponent {

  empObj:any;  

  constructor(private dataService:DataService) {

  }

  getEmpByID(id:number) {
    this.empObj = this.dataService.getEmployeeById(id);
  }

  deleteEmpByID(id:number) {
    this.dataService.deleteById(id);
  }

}