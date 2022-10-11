import { Component, OnInit } from '@angular/core';
import { SegurancaService } from '../services/seguranca.service';
import { Router } from '@angular/router';
import { SistemaService } from '../services/sistema.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menus!: Array<any>;
  constructor(
    public seguranca: SegurancaService,
    public sistemaService: SistemaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sistemaService
      .getMenu()
      .pipe(
        catchError((error) => {
          return of([
            {
              title: 'Clientes',
              color: 'text-dark',
              icon: 'fas fa-circle',
              sub: [
                { title: 'Cadastro', 
                icon: 'fas fa-table',
                route: 'cadastro-cliente'  },
                {
                  title: 'Lista', 
                icon: 'fas fa-table',
                route: ''

                }
                
              ],
            },
            {
              title: 'Funcionarios',
              color: 'text-dark',
              icon: 'fas fa-circle',
              sub: [
                { title: 'Cadastro', 
                icon: 'fas fa-table',
                route: 'cadastro-funcionario'  },
                {
                  title: 'Lista', 
                icon: 'fas fa-table',
                route: ''

                }
              
              ],
            },
            {
              title: 'Equipamentos',
              color: 'text-dark',
              icon: 'fas fa-circle',
              sub: [
                { title: 'Cadastro', 
                icon: 'fas fa-table',
                route: 'cadastro-equipamento'  },
                {
                  title: 'Lista', 
                icon: 'fas fa-table',
                route: ''

                }
              
              ],
            },
          ]);
        })
      )
      .subscribe((response) => {
        this.menus=response

      });
  }

  sair(): void {
    this.seguranca.logged = false;
    this.router.navigateByUrl('');
  }
}
