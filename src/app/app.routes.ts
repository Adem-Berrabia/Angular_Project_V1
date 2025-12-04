import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },

  { path: '**', component: NotFoundComponent },
];
