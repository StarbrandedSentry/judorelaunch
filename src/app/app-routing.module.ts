import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '', redirectTo: 'get-started', pathMatch: 'full'},
  { path: 'get-started', component: LandingComponent},
  { path: 'client', component: ClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
