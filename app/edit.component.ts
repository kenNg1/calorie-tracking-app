import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component ({
  selector: `edit-component`,
  template: `
  <div class="container" >
    <div class="meal" *ngFor="let childMeal of childMealList">
    <div (click)=saveClicked() >
    <h5>Name: <input type="text" [(ngModel)]="childMeal.name" /></h5>
    <h5>Details: <input type="text" [(ngModel)]="childMeal.details" /></h5>
    <h4>Calories: <input type="text" [(ngModel)]="childMeal.calories"/></h4>
    </div>
    </div>
  </div>
  `
})

export class EditComponent {
  @Input() childMealList: Meal[];
  @Output() saveClickedSender = new EventEmitter;
  saveClicked() {
    this.saveClickedSender.emit();
  }
}
