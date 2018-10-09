import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http:HttpClient) { }

  public getOrders() : Observable<Order[]> {
    return this._http.get<Order[]>('http://localhost:3000/orders');
  }
}
