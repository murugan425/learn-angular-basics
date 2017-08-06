import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbind',
  template: `
    <button class='btn btn-primary' [class.active]="isactive">SAVE</button>
    <button class='btn btn-primary' [class.active]="!isactive">SAVE</button>
  `,
  styleUrls: ['./classbind.component.css']
})
export class ClassbindComponent implements OnInit {

  isactive = true;

  constructor() { }

  ngOnInit() {
  }

}
