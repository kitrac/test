import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReporteRoutingModule} from './reporte-routing.module';
import {ReporteComponent} from './reporte.component';
import {ProximosDiasComponent} from './proximos-dias/proximos-dias.component';
import { ActualComponent } from './actual/actual.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ReporteComponent, ProximosDiasComponent, ActualComponent],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    FormsModule
  ]
})
export class ReporteModule {
}
