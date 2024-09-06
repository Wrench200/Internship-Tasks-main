import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getReports(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getall`);
  }
  getReport(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getone/${id}`);
  }
  resolve(id: string, name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/resolve/${id}/${name}`);
  }

}
