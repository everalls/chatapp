import { Component, OnInit } from '@angular/core';
import { ChatdataService } from '../chatdata.service';
import { User } from '../user';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  sideBarState = false; // side bar non-visible by default
  users: User[];
  constructor(private chatdataService: ChatdataService) { }

  getUsers(): void {
    this.chatdataService.getUsers()
        .subscribe(users => this.users = users);
  }

 toggleSideNav(): void {
    const theSideNav = document.getElementById('mySidenav');
    const currSideNavWidth = theSideNav.clientWidth;
    let newSideNavWidth = '0px';
    if (currSideNavWidth > 0) {
        newSideNavWidth = '0px';
    } else {
        newSideNavWidth = '250px';
    }
    theSideNav.style.width = newSideNavWidth;
 }


  ngOnInit() {
     this.getUsers();
  }

}
