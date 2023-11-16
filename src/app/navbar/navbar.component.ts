import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject();

  route: string = "/";

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe({
      next: this.handleRouterUpdate,
      error() {}
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleRouterUpdate = (event: any) => {
    if(!(event instanceof NavigationEnd)) return;
    this.route = "/" + this.router.url.split("/")[1] ?? "";
  }

  getSelected = (...routes: string[]) => {
    for(const route of routes)
      if(this.route === route)
        return 'selected';
    return '';
  }

}
