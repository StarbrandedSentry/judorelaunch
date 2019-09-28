import { Component, OnInit } from '@angular/core';
import {Order} from '../../../models/order.model'

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
    quantity:0
  }
  constructor() { }

  ngOnInit() {
  }
  placeOrder(){

  }

}
