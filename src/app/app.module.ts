import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppEncaminamentModule } from './app-encaminament.module';

import { M01_SalutacioComponent } from './m01-salutacio.component'; // I import a component.
import { M02_SumaComponent } from './m02-suma.component';

import { M11_EncaminamentComponent } from './m11-encaminament.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    M01_SalutacioComponent,
    M02_SumaComponent,
    M11_EncaminamentComponent,
  ], // Here I must say the components I want to be able to use.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppEncaminamentModule,
    MatTabsModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  bootstrap: [M11_EncaminamentComponent],
  providers: [
    provideAnimationsAsync()
  ], // This is the component I'm using.
})
export class AppModule {}
