import { Injectable } from '@angular/core';
import {PostModel} from "../models/post.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "http://localhost:8080/api/v1/post";

  constructor(private http: HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  postPost(post: PostModel){
    return this.http.post<PostModel>(`${this.baseUrl}`, post);
  }


}
