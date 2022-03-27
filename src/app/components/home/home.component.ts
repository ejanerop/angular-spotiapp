import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  newReleases : any[] = [];
  loading : boolean = true;
  error : boolean;


  constructor( private http : HttpClient, private spotify : SpotifyService) {

    this.error = false;

    this.spotify.getNewReleases().subscribe( (data : any) => {
      this.newReleases = data;
      this.loading = false;
    }, (errorService) => {

      this.error = true;
      console.log(errorService);

    });




  }

  ngOnInit(): void {}
}
