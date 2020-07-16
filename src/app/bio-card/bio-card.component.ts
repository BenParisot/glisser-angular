import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterFormComponent } from '../character-form/character-form.component';
import { BioFormComponent } from '../bio-form/bio-form.component';
@Component({
  selector: 'app-bio-card',
  templateUrl: './bio-card.component.html',
  styleUrls: ['./bio-card.component.scss'],
})
export class BioCardComponent implements OnInit {
  character: Character = {
    id: 1,
    firstName: 'Clark',
    lastName: 'Kent',
    subtitle: 'Definitely NOT Superman',
    bio:
      "I'm a mild-mannered reporter working for the Daily Bugle. There is nothing interesting about me. Nope, nothing out of the ordinary. Just a regular, white collar type of guy. A bit on the scrawny side if I'm being honest, but I've been working out lately to put on a few pounds. When I'm not chasing down a scoop I like to curl up with a good book, take a leisurely stroll, and generally avoid any and all confrontation.",
  };

  toggleCharacterForm(): CharacterFormComponent[] {
    return CharacterFormComponent.toggleForm();
  }
  toggleBioForm(): BioFormComponent[] {
    return BioFormComponent.toggleForm();
  }
  constructor() {}

  ngOnInit(): void {}
}
