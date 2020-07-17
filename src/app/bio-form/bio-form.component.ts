import { Component } from '@angular/core';
import { Character } from '../character';
import { SaveEditsService } from '../save-edits.service';
@Component({
  selector: 'app-bio-form',
  templateUrl: './bio-form.component.html',
  styleUrls: ['./bio-form.component.scss'],
  providers: [SaveEditsService]
})
export class BioFormComponent {
  public static model = new Character(
    0,
    'Clark',
    'Kent',
    'Definitely NOT Superman',
    "I'm a mild-mannered reporter working for the Daily Bugle. There is nothing interesting about me. Nope, nothing out of the ordinary. Just a regular, white collar type of guy. A bit on the scrawny side if I'm being honest, but I've been working out lately to put on a few pounds. When I'm not chasing down a scoop I like to curl up with a good book, take a leisurely stroll, and generally avoid any and all confrontation."
  );

  public static hidden: any = true;

  constructor(private saveEdits: SaveEditsService) {}

  closeForm() {
    BioFormComponent.hidden = !BioFormComponent.hidden;
  }

  onSubmit() {
    this.saveEdits.saveBio(BioFormComponent.model.bio)
    BioFormComponent.hidden = !BioFormComponent.hidden;
  }

  BioFormComponent = BioFormComponent;
}
