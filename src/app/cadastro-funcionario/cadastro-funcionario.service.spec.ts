import { TestBed } from '@angular/core/testing';

import { CadastroFuncionarioService } from './cadastro-funcionario.service';

describe('CadastroFuncionarioService', () => {
  let service: CadastroFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
