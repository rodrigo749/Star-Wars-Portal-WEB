  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { CharacterModule } from './character/character/character.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
 
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
