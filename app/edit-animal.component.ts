import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>{{childSelectedAnimal.name}} | <em>{{childSelectedAnimal.species}}</em></h3>
    <div class="form-group">
      <label>Name: </label>
      <input [(ngModel)]="childSelectedAnimal.name" type="text">
    </div>
    <div class="form-group">
      <label>Species: </label>
      <input [(ngModel)]="childSelectedAnimal.species" type="text">
    </div>
    <div class="form-group">
      <label>Age: </label>
      <input [(ngModel)]="childSelectedAnimal.age" type="number">
    </div>
    <div class="form-group">
      <label>Diet: </label>
      <input [(ngModel)]="childSelectedAnimal.diet" type="text">
    </div>
    <div class="form-group">
      <label>Location: </label>
      <input [(ngModel)]="childSelectedAnimal.location" type="text">
    </div>
    <div class="form-group">
      <label>Caretakers: </label>
      <input [(ngModel)]="childSelectedAnimal.caretakers" type="number">
    </div>
    <div class="form-group">
      <label>Sex: </label>
      <input [(ngModel)]="childSelectedAnimal.sex" type="text">
    </div>
    <div class="form-group">
      <label>Likes: </label>
      <input [(ngModel)]="childSelectedAnimal.likes" type="text">
    </div>
    <div class="form-group">
      <label>Dislikes: </label>
      <input [(ngModel)]="childSelectedAnimal.dislikes" type="text">
    </div>

    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
