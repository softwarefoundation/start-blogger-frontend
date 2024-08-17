import { Injectable } from '@angular/core';
import {PostModel} from "../models/post.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  baseUrl = "http://localhost:8080/api/v1/post";

  constructor(private http: HttpClient) { }


  postPost(post: PostModel){
    console.log('Salvando post: ', post);
    return this.http.post<PostModel>(`${this.baseUrl}`, post);
  }


}
