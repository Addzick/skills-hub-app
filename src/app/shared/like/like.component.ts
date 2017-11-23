import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() like:any;
  @Input() mode: string;
  
  constructor() { }

  ngOnInit() {
  }

}
