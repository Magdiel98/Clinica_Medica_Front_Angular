import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agendar',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './agendar.html',
  styleUrl: './agendar.scss',
})
export class Agendar implements OnInit{
  agendamento = {
    data: '',
    hora: '',
    pacienteId: null,
    medicoId: null
  };

  pacientes: any[] = [];
  medicos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(){
    this.http.get<any[]>("http://localhost:8080/medicos").subscribe(res => this.medicos = res);
    this.http.get<any[]>("http://localhost:8080/pacientes").subscribe(res => this.pacientes = res);
  }

  enviarAgendamento(){
    const url = "http://localhost:8080/consultas";

    this.http.post(url, this.agendamento).subscribe({
      next: (res) => {
        alert('Consulta agendada com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao agendar:', err);
        alert('Erro ao realizar agendamento.');
      }
    });
  }
}
