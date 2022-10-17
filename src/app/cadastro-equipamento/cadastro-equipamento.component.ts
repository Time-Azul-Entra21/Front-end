import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from './equipamento.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.component.html',
  styleUrls: ['./cadastro-equipamento.component.css']
})
export class CadastroEquipamentoComponent implements OnInit {

  equipamentos!: Array<any>
  cadastrando!: boolean;
  equipamento!: any;
  id!: number
  nome!: string
  quantidade!: number
  

  constructor(private EquipamentoService: EquipamentoService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.EquipamentoService
      .getEquipamentos()
      .pipe(
        catchError((error) => {
          let equipamentos: Array<any> = new Array();
          equipamentos.push({ id: 1, nome: 'flexora', quantidade: 2});
          equipamentos.push({ id: 2, nome: 'abdutora', quantidade: 2});
          equipamentos.push({ id: 3, nome: 'legpress', quantidade: 2});
          equipamentos.push({ id: 4, nome: 'Halteres ', quantidade: 25});
         
          return of(equipamentos);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.equipamentos = response;
      });
  }
  openForm(): void {
    this.equipamento = {};
    this.cadastrando = true;
  }
  closeForm(): void {
    this.equipamento = {};
    this.cadastrando = false;
  }
  updateForm(equipamento: any): void {
    this.equipamento = this.equipamento;
    this.cadastrando = true;
  }

  create(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }

    this.EquipamentoService
      .create(this.equipamento)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.equipamentos.push(response);

          this.closeForm();
        }
      });
  }
  validForm(): boolean {
    let valid: boolean = true; //se houver o nome, ira passar
    if (!this.equipamento.nome) {
      valid = false;
    }
    return valid;
  }

  update(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
      return;
    }
    this.EquipamentoService
      .update(this.equipamento)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.equipamento[this.equipamento.indexOf(this.equipamento)] = response;

          this.closeForm();
        }
      });
  }

  delete(equipamento: any): void {
    this.EquipamentoService
      .delete(equipamento.id)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.equipamento.splice(this.equipamento.indexOf(this.equipamento), 1);
        }
      });
  }
}