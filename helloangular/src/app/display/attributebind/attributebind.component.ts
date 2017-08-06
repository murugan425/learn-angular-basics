import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebind',
  template: `
    <table>
      <tr>
        <!-- <td [colspan] = 'colspanVal'></td> <!-- Results in error as there is not such property -->
        <!-- So, target the html attribute instead fo dom object property -->
        <td [attr.colspan] = 'colspanVal'> <h2> TABLE TD - ATTRIBUTE BINDING </h2> </td>
      </tr>
    </table>
  `,
  styleUrls: ['./attributebind.component.css']
})
export class AttributebindComponent implements OnInit {

  // Know the difference between the DOM Property and HTML Attribute.
  // There is mostly one to one mapping between each other, but there are certain cases,
  // where a DOM property is not having any valid HTML attribute and vice-versa.

  // In such cases, we will get the below error in console,
  // Uncaught Error: Template parse errors:
  // Can't bind to 'colspan' since it isn't a known property of 'td'. ("

  colspanVal = 3;

  constructor() { }

  ngOnInit() {
  }

}
