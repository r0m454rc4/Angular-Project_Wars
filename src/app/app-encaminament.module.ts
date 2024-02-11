import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./index";
import { nosotrosComponent } from "./nosotrosComponent";
import { M03_IteradorComponent } from "./m03-iterador.component";
import { ContactoComponent } from "./contacto";

const encaminaments: Routes = [
  // If the path is empty, redirects to index component.
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "index", component: IndexComponent },
  { path: "suma", component: nosotrosComponent },
  { path: "iterador", component: M03_IteradorComponent },
  { path: "contacto", component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(encaminaments)],
  exports: [RouterModule],
})
export class AppEncaminamentModule {}
