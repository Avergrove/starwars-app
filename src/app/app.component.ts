import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleMeta, FilmMeta , SpeciesMeta, StarshipMeta, VehicleMeta, PlanetMeta, Category, Item} from './models/model'
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { __makeTemplateObject } from 'tslib';
import { SWAPIService } from './services/swapiservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'starwars';

  loadedCategory !: Category<Item>;
  categoryItems !: Category<Item>[];
  selectedCategory : string = "";
  selectedItem !: Item;


  @ViewChild('categories')
  categoriesComponent: CategoriesComponent = new CategoriesComponent;

  @ViewChild('categoryItems')
  categoryItemsComponent: CategoryItemsComponent = new CategoryItemsComponent;

  @ViewChild('itemDetails')
  itemDetailsComponent: ItemDetailsComponent = new ItemDetailsComponent;

  canBack = false;
  private appPage = 0;


  constructor(private http: HttpClient, private swapiService: SWAPIService) { };

  onCategorySelectedEvent($event: any){
    this.loadCategory($event);
    this.incrementPage();
  }

  OnCategoryItemSelectedEvent(itemSelected: Item){
    this.loadItem(itemSelected);
    this.incrementPage();
  }

  private loadCategory($event: string) {
    let category = $event;

    let apiPromise = this.swapiService.fetchFromAPI(category);
    apiPromise.then((response) => {
      this.loadedCategory = response;
      this.selectedCategory = this.loadedCategory.category;
    })
  }

  loadItem(item: Item){
    this.selectedItem = item;
  }

  onPageBack(){
    this.appPage--;
    this.refreshComponentStates();
  }

  incrementPage(){
    this.appPage++;
    this.refreshComponentStates();
  }

  refreshComponentStates(){
    if(this.appPage === 0){
      this.categoriesComponent.setState(true);
      this.categoryItemsComponent.setState(false);
      this.itemDetailsComponent.setState(false);
      this.canBack = false;
    }

    else if(this.appPage === 1){
      this.categoriesComponent.setState(false);
      this.categoryItemsComponent.setState(true);
      this.itemDetailsComponent.setState(false);
      this.canBack = true;
    }

    else if(this.appPage === 2){
      this.categoriesComponent.setState(false);
      this.categoryItemsComponent.setState(false);
      this.itemDetailsComponent.setState(true);
      this.canBack = true;
    }
  }
}