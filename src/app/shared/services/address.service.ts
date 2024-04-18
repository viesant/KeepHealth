import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  get(cep: string): Observable<any> {
    const fCEP = cep.replace(/\D/g, '');
    let url = `https://viacep.com.br/ws/${fCEP}/json/`;
    return this.http.get(url);
  }
}
