import { Component,OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserModule } from '../models/user/user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:UserService, private route:Router){
  }
  userData?:Array<UserModule>;
ngOnInit(): void {
  this.service.getUsers().subscribe(
    p=>{
      this.userData = p
    }
  )
}
Edit(id:any){
  this.route.navigate(['/user',id]);
}
Delete(id:any){
  this.service.deleteUserById(+id).subscribe(p=>{
    console.log(p)
  })
}
}
