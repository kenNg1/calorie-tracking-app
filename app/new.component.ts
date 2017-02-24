import {Component, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-component',
  template: `
  <div class="container">
    <h3> New Meal </h3>
    <input type="text" placeholder="Name" #newName />
    <input type="text" placeholder="Details" #newDetails />
    <input type="number" placeholder="Calories" #newCalories />
    <button class="btn" id="finishedeating"  (click)="onCreate(newName.value,newDetails.value,newCalories.value); newName.value='';newDetails.value='';
    newCalories.value='';">Burp</button>
  </div>
  `
})

export class NewComponent {
    @Output() onCreateSender = new EventEmitter();
    onCreate(name: string, details: string, calories: number) {
      var newMeal = new Meal (name,details,calories);
      this.onCreateSender.emit(newMeal);
    }
}
