import { Component, OnInit } from '@angular/core';
import { LugaresService } from "app/services/lugares.service";

@Component({
  selector: 'app-lista-de-lugares',
  templateUrl: './lista-de-lugares.component.html',
  styles: []
})
export class ListaDeLugaresComponent implements OnInit {
  lugares:any = null;
  constructor(private _isLugares:LugaresService) { 
    _isLugares.getLugaresEnFireBase().subscribe(lugares=>{
      this.lugares = lugares;
    })
  }

  ngOnInit() {
  }

}
