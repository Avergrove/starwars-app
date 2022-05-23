import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetaObject, ItemObject, PeopleMeta, FilmMeta , SpeciesMeta, StarshipMeta, VehicleMeta, PlanetMeta} from './model'
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'starwars';

  category = "";
  items !: ItemObject[];
  item !: ItemObject;


  @ViewChild('categories')
  categories: CategoriesComponent = new CategoriesComponent;
  @ViewChild('categoryItems')
  categoryItems: CategoryItemsComponent = new CategoryItemsComponent;
  @ViewChild('itemDetails')
  itemDetails: ItemDetailsComponent = new ItemDetailsComponent;
  canBack = false;
  appPage = 1;


  constructor(private http: HttpClient) { };

  loadCategory($event: string) {
    this.category = $event;
    this.items = [];

    switch ($event) {
      case "Characters":
        this.http.get<PeopleMeta>('https://swapi.dev/api/people/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "people";
            this.items.push(element);
          });
        })
        break;

      case "Films":
        this.http.get<FilmMeta>('https://swapi.dev/api/films/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "film"
            this.items.push(element);
          });
        })
        break;


      case "Species":
        this.http.get<SpeciesMeta>('https://swapi.dev/api/species/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "species"
            this.items.push(element);
          });
        })
        break;


      case "Starships":
        this.http.get<StarshipMeta>('https://swapi.dev/api/starships/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "starship";
            this.items.push(element);
          });
        })
        break;


      case "Vehicles":
        this.http.get<VehicleMeta>('https://swapi.dev/api/vehicles/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "vehicle";
            this.items.push(element);
          });
        })
        break;


      case "Planets":
        this.http.get<PlanetMeta>('https://swapi.dev/api/planets/').subscribe((data) => {
          data.results.forEach((element, index) => {
            element.category = "planet";
            this.items.push(element);
          });
        })
        break;

      default:
        break;
    }

    // Handle page metainfo
    this.canBack = true;
    this.appPage++;

  }

  loadItem($event: any){
    this.item = $event;
    this.appPage++;
  }

  // Goes back one page.
  pageBack(){

    if(this.appPage == 2){
      this.categories.toggleState();
      this.categoryItems.toggleState();
    }

    else if(this.appPage == 3){
      this.categoryItems.toggleState();
      this.itemDetails.toggleState();
    }

    this.appPage--;
    if(this.appPage <= 1){
      this.canBack = false;
    }
  }

}
