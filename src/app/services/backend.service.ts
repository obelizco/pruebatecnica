import { User } from './../interface/user.interface';
import { Comment } from './../interface/comment.interface';
import { environment } from './../../environments/environment';
import { Post } from './../interface/post.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

//Metodo get para la consulta de los post
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }
//Metodo get para la consulta de las sugerencias cuando la busqueda es por autor
  getSugerenias(termino:string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?q=${termino}`);
  }
//Metodo get para la consulta de los comentarios
  getComments(idpost:string):Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.baseUrl}/posts/${idpost}/comments`);
  }
  
  // getAlbums(userId:string){
  //   return this.http.get<Comment[]>(`${this.baseUrl}/users/${userId}/albums`);
  // }
}
