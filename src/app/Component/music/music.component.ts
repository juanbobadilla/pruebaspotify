import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service' ;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getArtista();
  }

  music:any[];

  ids =[
    "11dFghVXANMlKmJXsNCbNl",
    "3ZFTkvIE7kyPt6Nu3PEa7V",
    "1zwZ26A7OA5wTrA3FejCLL",
    "1zB1ZGUXI89nGF4ti8oHAl"
  ]

  getArtista(){
    this.api.getMusic(this.ids).subscribe(
      resp=>{
        this.music = Object.values(resp);
        console.log(this.music[0]);
      },
      error=>{}
    )
  }

}
