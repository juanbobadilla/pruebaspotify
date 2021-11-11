import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service' ;

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {


  ngOnInit() {
    this.getReleases();
  }

  constructor(private api:ApiService){}

  newRelease:any;

  getReleases(){
    this.api.getReleases().subscribe(
      resp=>{
        this.newRelease = resp;
        console.log(this.newRelease);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
