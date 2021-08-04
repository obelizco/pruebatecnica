import { ListadoPostsComponent } from './../../components/listado-posts/listado-posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BusquedaComponent,
  ListadoPostsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class BusquedaModule { }
