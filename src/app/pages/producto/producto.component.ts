import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { infoProducto } from '../../interfaces/infoProducto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {

  constructor(public ProdService: ProductoService) { }

  ngOnInit() {
    this.ProdService.getProduct();
    this.reset();
  }

  onSubmit() {
    this.ProdService.insertProduct();
    this.reset();
  }

  reset() {
    if (this.ProdService.productTemp != null) {
      this.ProdService.productTemp = new infoProducto();
    }
  }

}
