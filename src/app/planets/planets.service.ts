import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {PageResponse, Planet} from '../domain/models';

@Injectable()
export class PlanetsService {

  url = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) {
  }

  getById(id: string): Observable<Planet> {
    return this.http.get<Planet>(this.url + id);
  }

  getByPage(page: number): Observable<PageResponse<Planet>> {
    return this.http.get<PageResponse<Planet>>(this.url, {params: {page: String(page)}});
  }

  search(query: string): Observable<PageResponse<Planet>> {
    return this.http.get<PageResponse<Planet>>(this.url, {params: {search: query}});
  }
}
