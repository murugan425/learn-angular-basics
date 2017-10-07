import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  template: `
  <div>
    <button (click) = onSaveEvent()>SAVE ACTION</button>
  </div>
  `,
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSaveEvent() { console.log('Save Action button is clicked')};
}
