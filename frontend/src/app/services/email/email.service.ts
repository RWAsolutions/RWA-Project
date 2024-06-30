// src/app/services/email/email.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email'; // Update this to your backend endpoint

  constructor(private http: HttpClient) {}

  sendEmail(to: string): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { to: to };
    return this.http.post<void>(this.apiUrl, body, { headers: headers });
  }
}
