import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  listaCurso:string[]=["TS","Java","php","C#","Javascript"]
  enable=true;
  constructor() { }
  
  setEnable():void{
    this.enable=(this.enable==true)?false:true;
  }
}
