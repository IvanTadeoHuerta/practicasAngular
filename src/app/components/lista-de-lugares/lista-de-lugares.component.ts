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
      this.lugares = lugares.json()

      this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key])

    }, error =>{
      console.log(error)
      alert(error.statusText)
    })
  }

  ngOnInit() {
  }

}
