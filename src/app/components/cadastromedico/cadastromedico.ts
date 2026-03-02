import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastromedico',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastromedico.html',
  styleUrl: './cadastromedico.scss',
})
export class Cadastromedico {
  medico = {
    nome: '',
    crm: '',
    telefone: '',
    email: '',
  };


  constructor(private http: HttpClient) {}

  enviarMedico(){
    const url = "http://localhost:8080/medicos";

    const dadosParaEnvio = {
      ...this.medico,
      telefones: [this.medico.telefone] 
    };

    this.http.post(url, dadosParaEnvio).subscribe({
      next: (res) => {
        alert('Médico cadastrado com sucesso!');
        this.medico = { nome: '', crm: '', telefone: '', email: '' };
      },
      error: (err) => {
        console.error('Erro ao cadastrar:', err);
        alert('Erro ao realizar cadastro.');
      }
    });
  }
}
