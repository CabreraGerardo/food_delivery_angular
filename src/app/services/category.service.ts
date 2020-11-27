import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ICategory } from '../interfaces/category.interface';
import { CategoryState, LoadCategories } from '../models/category.redux';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private store: Store) { }

  loadAllCategories(){
    var categories =  [
      {
        id: 1, 
        name: "Pizza",
        image: "http://lorempixel.com/500/500/food/1"
      },
      {
        id: 2,
        name:"Alcohol",
        image: "http://lorempixel.com/500/500/food/2"
      },
      {
        id: 3,
        name: "BBQ",
        image: "http://lorempixel.com/500/500/food/3"
      },      
      {
        id: 4,
        name: "Sushi",
        image: "http://lorempixel.com/500/500/food/4"
      },
      {
        id: 5,
        name: "Pasta",
        image: "http://lorempixel.com/500/500/food/5"
      },
      {
        id: 6,
        name: "Gourmet",
        image: "http://lorempixel.com/500/500/food/6"
      }
    ];

    this.store.dispatch(new LoadCategories(categories));
  }

  getAllCategories(){
    this.loadAllCategories();
    return this.store.select(CategoryState.getAllCategories);
  }
}
