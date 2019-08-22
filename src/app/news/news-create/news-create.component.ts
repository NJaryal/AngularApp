import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {
  createNewsForm: FormGroup;
  submitted = false;
  selectedNewsItem;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private newsAPIService: NewsService) { }

  ngOnInit() {
    const index = parseInt(this.route.snapshot.params.index);
    this.selectedNewsItem = this.newsAPIService.newsArticles.articles[index];
    console.log(this.selectedNewsItem);
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
  onSubmit() {
    this.submitted = true;
    console.log(this.createNewsForm.value);
  }

}

