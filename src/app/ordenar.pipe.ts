import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(values: Array<any>): any {

    console.log("ordenando", values);

    let len = values.length; 
    let aux : any;

    for(let i = 1; i<len; i++) {
      if(values[i-1].rate < values[i].rate) {
        aux         = values[i];
        values[i]   = values[i-1];
        values[i-1] = aux;
        i = 1;
      }
    }

    console.log("ordenado", values);

    return values;
  }

}
