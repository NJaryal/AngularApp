import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsserverService {
  selectedNews: News;
  news: News[];
  baseUrl = 'http://localhost:3000/news';

  constructor(private http: HttpClient) { }

  postNews(newObj: News) {
    return this.http.post(this.baseUrl, newObj)
  }
}
