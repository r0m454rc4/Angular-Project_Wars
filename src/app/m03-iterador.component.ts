import { Component } from "@angular/core";
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: "aplicacio",
  templateUrl: "./HTML/preguntas.html",
  styleUrls: ["./CSS/Style.css"],
})
export class M03_IteradorComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
