import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(public _http: HttpClient) { }
  
  
  getCuenta(): Observable <any> {
    return this._http.get("http://bankapp.endcom.mx/api/bankappTest/cuenta");
  }

  getSaldos(): Observable <any> {
    return this._http.get("http://bankapp.endcom.mx/api/bankappTest/saldos");
  }

  getSaldo(): Observable <any> {
    return this._http.get("http://bankapp.endcom.mx/api/bankappTest/tarjetas");

  }

  getMovimientos(): Observable<any> {
    return this._http.get("http://bankapp.endcom.mx/api/bankappTest/movimientos")

  }
}


