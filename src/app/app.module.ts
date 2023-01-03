import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPasswordGeneratorComponent } from './card-password-generator/card-password-generator.component';
import { PasswordOutputComponent } from './card-password-generator/password-output/password-output.component';
import { PasswordGeneratorComponent } from './card-password-generator/password-generator/password-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPasswordGeneratorComponent,
    PasswordOutputComponent,
    PasswordGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
