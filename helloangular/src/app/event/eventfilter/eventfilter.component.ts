import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventfilter',
  template: `
    <input (keyup)="onKeyUpMtd($event)"/>
    <input (keyup.enter) = "onKeyEnter()"/>
  `,
  styleUrls: ['./eventfilter.component.css']
})
export class EventfilterComponent implements OnInit {
  // First INPUT : The normal way of passing event object
  // Second INPUT : Better way to do the same angular
  // by tracking key event instead of hard coding keycode values like 13
  constructor() { }

  ngOnInit() {
  }

  onKeyUpMtd($event) {
    if($event.keyCode === 13) {console.log("ENTER KEY is pressed");}
  }

  onKeyEnter() {
    console.log("ENTER KEY is pressed");
  }

}
