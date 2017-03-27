import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styles: []
})
export class HeroeDetailComponent {

  heroe: any = {};

  constructor(
    private _activateRouter: ActivatedRoute,
    private _heroesService: HeroesService) {

    this._activateRouter.params.subscribe(params => {
      this.heroe = this._heroesService.getDetailHeroe(params['id']);
    });
  }

}
