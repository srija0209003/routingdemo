import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-products-details',
    templateUrl: './productdetails.html'
})
export class ProductDetailsComponent{
    productId!: string | null;
    constructor(private route:ActivatedRoute){
        
    }
    ngOnInit(): void {
        //make immediate changes to route params when changed
        this.route.paramMap.subscribe(params=>{
            this.productId=this.route.snapshot.params['id'];
        });
    }
}