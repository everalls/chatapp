import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChatdataService } from '../chatdata.service';
import { User} from '../user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  theId: string;
  user: User;
  msgText: string;

  constructor(
    private route: ActivatedRoute,
    private chatDataService: ChatdataService,
    private location: Location
  ) {}

  getId(): void {
    this.theId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.chatDataService.getUser(id)
      .subscribe(user => this.user = user);
  }
  newMsg(): void {
    if (this.msgText !== '' && this.msgText !== undefined) {
      this.user.msgs.unshift({mtext: this.msgText, incoming: true});
      // console.log('text :' + this.msgText);
      this.msgText = '';
    }
  }
}
