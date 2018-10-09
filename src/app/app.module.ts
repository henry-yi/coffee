import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

import { DateService } from './shared/services/date.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
