import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms"; // Import the necessary modules

// https://www.concretepage.com/angular-material/angular-material-tab-with-routing
@Component({
  selector: "aplicacio",
  styleUrls: ["./CSS/Style.css"],
  template: `
    <nav id="barraNav" mat-tab-nav-bar ngClass="tabs">
      <a mat-tab-link routerLink="/index" routerLinkActive="active-link"
        >Inicio</a
      >
      <a mat-tab-link routerLink="/suma" routerLinkActive="active-link">Suma</a>
      <a mat-tab-link routerLink="/iterador" routerLinkActive="active-link"
        >Iterador</a
      >
      <a mat-tab-link routerLink="/contacto" routerLinkActive="active-link"
        >Contacto</a
      >
    </nav>

    <div>
      <router-outlet></router-outlet>
    </div>


    <div id="contenido">

    </div>

      <mat-toolbar class="example-footer"></mat-toolbar>

  `,
})
export class M11_EncaminamentComponent {
  options: FormGroup; // Declare FormGroup for the side navigation form

  constructor(private fb: FormBuilder) {
    this.options = fb.group({
      fixed: false,
      top: 0,
      bottom: 0,
    });
  }
}
