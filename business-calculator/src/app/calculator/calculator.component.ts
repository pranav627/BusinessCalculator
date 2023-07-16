import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  costs: number;
  price: number;
  results: number[] = [];

  calculate(): void {
    if (!this.costs) {
      return; // Skip calculation if no costs are provided
    }

    const totalCosts = Array.isArray(this.costs)
      ? this.costs.reduce((acc, curr) => acc + curr, 0)
      : this.costs;

    this.results = Array.isArray(this.costs)
      ? this.costs.map(cost => Math.ceil(cost / (this.price - cost)))
      : [Math.ceil(totalCosts / (this.price - totalCosts))];
  }
}
