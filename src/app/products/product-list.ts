import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products=[
      {id:1,name:'Product A'},
      {id:2,name:'Product B'},
      {id:3,name:'Product C'},
      {id:4,name:'Product D'},
  ];

}
