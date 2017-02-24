import {Component,Input} from '@angular/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'total-component',
  template: `
  <div class="container">
  <h3><b>Total Calories:</b>{{totalMethod(childMealList)}}</h3>
  <h3><b>Average Calories:</b>{{averageMethod(childMealList)}}</h3>
  </div>
  `
})

export class TotalComponent {
@Input() childMealList: Meal[];

  totalCalories: number = 0;
  averageCalories: number = 0;

totalMethod(food){
  this.totalCalories=0;
  for(var i=0; i<food.length;i++){
    this.totalCalories += parseInt(food[i].calories);
  }
  console.log(typeof this.totalCalories)
  return this.totalCalories;
}

averageMethod(food){
  this.totalCalories=0;
  this.averageCalories=0;
  for(var i=0; i<food.length;i++){
    this.totalCalories += parseInt(food[i].calories);
    this.averageCalories=this.totalCalories/food.length;
  }
  return this.averageCalories;
}

}
