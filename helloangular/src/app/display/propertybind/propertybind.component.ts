import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybind',
  template: `
    <h2>{{title}}</h2>
    <!-- <h2 [textContent] = 'title'></h2> <!-- String Interpolation = Too much lengthy -->

    <!-- <img src = '{{imageUrl}}' /> -->
    <img [src] = 'imageUrl' /> <!-- Property Binding = Short & Clean alternative -->
  `,
  styleUrls: ['./propertybind.component.css']
})
export class PropertybindComponent implements OnInit {
  title = 'Sample Image - PROPERTY BINDING';
  imageUrl = 'http://dummyimage.com/400x200/87CEEB/FFFFFF';

  constructor() { }

  ngOnInit() {
  }

}
