import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() min: number = 1;
  @Input() max: number = 1;
  @Input() current: number = 1;
  pagination: { index: number; path: string }[] = [];
  next_path?: string;
  previous_path?: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!this.max) this.max = 1;
    if (this.max > 10) {
      if (this.max > 500) this.max = 500; // => Attention, l'api ne prend pas les résultats supérieur a 500 ... !?
      this.pagination.push({ index: 1, path: this.makeUrl(1) });
      this.current > 3 && this.pagination.push({ index: 0, path: 'empty' });
      this.current > 2 &&
        this.pagination.push({
          index: this.current - 1,
          path: this.makeUrl(this.current - 1),
        });
      this.current > 1 &&
        this.pagination.push({
          index: this.current,
          path: this.makeUrl(this.current),
        });
      this.current < this.max - 1 &&
        this.pagination.push({
          index: this.current + 1,
          path: this.makeUrl(this.current + 1),
        });
      this.pagination.push({ index: 0, path: 'empty' });

      this.pagination.push({ index: this.max, path: this.makeUrl(this.max) });
    } else {
      for (let i = this.min; i <= this.max; i += 1) {
        this.pagination.push({ index: i, path: this.makeUrl(i) });
      }
    }
    this.previous_path = this.makeUrl(this.current - 1);
    this.next_path = this.makeUrl(this.current + 1);
  }
  makeUrl(index: number) {
    let path = this.route.snapshot.routeConfig
      ? this.route.snapshot.routeConfig.path
      : '/list';
    let query = this.route.snapshot.queryParams;
    let strArr = [];
    Object.keys(query).map((name) => {
      if (name !== 'page') strArr.push(`${name}=${query[name]}`);
    });
    strArr.push(`page=${index}`);
    return path + '?' + strArr.join('&');
  }
}

// TODO Better pagination PLEASE !
