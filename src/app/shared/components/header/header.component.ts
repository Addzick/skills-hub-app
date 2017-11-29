// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Skills-hub services
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout(
      this.router.navigateByUrl('/'),
      console.error);
  }
}
