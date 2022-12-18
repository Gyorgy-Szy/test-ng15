import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  isLoggedIn () {
    // dummy login check
    return true;
  }

  doNot() {
    return false;
  }
}
