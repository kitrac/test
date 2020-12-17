import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'reporte',
    loadChildren: () => import('./reporte/reporte.module').then(m => m.ReporteModule)
  },
  {path: '', redirectTo: 'reporte', pathMatch: 'full'},
  {path: '**', redirectTo: 'reporte'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
