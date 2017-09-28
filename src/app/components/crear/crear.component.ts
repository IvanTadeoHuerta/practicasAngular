import { Component } from '@angular/core';
import { LugaresService } from "app/services/lugares.service";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: []
})
export class CrearComponent {
  lugar:any = {}; 

  constructor(private lugaresService: LugaresService) { }


  guardarLugar(){
    let direccion = this.lugar.calle +','+ this.lugar.municipio +','+this.lugar.pais;
    this.lugaresService.obtenrGeoData(direccion).subscribe(result => {
          this.lugar.lat = result.json().results[0].geometry.location.lat;
          this.lugar.lng = result.json().results[0].geometry.location.lng;

          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          alert('SE guardo correctamente');
          this.lugar = {};
    });
 
  }



}
