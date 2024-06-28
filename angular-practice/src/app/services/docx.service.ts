import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocxService {

  private serverUrl = 'http://localhost:54783'; // Адрес вашего сервера

  constructor(private http: HttpClient) { }

  getDocxAsHtml() {
    return this.http.get<string>(`${this.serverUrl}/get-html`);
  }
}
