import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentLibraryComponent } from './pages/component-library/component-library.component';
import { HeaderComponent } from './components/organisms/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentLibraryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
