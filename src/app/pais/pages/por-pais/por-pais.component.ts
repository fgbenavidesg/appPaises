import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  
    li{
        cursor : pointer;
      }
  
  `
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  paisesSugerencias  : Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    this.mostrarSugerencias=false;
    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarPais( this.termino )
    .subscribe((paises)=>{
        if(paises.length==undefined){
            this.hayError = true;
        }
        this.paises = paises;
        
      },(err)=>{
        this.hayError = true;
        this.paises   = [];
      });
  }
  sugerencias( termino: string ) {
    this.hayError = false;
    this.mostrarSugerencias=true;
    this.termino= termino;
    // TODO: crear sugerencias
    this.paisService.buscarPais(termino)
      .subscribe( paises=> this.paisesSugerencias = paises.splice(0,5),
      (error)=>{this.paisesSugerencias=[]})
  }
  buscarSugerido(termino : string){
    this.buscar(termino);
  }

}
