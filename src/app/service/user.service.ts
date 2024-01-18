import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModule } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
    getUsers():Observable<UserModule[]>{
      return this.http.get<UserModule[]>("https://jsonplaceholder.typicode.com/users")
    }
    saveUsers(model:UserModule):Observable<HttpResponse<any>>
    {
      let url = model.id ==0 ? "https://jsonplaceholder.typicode.com/todos:" : `https://jsonplaceholder.typicode.com/users/${model.id}`;
        return this.http.post<UserModule[]>("https://jsonplaceholder.typicode.com/todos",model,{observe:'response'})

      
    }

    getUserById(id:number):Observable<UserModule> {
        return this.http.get<UserModule>(`https://jsonplaceholder.typicode.com/users/${id}`)
      }
    deleteUserById(id:number) {
      return this.http.delete<number>(`https://jsonplaceholder.typic.com/users/${id}`)
    }
  }

