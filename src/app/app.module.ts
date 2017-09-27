import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective} from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import { Routes,RouterModule } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PracticasComponent } from './components/practicas/practicas.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { HeaderComponent } from './components/header/header.component';
import { EspecificoComponent } from './components/especifico/especifico.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const appRoutes: Routes = [
  {path:'practicas', component: PracticasComponent},
  {path:'mapa', component: MapaComponent},
  {path:'detalle', component: DetalleComponent},
  {path:'especifico/:id', component: EspecificoComponent},
  {path:'contacto', component: ContactoComponent}
  //{path:'**', pathMatch:'full', redirectTo: 'practicas'}
]
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    PracticasComponent,
    MapaComponent,
    HeaderComponent,
    EspecificoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUcY2wKFpZO9J_t9UCrnL_f1kmDeNtosY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
