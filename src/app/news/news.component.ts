import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../auth/_models';
import { UserService } from '../auth/_services';
import { NewsserverService } from '../shared/newsserver.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  searchText: any;
  @Input() searchTerm: string;
  @Input('data')
  set data(data: any) {
    this.searchText = data;
  }

  constructor(private userService: UserService, private newsService: NewsserverService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

}
