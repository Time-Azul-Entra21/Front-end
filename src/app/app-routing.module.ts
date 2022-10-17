import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SegurancaService } from './services/seguranca.service';
import { TimeComponent } from './time/time.component';

import { CadastroEquipamentoComponent } from './cadastro-equipamento/cadastro-equipamento.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { UsersComponent } from './users/users.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [SegurancaService] },
  { path: "cadastro-cliente", component: CadastroClienteComponent, canActivate: [SegurancaService] },
  { path: "cadastro-equipamento", component: CadastroEquipamentoComponent, canActivate: [SegurancaService] },
  { path: "cadastro-funcionario", component: CadastroFuncionarioComponent, canActivate: [SegurancaService] },
  { path: "time", component: TimeComponent },
  { path: "users", component: UsersComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
