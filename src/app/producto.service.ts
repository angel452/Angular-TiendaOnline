import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // Arreglo
  productos : Producto[] = [
    new Producto('Pantalon', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Zapatos', 200.0)
  ];

  agregarProducto(producto : Producto) {
    this.productos.push(producto);
  }

  constructor() { }
}
