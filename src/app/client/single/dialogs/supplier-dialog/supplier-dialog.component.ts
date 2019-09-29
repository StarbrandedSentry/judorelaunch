import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SuppliersService } from '../../shared/suppliers.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-supplier-dialog',
  templateUrl: './supplier-dialog.component.html',
  styleUrls: ['./supplier-dialog.component.scss']
})
export class SupplierDialogComponent implements OnInit {
  order: Order;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private dialogRef: MatDialogRef<SupplierDialogComponent>, private suppService: SuppliersService) { 
    this.order = data;
    console.log(this.order);
  }

  ngOnInit() {
    this.suppService.getSuppliers().subscribe(supplier => {

    });
  }

}
