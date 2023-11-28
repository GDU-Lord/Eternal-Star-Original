import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { GalleryComponent } from './gallery.component';

function galleryMatcher(url: UrlSegment[]) {
  return { consumed: url };
}

const routes: Routes = [
  // { path: "", component: GalleryComponent },
  { matcher: galleryMatcher, component: GalleryComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
