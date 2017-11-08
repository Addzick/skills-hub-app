// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Core service
import { AuthService } from '../services/auth.service';

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
    this.auth.logout().subscribe(res => {
      this.router.navigateByUrl('/');
    });
  }
}
