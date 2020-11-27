import { ICategory } from './category.interface';

export interface IFood{
    id: number,
    name: string,
    price: number,
    image?: string,
    promo?: string,
    category: ICategory
}