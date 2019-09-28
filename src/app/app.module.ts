import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClientComponent } from './client/client.component';
import { SingleComponent } from './client/single/single.component';
import { FullBuildComponent } from './client/full-build/full-build.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SingleNavComponent } from './client/single/layout/single-nav/single-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    SingleComponent,
    FullBuildComponent,
    SupplierComponent,
    SingleNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
