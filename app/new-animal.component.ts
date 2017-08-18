import {Component, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="thumbnail">
    <h3>Enter New Animal</h3>
    <div class="form-group">
      <label>Name: </label>
      <input #newName>
    </div>
    <div class="form-group">
      <label>Species: </label>
      <input #newSpecies>
    </div>
    <div class="form-group">
      <label>Age: </label>
      <input #newAge type="number">
    </div>
    <div class="form-group">
      <label>Diet: </label>
      <input #newDiet>
    </div>
    <div class="form-group">
      <label>Location: </label>
      <input #newLocation>
    </div>
    <div class="form-group">
      <label>Caretakers: </label>
      <input #newCaretakers type="number">
    </div>
    <div class="form-group">
      <label>Sex: </label>
      <input #newSex>
    </div>
    <div class="form-group">
      <label>Likes: </label>
      <input #newLikes>
    </div>
    <div class="form-group">
      <label>Dislikes: </label>
      <input #newDislikes>
    </div>
    <button (click)="addAnimal(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  addAnimal(name: string, species: string, age: string, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string) {
    if(name==="" || species==="" || age==="" || diet==="" || location==="" || caretakers==="" || sex==="" || likes==="" || dislikes==="") {
      alert("Fill out ALL fields!");
    } else {
      var numberAge = Number(age);
      var numberCaretakers = Number(caretakers);
      var newAnimalToAdd: Animal = new Animal(name, species, numberAge, diet, location, numberCaretakers, sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
  }
}
