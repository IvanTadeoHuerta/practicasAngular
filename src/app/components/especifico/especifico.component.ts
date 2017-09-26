import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-especifico',
  templateUrl: './especifico.component.html',
  styles: []
})
export class EspecificoComponent {
  consecutivo:number = -1;
  constructor(private route: ActivatedRoute) { 
      this.consecutivo = this.route.snapshot.params['id'];
  }
 
}
