import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from '../../interface/cocina.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class CocinaService {

  private url: string = environment.url;

  constructor( private http:HttpClient) { }




getRecetas():Observable<Receta[]>{
 return  this.http.get<Receta[]>(`${this.url}/recertas`);
}


getRecetaID(id:string):Observable<Receta>{

  return  this.http.get<Receta>(`${this.url}/recertas/${id}`);


}









}
