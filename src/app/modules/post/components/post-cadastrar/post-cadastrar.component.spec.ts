import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCadastrarComponent } from './post-cadastrar.component';

describe('PostCadastrarComponent', () => {
  let component: PostCadastrarComponent;
  let fixture: ComponentFixture<PostCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCadastrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
