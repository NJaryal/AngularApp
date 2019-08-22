
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { News, Articles } from '../../news';
import { NewsService } from '../../news.service';
import { NewsserverService } from '../../../shared/newsserver.service';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.css']
})
export class NewsFilterComponent implements OnInit {
  articles: News;
  @Input() result = '';
  @Output() clicked = new EventEmitter<string>();
  private searchText: any;
  private data: any;
  newsSource = ['Worlwide News', 'Local News'];
  localNews: boolean;
  discoverClicked() {
    this.data = this.searchText;
  }

  constructor(private router: Router, private newsApi: NewsService, private newsService: NewsserverService) { }

  ngOnInit() {
    this.newsApi.getNews();
  }

  onLoadNews() {
    this.router.navigate(['/news/create']);
  }

  onClick(searchTerm: string) {
    this.clicked.emit(searchTerm);
  }

  onNewsSelection(val) {
    if (val === 'Worldwide News') {
      this.newsApi.isLocalNews = false;
    } else if (val === 'Local News') {
      this.newsApi.isLocalNews = true;
      this.newsApi.getLocalNews();
    }
  }

}
