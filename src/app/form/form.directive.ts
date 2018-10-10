import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: "[app-form-host]"
})
export class FormDirective {
    constructor(public viewContainerRef:ViewContainerRef) {
        
    }
}