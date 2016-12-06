import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

//const HEROES: Hero[];
@Component({
  selector: 'heroes',
  templateUrl: './app/heroes.component.html',
  styleUrls: ["./app/heroes.component.css"]
})


export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroesSlowly()
    .then(heroes =>this.heroes = heroes )
    .catch((error) =>{console.log(error);this.heroes = [] })
  }

}
