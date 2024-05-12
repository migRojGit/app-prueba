import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { genericResponse } from '../../../assets/resources/generic-response';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio-three',
  standalone: true,
  imports: [PanelModule, JsonPipe],
  templateUrl: './exercicio-three.component.html',
  providers: [JsonPipe],
})
export class ExercicioThreeComponent implements OnInit {
  public problem = {
    title: 'Problema N° 3',
    description: 'Dado el siguiente caso, resuelva el problema:',
    body: 'Se requiere crear una función que retorne la secuencia de fibonacci en base a un número dado (como inicio) y una cantidad de números retornados ',
    exemple: 'input: { initSequence: 0, countNumbers: 7 }, output: { finacci´sNumbers: 0,1,1,2,3,5,8 }',
  };
  public genericResponse = () => genericResponse();

  constructor() {}

  ngOnInit(): void {  }
}
