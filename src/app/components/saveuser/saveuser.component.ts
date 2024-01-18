import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-saveuser',
  templateUrl: './saveuser.component.html',
  styleUrls: ['./saveuser.component.css']
})
export class SaveuserComponent { 
  constructor(private fb:FormBuilder, private service:UserService, private activeroute:ActivatedRoute){
    this.activeroute.paramMap.subscribe(p =>{
     let id=p.get('id')
      if (id)
      {
        this.service.getUserById(+id).subscribe(p=>{
          const {id,name,username,email,phone,website}=p
          const newdata = {id,name,username,email,phone,website}
          this.userForm.setValue(newdata)
        })
      }
    })
  }
  userForm: FormGroup = this.createForm()
  createForm(){
    return this.fb.group({
      id:[0],
      name:['',[Validators.required, Validators.minLength(4)]],
      username:['',[Validators.required]] ,
      email:['',[Validators.required,Validators.email]],
      phone:[''],
      website:['']
 
    })
  }
  submit(){
    console.log("hello!")
    if (this.userForm.valid){
     
    this.service.saveUsers(this.userForm.value).subscribe(p=>{
      if(p.status === 201)
      {
        this.userForm.reset();
        alert("user added")
      }
    });
  }
  }
}
