import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private routerInfo: BehaviorSubject<string>;

  constructor() {
    this.routerInfo = new BehaviorSubject<string>(null);
  }

  getCity(): Observable<any> {
    return this.routerInfo.asObservable();
  }

  setCity(calculo): void {
    this.routerInfo.next(calculo);
  }
}
