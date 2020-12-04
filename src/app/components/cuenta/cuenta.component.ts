import { Component, OnInit } from '@angular/core';

import {PeticionesService} from '../../service/peticiones.service';



@Component({


  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css'],
  providers: [PeticionesService]
  
  
})
export class CuentaComponent implements OnInit {

  public cuenta: any;

  constructor(
    public _peticionesService: PeticionesService
  ) { }

    obtenerCuenta() {
      this._peticionesService.getCuenta().subscribe( 
      result => {
        this.cuenta = result.cuenta;
      },
      error => {
        console.log(<any>error);
      }

    );
    }

  ngOnInit() { 
    
   
  }

}
