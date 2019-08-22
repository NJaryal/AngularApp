import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { News } from '../news/news';

@Injectable({
  providedIn: 'root'
})
export class NewsserverService {
  selectedNews: News;
  news: News[];
  baseUrl = 'http://localhost:3000/news';
  //baseUrl = 'http://10.245.129.44:3000/news';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News> {
    return this.http.get<News>(`${this.baseUrl}`);
  }

  /* postNews(newObj: News): {
    return this.http.post(this.baseUrl, newObj);
  } */

  /* updateNews(newObj: News) {
    return this.http.put(this.baseUrl, newObj);
  }

  deleteNews(newObj: News) {
    return this.http.delete(this.baseUrl);
  } */

  /* modifyNews(){
    //args newObj, action[delete| update| new],
  } */
}
