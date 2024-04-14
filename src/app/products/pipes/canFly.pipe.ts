import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'CanFlyPipe'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): string {
    return (value) ? 'Si vuela':'No vuela';
  }

}
