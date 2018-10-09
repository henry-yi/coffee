import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private currentDate:any;
  private display:boolean;

  constructor() { }

  public ngOnInit() {
    // Sets date to UTC...
    this.currentDate = Date.now();
  }

  private showDialog() : void {
    this.display = true;
  }
}
