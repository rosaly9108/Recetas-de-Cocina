import { Component, OnInit } from '@angular/core';
import { Receta } from '../../interface/cocina.interface';
import { CocinaService } from '../service/cocina.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
termino: string = '';
recetas: Receta[] = [];

  constructor(private service:CocinaService) { }

  ngOnInit(): void {
  }

  buscando(termino:string){
    this.service.getRecetas()
    .subscribe(recetas=> this.recetas = recetas);

  }
}
