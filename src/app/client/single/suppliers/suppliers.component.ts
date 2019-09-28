import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../shared/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  constructor(private suppService: SuppliersService) { }

  ngOnInit() {
    this.suppService.getSuppliers().subscribe( suppliers => {
      this.suppService.recoveredSuppliers = suppliers;
    });
  }

}
