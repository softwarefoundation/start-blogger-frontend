import { Injectable } from '@angular/core';
import {PostModel} from "../models/post.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "http://localhost:8080/api/v1/post";

  constructor(private http: HttpClient) { }


  postPost(post: PostModel){
    return this.http.post<PostModel>(`${this.baseUrl}`, post);
  }


}
