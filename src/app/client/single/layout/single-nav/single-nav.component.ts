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
  selector: 'app-single-nav',
  templateUrl: './single-nav.component.html',
  styleUrls: ['./single-nav.component.scss'],
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
export class SingleNavComponent implements OnInit {
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
 
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

  close(){
    this.isOpen = !this.isOpen;
  }

}
