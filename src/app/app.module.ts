import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './../utilities/pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsToolbarComponent } from './news/news-toolbar/news-toolbar.component';
import { NewsFilterComponent } from './news/news-toolbar/news-filter/news-filter.component';
import { NewsComponent } from './news/news.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewsCreateComponent } from './news/news-create/news-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    NewsEditComponent,
    NewsToolbarComponent,
    NewsFilterComponent,
    NewsComponent,
    ErrorPageComponent,
    FilterPipe,
    NewsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
