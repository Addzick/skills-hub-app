// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/extend-input/extend-input.component';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  constructor(
    private router: Router) {}

     ngOnInit() {}

}
