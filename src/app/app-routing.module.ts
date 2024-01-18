import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SaveuserComponent } from './components/saveuser/saveuser.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PostComponent } from './components/post/post.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path:'book',loadChildren:()=>import('./book/book.module').then(p=>p.BookModule)
  },
    {
      path: 'home',component: HomeComponent,

    },
    {
      path: 'about',component: AboutComponent,
      children: [
        {
          path: 'userinfo',component: UserInfoComponent,
          canActivate: [authGuard]

        },
        {
          path: 'posts',component: PostComponent
        },
      ]
     

    },
    {
      path: 'contact',component: ContactComponent

    },
    {
      path:'', redirectTo: 'home',pathMatch: 'full',
    },
    {
      path: 'user/:id',component: SaveuserComponent
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
