import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-especifico',
  templateUrl: './especifico.component.html',
  styles: []
})
export class EspecificoComponent {
  consecutivo:number = -1;
  parametro1:string = '';
  parametro2:string = '';

  constructor(private route: ActivatedRoute) { 
      this.consecutivo = this.route.snapshot.params['id'];

      // Utilizando queryParams muestra todo el objeto
      // this.route.queryParams
      this.parametro1= this.route.snapshot.queryParams['action'];
      this.parametro2= this.route.snapshot.queryParams['referer'];
  }
 
}
