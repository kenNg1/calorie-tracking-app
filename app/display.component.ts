import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { FilterPipe } from './filter.pipe'

@Component ({
  selector: 'display-component',
  template: `
  <div class="container">
  <h3>Click the meals to toggle save and edit mode!</h3><select (change)="onChange($event.target.value)">
            <option value='all'>All</option>
            <option value='high'>Only High Calories</option>
            <option value='low'>Only Low Calories</option>
        </select><br>
    <div class="meal" *ngFor="let currentMeal of childMealList | filter: childSelectedState">
      <div (click)=editClicked()>
      <h5>Name:{{ currentMeal.name }}</h5>
      <h5>Details: {{ currentMeal.details }}</h5>
      <!---<h4>Calories: {{ currentMeal.calories }}</h4>-->
      </div>
    </div>
  </div>
  `
})

export class DisplayComponent {
  @Input() childMealList: Meal[];
  @Input() childSelectedState: string;
  // public totalCalories: number = 0;
  //
  // totalMethod(){
  //   console.log("thisisworking");
  //   this.totalCalories=0;
  //   for(var i=0; i<this.childMealList.length;i++){
  //     this.totalCalories = this.totalCalories + this.childMealList[i].calories;
  //     return this.totalCalories;
  //   }
  // }

  @Output() editClickedSender = new EventEmitter;
  editClicked() {
    this.editClickedSender.emit();
  }

  onChange (optionFromMenu){
    this.childSelectedState = optionFromMenu;
    console.log(this.childSelectedState);
  }

}
