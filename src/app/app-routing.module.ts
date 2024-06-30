import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { authGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';




const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'home', component: HomeComponent, },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [authGuard] },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: MoviesComponent, },
  { path: 'moviedetails/:id', component: MoviedetailsComponent, },
  { path: 'tv', component: TvComponent, canActivate: [authGuard] },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
