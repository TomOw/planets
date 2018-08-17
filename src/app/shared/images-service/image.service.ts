import {Injectable} from '@angular/core';

@Injectable()
export class ImageService {

  constructor() {
  }

  getImageByClimate(climateString: string) {
    let climates = climateString.split('\,');
    let climate = climates[0];
    switch (climate) {
      case 'temperate': {
        return 'earth.svg'
      }
      case 'tropical': {
        return 'earth.svg'
      }
      case 'frozen': {
        return 'neptune.svg'
      }
      case 'murky': {
        return 'moon.svg'
      }
      case 'arid': {
        return 'pluto.svg'
      }
      case 'windy': {
        return 'saturn.svg'
      }
      case 'hot': {
        return 'venus.svg'
      }
      case 'artificial temperate': {
        return 'earth.svg'
      }
      case 'frigid': {
        return 'uranus.svg'
      }
      case 'humid': {
        return 'earth.svg'
      }
      case 'moistt': {
        return 'earth.svg'
      }
      case 'polluted': {
        return 'mercury.svg'
      }
      case 'superheated': {
        return 'venus.svg'
      }
      case 'subarctic': {
        return 'uranus.svg'
      }
      case 'rocky': {
        return 'mercury.svg'
      }
      case 'unknown': {
        return 'moon.svg'
      }
      default: {
        return 'moon.svg'
      }
    }
  }

}
