import { Component, OnInit, Input } from '@angular/core';
import { Film, ItemObject, People, Planet, Species, Starship, Vehicle } from '../model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item !: ItemObject;

  people = this.item as People;
  film = this.item as Film;
  species = this.item as Species;
  starship = this.item as Starship;
  vehicle = this.item as Vehicle;
  planet = this.item as Planet;


  imageUrl !: String;
  activeState = false;
  debug !: string;

  tweetText = encodeURI("https://avergrove.github.io/gdipsa-starwars-sa46/");



  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { previousValue: string; }) {
    this.debug = changes.previousValue;
    var itemId = this.item.url.match('^.*/([0-9]*)/$')![1];

    switch (this.item.category) {
      case 'people':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/characters/" + itemId + ".jpg";
        this.tweetText = encodeURI(this.tweetText + "\n" + this.item.name + " is my favourite boi!");
        break

      case 'film':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/films/" + itemId + ".jpg";
        this.tweetText = encodeURI(this.tweetText + "\n" + this.item.name + " is my favourite movie!");
        break;

      case 'species':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/species/" + itemId + ".jpg";
        this.tweetText = encodeURI(this.tweetText + "\n" + "Me-sah likey" + this.item.name + "!");
        break;

      case 'starship':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/starships/" + itemId + ".jpg";
        this.tweetText = encodeURI(this.tweetText + "\n" + this.item.name + " is my favourite starsheep!");
        break;

      case 'vehicle':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/vehicles/" + itemId + ".jpg";
        this.tweetText = encodeURI(this.tweetText + "\n" + this.item.name + " is my favourite HOOOOOOOOOOO!");
        break;

      case 'planet':
        this.imageUrl = "https://starwars-visualguide.com/assets/img/planets/" + itemId + ".jpg";
        this.tweetText = encodeURI(this.tweetText + "\n" + this.item.name + " is my favourite planet that totally didn't get obliterated!");
        break;

      default:
        break;
    }


  }

  onPageArrival(){
    this.toggleState();
  }

  toggleState() {
    this.activeState = !this.activeState;
  }

}
