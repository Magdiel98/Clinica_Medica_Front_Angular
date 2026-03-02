import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastropaciente',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastropaciente.html',
  styleUrl: './cadastropaciente.scss',
})
export class Cadastropaciente {
   paciente = {
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
  };

  constructor(private http: HttpClient) {}

  enviarPaciente(){
    const url = "http://localhost:8080/pacientes";

    const dadosParaEnvio = {
      ...this.paciente,
      telefones: [this.paciente.telefone] 
    };

    this.http.post(url, dadosParaEnvio).subscribe({
      next: (res) => {
        alert('Paciente cadastrado com sucesso!');
        this.paciente = { nome: '', cpf: '', telefone: '', email: '' };
      },
      error: (err) => {
        console.error('Erro ao cadastrar:', err);
        alert('Erro ao realizar cadastro.');
      }
    });
  }

}
