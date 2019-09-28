import { Component, OnInit } from '@angular/core';
import {MainServiceService} from '../../../../services/shared/main-service.service';
import {Transaction} from '../../../../models/transaction.model';
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  items: Transaction[];
  constructor(public itemService: MainServiceService) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(items => {
        this.itemService.recoveredItems = items;
    });
    }
}
