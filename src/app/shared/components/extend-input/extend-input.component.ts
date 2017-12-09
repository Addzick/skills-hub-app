import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './extend-input.component.html',
})
export class ExtendInputComponent implements OnChanges {
  @Input() public label: String = '';
  @Input() public defs: any;
  @Input() public errors: any;
  error: String = '';

  constructor() { }

  ngOnChanges(changes: any): void {
    const err: any = 
    typeof changes !== 'undefined' && typeof changes.errors !== 'undefined' 
    ? changes.errors.currentValue
    : '';
    this.error = '';
    if (err) {
      Object.keys(this.defs).some(key => {
        if (err[key]) {
          this.error = this.defs[key];
          return true;
        }
      });
    }
  }

  hasError() {
    return this.error !== '';
  }

}
