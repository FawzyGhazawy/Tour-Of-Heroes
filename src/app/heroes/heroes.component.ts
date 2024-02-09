import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
// import { HEROES } from '../mock-heroes';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',

})
export class HeroesComponent implements OnInit {
  // selectedHero ?: Hero
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }  hayde eza bede yeha tbayen bnafs l page ye3ne ma ta3mel navigate la new detail component page
  // heroes = HEROES;
  heroes : Hero[] = [];
  constructor(private heroService : HeroService, private messageService: MessageService){}
  // getHeroes() : void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
