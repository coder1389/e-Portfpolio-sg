import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentLibraryComponent } from './pages/component-library/component-library.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { LogoHeaderComponent } from './components/molecules/logo-header/logo-header.component';
import { NavigationComponent } from './components/molecules/navigation/navigation.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IconComponent } from './components/atoms/icon/icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentLibraryComponent,
    HeaderComponent,
    LogoHeaderComponent,
    NavigationComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
