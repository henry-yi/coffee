import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public displayForm:boolean;
  public workOrderForm:FormGroup;

  constructor(private _formBuilder:FormBuilder, private _formService:FormService) { }

  ngOnInit() {
    this.workOrderForm = this._formBuilder.group({
      coffee: [null, Validators.required],
      brew_method: [null, Validators.required],
      ship_date: [null, Validators.required],
      number_of_cases: [null, Validators.required],
      packets_per_case: [null, Validators.required],
      notes: null,
      priority: false
    })
  }

  private destroyForm() : void {
    this.displayForm = false;
  }

  private save() : void {
    this._formService.saveOrders(this.workOrderForm.value).subscribe((data)=>{
      console.log(data);
      this.displayForm = false;      
    });
  }
}
