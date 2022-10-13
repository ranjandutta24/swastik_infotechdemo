import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child1-component',
  templateUrl: './child1-component.component.html',
  styleUrls: ['./child1-component.component.scss'],
})
export class Child1ComponentComponent implements OnInit {
  childData: string = 'data from child 1';
  form = new FormGroup({
    customer_name: new FormControl(),
    customer_age: new FormControl(),
    customer_address: new FormControl(),
  });
  customerForm: FormGroup | any;
  customers = [
    {
      customer_name: `Ranjan Dutta`,
      customer_id: 1,
      customer_age: 27,
      customer_address: `Asansol, WestBengal`,
    },
    {
      customer_name: `Koushik Dutta`,
      customer_id: 2,
      customer_age: 32,
      customer_address: `Durgapur, WestBengal `,
    },
    {
      customer_name: `Abc Dutta`,
      customer_id: 3,
      customer_age: 23,
      customer_address: `Ranchi, Jharkhand`,
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customer_name: '',
      customer_age: null,
      customer_address: ``,
    });
  }
  addCustomer() {
    this.customers.push({
      customer_name: this.customerForm.controls.customer_name.value,
      customer_id: this.customers.length + 1,
      customer_age: this.customerForm.controls.customer_age.value,
      customer_address: this.customerForm.controls.customer_address.value,
    });
    this.customerForm.controls['customer_name'].patchValue(``);
    this.customerForm.controls['customer_age'].patchValue(null);
    this.customerForm.controls['customer_address'].patchValue(``);
  }
}
