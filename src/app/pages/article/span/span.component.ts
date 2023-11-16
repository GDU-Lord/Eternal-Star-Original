import { Component, Input, OnInit } from '@angular/core';
import { API_URL } from 'src/config';
import { convertImageURL } from 'src/utils';

@Component({
  selector: 'app-span',
  templateUrl: './span.component.html',
  styleUrls: ['./span.component.sass']
})
export class SpanComponent implements OnInit {

  @Input() spans!: Span[];

  ngOnInit() {
    for(const span of this.spans) {
      if(span.type === "link") {
        if(span.data == null) continue;
        span.data = span.data.split("#");
        if(span.data[0] === span.data[1]) // remove heading id if its a page id
          delete span.data[1];
        span.data[2] = span.data[0].match(/https{0,1}:\/{2}/) != null; // isExternalLink
        if(!span.data[2])
          span.data[0] = "/article/" + span.data[0];
        continue;
      }
      if(span.type === "image") {
        span.content = convertImageURL(span.content) ?? "";
        continue;
      }
    }
  }
}
