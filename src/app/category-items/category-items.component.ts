import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, Item } from '../models/model';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent{

  @Input()
  category !: Category<Item>;
  
  @Output() 
  onCategoryItemSelectedEvent = new EventEmitter<Item>();

  activeState = false;
  
  // Triggered on click
  onCategoryItemClick(itemClicked : Item){
      this.displayItem(itemClicked);
  }

  displayItem(item: Item){
    this.onCategoryItemSelectedEvent.emit(item);
  }

  setState(doEnable : boolean){
    this.activeState = doEnable;
  }
}
