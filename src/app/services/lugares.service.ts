import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class LugaresService {
  lugares: any = [
    { id: 1, plan: 'pagado',  name:"ocoyoacac",cercania: 1, distancia: 1, active: true, nombre: 'Florería la Gardenia' },
    { id: 2, plan: 'gratuito', name:"ocoyoacac1", cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita' },
    { id: 3, plan: 'gratuito', name:"ocoyoacac2", cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices' },
    { id: 4, plan: 'gratuito',  name:"ocoyoacac3",cercania: 3, distancia: 10, active: false, nombre: 'Sushi Suhiroll' },
    { id: 5, plan: 'pagado', name:"ocoyoaca4", cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia' },
    { id: 6, plan: 'gratuito', name:"ocoyoacac5", cercania: 3, distancia: 120, active: false, nombre: 'Zapatería el Clavo' }
  ];

  constructor(private afDB:AngularFireDatabase){}

  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
  }
  public guardarLugar(lugar) {
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public getLugaresEnFireBase(){
    return this.afDB.list('lugares/');
  }

}
