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
  tasks!:Array<any>

  ngOnInit(): void {
    this.getTasks()
    this.getClientes()
  }
  getTasks():void{

    this.sistemaService.getTasks()
    .pipe(
      catchError((error)=>{
        return of ([
          {name:"Material didático pessoal no site oliota.com",desc:"Geralmente 1 dia antes",color:"badge-success"},
          {name:"Cerimonia ágil",desc:"Planejamento,Diaria ou Retrospectiva",color:"badge-primary"}, 
          {name:"Intervalo",desc:"Merendar",color:"badge-warning"}, 
          {name:"Exercicio",desc:"Importante práticar",color:"badge-danger"}, 
          {name:"Avaliação",desc:"Ninguem deixa em branco",color:"badge-secondary"}, 
        ])
      })
    ).subscribe((response:any)=>{
      this.tasks=response
    })
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
