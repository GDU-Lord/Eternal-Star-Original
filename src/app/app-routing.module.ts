import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  // { path: '', loadChildren: () => import("./articles/articles.module").then(m => m.ArticlesModule) },
  // { path: 'articles', loadChildren: () => ArticlesModule },
  { path: 'articles', loadChildren: () => import("./articles/articles.module").then(m => m.ArticlesModule) },
  { path: 'gallery', loadChildren: () => import("./gallery/gallery.module").then(m => m.GalleryModule) },
  { path: '', loadChildren: () => HomeModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
