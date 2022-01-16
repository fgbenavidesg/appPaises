import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    //accedemos al observabol en el cual estan los parametros
    this.activatedRoute.params
    //trabaja con el producto del observabol params en este caso
      .pipe(
        //switchMap recibe y regresa otro observabol
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )  ),
        //tap dispara un efecto secundario
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );
  } 

}
