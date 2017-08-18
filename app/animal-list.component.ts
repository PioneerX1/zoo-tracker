import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <ul class="list-group">
    <li class="list-group-item" *ngFor="let currentAnimal of childAnimalList">
      <h4>{{currentAnimal.name}}   <em>| {{currentAnimal.species}}</em></h4>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
