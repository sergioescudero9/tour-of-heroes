import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
    declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],

  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroesComponent } from './heroes.component';
// import { HeroService } from './hero.service';

// import { RouterModule } from '@angular/router';

// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     RouterModule.forRoot([
//       {
//         path: '',
//         component: AppComponent
//       },
//       {
//         path: 'heroes',
//         component: HeroesComponent
//       }
//     ])
//   ],
//   declarations: [
//     AppComponent,
//     HeroDetailComponent,
//     HeroesComponent
//   ],
//   providers: [
//     HeroService
//   ],
//   bootstrap: [AppComponent]
// })



// export class AppModule {

// }
