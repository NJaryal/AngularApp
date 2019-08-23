import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() selectedNewsItem: EventEmitter<Articles>;

  localNews: boolean;
  newsArticleSubscription: Subscription;
  constructor(private newsApi: NewsService, private router: Router) {
    this.selectedNewsItem = new EventEmitter<Articles>();

   }

  ngOnInit() {
    this.newsArticleSubscription = this.newsApi.newsArticlesSubject.subscribe((res: any) => {
      this.localNews = this.newsApi.isLocalNews;
      this.articles = res;
    });
  }

  editNews(newItem: Articles) {
    //this.router.navigate(['/news/edit/' + index]);
    this.newsApi.shouldDisplayEdit = true;
    this.selectedNewsItem.emit(newItem);
    // this.newsApi.selectedNewsIndex = index;
  }

  delteNews(newsItem: any) {
    this.newsApi.deleteNewsItem(newsItem).subscribe((res) => {
      this.newsApi.getLocalNews();
      alert('news item deleted');
    });
  }
}
