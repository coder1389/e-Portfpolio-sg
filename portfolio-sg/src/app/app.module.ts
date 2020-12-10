import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { WelcomeComponent } from './components/organisms/welcome/welcome.component';
import { TopicDescriptionComponent } from './components/organisms/topic-description/topic-description.component';
import { ImpressionsComponent } from './components/organisms/impressions/impressions.component';
import { AboutComponent } from './components/organisms/about/about.component';
import { InViewportDirective } from './shared/directives/in-viewport.directive';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { BackToTopComponent } from './components/molecules/back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentLibraryComponent,
    HeaderComponent,
    LogoHeaderComponent,
    NavigationComponent,
    IconComponent,
    WelcomeComponent,
    TopicDescriptionComponent,
    ImpressionsComponent,
    AboutComponent,
    InViewportDirective,
    FooterComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
