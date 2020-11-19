import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentLibraryComponent } from './pages/component-library/component-library.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'component-library',
    component: ComponentLibraryComponent
  }, 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
