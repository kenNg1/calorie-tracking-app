import {Component, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-component',
  template: `
  <div class="container">
    <h3><b> New Meal </b></h3>
    <input type="text" placeholder="Name" #newName />
    <input type="text" placeholder="Details" #newDetails />
    <input type="number" placeholder="Calories" #newCalories />
    <input value={{getIt()}}/>
    <button class="btn" id="finishedeating"  (click)="onCreate(newName.value,newDetails.value,newCalories.value); newName.value='';newDetails.value='';
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
    onCreate(name: string, details: string, calories: number) {
      var newMeal = new Meal (name,details,calories);
      this.onCreateSender.emit(newMeal);
    }
}
