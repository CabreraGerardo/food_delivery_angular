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
        name: "Pizza de Pepperoni",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/1",
        category: {id: 1, name: "Pizza"}
      },
      {
        id: 2,
        name:"Tequila",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/2",
        category: {id: 2, name: "Alcohol"}
      },
      {
        id: 3,
        name: "Pollo a la BBQ",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/3",
        promo: "2X1",
        category: {id: 3, name: "BBQ"}
      },
      {
        id: 4, 
        name: "Pizza Hawaiana",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/1",
        category: {id: 1, name: "Pizza"}
      },
      {
        id: 5,
        name: "Hamburgesa BBQ",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/3",
        promo: "2X1",
        category: {id: 3, name: "BBQ"}
      },      
      {
        id: 6, 
        name: "Pizza Vegetariana",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/1",
        category: {id: 1, name: "Pizza"}
      },
      {
        id: 7,
        name:"Vodka",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/2",
        category: {id: 2, name: "Alcohol"}
      },
    ];

    this.store.dispatch(new LoadFood(food));
  }

  getAllFood(){
    this.loadAllFood();
    return this.store.select(FoodState.getAllFood);
  }
}
