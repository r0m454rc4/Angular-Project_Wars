import { Component } from '@angular/core';

@Component({
  selector: 'aplicacio',
  template: `
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
  `,
})
export class M11_EncaminamentComponent {
  titol = 'Hola';
}
