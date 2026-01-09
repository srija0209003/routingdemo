import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  customerlist: Array<{ id: number; name: string; city: string }> = [
    { id: 101, name: 'Alice', city: 'New York' },
    { id: 102, name: 'Bob', city: 'Los Angeles' },
    { id: 103, name: 'Charlie', city: 'Chicago' },
    { id: 104, name: 'Diana', city: 'Houston' },
  ];
}
