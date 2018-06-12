import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes} from '@angular/router';
import {enableProdMode} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ModalModule } from 'ngx-bootstrap';

//enableProdMode();
const appRoutes:Routes=[
 {
    path:'',
    component:HomeComponent
  },
  {
  path:'emp',
  component:EmployeeFormComponent
},
{
  path:'edituser/:id',
  component:EditUserComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    HomeComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
