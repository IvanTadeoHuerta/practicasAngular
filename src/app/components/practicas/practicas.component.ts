import { Component } from '@angular/core';
import { LugaresService}  from '../../services/lugares.service'
@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styles: []
})
export class PracticasComponent {
  cadena:string = 'holaaaa!!!!'
  habilitar:boolean = true
  texto:string


  lugares:any = null;

 

  personas: any = [
    {id:1, edad: 10, nombre: 'Suri'},
    {id:2, edad: 28, nombre: 'Mónica'},
    {id:3, edad: 18, nombre: 'Jennifer'},
    {id:4, edad: 20, nombre: 'Shirley'},
    {id:5, edad: 1, nombre: 'Bebé'},
    {id:6, edad: 18, nombre: 'Juan'}
  ]




  
  eventoClic(){
    alert('hola evento clic')
  }
  constructor(private _isLugares:LugaresService) {
     this.lugares = this._isLugares.getLugares();
   }
     
}
