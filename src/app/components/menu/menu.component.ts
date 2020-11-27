import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category.interface';
import { IFood } from 'src/app/interfaces/food.interface';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  category: ICategory;
  food: IFood[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private categoryService: CategoryService, private foodService: FoodService) { }
  
  ngOnInit(): void {    
    this.foodService.getAllFood().subscribe((next) => {
      this.food = next;
    });
    this.getParams();
  }

  async getParams(): Promise<void> {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.categoryService.getAllCategories().subscribe((next) => {
        this.category = next.find((item) => item.name === params.category);
        if(this.category == undefined) {this.router.navigate(['']);}
      });
    });
  }
}
