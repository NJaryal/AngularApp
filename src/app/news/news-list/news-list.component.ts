import { Component, OnInit, Input } from '@angular/core';
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
  searchText: any;
  @Input() searchTerm: string;
  @Input('data')
  set data(data: any) {
    this.searchText = data;
  }

  constructor(private newsApi: NewsService) {}

  ngOnInit() {
    this.newsApi.getNews().subscribe((resp) => this.articles = resp);
  }
}
