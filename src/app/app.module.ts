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
import { LugaresService } from './services/lugares.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './components/crear/crear.component';
import { ListaDeLugaresComponent } from './components/lista-de-lugares/lista-de-lugares.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCDjpZcx-TYR56Qy_VSf1efdRghdra5KQM",
  authDomain: "platzisquare-9a618.firebaseapp.com",
  databaseURL: "https://platzisquare-9a618.firebaseio.com",
  storageBucket: "platzisquare-9a618.appspot.com",
  messagingSenderId: "554311793407"
};


const appRoutes: Routes = [
  {path:'practicas', component: PracticasComponent},
  {path:'mapa', component: MapaComponent},
  {path:'detalle', component: DetalleComponent},
  {path:'especifico/:id', component: EspecificoComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear', component: CrearComponent},
  {path:'list', component: ListaDeLugaresComponent}
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
    ContactoComponent,
    CrearComponent,
    ListaDeLugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUcY2wKFpZO9J_t9UCrnL_f1kmDeNtosY'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
