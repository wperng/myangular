import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatToolbarModule, MatIconModule ],
  declarations: [ AppComponent, AppHeaderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
