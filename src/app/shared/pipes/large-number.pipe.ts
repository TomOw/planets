import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largeNumber'
})
export class LargeNumberPipe implements PipeTransform {

  transform(value: any): any {

    let exp;
    let suffixes = [' thousand', ' million', ' billion', ' trillion', 'quadrillion'];

    if (Number.isNaN(Number(value))) {
      return value;
    }

    if (Number.isNaN(value)) {
      return null;
    }

    if (value < 1000) {
      return value;
    }

    exp = Math.floor(Math.log(value) / Math.log(1000));

    return (value / Math.pow(1000, exp)) + suffixes[exp - 1];
  }

}
