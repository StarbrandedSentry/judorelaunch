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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PendingComponent } from './client/single/transactions/pending/pending.component';
import { CompleteComponent } from './client/single/transactions/complete/complete.component';
import { BiddingComponent } from './client/full-build/bidding/bidding.component';
import { FbOrderComponent } from './client/full-build/fb-order/fb-order.component';
import { SignUpComponent } from './supplier/sign-up/sign-up.component';
import { SuppliersComponent } from './client/single/suppliers/suppliers.component';
import { MatDialogModule } from '@angular/material';

import {HttpClient,HttpClientModule} from '@angular/common/http';
import { SuppliersService } from './client/single/shared/suppliers.service';

import { TooltipModule } from 'ng2-tooltip-directive';
import { FeedbackComponent } from './client/feedback/feedback.component';
import { RatingModule } from 'ng-starrating';
import { SupplierDialogComponent } from './client/single/dialogs/supplier-dialog/supplier-dialog.component';
import { MailComponent } from './mail/mail.component';

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
    TransactionsComponent,
    PendingComponent,
    CompleteComponent,
    BiddingComponent,
    FbOrderComponent,
    SignUpComponent,
    SuppliersComponent,
    FeedbackComponent,
    SupplierDialogComponent,
    MailComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,HttpClientModule,
    TooltipModule, RatingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule,
    MatDialogModule
  ],
  providers: [SuppliersService],
  bootstrap: [AppComponent],
  entryComponents: [SupplierDialogComponent]
})
export class AppModule { }
