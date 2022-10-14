import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})

export class CadastroFuncionarioComponent implements OnInit {
  funcionarios!: Array<any>
  funcionario: any = {};
  cadastrando!: boolean;
  
  id!: number
  cpf!: string
  nome!: string
  idade!: number
  endereco!: string
  telefone!: string
  turno!: string
  funcao!: string
  salario!: string

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.funcionarioService
      .getFuncionarios()
      .pipe(
        catchError((error) => {
          let funcionarios: Array<any> = new Array();
          funcionarios.push({ id: 1, cpf: '123-456-78', nome: 'Gabriel', idade: 19, endereco: 'Gaspar', telefone: '(11) 4002 -8922.', turno: 'diurno', funcao: 'personal', salario: '4000'});
        
       
          return of(funcionarios);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.funcionarios = response;
      });
  }
  openForm(): void {
    this.funcionario = {};
    this.cadastrando = true;
  }
  closeForm(): void {
    this.funcionario = {};
    this.cadastrando = false;
  }
  updateForm(funcionario: any): void {
    this.funcionario = funcionario;
    this.cadastrando = true;
  }

  create(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }

    this.funcionarioService
      .create(this.funcionario)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.funcionarios.push(response);

          this.closeForm();
        }
      });
  }
  validForm(): boolean {
    let valid: boolean = true; //se houver o nome, ira passar
    if (!this.funcionario.nome) {
      valid = false;
    }
    return valid;
  }

  update(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }
    this.funcionarioService
      .update(this.funcionario)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.funcionario[this.funcionarios.indexOf(this.funcionario)] = response;

          this.closeForm();
        }
      });
  }

  delete(funcionario: any): void {
    this.funcionarioService
      .delete(funcionario)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.funcionarios.splice(this.funcionarios.indexOf(this.funcionario), 1);
        }
      });
  }
}