import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PipesComponent } from './components/pipes/pipes.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'buscador/:termino', component: BuscadorComponent },
  { path: 'heroe/:id', component: HeroeDetailComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '**',  pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);