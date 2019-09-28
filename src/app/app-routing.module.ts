import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientNavComponent } from './client/client-nav/client-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full'},
  { path: 'client', component: ClientComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
