import { Component } from '@angular/core';
import { Character } from '../character';
import { SaveEditsService } from '../save-edits.service';
import { BioCardComponent } from '../bio-card/bio-card.component';
@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
})
export class CharacterFormComponent {
  model = new Character(
    0,
    'Clark',
    'Kent',
    'Definitely NOT Superman',
    "I'm a mild-mannered reporter working for the Daily Bugle. There is nothing interesting about me. Nope, nothing out of the ordinary. Just a regular, white collar type of guy. A bit on the scrawny side if I'm being honest, but I've been working out lately to put on a few pounds. When I'm not chasing down a scoop I like to curl up with a good book, take a leisurely stroll, and generally avoid any and all confrontation."
  );

  constructor(private saveEdits: SaveEditsService, private bioCard: BioCardComponent) {}

  toggleForm() {
    this.bioCard.hiddenCharacterForm = !this.bioCard.hiddenCharacterForm;
  }


  onSubmit() {
    this.saveEdits.saveCharacter(this.model);
    this.bioCard.hiddenCharacterForm = !this.bioCard.hiddenCharacterForm;
  }

  CharacterFormComponent = CharacterFormComponent;
}
