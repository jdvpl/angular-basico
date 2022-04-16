import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  clientes:Cliente[]=[
    {id:1,name:'Juan Daniel',lastname:'Suarez',email:'jdvpl@gmail.com',dateCreated:'12-04-2022'},
    {id:2,name:'Mr Jhon',lastname:'Lopez',email:'jhon@gmail.com',dateCreated:'12-04-2022'},
    {id:3,name:'Saitama',lastname:'Earth',email:'saitama@gmail.com',dateCreated:'27-02-2022'},
    {id:4,name:'Kakaroto',lastname:'Sayayin',email:'kakaroto@gmail.com',dateCreated:'11-04-2022'},
    {id:5,name:'Vegeta',lastname:'Sayayin',email:'vegeta@gmail.com',dateCreated:'08-04-2022'},
    {id:6,name:'Jiren',lastname:'Universo 11',email:'jiren@gmail.com',dateCreated:'12-09-2022'},
    {id:7,name:'Toppo',lastname:'Universo 11',email:'toppo@gmail.com',dateCreated:'03-02-2022'},
    {id:8,name:'Genos',lastname:'kun',email:'genos@gmail.com',dateCreated:'07-06-2022'},
    {id:9,name:'Tanjiro',lastname:'Kamado',email:'tanjiro@gmail.com',dateCreated:'19-12-2022'},
    {id:10,name:'Nezuko',lastname:'Kamado',email:'nezuko@gmail.com',dateCreated:'28-01-2022'},
    {id:11,name:'Whis',lastname:'Samma',email:'whis@gmail.com',dateCreated:'12-09-2021'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
