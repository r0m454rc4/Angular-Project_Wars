import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "aplicacio",
  templateUrl: "./HTML/preguntas.html",
  styleUrls: ["./CSS/Style.css"],
})
export class PreguntasFrequentesComponent {
  customHeadings = [
    '¿Que es un conflicto?',
    '¿Cuántos conflictos hubo en el mundo en 2021?',
    '¿Qué conflictos están en la lista de “casos poco claros” y por qué están ahí?',
    'Conflicto armado de Estado',
    'Violencia organizada'
  ];

  items = [
    'Un conflicto armado es una incompatibilidad controvertida que afecta al gobierno y/o territorio donde el uso de la fuerza armada entre dos partes, de las cuales al menos una es el gobierno de un estado, resulta en al menos 25 muertes relacionadas con la batalla en un año calendario. Véase también Wallensteen "Comprensión de la resolución de conflictos" Sage (2015) págs. 24-27',
    'En 2021, había 54 conflictos estatales activos en el mundo, que causaron al menos 25 muertes relacionadas con las batallas. Para obtener más información, consulte Davies, Shawn, Therese Pettersson y Magnus Öberg. 2022. “Violencia organizada, 1989-2021 y guerra con drones”. Revista de investigación para la paz. 59(4).',
    'La lista de casos poco claros de la UCDP contiene conflictos que probablemente cumplan con los tres criterios de la definición, pero donde nos falta información sobre uno de los criterios. Podría faltar información sobre cuántas muertes relacionadas con la batalla provocó el conflicto, que no pudimos encontrar una incompatibilidad declarada según nuestra definición o que no está claro qué tan organizado está el grupo involucrado. Si está claro que un “conflicto” sólo cumple dos de tres criterios para ser un conflicto adecuado según nuestras definiciones, no se incluye en la lista poco clara.',
    'Un conflicto armado basado en un estado es una incompatibilidad controvertida que afecta al gobierno y/o territorio donde el uso de la fuerza armada entre dos partes, de las cuales al menos una es el gobierno de un estado, resulta en al menos 25 muertes relacionadas con la batalla en un año del calendario. ',
    'UCDP recopila datos sobre conflictos armados estatales, conflictos no estatales y violencia unilateral. Las categorías son mutuamente excluyentes y pueden agregarse como “violencia organizada”. También comparten el mismo límite de intensidad para su inclusión: 25 muertes en un año calendario.'
  ];
  expandedIndex = 0;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
