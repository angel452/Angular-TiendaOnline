import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  @ViewChild('descripcionInput') descriptionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto(evento : Event) {
    evento.preventDefault();

    // Validacion de datos correctos
    if( this.descriptionInput.nativeElement.value.trim() === '' || 
        this.precioInput.nativeElement.value == null || 
        this.precioInput.nativeElement.value <= 0) {
      alert('Datos incorrectos');
      return;
    }

    // Agregar producto
    const producto = new Producto(  this.descriptionInput.nativeElement.value,
                                    this.precioInput.nativeElement.value );

    this.nuevoProducto.emit(producto);
    
    // Limpiar campos
    this.descriptionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;
  }
}
