import { Injectable } from '@angular/core';
import { BioCardComponent } from './bio-card/bio-card.component';

@Injectable({
  providedIn: 'root',
})
export class SaveEditsService {
  saveBio(newBio) {
    BioCardComponent.character.bio = newBio;
  }

  saveCharacter(newDetails) {
    BioCardComponent.character.firstName = newDetails.firstName;
    BioCardComponent.character.lastName = newDetails.lastName;
    BioCardComponent.character.subtitle = newDetails.subtitle;
  }
}
