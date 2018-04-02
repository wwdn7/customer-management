import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CustomerService {

  constructor(public http: Http) { }

  getCustomerListByName(keyword: string): Observable<any> {

    const url = `http://39.108.135.214:3006/api/customerlist?keyword=${keyword}`;
    return this.http.get(url).map(res => res.json())
  }

  deleteCustomerById(keyword:string):Observable<any>{
    const url = `http://39.108.135.214:3006/api/deleteCustomer/${keyword}`
    return this.http.get(url).map(res => res.json())
  }

}

export class Customer{
  constructor(public _id:string, public no:string, public name:string, public type:string, public rating:number, public description:string, public categories:string[]){}
}