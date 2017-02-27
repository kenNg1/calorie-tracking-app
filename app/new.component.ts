import {Component, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-component',
  template: `
  <div class="container">
    <label for="Name">New Meal</label>
    <input id="Name" type="text" placeholder="Name" #newName />
    <input type="text" placeholder="Details" #newDetails />
    <input type="number" placeholder="Calories" #newCalories />
    <label for="date">Date (DD/M)</label>
    <input id="date" value={{getIt()}} #newDate/>
    <button class="btn" id="finishedeating"  (click)="onCreate(newName.value,newDetails.value,newCalories.value,newDate.value); newName.value='';newDetails.value='';
    newCalories.value='';">Burp</button>
  </div>
  `
})

export class NewComponent {

getIt(){
  var date = new Date().getDate().toString();
  var monthjs = new Date().getMonth();
  var month = (monthjs + 1).toString();
  return date+"/"+month;
}

    @Output() onCreateSender = new EventEmitter();
    onCreate(name: string, details: string, calories: number, date: string) {
      var newMeal = new Meal (name,details,calories,date);
      this.onCreateSender.emit(newMeal);
    }
}
