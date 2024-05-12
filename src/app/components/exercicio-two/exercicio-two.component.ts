import { Component, OnInit } from '@angular/core';
import { genericResponse } from '../../../assets/resources/generic-response';
import { JsonPipe } from '@angular/common';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-exercicio-two',
  standalone: true,
  imports: [PanelModule, JsonPipe],
  templateUrl: './exercicio-two.component.html',
  providers: [JsonPipe],
})
export class ExercicioTwoComponent implements OnInit{
  public problem = {
    title: 'Problema N° 2',
    description: 'Dado el siguiente caso, resuelva el problema:',
    body: 'Se requiere crear una función que dado dos strings que representen dos números binarios, retorna la suma de ambos como números binarios ',
    exemple: 'input: { firstBinary: 10, secondBinary: 01 }, output: { binaryResult: 11 }',
  };
  public genericResponse = () => genericResponse();

  constructor() { }

  ngOnInit(): void {  }

}
