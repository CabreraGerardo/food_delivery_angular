import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { FoodState, LoadFood } from '../models/food.redux';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private store: Store) { }

  i: number = 1;

  loadAllFood(){
    var food =  [
      {
        id: 1, 
        name: "Pizza de Pepperoni",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i++,
        category: {id: 1, name: "Pizza"},
        promo: "2X1",
      },
      {
        id: 2,
        name:"Tequila",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i++,
        category: {id: 2, name: "Alcohol"}
      },
      {
        id: 3,
        name: "Pollo a la BBQ",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i++,
        category: {id: 3, name: "BBQ"}
      },
      {
        id: 4, 
        name: "Pizza Hawaiana",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i++,
        category: {id: 1, name: "Pizza"}
      },
      {
        id: 5,
        name: "Hamburgesa BBQ",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i++,
        category: {id: 3, name: "BBQ"},
        promo: "2X1"
      },      
      {
        id: 6, 
        name: "Pizza Vegetariana",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i++,
        category: {id: 1, name: "Pizza"}
      },
      {
        id: 7,
        name:"Vodka",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i++,
        category: {id: 2, name: "Alcohol"}
      },
      {
        id: 8,
        name:"Bacardi",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i++,
        category: {id: 2, name: "Alcohol"},
        promo: "2X1"
      },
      {
        id: 9,
        name:"Rollos Primavera",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i++,
        category: {id: 4, name: "Sushi"}
      },
      {
        id: 10,
        name:"Spaggethi a la Bolgnesa",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i--,
        category: {id: 5, name: "Pasta"},
        promo: "2X1"
      },
      {
        id: 11,
        name:"Arrachera",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i--,
        category: {id: 6, name: "Gourmet"}
      },      
      {
        id: 12,
        name:"Penne al Burro",
        price: 52.0,
        image: "http://lorempixel.com/800/800/food/" + this.i--,
        category: {id: 5, name: "Pasta"}
      },
    ];

    this.store.dispatch(new LoadFood(food));
  }

  getAllFood(){
    this.loadAllFood();
    return this.store.select(FoodState.getAllFood);
  }
}
