import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleModule } from './article/article.module';
import { ArticlesRoutingModule } from './articles-routing.module';

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticlesRoutingModule
  ],
  exports: [
    ArticleModule
  ]
})
export class ArticlesModule { }
