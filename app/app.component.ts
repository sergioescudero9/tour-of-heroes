import { Component } from '@angular/core';
@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">Heroes</a>
   <router-outlet></router-outlet>
  `
})
export class AppComponent {
    title = 'Tour of Heroes';
}


// https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

// Advanced
// https://angular.io/docs/ts/latest/guide/router.html#!#base-href
// https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
// https://angular.io/docs/ts/latest/guide/dependency-injection.html
// https://angular.io/docs/ts/latest/guide/glossary.html#!#dash-case
// https://angular.io/docs/ts/latest/guide/attribute-directives.html#!#why-input
// https://angular.io/docs/ts/latest/guide/template-syntax.html#!#event-binding
// https://angular.io/docs/ts/latest/guide/user-input.html