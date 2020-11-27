import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { FoodState, LoadFood } from '../models/food.redux';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private store: Store) { }

  loadAllFood(){
    var food =  [
      {
        id: 1, 
        name: "Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "http://lorempixel.com/800/800/food/1"
      },
      {
        id: 2,
        name:"Alcohol",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "http://lorempixel.com/800/800/food/2"
      },
      {
        id: 3,
        name: "BBQ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "http://lorempixel.com/800/800/food/3",
        promo: "2X1"
      }
    ];

    this.store.dispatch(new LoadFood(food));
  }

  getAllFood(){
    this.loadAllFood();
    return this.store.select(FoodState.getAllFood);
  }
}
