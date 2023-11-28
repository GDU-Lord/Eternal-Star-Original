import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'article-root',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject();

  @Input() article: Article = {
    title: "",
    id: "",
    elements: []
  };

  @Input() auto: boolean = true;

  constructor(
    private http: HttpService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if(!this.auto) return;
    this.route.params.subscribe(params => {
      const id = params['id'];
      if(id == null) return;
      this.http.loadArticle(id).pipe(takeUntil(this.destroy$)).subscribe({
        next: (res) => {
          this.article = res as Article;
        },
        error() {}
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
