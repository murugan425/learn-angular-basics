import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  template: `
    <button [style.backgroundColor] = "'RED'">SAVE COLOR</button>
  `,
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
