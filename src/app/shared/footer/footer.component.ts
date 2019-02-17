import { Component, OnInit } from '@angular/core';
import { InfopagfooterService } from '../../service/infopagfooter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(public _infFooter: InfopagfooterService) { 
  }

  ngOnInit() {
    
  }

}
