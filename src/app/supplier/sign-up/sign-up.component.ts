import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  supplier: Supplier = {
    name: '',
    email: '',
    contact_number: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
