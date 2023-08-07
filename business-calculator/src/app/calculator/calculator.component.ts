import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  costs: number;
  price: number;
  results: number[] = [];
  requiredCost: number  = 0;

  


  calculate(): void {
   let res 
   res = this.costs/this.price
   console.log(res);
   this.results.push(res);
  }
}
