// Angular modules
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Response } from '@angular/http';

@Injectable()
export class FormService {

    constructor(private formBuilder: FormBuilder) { }

    createFormGroup(controls:  { [key: string]: any; }, extra?: { [key: string]: any; } | null) : FormGroup {
        return this.formBuilder.group(controls);
    }
   
    setFormGroupValues(group: FormGroup, obj: any) {
        const fields = Object.keys(obj || {});
        fields.forEach((field) => {
            const control = group.controls[field];
            if (control) { 
                control.setValue(obj[field]); 
            }
        });
    }
    
    setFormGroupErrors(group: FormGroup, err: Response) {
        const errors = err.json().errors;
        const fields = Object.keys(errors || {});
        fields.forEach((field) => {
            const control = group.controls[field];
            if (control) {
                control.setErrors({ 'remote': errors[field] });
            }
        });
    }

    getFormGroupValues(group: FormGroup, obj: any) {
        const fields = Object.keys(obj || {});
        fields.forEach((field) => {
            const control = group.controls[field];
            if (control) { 
                obj[field] = control.value; 
            }
        });
    }
}
