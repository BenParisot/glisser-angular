import { Injectable } from '@angular/core';
// import { CharacterFormComponent } from './character-form/character-form.component'
import { BioFormComponent } from './bio-form/bio-form.component'

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  characterHidden = true;
  bioHidden = true;

  // toggleCharacterForm() {
  //   this.characterHidden = !this.characterHidden;
  // }

  toggleBioForm() {
    // BioFormComponent.hidden = !BioFormComponent.hidden;
  }
}
