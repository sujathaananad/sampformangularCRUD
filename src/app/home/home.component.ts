import { Component, OnInit,TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {emp} from '../home/emp';
import { Http , Response } from '@angular/http';
import {EmployeeserviceService} from '../employeeservice.service';
import { Employee } from '../shared/emp.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmployeeserviceService]
})
export class HomeComponent implements OnInit {
  empData: emp[];
  e:emp;
  EmpeditForm:NgForm;
 bsmodelref: BsModalRef;
 message: string;
   constructor(
    private router:Router,
    private _eventData: EmployeeserviceService,
    private bsmodel: BsModalService) { }
  ngOnInit() {
   this._eventData .getuserdata().subscribe(
   data=>  {  this.empData=data  });
  }
  
  openModal(template: TemplateRef<any>) {
    this.bsmodelref = this.bsmodel.show(template, {class: 'modal-sm'});
  }
 
  empform(){
    this.router.navigate(['emp']);
  }
  deleteUser(e:emp) {
    //console.log('sss'+e.id);
        this._eventData.deleteUser(e.id)
        .subscribe(data => {this.empData.filter(e1=>e1!==e) ;
         console.log(data);
    
      // // this._eventData .getuserdata().subscribe(
      //   //   data=>  {  this.empData=data  });
         this.ngOnInit();
         this.bsmodelref.hide();
       },
     error => console.log(error));
  }
  decline(): void {
    this.message = 'Declined!';
    this.bsmodelref.hide();
  }
   updateUser(e){
   console.log(e);
  localStorage.removeItem("editUserId");
  localStorage.setItem("editUserId", e.id.toString());
  this.router.navigate(['edituser/'+e.id]);
  }

}
