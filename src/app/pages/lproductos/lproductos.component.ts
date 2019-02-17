import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { InfopaginaService } from '../../service/infopagina.service';

@Component({
  selector: 'app-lproductos',
  templateUrl: './lproductos.component.html',
  styleUrls: ['./lproductos.component.css']
})
export class LproductosComponent implements OnInit {

  constructor(public ProdService: ProductoService, public infoPagS: InfopaginaService) { }

  ngOnInit() {
    this.ProdService.getProductList();
  }

}
