import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppEncaminamentModule } from "./app-encaminament.module";

import { nosotrosComponent } from "./nosotrosComponent";
import { PreguntasFrequentesComponent } from "./pregutas-frequentes.component";
import { ContactoComponent } from "./contacto";

import { M11_EncaminamentComponent } from "./m11-encaminament.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";


import {CdkAccordionModule} from '@angular/cdk/accordion';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    nosotrosComponent,
    PreguntasFrequentesComponent,
    ContactoComponent,
    M11_EncaminamentComponent,
    ContactoComponent,
    nosotrosComponent
  ], // Here I must say the components I want to be able to use.
  imports: [
    AppEncaminamentModule,
    
    BrowserModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatToolbarModule,
    MatPaginator,
    MatPaginatorModule,

    BrowserModule,
    CdkAccordionModule,

    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,

  ],
  bootstrap: [M11_EncaminamentComponent],
  providers: [provideAnimationsAsync()], // This is the component I'm using.
})
export class AppModule {}
