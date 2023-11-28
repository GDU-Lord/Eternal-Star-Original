import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { BehaviorSubject, Observable, Subject, of, takeUntil } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { FOLDER_GRID_IMAGE } from 'src/config';
import { convertGalleryURL, isFileName } from 'src/utils';

@Component({
  selector: 'gallery-root',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})

export class GalleryComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject();
  private images: BehaviorSubject<GridItem[]> = new BehaviorSubject<GridItem[]>([]);
  
  images$: Observable<GridItem[]> = this.images.asObservable();
  currentImages: GridItem[] = [];
  
  constructor(
    private http: HttpService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe({
      next: this.processURL,
      error () {}
    });
    this.images.pipe(takeUntil(this.destroy$)).subscribe({
      next: (images) => {
        this.currentImages = images;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  processURL = (event: any) => {
    if(!(event.routerEvent instanceof NavigationEnd)) return;
    const url = this.router.url.split("/") as string[];
    if(url[1] !== 'gallery') return;
    const urlStrings = url.map(url => decodeURIComponent(url));
    const lastSegment = String(urlStrings[urlStrings.length-1]) ?? "";
    const isFile = isFileName(lastSegment, ["png", "jpg", "jpeg"]);
    const path = "/" + urlStrings.slice(2).join("/");
    if(isFile) {
      const imageURL = convertGalleryURL(path) as string;
      const image: GridItem = {
        title: "",
        id: "",
        link: "",
        image: imageURL
      };
      this.images.next([image]);
      return;
    }
    this.http.loadGallery(path).pipe(takeUntil(this.destroy$)).subscribe({
      next: res => this.processGallery(res, path),
      error () {}
    });
  }


  processGallery = (res: string[], path: string) => {
    const images: GridItem[] = res.map(pathname => {

      const isFile = isFileName(pathname, ["png", "jpg", "jpeg"]);
      const imageURL = convertGalleryURL(path + "/" + pathname) as string;

      const image: GridItem = {
        title: isFile ? "" : pathname,
        id: "",
        link: pathname,
        image: isFile ? imageURL : FOLDER_GRID_IMAGE,
        contain: false
      }

      return image;

    });

    this.images.next(images);
  }

}
