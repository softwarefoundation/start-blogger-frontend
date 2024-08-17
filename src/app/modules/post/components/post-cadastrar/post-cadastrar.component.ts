import {Component, OnInit} from '@angular/core';
import {PostModel} from "../../../../shared/models/post.model";
import {PostService} from "../../../../shared/services/post.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-post-cadastrar',
  templateUrl: './post-cadastrar.component.html',
  styleUrl: './post-cadastrar.component.scss'
})
export class PostCadastrarComponent implements OnInit {

  formGroupCadastroPost: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {

  }

  editorConfig: AngularEditorConfig = {
    minHeight: '350',
    enableToolbar: true,
    showToolbar: true,
  }

  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm() {
    this.formGroupCadastroPost = this.formBuilder.group({
      titulo: [null],
      texto: [null],
    });
  }

  cadastrarPost(){

    const post: PostModel = {
      titulo: this.formGroupCadastroPost.controls.titulo.value,
      texto: this.formGroupCadastroPost.controls.texto.value
    };

    this.postService.postPost(post).subscribe(value => {
    });
  }

}
