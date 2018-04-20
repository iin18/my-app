import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent1 } from './joke.component';
import { JokeListComponent } from './jokelist.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeComponent1,
    JokeListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [JokeComponent]
  //bootstrap: [JokeListComponent]
})
export class AppModule { }
