import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../model/Hero";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes : Hero[] = [];


  constructor(private heroService : HeroService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5))
  }



}
