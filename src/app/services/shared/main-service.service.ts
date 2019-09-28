import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Transaction} from '../../models/transaction.model';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  items: Observable<Transaction[]>;
  recoveredItems: Transaction[];
  itemCollection: AngularFirestoreCollection<Transaction>;

  documentCollection: AngularFirestoreDocument<Transaction>;


  constructor(public afs: AngularFirestore) { 
    this.itemCollection = this.afs.collection('transactions');
    
    this.items = this.itemCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Transaction;
      data.id = a.payload.doc.id;

      return data;
    })));
  }

  getTransaction(str:string){
    const t = this.afs.doc(str);
  //  console.log("hello"+{t});
  }

  getItems(){
    return this.items;
  }
}
