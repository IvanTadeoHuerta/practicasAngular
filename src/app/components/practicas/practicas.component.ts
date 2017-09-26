import { Component } from '@angular/core';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styles: []
})
export class PracticasComponent {
  cadena:string = 'holaaaa!!!!'
  habilitar:boolean = true
  texto:string


  lugares:any = [
    {name: 'Ocoyoacac'},
    {name: 'Lerma'},
    {name: 'Toluca'}
  ]

 

  personas: any = [
    {edad: 10, nombre: 'Suri'},
    {edad: 28, nombre: 'Mónica'},
    {edad: 18, nombre: 'Jennifer'},
    {edad: 20, nombre: 'Shirley'},
    {edad: 1, nombre: 'Bebé'},
    {edad: 18, nombre: 'Juan'}
  ]




  
  eventoClic(){
    alert('hola evento clic')
  }
  constructor() { }

}
