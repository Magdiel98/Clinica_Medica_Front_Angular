import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-corpo',
  imports: [RouterLink],
  templateUrl: './corpo.html',
  styleUrl: './corpo.scss',
})
export class Corpo implements OnInit{
  todoList: any[] = [];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void{
    this.getTodos();
  }
  getTodos(){
    this.http.get("http://localhost:8080/medicos").subscribe((result : any) => {
      this.todoList= result;
    }
    )
  }
}
