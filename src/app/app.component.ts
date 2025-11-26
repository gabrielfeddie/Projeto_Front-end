import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component' // Importa a classe do helloworld.component.ts. Não é necessário colocar a extensão .ts - O sistema já identifica que é typescript.
import { BarraComponent } from './barra/barra.component';
import {MatToolbarModule} from '@angular/material/toolbar';
// HelloWorldComponent - Nome da classe criada no dentro do arquivo helloworld.component.ts


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarModule], //Importa o componente após a criação da classe no arquivo do componente e importa deixa ele disponível para usar dentro do html.
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Projeto_Front-end';
}
