import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  title = 'Sample Image';
  imageUrl = 'http://dummyimage.com/400x200/87CEEB/FFFFFF';
  constructor() {}
}
