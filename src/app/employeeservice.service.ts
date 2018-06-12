import { Injectable } from '@angular/core';
import {Response,URLSearchParams,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { emp } from './home/emp';
import { Location } from '@angular/common';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';




@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private headers = new Headers({//{'Content-Type': 'application/json'
  //x-www-form-urlencoded'
});
baseUrl: string = 'http://localhost:8080/SpringRestHibernate';
  // private _empsaveurl='http://localhost:8080/SpringRestHibernate/create'; //URL for Save 
  // private _eventdataurl='http://localhost:8080/SpringRestHibernate/students';  // URL to web API
  constructor(private _http: Http) {
    
    }
  //postuserdata(empform)
  postuserdata(emp:Object) {
    console.log(emp);
    
    //  let formData = new FormData();
    // Object.keys(empform).forEach(
    //   (key)=> {console.log(key+ '- '+empform[key]); formData.append(key,empform[key]) }
    // );
    // console.log(formData);

    //let param=JSON.stringify(empform);
   return this._http.post(this.baseUrl+'/create',emp);//,{headers:this.headers})
  //.map((response: Response) =>  response.json())
  //.do(data => console.log(JSON.stringify(data)))
  //.catch(this.handleError);
}
getuserdata(): Observable<emp[]> {
  return this._http.get(this.baseUrl+'/students')
             .map(response => response.json() as emp[])
             .catch(this.handleError);
}
deleteUser(id: number): Observable<any> {
  return this._http.delete(this.baseUrl+'/delete/'+id);
  //.map((response: Response) =>  response.json())
}
// updateUser(employee: emp) {
//   return this._http.put(this.baseUrl + '/' + employee.id,employee);
// }

getUser(id): Observable<emp>  {
  return this._http.get(this.baseUrl+'/student/'+id) 
  
  .map(response => response.json() as emp)
  .catch(this.handleError);
  }

// getUser(id : number):Promise<Employee>{
//   const url = `${this.baseUrl}/${id}';
//  return this._http.get(url).toPromise()
//  .then(response => response.json() as Employee)
//  .catch(this.handleError);

// }

updateUser(emp:Object) {
  console.log('***********'+emp);
  return this._http.put(this.baseUrl + '/update',emp);

}




 private handleError(error: Response) {
  console.error(error);
  return Observable.throw(error.json().error());
 }
}
