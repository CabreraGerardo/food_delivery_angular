import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category.interface';
import { IFood } from 'src/app/interfaces/food.interface';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: ICategory[];
  food: IFood[];

  constructor(private categoryService: CategoryService, private foodService: FoodService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((next) => {
      console.log(next);
      this.categories = next;
    });

    this.foodService.getAllFood().subscribe((next) => {
      console.log(next);
      this.food = next;
    });
  }
}
