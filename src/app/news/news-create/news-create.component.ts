import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';
import { Articles } from '../news';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsCreateComponent implements OnInit, OnChanges {
  @Input() selectedNewsItem:Articles;
  createNewsForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private newsAPIService: NewsService, private router: Router) { }

  ngOnInit() {
    this.loadForm();
  }

  ngOnChanges() {
    this.loadForm();
  }

  private loadForm() {
    this.createNewsForm = this.formBuilder.group({
      title: [this.selectedNewsItem ?
        this.selectedNewsItem.title : '',
      [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]],
      description: [this.selectedNewsItem ?
        this.selectedNewsItem.description : '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(36)]],
      content: [this.selectedNewsItem ?
        this.selectedNewsItem.content : '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(36)]],
      publishedAt: [this.selectedNewsItem ?
        this.selectedNewsItem.publishedAt : '',
      [Validators.required]],
      author: [this.selectedNewsItem ?
        this.selectedNewsItem.author : '',
      [Validators.required, Validators.minLength(6)]],
      url: [this.selectedNewsItem ?
        this.selectedNewsItem.url : '',
      [Validators.required]],
      urlToImage: [this.selectedNewsItem ?
        this.selectedNewsItem.urlToImage : '',
      [Validators.required]],
    });
  }

  saveItem() {
    if (this.selectedNewsItem) {
      this.createNewsForm.value._id = this.selectedNewsItem._id;
      this.newsAPIService.updateNewsItem(this.createNewsForm.value).subscribe((res) => {
        this.router.navigate(['/news']);
        console.log(res);
      });
    } else {
      this.newsAPIService.addNewsItem(this.createNewsForm.value).subscribe((res) => {
        this.router.navigate(['/news']);
      });
    }
  }

}

