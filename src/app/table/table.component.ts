import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order';
import { Subject } from 'rxjs';

import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private ordersObservable = new Subject<Order[]>();

  constructor(private _orderService:OrderService) { }

  public ngOnInit() {
    this._orderService.getOrders().subscribe((orders) => {
      this.ordersObservable.next(orders);
    });
  }
}
