import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BioCardComponent } from './bio-card/bio-card.component';
import { CharacterFormComponent } from './character-form/character-form.component';
import { BioFormComponent } from './bio-form/bio-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SaveEditsService } from './save-edits.service';

@NgModule({
  declarations: [
    AppComponent,
    BioCardComponent,
    CharacterFormComponent,
    BioFormComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [SaveEditsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
