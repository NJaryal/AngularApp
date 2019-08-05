import { Component, OnInit } from '@angular/core';
import { News , Articles} from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  articles: News;
  filterArticles: Articles[];

  constructor(private newsApi: NewsService) {}

  ngOnInit() {
    this.newsApi.getNews().subscribe((resp) => this.articles = resp);
  }

  onClicked(value: string) {
    if (value! = '') {
    this.filterArticles = this.articles.articles.filter(res => res.author.startsWith(value));
    } else {
      this.newsApi.getNews().subscribe(
          (data) => {
            this.articles = data;
          }
        );
    }
  }
}
