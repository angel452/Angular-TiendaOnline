import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoComponent } from "../producto/producto.component";
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [FormsModule, FormularioComponent, ProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})

export class ListaProductosComponent {

  productos : Producto[] = [];

  constructor ( private productoService : ProductoService ) {}

  ngOnInit() {
    this.productos = this.productoService.productos;
  }
}
