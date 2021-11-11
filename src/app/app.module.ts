import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app/app.routing.module';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './Component/artista/artista.component';
import { ReleasesComponent } from './Component/releases/releases.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { MusicComponent } from './Component/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    ReleasesComponent,
    NavbarComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
