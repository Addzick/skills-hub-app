// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Skills-hub services
import { AuthService } from '../../core/auth.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public layout: LayoutService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().subscribe(res => {
      this.router.navigateByUrl('/');
    });
  }
}
