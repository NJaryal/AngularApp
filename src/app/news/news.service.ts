import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  newsUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=33c57abfe85847ae9babd0be138a96b8';
  localNewsUrl = 'http://localhost:3000/news';
  isLocalNews = false;
  newsArticles = [];
  newsArticlesSubject = new Subject();
  constructor(private http: HttpClient) { }

  getNews() {
    this.http.get<News>(`${this.newsUrl}`).subscribe((res: any) => {
      this.newsArticles = res;
      this.newsArticlesSubject.next(this.newsArticles);
    });
  }

  getLocalNews() {
    this.http.get<News>(`${this.localNewsUrl}`).subscribe((res: any) => {
      this.newsArticles = res;
      this.newsArticlesSubject.next(this.newsArticles);
    });
  }
}
