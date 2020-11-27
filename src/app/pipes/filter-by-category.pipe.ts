import { Pipe, PipeTransform } from '@angular/core';
import { IFood } from '../interfaces/food.interface';

@Pipe({
    name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
    transform(array: IFood[], category: string, ): any {
        return array.filter((item) => item.category.name === category);
    }
}