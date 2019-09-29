import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Supplier } from '../../../models/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  suppliers: Observable<Supplier[]>;
  recoveredSuppliers: Supplier[];
  supplierCollection: AngularFirestoreCollection<Supplier>

  constructor(private afs: AngularFirestore) { 
    this.supplierCollection = this.afs.collection('suppliers', ref => ref.orderBy('name', 'asc'));

    this.suppliers = this.supplierCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Supplier;
      data.id = a.payload.doc.id;

      return data;
    })));
  }

  getSuppliers(){
    return this.suppliers;
  }

  getSelectedSuppliers(){
    
  }
}
