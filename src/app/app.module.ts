import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppEncaminamentModule } from "./app-encaminament.module";

import { M02_SumaComponent } from "./m02-suma.component";
import { M03_IteradorComponent } from "./m03-iterador.component";
import { ContactoComponent } from "./contacto";

import { M11_EncaminamentComponent } from "./m11-encaminament.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

//pag contacto
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    M02_SumaComponent,
    M03_IteradorComponent,
    ContactoComponent,
    M11_EncaminamentComponent,
    ContactoComponent
  ], // Here I must say the components I want to be able to use.
  imports: [
    AppEncaminamentModule,
    
    BrowserModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatToolbarModule,
    MatPaginator,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
     MatDividerModule
  ],
  bootstrap: [M11_EncaminamentComponent],
  providers: [provideAnimationsAsync()], // This is the component I'm using.
})
export class AppModule {}
