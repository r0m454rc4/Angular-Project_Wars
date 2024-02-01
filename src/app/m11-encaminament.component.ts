import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // Import the necessary modules

@Component({
  selector: 'aplicacio',
  template: `
    <mat-toolbar class="example-header">Header</mat-toolbar>

    <mat-sidenav-container class="example-container">
      <mat-sidenav #sidenav mode="side" opened class="example-sidenav"
                   [fixedInViewport]="options.value.fixed" [fixedTopGap]="options.value.top"
                   [fixedBottomGap]="options.value.bottom">
        {{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav
      </mat-sidenav>

      <mat-sidenav-content [formGroup]="options">
        <p><mat-checkbox formControlName="fixed">Fixed</mat-checkbox></p>
        <p><mat-form-field>
          <mat-label>Top gap</mat-label>
          <input matInput type="number" formControlName="top">
        </mat-form-field></p>
        <p><mat-form-field>
          <mat-label>Bottom gap</mat-label>
          <input matInput type="number" formControlName="bottom">
        </mat-form-field></p>
        <p><button mat-button (click)="sidenav.toggle()">Toggle</button></p>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <mat-tab-group>
      <mat-tab
        class="nav-item nav-link active"
        label="salutacio"
        routerLink="/salutacio"
        routerLinkActive="active"
      >
        Salutacio
      </mat-tab>
      <mat-tab
        class="nav-item nav-link"
        label="suma"
        routerLink="/suma"
        routerLinkActive="active"
      >
        Suma
      </mat-tab>
    </mat-tab-group>
    
    <router-outlet></router-outlet>

    <mat-toolbar class="example-footer">Footer</mat-toolbar>
  `,
})
export class M11_EncaminamentComponent {
  titol = 'Hola';
  options: FormGroup; // Declare FormGroup for the side navigation form

  constructor(private fb: FormBuilder) {
    this.options = fb.group({
      fixed: false,
      top: 0,
      bottom: 0,
    });
  }
}
