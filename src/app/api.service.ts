import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost/bienestar/controller/apiinsert.php'
  constructor(
    private http: HttpClient,
  ) { }

  enviarDatos(documento: string, nombre: string, tipo_cliente: string, programa: string, genero: string, plato_id: string, fecha: string) {

    const params = new HttpParams()
      .set('documento', documento)
      .set('nombre', nombre)
      .set('tipo_cliente', tipo_cliente)
      .set('programa', programa)
      .set('genero', genero)
      .set('plato_id', plato_id)
      .set('fecha', fecha)


    return this.http.get(this.urlApi, { params });
  }

}
