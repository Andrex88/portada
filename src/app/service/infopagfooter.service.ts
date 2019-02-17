import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagFooter } from '../interfaces/info-pagFooter.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopagfooterService {
  info: infoPagFooter = {};
  cargada = false;

  constructor(private http: HttpClient) {
    this.cargarInfo();
  }

  private cargarInfo() {
    this.http.get('https://udemyangular-9fe08.firebaseio.com/parametro/0.json').subscribe((resp: infoPagFooter) => {
      this.cargada = true;
      this.info = resp;
    });
  }
}
