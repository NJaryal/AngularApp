
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.css']
})
export class NewsFilterComponent implements OnInit {
  @Input() result = '';
  @Output() clicked = new EventEmitter<string>();
  private searchText: any;
  private data: any;
  discoverClicked(){
    // do the thing
    this.data = this.searchText;
}

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadNews() {
    this.router.navigate(['/news/create']);
  }

  onClick(searchTerm: string) {
    this.clicked.emit(searchTerm);
  }

}
