import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchMovieService } from '../fetch-movie.service';
import { Movie } from '../Types/Movie';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent implements OnInit {
  movie?: Movie;
  constructor(
    private fetchService: FetchMovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFilm(this.route.snapshot.queryParams['id']);
  }
  getFilm(id: string) {
    this.fetchService.getFilmData({ id }).subscribe((data) => {
      this.movie = data;
    });
  }
}

// TODO Nous donne la carte du film + liste reco + Similar movie
// TODO Tag link sur recherche par
