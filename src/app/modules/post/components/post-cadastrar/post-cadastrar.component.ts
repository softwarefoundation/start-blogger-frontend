import {Component, OnInit} from '@angular/core';
import {PostModel} from "../../../../shared/models/post.model";

@Component({
  selector: 'app-post-cadastrar',
  templateUrl: './post-cadastrar.component.html',
  styleUrl: './post-cadastrar.component.scss'
})
export class PostCadastrarComponent implements OnInit {

  post: PostModel = {texto: "", titulo: ""}

  ngOnInit(): void {
  }


  cadastrarPost(){
    console.log('Cadastrar POST');
  }

}
