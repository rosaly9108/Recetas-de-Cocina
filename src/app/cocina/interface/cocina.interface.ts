export interface Pais {
  usuarios: Usuario[];
  recertas: Receta[];
}

export interface Receta {
  id?:           string;
  receta:       string;
  preparacion:  string;
  ingredientes: string;
  comensales:   number | string;
  duracion:     string;
  img?:          string;
}

export interface Usuario {
  id:      number;
  usuario: string;
  email:   string;
}


