import { Component, Input } from '@angular/core';

@Component({
  selector: 'gallery-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent {
  @Input() src!: string;
}
