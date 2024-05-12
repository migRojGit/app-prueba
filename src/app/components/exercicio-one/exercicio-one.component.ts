import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { genericResponse } from '../../../assets/resources/generic-response';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio-one',
  standalone: true,
  imports: [PanelModule, JsonPipe],
  templateUrl: './exercicio-one.component.html',
  providers: [JsonPipe],
})
export class ExercicioOneComponent implements OnInit {
  public problem = {
    title: 'Problema N° 1',
    description: 'Dado el siguiente caso, resuelva el problema:',
    body: 'Se requiere crear una función que dado "N" monto y "X" conjuntos de monedas, retorne siempre la combinación mínima de monedas para su conversión.  Ej: Si ingreso 1000, y una colección de monedas de [100, 500] el retorno deberá ser: ',
    exemple: '{minCoins: 2, coins: [100, 100]}',
  };
  public genericResponse = () => genericResponse();
  constructor( ) {}

  ngOnInit(): void {  }

  }

