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
import {RouterModule,Routes} from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { ArraymethodsComponent } from './arraymethods/arraymethods.component';

const approutes:Routes=[
  {path:'UserType',component:AddusertypeComponent},
  {path:'add',component:AdditionComponent},
  {path:'sub',component:SubtractionComponent},
  {path:'mul',component:MultiplicationComponent},
  {path:'div',component:DivisionComponent},
  {path:'arr',component:ArraymethodsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AddusertypeComponent,
    UsertypeslistComponent,
    UserstableComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplicationComponent,
    DivisionComponent,
    ArraymethodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents(null),
    RouterModule.forRoot(
      approutes,
      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
