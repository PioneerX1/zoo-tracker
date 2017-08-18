import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="young">Young Animals Under 2 Years</option>
    <option value="mature">Mature Animals</option>
  </select>

  <ul class="list-group">
    <li class="list-group-item" *ngFor="let currentAnimal of childAnimalList | age: filterByAge">
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

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
