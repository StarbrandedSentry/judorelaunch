import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        clipPath: 'inset(0 0 0 0)'
      })),
      state('closed', style({
        clipPath: 'inset(0 100% 0 0)'
      })),
      transition('open => closed', [
        animate('120ms')
      ]),
      transition('closed => open', [
        animate('100ms')
      ])
    ])
  ]
})
export class ClientNavComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    if(window.innerWidth <= 620){
      this.isOpen = false;
    }
    else{
      this.isOpen = true;
    }
  }

  isOpen = true;

  constructor() { }

  ngOnInit() {
    console.log('test1');
    console.log('test2');
    console.log('test3');
    console.log('test4');
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
