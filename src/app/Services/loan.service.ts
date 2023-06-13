import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Loan } from './Models/loan.model';

const baseURL = "http://localhost:8080/api/loans/";

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
      return this.http.post(baseURL, data);
  }
 
  getAll(): Observable<any> {
    return this.http.get(baseURL)
  }
  get(id:number): Observable<any> {
    return this.http.get(baseURL + '/' + id )
  }
 
  update(id: string, data: any): Observable<any> {
    return this.http.put(baseURL + '/' + id, data)
  }

  findByIDNumber(idNumber: string): Observable<any> {
    return this.http.get(baseURL + '?idNumber' + idNumber)
  }

  findPendingLoans(): Observable<any> {
    return this.http.get(baseURL + '/pending')
  }
  findApprovedLoans(): Observable<any> {
    return this.http.get(baseURL + '/approved')
  }
  findRejecetdLoans(): Observable<any> {
    return this.http.get(baseURL + '/rejected') 
  }
}