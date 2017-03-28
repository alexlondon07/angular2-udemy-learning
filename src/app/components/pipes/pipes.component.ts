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
  a:number = 0.234;
  salario:number = 40000456.789;

  constructor() { }

}
