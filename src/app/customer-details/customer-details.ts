import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  standalone: false,
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.css',
})
export class CustomerDetails {
  id!:number;
  name!:string;
  city!:string;

  constructor(private route: ActivatedRoute){
    this.route.queryParamMap.subscribe(params=>{
      this.id=Number(params.get('id'));
      this.name=params.get('name')||'';
      this.city=params.get('city')||'';
    });
   }

}
