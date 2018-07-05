import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChatdataService } from '../chatdata.service';
import { User} from '../user';


@Component({
  selector: 'app-finfo',
  templateUrl: './finfo.component.html',
  styleUrls: ['./finfo.component.css']
})
export class FinfoComponent implements OnInit {

  theId: string;
  user: User;

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
}
