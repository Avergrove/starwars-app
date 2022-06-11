import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, Category } from './model';

@Injectable({
  providedIn: 'root'
})
export class SWAPIService {

  constructor(private http: HttpClient) { };

  fetchFromAPI(category: string) : Promise<Category<Item>>{
    let apiPromise = new Promise<Category<Item>>((resolve, reject) => {
        // Call an API
      this.http.get<Category<Item>>(this.urlMappings.get(category)!).subscribe((data) => {
        var fetchedObject = {
          category : category,
          count: data.count,
          next: data.next,
          previous: data.previous, 
          results: data.results
        }
    
        resolve(fetchedObject)
      })
    })

    // return {category: "", count: "", next: "", previous: "", results: []};
    return apiPromise;
  }

  private urlMappings = new Map<string, string>([
    ["people", "https://swapi.dev/api/people/"],
    ["film", "https://swapi.dev/api/films/"],
    ["species", "https://swapi.dev/api/species/"],
    ["starships", "https://swapi.dev/api/starships/"],
    ["vehicle", "https://swapi.dev/api/vehicles/"],
    ["planet", "https://swapi.dev/api/planets/"],
  ]);
}
