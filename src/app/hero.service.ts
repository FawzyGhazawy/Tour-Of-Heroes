import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { of , Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // getHeroes() : Hero[]{
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id : number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id )!;
    this.messageService.add(`HeroServed: fetched hero id = ${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) { }
}
