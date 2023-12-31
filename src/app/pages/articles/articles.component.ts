import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, of, takeUntil } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { convertImageURL } from 'src/utils';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  
  private destroy$: Subject<void> = new Subject();
  private articles: Subject<GridItem[]> = new Subject();
  
  articles$: Observable<GridItem[]> = this.articles.asObservable();
  
  constructor(
    private http: HttpService
  ) {}
  
  ngOnInit() {
    this.http.loadArticles().pipe(takeUntil(this.destroy$)).subscribe({
      next: res => {
        const articles = (res as any[]).map(item => ({
          title: item?.title ?? "",
          id: item?.id ?? "",
          link: "/article/" + item?.id,
          image: convertImageURL(item.images[0]) ?? ""
        }));
        this.articles.next(articles);
      },
      error() {}
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
