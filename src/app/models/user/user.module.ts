import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 
  id?:number
  name?:string
  username?:string 
  email?:string 
  phone?:string
  website?:string
}
