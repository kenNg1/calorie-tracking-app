import { Component,Input } from '@angular/core';
import { Meal } from './meal.model';
import { FilterPipe } from './filter.pipe'

@Component ({
  selector: 'display-component',
  template: `
  <div class="container">
    <div class="meal" *ngFor="let currentMeal of childMealList | filter: childSelectedState">
      <h5>Name:{{ currentMeal.name }}</h5>
      <h5>Details: {{ currentMeal.details }}</h5>
      <h4>Calories: {{ currentMeal.calories }}</h4>
    </div>
  </div>
  `
})

export class DisplayComponent {
  @Input() childMealList: Meal[];
  @Input() childSelectedState: string;
}
