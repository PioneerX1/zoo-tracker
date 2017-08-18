import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Zoo Tracker</h1>
      <h3>{{subtitle}}</h3>
    </div>
    <animal-list [childAnimalList]="masterAnimalList"></animal-list>

  </div>
  `
})

export class AppComponent {
  subtitle: string = 'Where the Animals Get Tracked';

  masterAnimalList: Animal[] = [
    new Animal('Larry', 'Lizard', 2, 'bugs', 'Lizard Tank', 1, 'Male', 'sunlight, hot rocks', 'petting'),
    new Animal('Bobbie', 'BobCat', 4, 'mice', 'Cat Lounge', 2, 'Female', 'attention from humans', 'water and wet surfaces'),
    new Animal('Kobe', 'Koala', 8, 'eucalyptus leaves', 'Tree Zone', 4, 'Female', 'sleeping, hanging out, and eating the face off a human', 'people who cannot mind their own business cause she keeps it real')
  ];


}
