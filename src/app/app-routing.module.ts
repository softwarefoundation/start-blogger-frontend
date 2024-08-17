import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostCadastrarComponent} from "./modules/post/components/post-cadastrar/post-cadastrar.component";
import {PostsComponent} from "./modules/home/components/posts/posts.component";

const routes: Routes = [
  {
    path: "",
    component: PostsComponent
  },
  {
    path: "home",
    component: PostsComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "post/cadastrar",
    component: PostCadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
