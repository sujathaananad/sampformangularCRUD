import { Component, OnInit,TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {EmployeeserviceService} from '../employeeservice.service';
import {emp} from '../home/emp';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Employee } from '../shared/emp.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute, Params ,} from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  bsmodelref: BsModalRef;
  empData: emp;
  employee: Employee=new Employee();
  editId:string;
  model:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bsmodel: BsModalService,

    private _empData: EmployeeserviceService) { 
      this.editId=this.route.snapshot.paramMap.get("id");
      console.log(this.editId);
      this.empData=new emp(0,'',0,'','','','');
}
ngOnInit(): void 
{  
     this._empData.getUser(this.editId)
     .subscribe( data => {
      this.empData=data
    });
}
   update(){
      this
        ._empData.updateUser(this.empData).subscribe(res => console.log('Done'));
        this.bsmodelref.hide();
        this.router.navigate(['']);
      }
      openModal(template: TemplateRef<any>) {
        this.bsmodelref = this.bsmodel.show(template, {class: 'modal-sm'});
      }
}