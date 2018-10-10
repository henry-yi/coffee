import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Order } from '../shared/models/order';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _http:HttpClient) { }

  public saveOrders(workOrder:Order) : Observable<Order[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
        coffee: workOrder.coffee,
        brew_method: workOrder.brew_method,
        number_of_cases: workOrder.number_of_cases,
        packets_per_case: workOrder.packets_per_case,
        ship_date: workOrder.ship_date,
        priority: workOrder.priority,
        notes: workOrder.notes
    }
    
    return this._http.post<Order[]>('http://localhost:3000/new', options, {headers});
  }
}
