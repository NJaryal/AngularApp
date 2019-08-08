import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewsCreateComponent } from './news/news-create/news-create.component';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'news/create',
    component: NewsCreateComponent,

  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
    data: {message: 'Page not found'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
