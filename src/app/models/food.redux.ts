import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IFood } from '../interfaces/food.interface';

export interface IRFood {
    foodArr: IFood[],
    food: IFood,
    selectedID: number
}

export class LoadFood{
    public static type = "[Food] Load Food"
    
    constructor(public food: IFood[]) {}
}

@State<IRFood>({
    name: 'FoodState',
    defaults: {
        foodArr: [],
        selectedID: null,
        food: {
            id: null,
            name: null,
            description: null
        }
    }
})
export class FoodState{
    constructor() {
        
    }

    @Selector()
    static getAllFood(state: IRFood){
        return state.foodArr;
    }

    @Action(LoadFood)
    loadFood(state: StateContext<IRFood>, action: LoadFood) {
        state.setState({
            foodArr: action.food,
            food: null,
            selectedID: null
        });
    }
}