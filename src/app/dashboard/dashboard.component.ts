import { Component, AfterViewInit } from '@angular/core';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

    //Array usarios [4]
/*
name
lastname
email
celphone
image => la ruta de imagenes descargadas de internet
*/
  //Array mecanico [3]
/*
name
lastname
profesion
celphone
image => la ruta de imagenes descargadas de internet
*/

  ngAfterViewInit() { }
}
