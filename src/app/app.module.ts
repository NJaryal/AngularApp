import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers'; // create fake backend
import { FilterPipe } from './../utilities/pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsToolbarComponent } from './news/news-toolbar/news-toolbar.component';
import { NewsFilterComponent } from './news/news-toolbar/news-filter/news-filter.component';
import { NewsComponent } from './news/news.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewsCreateComponent } from './news/news-create/news-create.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthService, UserService } from './auth/_services';
import { AlertComponent } from './common/_directives';
import { RegisterComponent } from './register/register.component';
import { NewsserverService } from './shared/newsserver.service';

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
    NewsCreateComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    NewsserverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
