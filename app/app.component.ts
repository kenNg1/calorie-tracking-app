import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: `my-app`,
    template: `
      <div class="container-fluid header"><h1 id="title">Calorie Tracking App</h1></div>
      <button (click)="onEdit()">Edit</button>
      <button (click)="onSave()">Save</button>
      <select (change)="onChange($event.target.value)">
          <option value='all'>All</option>
          <option value='high'>Only High Calories</option>
          <option value='low'>Only Low Calories</option>
      </select>
      <new-component (onCreateSender)="createNewMeal($event)"></new-component>
      <display-component [childMealList]="masterMealList" [childSelectedState]="selectedState" *ngIf="!editForm"></display-component>
      <edit-component [childMealList]="masterMealList" *ngIf="editForm"></edit-component>
      `
})

export class AppComponent {
    masterMealList: Meal[] = [
      new Meal("Beef Noodles","Loads of delicious fatty beef",550),
      new Meal("Won Ton Noodles","Small portion only ate 3/4 bowl", 450),
      new Meal("Salad","Freshly made myself", 200)
    ]

    createNewMeal (newMeal: Meal) {
      this.masterMealList.push(newMeal);
    }

    editForm: boolean = false;
    onEdit(){
      this.editForm = true;
    }

    onSave(){
      this.editForm = false;
    }

    public selectedState: string="all"

    onChange (optionFromMenu){
      this.selectedState = optionFromMenu;
      console.log(this.selectedState);
    }
}
