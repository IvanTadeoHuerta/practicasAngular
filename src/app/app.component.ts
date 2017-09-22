import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cadena:string = 'holaaaa!!!!'
  habilitar:boolean = true
  texto:string
  lat: number = 19.2576064
  lng: number = -99.4658699

  lugares:any = [
    {name: 'Ocoyoacac'},
    {name: 'Lerma'},
    {name: 'Toluca'}
  ]

  lugaresCercania:any = [
    {distancia:1, cercania:1, name: 'Ocoyoacac'},
    {distancia:1, cercania:1.5, name: 'Lerma'},
    {distancia:2, cercania:4, name: 'Toluca'},
    {distancia:2, cercania:4.2, name: 'Metepec'},
    {distancia:3, cercania:5, name: 'Ixtapan de la sal'},
    {distancia:3, cercania:6, name: 'Tenango'}
  ]

  personas: any = [
    {edad: 10, nombre: 'Suri'},
    {edad: 28, nombre: 'Mónica'},
    {edad: 18, nombre: 'Jennifer'},
    {edad: 20, nombre: 'Shirley'},
    {edad: 1, nombre: 'Bebé'},
    {edad: 18, nombre: 'Juan'}
  ]

  negocios: any = [
    { name:'Tiendita', age:30, plan:'pagado' },
    { name:'Carniceria', age:30, plan:'pagado' },
    { name:'Carpinteria', age:30, plan:'en proceso' },
    { name:'Paleteria', age:30, plan:'gratuito' },
    { name:'Tintoreria', age:30, plan:'pagado' }

  ]


  
  eventoClic(){
    alert('hola evento clic')
  }
  
}
