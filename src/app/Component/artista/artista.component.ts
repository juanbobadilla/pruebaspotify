import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service' ;

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor(private api:ApiService){}

  ngOnInit() {
    this.getArtista();
  }

  artistas:any[];

  ids =[
    "18nKUAfNnowoqfqDhwI3X3",
    "5NS0854TqZQVoRmJKSWtFZ",
    "3h60V4B4DYH45yLfeOpdgY",
    "0SX6JYmyUsddZP40gLZtzw",
  ]

  getArtista(){
    this.api.getArtistas(this.ids).subscribe(
      resp=>{
        this.artistas = Object.values(resp);
        console.log(this.artistas[0]);
      },
      error=>{}
    )
  }



}
