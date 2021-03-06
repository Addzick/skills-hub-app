// Angular stuff
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// Skills-hub services
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isOpen = false;

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
