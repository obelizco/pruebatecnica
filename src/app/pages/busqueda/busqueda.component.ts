import { Post } from './../../interface/post.interface';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  termino: string = "";
  filtroSeleccionado = 1;
  sugerencias : any[]=[];
  sugerenciaSeleccionada:any;
  criterioBusqueda: string[] = ['Autor', 'Correo', 'Palabra clave del post'];
  posts: Post[] = [];
  postSeleccionado: Post | undefined;
  postsFiltrados:any[]=[];
  constructor(private backend: BackendService) {

  }


  ngOnInit(): void {
    //busca todos los post cuando la pantalla esta cargando 
    this.backend.getPosts().subscribe(resp => {
      this.posts = resp;
    })


  
  }

  //Este metodo busca las sugerencias para la search barpara cuando los filtros son diferentes a busqueda por palabra clave
  buscando() {
    if (this.filtroSeleccionado!=3) {
      this.backend.getSugerenias(this.termino.trim()).subscribe(resp=>{
        this.sugerencias = resp;
      })
    }else{
      //Filtro por palabras claves en el post pero comparando con el titulo del post
      this.postsFiltrados= this.posts.filter(element=>{
        if(element.title.toLowerCase().includes(this.termino.toLowerCase())){     
          // console.log(this.termino)
          return element
        } 
      })
      //Recorre los post Filtrados y busco los respectivos comentarios
      this.postsFiltrados.forEach(element => {
        this.buscarComentariosPost(element.id,element);
      });
    }
    
   
  }

  //Metodo se ejecuta cuando se elije un elemento de la lista de sugerencias en la searchar
  //y dispara otros metodos.
  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      this.postSeleccionado = undefined;
      return;
    }else{
      this.sugerenciaSeleccionada = event.option.value;
      console.log(this.sugerenciaSeleccionada)
      if (this.filtroSeleccionado==1) {
        this.termino = event.option.value.username;
        this.filtrarPosts()
      }else{
        this.termino = event.option.value.email;
        this.filtrarPosts()
      }  
    }
  }

  //Este metodo filtra los post que se van a mostrar en el listado de resultados de post
   filtrarPosts(){
    if (this.filtroSeleccionado!=3) {
      this.postsFiltrados = this.posts.filter(element=>{
        return element.userId == this.sugerenciaSeleccionada.id
      })
      //Recorre los post Filtrados y busco los respectivos comentarios
      this.postsFiltrados.forEach(element => {
        this.buscarComentariosPost(element.id,element);
      });
      // console.log(this.postsFiltrados)
    }else{

    }
  }

  //limpia variables cuando se cambia de radiobutton
  limpiar(){
    this.termino="";
    this.sugerencias=[];
    this.postsFiltrados=[];
  }


  buscarComentariosPost(idpost:string,element){
    this.backend.getComments(idpost).subscribe(resp=>{
    element.comments = resp
    })
  }

}
