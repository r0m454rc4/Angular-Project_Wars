import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "camposVacios",
  standalone: true,
})
export class CamposVaciosPipe implements PipeTransform {
  nValor: string;

  transform(value: string): any {
    if (!value) {
      this.nValor = "-";
    } else {
      this.nValor = value;
    }

    return this.nValor;
  }
}
