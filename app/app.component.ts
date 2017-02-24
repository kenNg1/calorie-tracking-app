import { Component } from '@angular/core';
// import { Keg } from './keg.model';

@Component({
  selector: `my-app`,
  template: `
  <!---  <h1 id="title">Bar Tap App!</h1>
      <div class="dashboard">
        <button (click)="onEdit()">Edit</button><button (click)="onSave()">Save</button>
        <select (change)="onChange($event.target.value)">
          <option value='all' selected="selected">All</option>
          <option value='low'>Low Stock</option>
        </select>
      </div>
      <display-component *ngIf="!editForm" [childKegList]="masterKegList" [childSelectedState]="selectedState"></display-component>
      <edit-component *ngIf="editForm" [childKegList]="masterKegList"></edit-component>
      <new-component *ngIf="!editForm" (onCreateSender)="createNewKeg($event)"></new-component>


      <!--- <filter-component></filter-component> -->
      `
})

export class AppComponent {
  // masterKegList: Keg[] = [
  //   new Keg("Snow", "China Ltd", 60, 5),
  //   new Keg("TsingTao", "TsingTao Co", 80, 6),
  //   new Keg("Budweiser", "Anheuser-Busch", 55, 50)
  ]

  // createNewKeg (newKeg: Keg) {
  //   this.masterKegList.push(newKeg);
  // }
  //
  // editForm: boolean= false;
  // onEdit(){
  //   this.editForm = true;
  // }
  // onSave(){
  //   this.editForm = false;
  // }
  //
  // public selectedState: string = "all";
  //
  // onChange (optionFromMenu) {
  //   this.selectedState = optionFromMenu;
  //   console.log(this.selectedState);
  // }
}
