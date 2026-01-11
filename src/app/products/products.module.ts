import { NgModule } from "@angular/core";
import { ProductsData } from "./products-data";
import { CommonModule } from "@angular/common";
import { ProductRoutingModule } from "./products-routing.module";
import { ProductDetailsComponent } from "./productdetails";
import { ProductList } from "./product-list";

@NgModule({
  declarations: [
    // ProductList
    ProductsData,
    ProductList,
    
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        ProductDetailsComponent
    ],

})
export class ProductModule { }
