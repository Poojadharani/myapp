import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { AddusertypeComponent } from './addusertype/addusertype.component';
import { UsertypeslistComponent } from './usertypeslist/usertypeslist.component';
import { AgGridModule } from 'ag-grid-angular';
import { UserstableComponent } from './userstable/userstable.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AddusertypeComponent,
    UsertypeslistComponent,
    UserstableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents(null),
    RouterModule.forRoot([
      {
        path:'UserType',
        component:AddusertypeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
