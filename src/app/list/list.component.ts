import { Component, Input, OnInit } from '@angular/core';
import { FetchMovieService } from '../fetch-movie.service';
import { ActivatedRoute } from '@angular/router';

import { TypeToFetch } from '../type-to-fetch';
import { Movie } from '../Types/Movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:[FetchMovieService]
})
export class ListComponent implements OnInit {
  @Input() type: TypeToFetch = TypeToFetch.popular;
  movies: Movie[] = [];
  current: number = 1;
  max?: number;
  constructor(
    private fetchservice: FetchMovieService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getList({
      type: this.route.snapshot.queryParams['type'],
      page: this.route.snapshot.queryParams['page'],
    });
  }

  getList({ type, page }: { type: TypeToFetch; page: number }) {
    this.fetchservice.getData({ type, page }).subscribe((data) => {
      this.movies = data.results;
      this.current = data.page;
      this.max = data.total_pages;
    });
  }
}

// TODO Manage media query for phone
// TODO Tag redirige vers recherche par genre
// TODO Meilleures cartes détaillé
