import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})

export class CategoriesComponent implements OnInit {

  @Output() categorySelect = new EventEmitter();
  activeState = true;  

  constructor() { }

  ngOnInit() {
  }

  displayItems(arg: any) {
    this.categorySelect.emit(arg);
    this.toggleState();
  }

  public toggleState(){
    this.activeState = !this.activeState;
  }

}
