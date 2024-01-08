import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export class CategoriasComponent {
  categoria = {
    id:0, nombre:"", descripcion:""
  }

  categorias = [
    {id:1, nombre:"Zapateria", descripcion:"Todo lo relacionado con zapatos"},
    {id:2, nombre:"Pesca", descripcion:"Todo lo relacionado a la pesca"},
    {id:3, nombre:"Deportes", descripcion:"Todo lo relacionado con los deportes"},
    {id:4, nombre:"Hogar", descripcion:"Todo lo relacionado al mantenimiento del hogar"},
    {id:5, nombre:"Electrónica", descripcion:"Todo lo relacionado a la electrónica"}
  ]

  agregarCategoria(){
    const posId = this.categorias.findIndex((cat)=>cat.id==this.categoria.id)
    if(this.categoria.id>0 && posId == -1){
      //El error es que queda vinculado con el ultimo que se agrega
      const categoriaSV  = {
        id : this.categoria.id,
        nombre : this.categoria.nombre,
        descripcion : this.categoria.descripcion
      }
      this.categorias.push(categoriaSV);
    }else{
      alert("Error: Verifica tus datos");
    }
  }

  eliminarCategoria(id:number){
    if(confirm("Estas seguro de que deseas eliminar el registro?")){
      const posId = this.categorias.findIndex((categoria)=>categoria.id==id)
      this.categorias.splice(posId,1)
    }
  }

//Para saber qué categoria actualizar
  seleccionarCategoria(categoriaSeleccionada : {id:number, nombre:string, descripcion:string}){
    this.categoria.id = categoriaSeleccionada.id;
    this.categoria.nombre = categoriaSeleccionada.nombre;
    this.categoria.descripcion = categoriaSeleccionada.descripcion;
  }
  
//Para actualizar la categoria seleccionada
  actualizarCategoria(){
    const idActualizar = this.categorias.findIndex((cat)=>cat.id == this.categoria.id);
    this.categorias[idActualizar].id = this.categoria.id;
    this.categorias[idActualizar].nombre = this.categoria.nombre;
    this.categorias[idActualizar].descripcion = this.categoria.descripcion;
    alert(this.categorias[idActualizar].id);
  }
}


