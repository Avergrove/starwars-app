import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Film, Item, People, Planet, Species, Starship, Vehicle } from '../models/model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnChanges{

  @Input() item !: Item;
  @Input() currCategory !: string;

  imageUrl !: String;
  activeState = false;

  ngOnChanges(changes: SimpleChanges): void {

    if (this.item !== undefined) {
      var itemId = this.item.url.match('^.*/([0-9]*)/$')![1];

      switch (this.currCategory) {
        case 'people':
          this.imageUrl = "https://starwars-visualguide.com/assets/img/characters/" + itemId + ".jpg";
          break

        case 'film':
          this.imageUrl = "https://starwars-visualguide.com/assets/img/films/" + itemId + ".jpg";
          break;

        case 'species':
          this.imageUrl = "https://starwars-visualguide.com/assets/img/species/" + itemId + ".jpg";
          break;

        case 'starship':
          this.imageUrl = "https://starwars-visualguide.com/assets/img/starships/" + itemId + ".jpg";
          break;

        case 'vehicle':
          this.imageUrl = "https://starwars-visualguide.com/assets/img/vehicles/" + itemId + ".jpg";
          break;

        case 'planet':
          this.imageUrl = "https://starwars-visualguide.com/assets/img/planets/" + itemId + ".jpg";
          break;

        default:
          break;
      }
    }
  }

  ngOnInit() {

  }

  onPageArrival() {

  }

  setState(doEnable: boolean) {
    this.activeState = doEnable;
  }

}
