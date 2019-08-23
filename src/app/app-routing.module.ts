import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewsCreateComponent } from './news/news-create/news-create.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/auth/_guards';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'news/create',
    component: NewsCreateComponent,
  },
  {
    path: 'news/edit/:index',
    component: NewsCreateComponent,
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found' }
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
