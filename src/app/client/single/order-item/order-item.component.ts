import { Component, OnInit } from '@angular/core';
import {Order} from '../../../models/order.models'
import * as admin from 'firebase-admin';
@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  name :string;
  description:string;
  order: Order = {
    name: '',
    description: '',
    quantity:0,
    date_issued:admin.firestore.Timestamp.now().toDate()
  }
  constructor() { }

  ngOnInit() {
  }
  placeOrder(){

  }

}
