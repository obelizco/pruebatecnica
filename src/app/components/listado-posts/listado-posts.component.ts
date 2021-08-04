import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-listado-posts',
  templateUrl: './listado-posts.component.html',
  styleUrls: ['./listado-posts.component.css']

})
export class ListadoPostsComponent  {
@Input() post!:any;
panelOpenState = false;
}
