import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GRID_COLUMNS } from 'src/config';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})

export class GridComponent implements OnInit, OnDestroy {

  private readonly columns: number = GRID_COLUMNS;
  private destroy$: Subject<void> = new Subject();

  @Input() items!: Observable<GridItem[]>;
  grid: GridItem[][] = [];

  ngOnInit() {
    this.items.pipe(takeUntil(this.destroy$)).subscribe(this.loadItems);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadItems = (items: GridItem[]) => {
    this.grid = [[]];
    let row = 0;
    for(const item of items) {
      if(this.grid[row].length >= this.columns) {
        row ++;
        this.grid[row] = [];
      }
      this.grid[row].push(item);
    }
  }
}
