import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../service/infopagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPagS: InfopaginaService) { }

  ngOnInit() {
  }

}
