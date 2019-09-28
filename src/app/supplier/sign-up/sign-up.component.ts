import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier.model';
import { SupplierService } from '../shared/supplier.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  supplier: Supplier = {
    name: '',
    email: '',
    contact_number: '',
    address: ''
  }
  supplier_added;
  constructor(private supService: SupplierService) { }

  ngOnInit() {
  }

  async addSupplier(){
    if(!this.supplier.name){
      return;
    }

    this.supplier_added = await this.supService.addSupplier(this.supplier);
    console.log(this.supplier_added);
    this.supplier.name = '';
    this.supplier.email = '';
    this.supplier.contact_number = '';
    this.supplier.address = '';
  }

  close(){
    this.supplier_added = false;
  }
}
