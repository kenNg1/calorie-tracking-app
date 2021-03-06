import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: `my-app`,
    template: `
      <div class="container-fluid header"><h1 id="title"><b>Calorie Tracking App</b></h1></div>
      <total-component [childMealList]="masterMealList"></total-component>
      <new-component (onCreateSender)="createNewMeal($event)"></new-component>
      <display-component [childMealList]="masterMealList" [childSelectedState]="selectedState" *ngIf="!editForm" (editClickedSender)="editActivated($event)"></display-component>
      <edit-component [childMealList]="masterMealList" *ngIf="editForm" (saveClickedSender)="saveActivated($event)"></edit-component>
      `
})

export class AppComponent {
    masterMealList: Meal[] = [
      new Meal("Beef Noodles","Loads of delicious fatty beef",550,"24/2"),
      new Meal("Won Ton Noodles","Small portion only ate 3/4 bowl",450,"24/2"),
      new Meal("Salad","Freshly made myself", 200,"24/2")
    ]

    createNewMeal (newMeal: Meal) {
      this.masterMealList.push(newMeal);
    }

    editForm: boolean = false;
    editActivated(){
        this.editForm = true;
    }

    saveActivated(){
      this.editForm = false;
    }



}
