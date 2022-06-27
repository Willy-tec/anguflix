import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie, Popular } from './Types/Movie';
import { Observable } from 'rxjs';
import { TypeToFetch } from './type-to-fetch';
import { LocaleEnum } from './locale-enum';
import { mockedConfig } from './mockdata.service';
@Injectable({
  providedIn: 'root',
})
export class FetchMovieService {
  base_url = 'https://a.willytec.workers.dev/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  getPopular(): Observable<Popular> {
    return this.http.get<Popular>(
      'https://a.willytec.workers.dev/movie/popular/',
      this.httpOptions
    );
  }
  getTopRated(): Observable<Popular> {
    return this.http.get<Popular>(
      'https://a.willytec.workers.dev/movie/top_rated/',
      this.httpOptions
    );
  }
  getData({
    type = TypeToFetch.popular,
    page = 1,
    locale = LocaleEnum.fr,
  }: {
    type?: string;
    page: number;
    locale?: LocaleEnum;
  }): Observable<Popular> {
    const target_url = new URL(this.base_url);
    target_url.pathname = `3/movie/${type}`;
    target_url.searchParams.set('page', String(page));
    return this.http.get<Popular>(target_url.href, this.httpOptions);
  }
  getFilmData({ id }: { id?: string }): Observable<Movie> {
    const target_url = new URL(this.base_url);
    target_url.pathname = `3/movie/${id}`;
    return this.http.get<Movie>(target_url.href, this.httpOptions);
  }
  getRecoData({
    id,
    type,
  }: {
    id?: string;
    type?: string;
  }): Observable<Popular> {
    const target_url = new URL(this.base_url);
    target_url.pathname = `3/movie/${id}/${type}`;
    return this.http.get<Popular>(target_url.href, this.httpOptions);
  }
  getLittleImagePath() {
    const size = mockedConfig.images.poster_sizes[2];
    return `https://image.tmdb.org/t/p/${size}`;
  }
  getImagePath() {
    const size = mockedConfig.images.poster_sizes[3];
    return `https://image.tmdb.org/t/p/${size}`;
  }
}

// TODO Configuré les tailles selon l'écran ?
