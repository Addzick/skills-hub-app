// Angular stuff
import { Component, OnInit } from '@angular/core';

// Skills-hub services
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public today = Date.now();

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
