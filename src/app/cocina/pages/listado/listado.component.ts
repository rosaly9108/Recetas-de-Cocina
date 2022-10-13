import { Component, OnInit } from '@angular/core';
import { CocinaService } from '../service/cocina.service';
import { Receta } from '../../interface/cocina.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  mat-card{
    margin-top: 20px;
  }
  `]
})
export class ListadoComponent implements OnInit {
public receta: Receta[] = [];
  constructor(private service:CocinaService) { }
  ngOnInit() {
    this.service.getRecetas()
    .subscribe(resp=>{
      this.receta = resp;
      console.log(this.receta);
    });
  }

//error TS2420: Class 'MockMediaQueryList' incorrectly implements interface 'MediaQueryList'

}
