import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-category-circle',
  templateUrl: './category-circle.component.html',
  styleUrls: ['./category-circle.component.css']
})
export class CategoryCircleComponent implements OnInit {
  @Input() category: ICategory;

  constructor() { }

  ngOnInit(): void {
  }

}
