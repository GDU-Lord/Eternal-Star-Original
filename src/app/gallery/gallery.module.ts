import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { ImageComponent } from './image/image.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  declarations: [
    GalleryComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule
  ],
  bootstrap: [GalleryComponent]
})
export class GalleryModule { }
