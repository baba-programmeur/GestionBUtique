import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../modele/role.model';
import { User } from '../modele/user.model';

@Injectable(
  {
  providedIn: 'root'

})

export class AuthService 
{
    public loggedUser: string;
    public isLoggedIn: boolean = false; 
    public roles: Role[];
    
    api :String= "http://localhost:8081/recherche/";
/*
    users: User[] = [
      { "username": "FATY", "password": "gt1", "roles": ['admin'] },
      { "username": "Cheikh", "password": "Cheikh21", "roles": ['user'] }
    
    ];
    */

    constructor(private router:Router,private http:HttpClient) { }
  
    signIn(user: User)
     {

       //   let validUser: boolean = false;

          this.loggedUser = user.username;
          this.isLoggedIn = true;
          this.roles = user.roles;
          //localStorage permet de stocker ces identifiants chez le client
          //setItem permet de stocker un objet et getItem de reuperer   
          localStorage.setItem("loggedUser", this.loggedUser);
          //Caster pour lavoir en string JSON.stringify
          localStorage.setItem("isloggedIn", String(this.isLoggedIn));
         
       
    
        }




     // });
     // return validUser;
    
  /*

    */

    isadmin():Boolean
    {
      let admin: boolean = false

      if(!this.roles)

       return false;

       else 
        this.roles.forEach((curseur) =>
        {
           if(curseur.role=='ADMIN')
              
           admin=true;
        } 

        )
  
        return admin;
    }

  /*

    isAdmin2()
    {
      this.users.forEach((curseur)=>
      {
        if(curseur.roles==["admin"])
           
          return true;

              return false;
      }
      ); }

    */  

      onLogOut()
      {
        this.isLoggedIn=false;
        this.loggedUser=undefined;
        this.roles=undefined;

    localStorage.removeItem("loggedUser");
   
   localStorage.setItem("isLogged",String(this.isLoggedIn))
     
    this.router.navigate(['/login']);

      }

      setLoggedUserFromLocalStorage(login:string)
      {
        this.isLoggedIn=true;
        this.loggedUser=login;
       
       // this.getUserRole(login);
      }
/*
      getUserRole(log:string)
      {
          this.users.forEach((curseur) =>
          {
             if(curseur.username ==log)

              this.roles=curseur.roles;
              
          }
          
          )

      }

      */
      getUserFromDatabase(username:string):Observable <User>
      {
        const urll= `${this.api}/${username}`;

        return this.http.get<User>(urll);

      }

  }
  
