import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit { 
  //
  clientes!: Array<any>
  cadastrando!: boolean;
  cliente!: any;
  //
  id!: number
  cpf!: string
  nome!: string
  idade!: number
  endereco!: string
  telefone!: string
  tipo_plano!: string
  numero_cartao!: string
  //
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.clienteService
      .getClientes()
      .pipe(
        catchError((error) => {
          let clientes: Array<any> = new Array();
          clientes.push({ id: 1, cpf: '123-456-78', nome: 'Gabriel', idade: 19, endereco: 'Gaspar', telefone: '(11) 4002 -8922.', tipo_plano: 'Anual', numero_cartao: '1234-5698'});
          clientes.push({ id: 2, cpf: '123-456-78', nome: 'Geiso', idade: 20, endereco: 'Brusque', telefone: '(11) 4002 -8922.', tipo_plano: 'Mensal', numero_cartao: '1234-5698'});
          clientes.push({ id: 3, cpf: '123-456-78', nome: 'Geovani', idade: 19, endereco: 'Içara', telefone: '(11) 4002 -8922.', tipo_plano: 'Semanal', numero_cartao: '1234-5698'});
          clientes.push({ id: 4, cpf: '123-456-78', nome: 'Henrique', idade: 19, endereco: 'Blumenau', telefone: '(11) 4002 -8922.', tipo_plano: 'Anual', numero_cartao: '1234-5698'});
         
          return of(clientes);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.clientes = response;
      });
  }
  openForm(): void {
    this.cliente = {};
    this.cadastrando = true;
  }
  closeForm(): void {
    this.cliente = {};
    this.cadastrando = false;
  }
  updateForm(cliente: any): void {
    this.cliente = cliente;
    this.cadastrando = true;
  }

  create(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }

    this.clienteService
      .create(this.cliente)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.clientes.push(response);

          this.closeForm();
        }
      });
  }
  validForm(): boolean {
    let valid: boolean = true; //se houver o nome, ira passar
    if (!this.cliente.nome) {
      valid = false;
    }
    return valid;
  }

  update(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }
    this.clienteService
      .update(this.cliente)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.cliente[this.clientes.indexOf(this.cliente)] = response;

          this.closeForm();
        }
      });
  }

  delete(cliente: any): void {
    this.clienteService
      .delete(cliente)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.clientes.splice(this.clientes.indexOf(this.cliente), 1);
        }
      });
  }
}
 
  // clientes: Array<any> = [
  //   {
  //     id:"",
  //     nome: "Gabriel",
  //     idade: "",
  //     endereco: "",
  //     telefone:"",
  //     plano: "",
  //     cartao: ""

  //   },
 
  // ]


  // deletar(index: number) {
  //   this.clientes.splice(index, 1)
  // }

  // adicionar() {
  //   if (this.nome) {
  //     this.clientes.push(
  //       {
  //         nome: this.nome,
  //         idade: this.idade,
          
  //       }
  //     )
  //   } else {
  //     alert("erro")
  //   }
  
  // }
