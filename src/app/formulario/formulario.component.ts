import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoService } from '../producto.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  productoID : number | null = null;
  descriptionInput : string = '';
  precioInput : number | null = null;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  constructor (
    private productoService : ProductoService, 
    private router : Router, 
    private route : ActivatedRoute) {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const producto = this.productoService.getProductByID(Number(id));
      if(producto){
        console.log(producto.id);
        console.log(producto.description);
        console.log(producto.price);
        this.productoID = producto.id;
        this.descriptionInput = producto.description;
        this.precioInput = producto.price ;
      }
      else
        console.log('Producto no encontrado');
    }
  }

  guardarProducto(evento : Event) {
    evento.preventDefault();

    // Validacion de datos correctos
    if( this.descriptionInput.trim() === '' || 
        this.precioInput == null || 
        this.precioInput <= 0) {
      alert('Datos incorrectos');
      return;
    }

    // Agregar producto
    const producto = new Producto(  this.productoID,
                                    this.descriptionInput,
                                    this.precioInput);

    this.productoService.guardarProducto(producto);
    this.limpiarFormulario();
    this.router.navigate(['/']);
  }

  cancelar(){
    this.router.navigate(['/']);
  }

  eliminarProducto(){
    if(this.productoID){
      this.productoService.eliminarProducto(this.productoID);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  limpiarFormulario(){
    // Limpiar campos
    this.productoID = null;
    this.descriptionInput = '';
    this.precioInput = null;
  }
}
