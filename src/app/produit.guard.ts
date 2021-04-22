import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class ProduitGuard implements CanActivate {
 
 constructor( private authservice:AuthService,private router:Router)
 {
 }
  canActivate
  (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authservice.isadmin())   

          return true;
      
          else
             {
               this.router.navigate(['app-forbidden']);

                  return false;
             }

            }  
}
