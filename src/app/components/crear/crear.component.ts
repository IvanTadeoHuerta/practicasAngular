import { Component } from '@angular/core';
import { LugaresService } from "app/services/lugares.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: []
})
export class CrearComponent {
  lugar:any = {}; 
  id:any = null;
  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];

    if(this.id != 'new'){
      this.lugaresService.getLugarDetalle(this.id)
          .subscribe(lugar =>{
            this.lugar = lugar
          });
    }
  }


  guardarLugar(){
    let direccion = this.lugar.calle +','+ this.lugar.municipio +','+this.lugar.pais;
    this.lugaresService.obtenrGeoData(direccion).subscribe(result => {
          this.lugar.lat = result.json().results[0].geometry.location.lat;
          this.lugar.lng = result.json().results[0].geometry.location.lng;

          if(this.id == 'new'){
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          alert('SE guardo correctamente');
          
        }else{
          this.lugaresService.editarLugar(this.lugar)
          alert('SE edito correctamente');
        }

        this.lugar = {};
    });
 
  }



}
