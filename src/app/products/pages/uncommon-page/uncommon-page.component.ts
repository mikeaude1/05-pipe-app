import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
//i18n Select
public name:string ='Miguel'
public gender:'Male'|'Female'='Male'
public invitationMap ={
  'Male': 'invitarlo',
  'Female':'invitarla'
}
//i18n Plural
public clients: string[]=['Zacarias','Manuel','Dolores','Jesus','Humberto','Ricardo','Jackeline','Alejandra']
public clientsMap={
  '=0':'no tenemos ningún cliente esperando.',
  '=1':'tenemos un cliente esperando.',
  '=2':'tenemos 2 personas esperando.',
  'other':'tenemos # clientes esperando.'
}
//key pipe and json pipe
public person= {
  name:'Miguel',
  age:'39',
  adderess:'Chihuahua, México'
}

//Async Pipe
public myObserbaleTimer = interval(2000).pipe(
  tap(value=>console.log('tap:',value))
)
public pomiseValue: Promise<string> = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Tenemos data en la promesa.');
    console.log('Tenemos data en la promesa.');
    this.person.name= 'Otro Nombre'
  },3500);
})
changeClient(){
  this.name= 'Maria';
  this.gender='Female'
}
deleteClient(){
  this.clients.shift();

}
}
