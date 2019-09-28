import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  ngOnInit() {
    this.authservice.sendGetRequest();
  }
  title = 'judorelaunch';
  constructor(private authservice:AuthService){}
 
}
