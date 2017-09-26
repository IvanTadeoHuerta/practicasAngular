import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective} from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import { Routes,RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path:'lugares', component: AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUcY2wKFpZO9J_t9UCrnL_f1kmDeNtosY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
