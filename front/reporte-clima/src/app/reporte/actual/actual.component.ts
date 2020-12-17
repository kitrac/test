import {Component, Input, OnInit} from '@angular/core';
import {ReporteService} from "../services/reporte.service";
import {ActualModel} from "../models/ReporteModel";
import {CityService} from "../services/city.service";

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.css']
})
export class ActualComponent implements OnInit {

  public city: string;
  public climaActual: ActualModel;

  constructor(private service: ReporteService, private cityService: CityService) {
  }

  ngOnInit() {
    this.cityService.getCity().subscribe(resp => {
      this.city = resp;
      console.log(this.city);
      this.getActual();
    })
  }

  getActual() {
    this.climaActual = null;
    this.service.getActual(this.city).subscribe(resp => {
      this.climaActual = resp;
    });
  }

}
