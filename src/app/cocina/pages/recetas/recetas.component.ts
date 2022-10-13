import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap, pipe } from 'rxjs';
import { Receta } from '../../interface/cocina.interface';
import { CocinaService } from '../service/cocina.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',

  styles: [`
  img{
    width: 100%;
    border-radius: 5px;
  }
  `]
})
export class RecetasComponent implements OnInit {
receta!:Receta;

  constructor(private activatedRoute: ActivatedRoute,
private service:CocinaService,
private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.service.getRecetaID(id)),//aqui recibo los parametros que seria el id y lo mando al servicio
      )
    .subscribe(receta=>this.receta = receta);//aqui se recibe la receta como argumento
  }

  regresar(){
    this.router.navigate(['/cocina/listado']);
  }
}



