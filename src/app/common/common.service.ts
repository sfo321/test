import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  private user = {
    firstName: 'Baj',
    lastName: 'Ganyo',
    email: 'ganio-balkanski@gmail.com',
    mobile: '+359888000111',
    passNumber: 'GBBG1203582348',
    image: 'https://placeimg.com/150/150/people',
  };

  constructor() { }

  getUser(): any {
    return this.user;
  }
}
