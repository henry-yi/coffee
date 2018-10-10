import { Component, OnInit, ComponentFactoryResolver, ViewChild, ComponentRef } from '@angular/core';
import { FormDirective } from '../form/form.directive';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(FormDirective) public formHost:FormDirective;
  private currentDate:any;
  private display:boolean;

  constructor(private _componentFactoryResolver:ComponentFactoryResolver) { }

  public ngOnInit() {
    // Sets date to UTC...
    this.currentDate = Date.now();
  }

  private showDialog() : void {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(FormComponent);
    const viewContainerRef = this.formHost.viewContainerRef;

    let component = viewContainerRef.createComponent(componentFactory);

    this.initFormComponent(component);
  }

  private initFormComponent(component:ComponentRef<any>) : void {
    component.instance.displayForm = true;
  }
}
