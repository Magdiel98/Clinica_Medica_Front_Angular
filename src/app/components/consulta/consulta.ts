import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  imports: [],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss',
})
export class Consulta implements OnInit{

  todoList: any[] = [];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void{
    this.getTodos();
  }
  getTodos(){
    this.http.get("http://localhost:8080/consultas").subscribe((result : any) => {
      this.todoList= result;
    }
    )
  }
}
