import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

function galleryMatcher(url: UrlSegment[]) {
  if(url[0].path === "gallery") return { consumed: url };
  return null;
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'gallery', component: GalleryComponent },
  { matcher: galleryMatcher, component: GalleryComponent },
  { path: 'about', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
