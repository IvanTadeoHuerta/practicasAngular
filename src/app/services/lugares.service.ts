import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import {Headers} from '@angular/http';
import { Http } from "@angular/http";

@Injectable()
export class LugaresService {
  API_ENDPOINT = 'https://platzisquare-9a618.firebaseio.com'
  lugares: any = [
    { id: 1, plan: 'pagado',  name:"ocoyoacac",cercania: 1, distancia: 1, active: true, nombre: 'Florería la Gardenia' },
    { id: 2, plan: 'gratuito', name:"ocoyoacac1", cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita' },
    { id: 3, plan: 'gratuito', name:"ocoyoacac2", cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices' },
    { id: 4, plan: 'gratuito',  name:"ocoyoacac3",cercania: 3, distancia: 10, active: false, nombre: 'Sushi Suhiroll' },
    { id: 5, plan: 'pagado', name:"ocoyoaca4", cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia' },
    { id: 6, plan: 'gratuito', name:"ocoyoacac5", cercania: 3, distancia: 120, active: false, nombre: 'Zapatería el Clavo' }
  ];

  constructor(private afDB:AngularFireDatabase, private http:Http){}

  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
  }

  public guardarLugar(lugar) {
    //La siguiente linea muestra como guardar haciendo sockets de fire base
    //this.afDB.database.ref('lugares/'+lugar.id).set(lugar);

    //A continuacion se utiliza http post
    const headers = new Headers({"Content-Type":"application/json"});
    return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers:headers}).subscribe();
  }

  public editarLugar(lugar) {
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public getLugaresEnFireBase(){
    //La siguiente linea muestra los lugares usando firebase
    //return this.afDB.list('lugares/');

    //Acontinuacion se utilizara get
    return this.http.get(this.API_ENDPOINT+'/lugares.json');
  }

  public obtenrGeoData(direccion){
    
    //http://maps.google.com/maps/api/geocode/xml?address=78-43+diagonal+70f,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  public getLugarDetalle (id){
    return this.afDB.object('lugares/'+id);
  }

}
