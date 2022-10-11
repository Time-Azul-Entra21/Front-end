import { Component, OnInit } from '@angular/core';
import { SistemaService } from '../services/sistema.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sistemaService:SistemaService) { }

  clientes!:Array<any>
  equipamentos!:Array<any>
  funcionarios!:Array<any>

  ngOnInit(): void {

    this.getClientes()
  }

  getClientes():void{

    this.sistemaService.getClientes()
    .pipe(
      catchError((error)=>{
        return of ([
           
        ])
      })
    ).subscribe((response:any)=>{
      console.log(response);
      
      this.clientes=response
    })
  }

}
