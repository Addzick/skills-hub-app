// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Skills-hub services
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout(
      () => this.router.navigateByUrl('/'),
      (err)=> console.error(err));
  }
}
