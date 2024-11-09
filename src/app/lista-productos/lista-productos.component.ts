import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoComponent } from "../producto/producto.component";

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [FormsModule, FormularioComponent, ProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})

export class ListaProductosComponent {
  // Arreglo
  productos : Producto[] = [
    new Producto('Pantalon', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Zapatos', 200.0)
  ];

  agregarProducto(producto : Producto) {
    this.productos.push(producto);
  }
}
