import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
 
  formRegistro:FormGroup
  
  constructor() { }

  ngOnInit() {
      this.formRegistro = new FormGroup({
      
        nombre: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      
      email: new FormControl('',[Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),Validators.required]),
      
      password: new FormControl('',[Validators.required, Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)]),
      
      telefono: new FormControl('',[Validators.required]),
      
      fechaNacimiento: new FormControl('',[this.fechaNacimientoValidator, Validators.required]),
      
      dni: new FormControl('',[Validators.required,Validators.pattern(/(0?[1-9]|[1-9][0-9])[0-9]{6}(-| )?[trwagmyfpdxbnjzsqvhlcke]/)])

    })
  }
  manejarFormulario(){
    console.log(this.formRegistro.value)
    this.formRegistro.reset()//limpiar campos despues del envio.
  }

  fechaNacimientoValidator(control){
    if(isNaN(control.value)){
      return {'fechanacimiento': 'Debe ser un numero'}
    }
    if(control.value < 1980 || control.value > 2010){
      return {'fechanacimiento': 'El año debe estar entre 1980 y 2010'}
    }
     return null
  }
  
}
