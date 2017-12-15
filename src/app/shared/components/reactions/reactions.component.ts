// Angular stuff
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent implements OnInit {
  @Input() nbComments: number;
  @Input() nbLikes: number;

  constructor() { }

  ngOnInit() {
  }

}
