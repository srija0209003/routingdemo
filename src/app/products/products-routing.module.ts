import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //needed for routing
import { ProductsData } from './products-data';
import { ProductList } from './product-list';
import { ProductDetailsComponent } from './productdetails';

const routes: Routes = [
    {path:'',component:ProductsData,
        children:[
            {path:'',component:ProductList},
            {path:':id',component:ProductDetailsComponent}
        ]
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
