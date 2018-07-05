import { Component, OnInit } from '@angular/core';
import { ChatdataService } from '../chatdata.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private chatdataService: ChatdataService) { }

  getUsers(): void {
    this.chatdataService.getUsers()
        .subscribe(users => this.users = users);
  }

  ngOnInit() {
     this.getUsers();
  }

}
