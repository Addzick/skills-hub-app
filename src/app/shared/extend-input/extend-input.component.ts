import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'extended-input',
  template: `
<div class="form-group" [class.has-error]="hasError()">
  <label class="control-label">{{text}}</label>
  <ng-content></ng-content>
  <span class="help-block" *ngIf="hasError()">
    {{error}}
  </span>                        
</div>
  `
})
export class ExtendInput implements OnChanges {
  @Input() public text:string = '';
  @Input() public defs:any;
  @Input() public errors:any;
  error:string = '';

  constructor() { }

  ngOnChanges(changes:any):void {
    var err:any = changes.errors.currentValue;
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
