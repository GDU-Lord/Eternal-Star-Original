import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ItemComponent } from './grid/item/item.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleComponent } from './pages/article/article.component';
import { SpanComponent } from './pages/article/span/span.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ImageComponent } from './pages/gallery/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ItemComponent,
    HomeComponent,
    NavbarComponent,
    ArticleComponent,
    SpanComponent,
    ArticlesComponent,
    GalleryComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
