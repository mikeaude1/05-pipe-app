import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name:'toggleCase'
})


export class ToggleCasePipe implements PipeTransform{
  transform(value: string , toUpper:boolean ,toLower:boolean):string {

   if (toUpper && toLower){
    return value.charAt(0).toUpperCase() + value.substring(1).toLocaleLowerCase() ;
   }else{
    if (toUpper) {return value.toUpperCase()}
    if (toLower) {return value.toLowerCase()}
    return value
   }
  }

}
