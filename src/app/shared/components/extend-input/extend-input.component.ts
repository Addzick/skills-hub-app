// Angular modules
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './extend-input.component.html',
})
export class ExtendInputComponent implements OnChanges, OnInit {
  @Input() public label: string = '';
  @Input() public errors: any;
  @Input() public handle: AbstractControl
  
  public error: string = '';
  constructor() { }


  ngOnInit() {
  }
  
  ngOnChanges(changes: any): void {
    const err: any = 
      typeof changes !== 'undefined' && typeof changes.errors !== 'undefined' 
      ? changes.errors.currentValue 
      : '';
    
    this.error = ''; 
    if (err) {
      Object.keys(err || {}).some(key => {
        if(err[key]) {
          this.error = this.errors[key];
          return true;
        }
      });
    }
  }

  hasError() {
    return this.handle.touched && this.handle.invalid && this.error !== '';
  }
}
