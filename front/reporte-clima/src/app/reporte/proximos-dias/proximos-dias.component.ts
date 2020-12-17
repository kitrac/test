import {Component, Input, OnInit} from '@angular/core';
import {ReporteService} from "../services/reporte.service";
import {ActualModel, ForecastModel} from "../models/ReporteModel";
import {DatePipe} from "@angular/common";
import {CityService} from "../services/city.service";

@Component({
  selector: 'app-proximos-dias',
  templateUrl: './proximos-dias.component.html',
  styleUrls: ['./proximos-dias.component.css']
})
export class ProximosDiasComponent implements OnInit {

  public city: string;
  public forecast: ForecastModel;
  public proximos: ActualModel[] = [];
  public detalles: ActualModel[] = [];

  constructor(private service: ReporteService, private datePipe: DatePipe, private cityService: CityService) {
  }

  ngOnInit() {
    this.cityService.getCity().subscribe(resp => {
      this.city = resp;
      this.detalles = [];
      this.getProximos();
    })
  }


  getProximos() {
    this.forecast = null;
    this.proximos = [];
    this.service.getForecast(this.city).subscribe(resp => {
      this.forecast = resp;
      let auxDate = this.datePipe.transform(this.forecast.list[0].dt_txt, 'yyyy-MM-dd');
      this.proximos.push(this.forecast.list[0]);
      this.forecast.list.forEach(clima => {
        let actualDate = this.datePipe.transform(clima.dt_txt, 'yyyy-MM-dd');
        if (auxDate !== actualDate) {
          auxDate = actualDate;
          this.proximos.push(clima);
        }
      });
    });
  }

  verDetalle(proximo: ActualModel) {
    this.detalles = [];
    let fechaProximo = this.datePipe.transform(proximo.dt_txt, 'yyyy-MM-dd');
    this.forecast.list.forEach(clima => {
      let actualDate = this.datePipe.transform(clima.dt_txt, 'yyyy-MM-dd');
      if (fechaProximo === actualDate) {
        this.detalles.push(clima);
      }
    });
  }
}

