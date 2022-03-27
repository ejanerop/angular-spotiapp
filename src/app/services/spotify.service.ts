import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { }

  getQuery( query : string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDaVfu0dAmtoTlF46azT2JkR9S2gusrGrQKNRuH099_AjtDnCDCLVqTfefOZpQu5antt_45qlselaVjP1w'
   });

   return this.http.get(url, { headers });

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20').pipe( map( (data:any) => data.albums.items));

  }

  getArtists(termino : string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( (data:any) => data.artists.items));

  }

  getArtist(id : string){

    return this.getQuery(`artists/${id}`);

  }

  getTopTracks(id : string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data : any) => data.tracks));

  }
}
