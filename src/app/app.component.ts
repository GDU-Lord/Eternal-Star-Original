import { Component } from '@angular/core';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'wiki';
  ngOnInit() {
    this.test();
  }
  test() {
    
  }
}
