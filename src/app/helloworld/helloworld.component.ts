import { Component } from '@angular/core' //Importa da bibliote Angular/core um Decorator chamado Component

@Component({ // Decorator é uma classe que altera uma outra classe. Um componete que altera um componente original. A partir do momemnto que a classe "HelloWorldComponent" recebeu o componente, ele passou a ser um componente Angular
    selector: 'hello-world', //Vai informar como esse componente é representado dentro de uma página html. Quando formos usar esse componente dentro de uma página HTML, vamos usar a tag <hello-world>
    template: '<h1> Hello, World!</h1>' //código html que aparecerá na página 

})

export class HelloWorldComponent{ //Exporta uma classe componente

}

/* 

Depois deve-se importar os componetes criados no app.component.ts


*/