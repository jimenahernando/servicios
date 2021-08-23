import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona.interface';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  personajes: Persona[];

  //PUEDE DEFINIR TIPO E INICIALIZAR EN EL MISMO MOMENTO
  // personajes: Persona[] = [];
  // numero: number = 0;
  // persona : Persona[] = { id: 0, nombre: '', edad:'', email:''};

  constructor( private personaService: PersonasService) {
    this.personajes = [];
   }

  ngOnInit(): void {
    //si bien puedo acceder al array no es una buena practica,
    // no hay que darle acceso a datos para esto el polimorfismo (ponemos en private)
    // this.personajes = this.personaService.arrPersonas;
    
    this.personajes = this.personaService.getAll();
  }

  recogerFiltros(pFiltros: any){
    this.personajes = this.personaService.getPeopleByAge(pFiltros.value);

  }

}
