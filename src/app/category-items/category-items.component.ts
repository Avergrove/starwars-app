import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Category, Item } from '../models/model';
import * as CategoryConstants from '../common/categoryConstants'

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnChanges{

  @Input()
  category !: Category<Item>;
  
  @Output() 
  onCategoryItemSelectedEvent = new EventEmitter<Item>();

  displayCategory : string = "";
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

  ngOnChanges(changes: SimpleChanges): void {
    if(this.category !== undefined){
      this.displayCategory = CategoryConstants.mapCategoryToDisplayStrings(this.category.categoryType)
    }
  }
}
