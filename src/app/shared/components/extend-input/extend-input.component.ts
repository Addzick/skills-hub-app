// Angular modules
import { Component, Input, OnChanges  } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './extend-input.component.html',
})
export class ExtendInputComponent implements OnChanges {
  @Input() labelText:string = '';
  @Input() inputErrors:any;
  @Input() errorsDefs:any;

  errorMessage:string = '';
  
  ngOnChanges(changes:any):void {
    var errors = 
    typeof changes !== 'undefined' && typeof changes.inputErrors !== 'undefined' && typeof this.errorsDefs !== 'undefined'
    ? changes.inputErrors.currentValue
    : undefined;

    this.errorMessage = '';
    if (errors) {
      Object.keys(this.errorsDefs).some(key => {
        if (errors[key]) {
          this.errorMessage = this.errorsDefs[key];
          return true;
        }
      });
    }
  }
}
