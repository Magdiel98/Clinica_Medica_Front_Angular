import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  show: boolean = false; 
  showLista(): void{
    this.show = !this.show;
  }
}
