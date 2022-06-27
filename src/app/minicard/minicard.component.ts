import { Component, Input, OnInit } from '@angular/core';
import { FetchMovieService } from '../fetch-movie.service';
import { Movie } from '../Types/Movie';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.scss'],
})
export class MinicardComponent implements OnInit {
  constructor(private http: FetchMovieService) {}
  @Input() film: Movie = {} as Movie;
  img_base_url: string = '';
  detail_url: string = '';
  ngOnInit(): void {
    this.getData();
    this.detail_url = `/detail?id=${this.film.id}`;
  }
  getData() {
    this.img_base_url = this.http.getLittleImagePath();
  }
}

// TODO Ajout image 404
