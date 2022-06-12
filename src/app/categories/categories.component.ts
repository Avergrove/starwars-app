import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {Category} from '../common/categoryConstants'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})

export class CategoriesComponent{

  @Output() categorySelectedEvent = new EventEmitter();
  
  activeState = true;  
  CategoryConstant = Category;

  constructor() { }
  
  onCategoryClick(arg: Category) {
    this.categorySelectedEvent.emit(arg);
  }

  public setState(doEnable : boolean){
    this.activeState = doEnable;
  }
}
