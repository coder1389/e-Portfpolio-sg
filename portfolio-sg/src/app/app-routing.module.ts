import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentLibraryComponent } from './pages/component-library/component-library.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'sg',
    component: HomeComponent
  },
  {
    path: 'component-library',
    component: ComponentLibraryComponent
  }, 
  {
    path: '**',
    redirectTo: 'sg',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
