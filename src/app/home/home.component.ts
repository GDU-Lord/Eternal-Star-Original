import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject();

  article: Article = {
    title: "",
    id: "",
    elements: []
  };

  constructor(
    private http: HttpService
  ) {}

  ngOnInit() {
    this.http.loadFirstArticle().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.article = res as Article;
      },
      error() {}
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}