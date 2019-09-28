import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { SingleComponent } from './client/single/single.component';
import { FullBuildComponent } from './client/full-build/full-build.component';
import { OrderItemComponent } from './client/single/order-item/order-item.component';
import { TransactionsComponent } from './client/single/transactions/transactions.component';
import { CompleteComponent } from './client/single/transactions/complete/complete.component';
import { PendingComponent } from './client/single/transactions/pending/pending.component';
import { FbOrderComponent } from './client/full-build/fb-order/fb-order.component';
import { BiddingComponent } from './client/full-build/bidding/bidding.component';

import { SignUpComponent } from './supplier/sign-up/sign-up.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full'},
  { path: 'client', component: ClientComponent },
  { path: 'single-build', component: SingleComponent},
  { path: 'full-build', component: FullBuildComponent},
  { path: 'order-item', component: OrderItemComponent},
  { path: 'transactions', component: TransactionsComponent, children: [  
    { path: '', redirectTo: 'transactions-pending', pathMatch: 'full'},
    { path: 'transactions-complete', component:CompleteComponent},
    { path: 'transactions-pending', component:PendingComponent}
  ]},
  
  { path: 'fb-order', component:FbOrderComponent},
  { path: 'bidding', component:BiddingComponent},

  { path: 'supplier', component: SupplierComponent, children:[
    { path: '', pathMatch: 'full', redirectTo: 'signup'},
    { path: 'signup', component: SignUpComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
