import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let islogin = localStorage.getItem('islogin');
  if(islogin){
    return true;
  }
  else{
    return false;
  }};
