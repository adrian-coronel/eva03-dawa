import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  public categoriaSeleccionada: string = 'all'


  changeCategoria(categoria: string){
    this.categoriaSeleccionada = categoria
  }
}
