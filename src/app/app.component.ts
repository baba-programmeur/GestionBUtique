import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Boutique';
  constructor(public authservice:AuthService,private router:Router)
  
  {

  }
  
  deconnexion()
  {
    this.authservice.onLogOut();
  }

  ngOnInit()
  {

   let isloggedIn:string;
  
   let loggedUser:string;
    
   isloggedIn=localStorage.getItem("isloggedIn");

   loggedUser=localStorage.getItem("loggedUser");

     if(isloggedIn !="true" || !loggedUser)
     
          this.router.navigate(['/login']);

          else

            this.authservice.setLoggedUserFromLocalStorage(loggedUser);
                 
            this.router.navigate(['/produits']);
              
         //   window.location.reload();
  }

}