import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { infoProducto } from '../interfaces/infoProducto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  allProducts: Observable<infoProducto[]>;
  productList: AngularFireList<any>;
  productTemp: infoProducto = new infoProducto();

  constructor(public firebase: AngularFireDatabase) { }

  getProduct() {
    this.productList = this.firebase.list('productos');
    return this.productList;
  }

  getProductList() {
    this.allProducts = this.getProduct().valueChanges();
    return this.allProducts;
  }

  insertProduct() {
    let id = new Date().getTime().toString();
    this.productTemp.id = id;
    this.getProduct().push(this.productTemp);
    return true;
  }
}
