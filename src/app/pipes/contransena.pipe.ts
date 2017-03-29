import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contransena'
})
export class ContransenaPipe implements PipeTransform {

  transform(value: any, activar: boolean): string {
    if (activar) {
      let salida: string = '';
      for (let i = 0; i < value.length; i++) {
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }
  }

}
