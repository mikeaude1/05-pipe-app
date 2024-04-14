import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
public nameLower:string='miguel'
public nameUpper:string='MIGUEL'
public fullName:string='MIguEL aUDe AlCarAz'
public fecha: Date=new Date();

public properties: any[]=[this.fecha];
}

