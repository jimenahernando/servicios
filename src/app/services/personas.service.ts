import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  //para que no se pueda acceder directamente al array desde afuera
  private arrPersonas: Persona[];

  constructor() { 
    this.arrPersonas = [
      {
        id: 1,
        nombre: 'jimena',
        edad: '34',
        email: 'jimenahernando@hotmail.com'
      },
      {
        id: 2,
        nombre: 'cecilia',
        edad: '38',
        email: 'cecilia@hotmail.com'
      },
      {
        id: 3,
        nombre: 'graciela',
        edad: '60',
        email: 'graciela@hotmail.com'
      },
    ];
  }

  addPerson(pPersona: Persona){
    this.arrPersonas.push(pPersona);
    console.log(this.arrPersonas);
  }

  getAll(): Persona[] {
    return this.arrPersonas;
  }

  getPeopleByAge(pFiltros: any) : Persona []{
    if(pFiltros.edadMax === '' && pFiltros.edadMin === ''){
      console.log('vacios')
      return this.arrPersonas;
    } else if(pFiltros.edadMax === ''){
      return this.arrPersonas.filter(persona => persona.edad >= pFiltros.edadMin);
    } else {
      return this.arrPersonas.filter(persona => persona.edad >= pFiltros.edadMin && persona.edad <= pFiltros.edadMax);
    }
    
  }

}
