import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SuppliersService } from '../../shared/suppliers.service';
import { Order } from '../../../../models/order.model';
import { Supplier } from '../../../../models/supplier.model';
import { async } from 'rxjs/internal/scheduler/async';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supplier-dialog',
  templateUrl: './supplier-dialog.component.html',
  styleUrls: ['./supplier-dialog.component.scss']
})
export class SupplierDialogComponent implements OnInit {
  order: Order;
  name: string;
  suppliers: Supplier[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private dialogRef: MatDialogRef<SupplierDialogComponent>, private suppService: SuppliersService) { 
    this.order = data.order;
    console.log(this.order);
  }

  ngOnInit() {
    this.suppService.getSuppliers().subscribe(supplier => {
      
      console.log(this.name);

      supplier.forEach(supplier => {
        supplier.items.forEach(item => {
          console.log(item);
          console.log(this.order.name);
          console.log(this.order);
          if(item == this.order.name){
            supplier.valid = true;
            console.log(supplier);
          }
        });
        
      });
      this.suppService.recoveredSuppliers = supplier;
      
    });

    
    console.log(this.order.name);
    console.log(this.order);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }


}
