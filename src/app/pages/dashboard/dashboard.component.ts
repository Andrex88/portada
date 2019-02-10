import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;
declare var demo: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function funci() {
      demo.initDashboardPageCharts();
      // demo.showNotification();
      // console.log('Llamado el init');
  });
  }

}
