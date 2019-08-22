import { Component, OnInit, Input } from '@angular/core';
import { News, Articles } from '../news';
import { NewsService } from '../news.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  articles: News;
  filterArticles: Articles[];
  searchText: any;
  @Input() searchTerm: string;
  @Input('data')
  set data(data: any) {
    this.searchText = data;
  }

  localNews: boolean;
  newsArticleSubscription: Subscription;
  constructor(private newsApi: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsArticleSubscription = this.newsApi.newsArticlesSubject.subscribe((res: any) => {
      this.localNews = this.newsApi.isLocalNews;
      this.articles = res;
    });
  }

  editNews(index) {
    this.router.navigate(['/news/edit/' + index]);
  }
}
