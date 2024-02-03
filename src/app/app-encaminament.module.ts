import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./index";
import { M02_SumaComponent } from "./m02-suma.component";
import { M03_IteradorComponent } from "./m03-iterador.component";
import { ConctactoComponent } from "./contacto";

const encaminaments: Routes = [
  // If the path is empty, redirects to tho component salutacio.
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "index", component: IndexComponent },
  { path: "suma", component: M02_SumaComponent },
  { path: "iterador", component: M03_IteradorComponent },
  { path: "contacto", component: ConctactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(encaminaments)],
  exports: [RouterModule],
})
export class AppEncaminamentModule {}
