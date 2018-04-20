import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';


const appRoutes: Routes=[
  {
    path: '', component: HomeComponent
  },
  {
    path: 'jokes', component: JokeListComponent 
  },
  {
    path: 'joke-list', redirectTo: 'jokes'
  },
  {
    path: '**', component: PageNotfoundComponent
  },
 
];
//JokeComponent1,
@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    HomeComponent,
    PageNotfoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes,),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [JokeComponent]
  //bootstrap: [JokeListComponent]

  
})
export class AppModule { }
