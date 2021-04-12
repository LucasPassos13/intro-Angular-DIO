import { CursoInfoComponent } from './cursos/curso-info.component';
import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StarComponent } from './star/star.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {CursoListComponent} from './cursos/curso-list.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    StarComponent,
    NavBarComponent,
    Error404Component,
    CursoInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CursoListComponent
      },
      {
        path: 'courses/info/:id', component: CursoInfoComponent
      },
      {
        path: '**', component: Error404Component
      }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
