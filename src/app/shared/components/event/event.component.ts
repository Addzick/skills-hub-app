// Angular stuff
import { Component, OnInit, Input } from '@angular/core';

// Core services
import { AuthService } from '../../../core/auth.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  isEventFromCurrentUser() {
    return this.auth.isLoggedIn() && this.event.author.email == this.auth.getCurrentUserName();
  }
}
