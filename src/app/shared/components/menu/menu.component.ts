// Angular stuff
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// Skills-hub services
import { AuthService } from '../../../core/auth.service';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('sidebar') sidebar;

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout(
      () => { this.sidebar.close(); this.router.navigateByUrl('/'); },
      (err) => console.error('Une erreur s\'est produite lors de la tentative de déconnexion'));
  }
}
