import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../interface/cocina.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(receta: Receta): string {
    return `assets/cocina/${receta.id}.jpg ` ;
  }

}
