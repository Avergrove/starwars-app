import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})

export class CategoriesComponent{

  @Output() categorySelectedEvent = new EventEmitter();
  activeState = true;  

  constructor() { }

  onCategoryClick(arg: any) {
    this.categorySelectedEvent.emit(arg);
  }

  public setState(doEnable : boolean){
    this.activeState = doEnable;
  }
}
