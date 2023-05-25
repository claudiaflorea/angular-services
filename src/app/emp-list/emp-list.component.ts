import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../models/EmpModel';
import { DataService } from '../data.service';
import { empData } from '../data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmpListComponent implements OnInit, OnChanges{

  empsArray:Employee[] = empData;
  showForm = false;
  showTbl = false;
  empForm: FormGroup;
  
  constructor(private fb: FormBuilder,private dataService:DataService) {
    this.empForm = this.fb.group({
      empno: ["", Validators.required],
      ename: ["", Validators.required],
      job: ["", Validators.required],
      sal: ["", Validators.required],
      deptNo: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.empsArray = empData;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.empsArray = this.empsArray;
  }

  getAllEmps() {
    this.empsArray = this.dataService.getAllEmployees();
  }
  
  displayForm = () => this.showForm = true;

  displayTable = () => {
    this.showTbl = true;
    this.getAllEmps();
  }

  addEmp(): void {
    if (this.empForm.valid) {
      this.dataService.addEmployee(this.empForm.value);
    }
  }
}