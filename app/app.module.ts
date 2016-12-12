import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}



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
