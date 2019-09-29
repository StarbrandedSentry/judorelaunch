import { Component, OnInit } from '@angular/core';
import { Order} from '../../../models/order.model'
import { MatDialog } from '@angular/material';
import { SupplierDialogComponent } from '../dialogs/supplier-dialog/supplier-dialog.component';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  name :string;
  description:string;
  order: Order = {
    name: 'light-bulb',
    description: '',
    quantity:0
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  placeOrder(){
    this.dialog.open(SupplierDialogComponent, {
      height: '500px',
      width:  '600px',
      panelClass: 'supplier-dialog',
      data:{
        order:  this.order
      }
    });
  }

}
