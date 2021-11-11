import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaComponent } from '../app/Component/artista/artista.component';
import { ReleasesComponent } from '../app/Component/releases/releases.component';
import { MusicComponent } from './Component/music/music.component';

const routes: Routes = [
   {path:'releases' , component: ReleasesComponent},
   {path:'artistas' , component: ArtistaComponent},
   {path:'music', component: MusicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }