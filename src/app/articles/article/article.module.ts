import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { SpanComponent } from './span/span.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArticleComponent,
    SpanComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ArticleComponent],
  bootstrap: [ArticleComponent]
})
export class ArticleModule { }
