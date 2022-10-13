import { Component, ENVIRONMENT_INITIALIZER, Input, OnInit } from '@angular/core';
import { Receta } from '../../interface/cocina.interface';

@Component({
  selector: 'app-cocina-tarjeta',
  templateUrl: './cocina-tarjeta.component.html',
  styles: [`
  mat-card{
    margin-top: 20px;
  }
  `]
})
export class CocinaTarjetaComponent implements OnInit {

  @Input() receta!:Receta;
  constructor() {


  }

  ngOnInit(): void {


  }

}


