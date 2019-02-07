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
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      fechaNacimiento: new FormControl('',[Validators.required]),
      dni: new FormControl('',[Validators.required])

    })
  }
  manejarFormulario(){
    console.log(this.formRegistro.value)
    this.formRegistro.reset()//limpiar campos despues del envio.
  }

}
