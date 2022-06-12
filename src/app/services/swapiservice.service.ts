import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, Category } from '../models/model'
import * as CategoryConstants from '../common/categoryConstants'

@Injectable({
  providedIn: 'root'
})
export class SWAPIService {

  constructor(private http: HttpClient) { };

  /**
   * Fetches a Category of items given a category string
   * @param category The category of items to search for
   * @returns A promise for a category of items
   */
  fetchFromAPI(category:CategoryConstants.Category) : Promise<Category<Item>>{
    let apiPromise = new Promise<Category<Item>>((resolve, reject) => {
      this.http.get<Category<Item>>(CategoryConstants.mapCategoryToAPIURL(category)!).subscribe((data) => {
        var fetchedObject = {
          categoryType : category,
          count: data.count,
          next: data.next,
          previous: data.previous, 
          results: data.results
        }
    
        resolve(fetchedObject)
      })
    })

    return apiPromise;
  }
}
