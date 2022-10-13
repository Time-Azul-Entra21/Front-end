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
          {name:"---",desc:"----",color:"badge-success"},
          {name:"------",desc:"--------",color:"badge-primary"}, 
          {name:"------",desc:"Merendar",color:"badge-warning"}, 
          {name:"-------",desc:"-------",color:"badge-danger"}, 
          {name:"--------",desc:"------",color:"badge-secondary"}, 
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
