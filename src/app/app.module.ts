import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { PostCadastrarComponent } from './modules/post/components/post-cadastrar/post-cadastrar.component';
import { PostsComponent } from './modules/home/components/posts/posts.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {PostService} from "./shared/services/post.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AngularEditorModule} from "@kolkov/angular-editor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PostCadastrarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatCardTitle,
    HttpClientModule,
    AngularEditorModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
