// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Skills-hub services
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
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
