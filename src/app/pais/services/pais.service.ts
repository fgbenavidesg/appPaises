import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  get httpParams (){
    return new HttpParams().set('fields','name,capital,alpha2code,flag,population');
  }

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }
  buscarRegion( region: string ):Observable<Country[]>{

    const url = `${ this.apiUrl }/regionalbloc/${ region }`;
    return this.http.get<Country[]>(url);
  }

}
