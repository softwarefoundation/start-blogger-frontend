import {Component, OnInit} from '@angular/core';
import {PostModel} from "../../../../shared/models/post.model";
import {PostService} from "../../../../shared/services/post.service";

@Component({
  selector: 'app-post-cadastrar',
  templateUrl: './post-cadastrar.component.html',
  styleUrl: './post-cadastrar.component.scss'
})
export class PostCadastrarComponent implements OnInit {

  post: PostModel = {
    texto: "",
    titulo: ""
  }


  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }


  cadastrarPost(){
    this.postService.postPost(this.post).subscribe(value => {
    });
  }

}
