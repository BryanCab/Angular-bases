import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Superman', 'Batman', 'Flash', 'Luffy'];
  heroeEliminado: string = '';

  eliminarHeroe():void {
    this.heroeEliminado = this.heroes.shift() || '';
  }

}

