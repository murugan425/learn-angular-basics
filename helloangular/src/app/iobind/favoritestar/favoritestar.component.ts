import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favoritestar',
  templateUrl: './favoritestar.component.html',
  styleUrls: ['./favoritestar.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class FavoriteStarComponent implements OnInit {
  // The below annotation binds the property with the view.

  // Alias 'favoriteflag' is used, so that the view is binded using the alias name 
  // there by any change of the property name 'isFavorite' will not have impact in view

  // Recommended to use the alias name in all the other component which are using the favoritestar component
  // This way changing the varible name here, will not have impact in all the other places.
  // However such changes will have impact in the favoritestar template.
  @Input('favoriteflag') isFavorite: boolean = false;
  @Output() marked = new EventEmitter(); //Subscriber/Client/Consumer/Listener Pattern 
  @Output('favoriteclick') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  markFavorite() {
    this.isFavorite = !this.isFavorite;
    this.marked.emit({eventObjVal:this.isFavorite});
    this.change.emit(this.isFavorite);
  }
}

export interface FavoriteEventArgs {
  favoriteVar: boolean
}