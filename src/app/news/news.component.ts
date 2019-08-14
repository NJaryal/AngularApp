import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../auth/_models';
import { UserService } from '../auth/_services';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  currentUser: User;
    users: User[] = [];

  constructor(private userService: UserService) { 
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
