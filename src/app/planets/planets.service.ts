import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';

@Injectable()
export class PlanetsService {

  url = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) {
  }

  getById(id: string): Observable<string> {
    return this.http.get<string>(this.url + id);
  }

  getByPage(page: number): Observable<string> {
    return this.http.get<string>(this.url, {params: {page: String(page)}});
  }

  search(query: string): Observable<string> {
    return this.http.get<string>(this.url, {params: {search: query}});
  }
}
