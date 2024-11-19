import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private id = 1;
  productos : Producto[] = [];

  constructor(){
    this.inicializarProductos();  
  }

  inicializarProductos(){
    const producto1 = new Producto(this.id++, 'Pantalon', 130.0);
    const producto2 = new Producto(this.id++, 'Camisa', 80.0);
    const producto3 = new Producto(this.id++, 'Zapatos', 200.0);

    this.productos.push(producto1, producto2, producto3);
  }

  guardarProducto(producto : Producto) {
    if(producto.id === null){ // Agregar
      producto.id = this.id++;
      this.productos.push(producto);
    }
    else{ // Modificar 
      const indice = this.productos.findIndex( p => p.id === producto.id );
      if(indice !== -1){
        this.productos[indice] = producto;
      }
    }
  }

  getProductByID(id : number) : Producto | undefined {
    return this.productos.find( producto => producto.id === id );
  }
  
  eliminarProducto(id : number){
    const indice = this.productos.findIndex( p => p.id === id );
    if(indice !== -1){
      this.productos.splice(indice, 1);
    }
  }
}
