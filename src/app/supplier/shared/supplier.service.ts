import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Supplier } from '../../models/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  supplierCollection: AngularFirestoreCollection<Supplier>;

  constructor(private afs: AngularFirestore) { 
    this.supplierCollection = this.afs.collection('suppliers');
  }

  async addSupplier(supp: Supplier){
    return this.supplierCollection.add(supp).then(function() {
      return true;
    });

  }
}
