import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Releases} from '../interface/releases';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  path="https://api.spotify.com/v1/";
  access ={
    "access_token": "BQCl1koHz48NCOp0HHcaf9EOxmqkneoQQANvweR1CZQ-G_cxiwPA1oV-dEbSydgn_vHl7UG9UZtQIyShKZM",
    "token_type": "Bearer",
    "expires_in": 3600
  }

  headers_object = new HttpHeaders({
     'Authorization': "Bearer "+ this.access.access_token
  });


  getReleases(){
    const access = "browse/new-releases";
    const urlComplete = `${this.path}${access}`;
    const httpOptions = {
      headers: this.headers_object
    };
    return this.http.get(urlComplete, httpOptions);
  }

  getArtistas(ids){
    const access =`artists?ids=${ids}`;
    const urlComplete = `${this.path}${access}`;
    const httpOptions = {
      headers: this.headers_object
    };
    return this.http.get(urlComplete, httpOptions);
  }

  getMusic(ids){
    const access =`tracks?ids=${ids}`;
    const urlComplete = `${this.path}${access}`;
    const httpOptions = {
      headers: this.headers_object
    };
    return this.http.get(urlComplete, httpOptions);
  }

}
