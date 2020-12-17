import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {URL_BACKEND} from "../../../environments/environment";
import {ActualModel, ForecastModel} from "../models/ReporteModel";

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) {
  }

  getActual(city: string) {
    let ruta = '/current/' + city;
    return this.http.get<ActualModel>(URL_BACKEND + ruta);
  }

  getForecast(city: string) {
    let ruta = '/forecast/' + city;
    return this.http.get<ForecastModel>(URL_BACKEND + ruta);
  }

  getLocation() {
    let ruta = '/location/';
    return this.http.get<any>(URL_BACKEND + ruta);
  }
}
