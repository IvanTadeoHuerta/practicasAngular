import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent  {

  lugaresCercania:any = [
    {distancia:1, cercania:1, name: 'Ocoyoacac'},
    {distancia:1, cercania:1.5, name: 'Lerma'},
    {distancia:2, cercania:4, name: 'Toluca'},
    {distancia:2, cercania:4.2, name: 'Metepec'},
    {distancia:3, cercania:5, name: 'Ixtapan de la sal'},
    {distancia:3, cercania:6, name: 'Tenango'}
  ]
  negocios: any = [
    { name:'Tiendita', age:30, plan:'pagado' },
    { name:'Carniceria', age:30, plan:'pagado' },
    { name:'Carpinteria', age:30, plan:'en proceso' },
    { name:'Paleteria', age:30, plan:'gratuito' },
    { name:'Tintoreria', age:30, plan:'pagado' }

  ]
  
  constructor() { }

}
