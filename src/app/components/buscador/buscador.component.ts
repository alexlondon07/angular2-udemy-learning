import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino:string;

  constructor(private _activatedRoute: ActivatedRoute,
   private _heroesService: HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(parametro => {
      this.heroes = this._heroesService.searchHeroes(parametro['termino']);
      this.termino = parametro['termino'];
    });
  }

}
