import { Component } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
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
  
  descriptionInput: string = '';
  precioInput: number | null = null;

  addProduct() {
    // Validacion de datos correctos
    if(this.descriptionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      alert('Datos incorrectos');
      return;
    }

    // Agregar producto
    const producto = new Producto(this.descriptionInput, this.precioInput);
    this.productos.push(producto);

    // Limpiar campos
    this.descriptionInput = '';
    this.precioInput = null;
  }

}
