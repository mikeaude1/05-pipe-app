import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'ColorPipe',
})
export class ColorPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 0){return 'Su traje es rojo'}
    if (value == 1){return 'Su traje es negro'}
    if (value == 2){return 'Su traje es azul'}
    if (value == 3){return 'Su traje es verde'}
    return 'No tiene traje'
  }

}
