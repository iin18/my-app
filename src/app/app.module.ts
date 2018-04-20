import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent1 } from './joke.component';
import { JokeListComponent } from './jokelist.component';
import { JokeFormComponent } from './joke-form/joke-form.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeComponent1,
    JokeListComponent,
    JokeFormComponent,
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
