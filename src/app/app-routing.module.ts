import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import  { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsToolbarComponent } from './news/news-toolbar/news-toolbar.component';
import { NewsFilterComponent } from './news/news-toolbar/news-filter/news-filter.component';


const routes: Routes = [
  /* {
    path: '404',
    component: 404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: 500Component,
    data: {
      title: 'Page 500'
    }
  }, */
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'news',
    component: NewsEditComponent,
    children: [
      {
        path: 'edit',
        component: NewsEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
