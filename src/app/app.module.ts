import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailConfigComponent } from './components/email-config/email-config.component';
import { EmailEditorModule } from 'angular-email-editor';
import { SMTPClient } from 'emailjs';

@NgModule({
  declarations: [
    AppComponent,
    EmailConfigComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    EmailEditorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
