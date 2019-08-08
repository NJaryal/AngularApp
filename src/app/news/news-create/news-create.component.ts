import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {
  createNewsForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createNewsForm = this.formBuilder.group({
      Heading: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      shortDescription: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(36)]],
      Content: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(36)]],
      Date: ['', [Validators.required]],
      Author: ['', [Validators.required, Validators.minLength(6)]],
      sourceUrl: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.createNewsForm.value);
  }

}

