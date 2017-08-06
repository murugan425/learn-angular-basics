import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebind',
  template: `
    <button [style.backgroundColor] = "'RED'">SAVE COLOR</button>
  `,
  styleUrls: ['./stylebind.component.css']
})
export class StylebindComponent implements OnInit {
  isactive = true;

  constructor() { }

  ngOnInit() {
  }

}
