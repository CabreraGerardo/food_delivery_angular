import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ICategory } from '../interfaces/category.interface';
import { CategoryService } from '../services/category.service';

export interface IRCategory {
    categories: ICategory[],
    category: ICategory,
    selectedID: number
}

export class LoadCategories{
    public static type = "[Category] Load Categories"
    
    constructor(public categories: ICategory[]) {}
}

@State<IRCategory>({
    name: 'CategoryState',
    defaults: {
        categories: [],
        selectedID: null,
        category: {
            id: null,
            name: null,
        }
    }
})
export class CategoryState{
    constructor() {
        
    }

    @Selector()
    static getAllCategories(state: IRCategory){
        return state.categories;
    }

    @Action(LoadCategories)
    loadCategories(state: StateContext<IRCategory>, action: LoadCategories) {
        state.setState({
            categories: action.categories,
            category: null,
            selectedID: null
        });
    }
}