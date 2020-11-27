import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CategoryState } from './models/category.redux';
import { CategoryCircleComponent } from './components/category-circle/category-circle.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { FoodState } from './models/food.redux';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryCircleComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([CategoryState, FoodState], {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
