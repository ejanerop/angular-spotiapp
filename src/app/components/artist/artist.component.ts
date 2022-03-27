import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist : any = {};
  topTracks : any[] = [];
  loading : boolean = true;

  constructor( private router : ActivatedRoute, private spotify : SpotifyService) {

    this.router.params.subscribe(params =>{
      console.log(params);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })

  }

  ngOnInit(): void {
  }

  getArtista(id : string){

    this.loading = true;

    this.spotify.getArtist( id ).subscribe(artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }
  getTopTracks( id : string ){

    this.spotify.getTopTracks( id ).subscribe( (topTracks : any) => {
      console.log(topTracks);
      this.topTracks = topTracks;
    })

  }

}
