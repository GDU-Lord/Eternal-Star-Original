import { Component } from '@angular/core';

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
