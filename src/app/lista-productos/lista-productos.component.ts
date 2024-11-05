import { Component } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

}
