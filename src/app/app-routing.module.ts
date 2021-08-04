import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "**",
    redirectTo: "busqueda",
  },
  {
    path: "busqueda",
    component:BusquedaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
