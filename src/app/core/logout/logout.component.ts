import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
      this.auth.logout().subscribe(res => {
        this.router.navigateByUrl('/home');
      });
    }

}
