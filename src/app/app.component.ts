import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloworld/helloworld.component' // Importa a classe do helloworld.component.ts. Não é necessário colocar a extensão .ts - O sistema já identifica que é typescript.
// HelloWorldComponent - Nome da classe criada no dentro do arquivo helloworld.component.ts


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent], //Importa o componente após a criação da classe no arquivo do componente e importa deixa ele disponível para usar dentro do html.
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Projeto_Front-end';
}
