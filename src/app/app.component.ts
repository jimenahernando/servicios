import { Component } from '@angular/core';
import { Persona } from './interfaces/persona.interface';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persona: Persona;
  id:number;

  constructor( private personasService: PersonasService){
    this.persona = {
      id: 0,
      nombre: '',
      edad: '',
      email: ''
    };
    this.id = 1;
  }
  
  recogerDatosForm(pForm: any){
    this.persona = pForm.value;
    // this.persona.id = this.id;
    this.persona.id = this.id++;
    this.personasService.addPerson(this.persona);
    // this.id++;
  }
}
