import { Component, OnInit,TemplateRef } from '@angular/core';
import { Employee } from '../shared/emp.model';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {EmployeeserviceService} from '../employeeservice.service';
import {emp} from '../home/emp';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  providers: [EmployeeserviceService]
})
export class EmployeeFormComponent implements OnInit {
  empData: emp[];
  bsmodelref: BsModalRef;
  //EmpForm : FormGroup;
//  Employee=new Employee();
  employee: Employee=new Employee();
  model:any;
  constructor(private router:Router,private bsmodel: BsModalService,private _empData: EmployeeserviceService) { 
    //private formBuilder: FormBuilder
}
 
  ngOnInit() {
  //   this.EmpForm= this.formBuilder.group({
  //   id: ['',Validators.required],
  //   name: ['', Validators.required],
  //   age:['', Validators.required],
  //   dob:['', Validators.required],
  //   degree:['', Validators.required],
  //   department:['', Validators.required],
  //   grade:['', Validators.required],
  // });
  }
  //login(empform:any)
    login(){
      //this._empData.postuserdata(empform).subscribe(empData =>{
      
      this._empData.postuserdata(this.employee).subscribe(data =>{
        console.log(data);
        this.bsmodelref.hide();
        this.router.navigate(['']);
      });
  }
  
  openModal(template: TemplateRef<any>) {
    this.bsmodelref = this.bsmodel.show(template, {class: 'modal-sm'});
  }
}

