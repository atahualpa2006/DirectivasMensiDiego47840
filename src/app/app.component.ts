import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})
export class AppComponent {
  title = 'Directivas';
  numero = 0;
  hayError=false;
  cumple = new Date (1974,7,24);


  constructor() {
    console.log("CONSTRUCTOR");
    setInterval(() => {
      this.numero++;
    }, 1000)
  }
}

