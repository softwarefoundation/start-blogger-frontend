import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../../shared/services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  pagePosts: any = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.carregarListaInicialDePosts();
  }

  carregarListaInicialDePosts() {
    this.postService.getPosts().subscribe(value => {
      if (value.content) {
        this.pagePosts = value
      }
    });
  }

}
