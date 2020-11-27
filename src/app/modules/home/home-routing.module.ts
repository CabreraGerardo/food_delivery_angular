  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }