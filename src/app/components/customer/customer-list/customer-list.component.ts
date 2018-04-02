import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../../../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  keyword: string = "";

  customerList: Customer[];

  constructor(public customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomerListByName("").subscribe(data => {
      this.customerList = data;
    })
  }

  searchCustomerByKeyword() {
    this.customerService.getCustomerListByName(this.keyword).subscribe(data => {
      this.customerList = data;
    })
  }

  deleteCustomerById(id) {
    if (confirm('确认删除该用户吗？')) {
      this.customerService.deleteCustomerById(id).subscribe(data => {
        if (data.status == 0) {
          this.searchCustomerByKeyword();
        }
      })
    }
  }
}
