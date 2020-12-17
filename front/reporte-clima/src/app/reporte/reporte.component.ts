import {Component, OnInit} from '@angular/core';
import {ReporteService} from "./services/reporte.service";
import {CIUDADES} from "../../assets/ciudades";
import {CityService} from "./services/city.service";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  public city: string;
  public ciudades = CIUDADES;

  constructor(private service: ReporteService, private cityService: CityService) {
  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.service.getLocation().subscribe(resp => {
      this.city = resp.city;
      this.setCity();
    });
  }

  setCity() {
    this.cityService.setCity(this.city);
  }
}
