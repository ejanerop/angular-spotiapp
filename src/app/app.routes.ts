
import { RouterModule,Routes } from "@angular/router";
import { ArtistComponent } from "./components/artist/artist.component";
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from "./components/search/search.component";

export const APP_ROUTES: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'search', component : SearchComponent },
  { path: 'artist/:id', component : ArtistComponent },
  { path: '', pathMatch : 'full', redirectTo : 'home' },
  { path: '**', pathMatch : 'full', redirectTo : 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
