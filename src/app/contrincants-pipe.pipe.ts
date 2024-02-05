import { Pipe, PipeTransform } from "@angular/core";

// https://www.youtube.com/watch?v=4xSj9jUEJFY.
// ng g pipe contrincantsPipe.
@Pipe({
  name: "contrincantsPipe",
  standalone: true,
})
export class ContrincantsPipePipe implements PipeTransform {
  nValor: string;

  transform(value: string): any {
    if (value.includes("Government of")) {
      this.nValor = value.slice(14);
    } else {
      this.nValor = value;
    }

    return this.nValor;
  }
}
