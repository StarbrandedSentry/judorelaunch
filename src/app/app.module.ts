import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClientComponent } from './client/client.component';
import { SingleComponent } from './client/single/single.component';
import { FullBuildComponent } from './client/full-build/full-build.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SingleNavComponent } from './client/single/layout/single-nav/single-nav.component';
import { ClientNavComponent } from './client/client-nav/client-nav.component';
import { OrderItemComponent } from './client/single/order-item/order-item.component';
import { TransactionsComponent } from './client/single/transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    SingleComponent,
    FullBuildComponent,
    SupplierComponent,
    SingleNavComponent,
    ClientNavComponent,
    OrderItemComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
