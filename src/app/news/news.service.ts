import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  newsUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=33c57abfe85847ae9babd0be138a96b8';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News> {
    return this.http.get<News>(`${this.newsUrl}`);
  }
}
