import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { API_URL } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) {}
  
  loadArticle(id: string) {
    return this.http.get(API_URL + "/article", {
      params: { id }
    }) as Observable<Article>;
  }

  loadArticles() {
    return this.http.get(API_URL + "/articles") as Observable<Article[]>;
  }

  loadGallery(path: string = "/") {
    return this.http.get(API_URL + "/gallery" + path) as Observable<string[]>;
  }

  loadFirstArticle() {
    const subject = new Subject<Article>;
    this.loadArticles().subscribe(articles => {
      const id = articles[0]?.id;
      if(id == null) {
        subject.error(new Error("Article not found!"));
        return;
      }
      this.loadArticle(id).subscribe({
        next: article => subject.next(article),
        error: err => subject.next(err)
      });
    })
    return subject;
  }
}
