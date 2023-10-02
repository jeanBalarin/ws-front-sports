import { CustomerResponse } from 'src/app/models/customer/customerResponse';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8810/sports/rest/sportsService/customers';
  listCustomer(pageSize: number = 10, codePage: number = 0): Observable<CustomerResponse> {
    pageSize = pageSize || 10;
    codePage = codePage || 0;
    let params = new HttpParams()
      .set('PageSize', pageSize.toString())
      .set('CodePage', codePage.toString());


    return this.http.get<CustomerResponse>(this.API, { params: params, observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          const customerResponse: CustomerResponse = {
            statusCode: response.status,
            customers: response.body.Customers,
            pages: response.body.pages
          };
          return customerResponse;
        })
      );
  }
}
