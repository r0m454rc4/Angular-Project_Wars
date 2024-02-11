import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./index";
import { nosotrosComponent } from "./nosotrosComponent";
import { PreguntasFrequentesComponent } from "./pregutas-frequentes.component";
import { ContactoComponent } from "./contacto";

const encaminaments: Routes = [
  // If the path is empty, redirects to index component.
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "index", component: IndexComponent },
  { path: "nosotros", component: nosotrosComponent },
  { path: "preguntasFreq", component: PreguntasFrequentesComponent },
  { path: "contacto", component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(encaminaments)],
  exports: [RouterModule],
})
export class AppEncaminamentModule {}
