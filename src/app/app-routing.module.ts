import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { SingleComponent } from './client/single/single.component';
import { FullBuildComponent } from './client/full-build/full-build.component';
import { OrderItemComponent } from './client/single/order-item/order-item.component';
import { TransactionsComponent } from './client/single/transactions/transactions.component';

const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full'},
  { path: 'client', component: ClientComponent },
  { path: 'single-build', component: SingleComponent},
  { path: 'full-build', component: FullBuildComponent},
  { path: 'order-item', component: OrderItemComponent},
  { path: 'transactions', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
