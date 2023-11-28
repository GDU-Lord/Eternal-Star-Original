import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_GRID_IMAGE } from 'src/config';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() item!: GridItem;

  ngOnInit() {
    this.item.image = this.item.image === '' ? DEFAULT_GRID_IMAGE : this.item.image;
  }

}
