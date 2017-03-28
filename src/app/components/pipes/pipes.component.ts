import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent  {

  name = 'Alexander Londoño Espejo';
  areglo = [1,2,3,4,5,7,8,9,10];
  PI = Math.PI;
  constructor() { }

}
