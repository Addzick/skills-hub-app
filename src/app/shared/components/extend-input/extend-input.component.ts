// Angular modules
import { Component, Input, OnChanges, OnInit,  } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './extend-input.component.html',
})
export class ExtendInputComponent implements OnInit, OnChanges {
  @Input() public label: string = '';
  @Input() public errors: any;
  @Input() public messages: any;
  
  public error: string = '';
  constructor() { }


  ngOnInit() {
  }
  
  ngOnChanges(changes: any): void {
    const err: any = 
      typeof changes !== 'undefined' && changes.errors && typeof changes.errors !== 'undefined' && changes.messages && typeof changes.messages !== 'undefined'
      ? changes.errors.currentValue 
      : '';
    
    this.error = ''; 
    if (err) {
      Object.keys(err || {}).some(key => {
        if(err[key]) {
          this.error = this.messages[key];
          return true;
        }
      });
    }
  }
}
