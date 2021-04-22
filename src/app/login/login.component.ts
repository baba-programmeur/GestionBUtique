import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modele/user.model';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user =new User();
  error=0;

  constructor(private authservice:AuthService,private router :Router) { }

  ngOnInit(): void {
  }

  onloggedIn()
  {
    return this.authservice.getUserFromDatabase(this.user.username).subscribe((user:User) =>
     
     {
          if(this.user.password==user.password)
          {
           this.authservice.signIn(user);
 
           this.router.navigate(['/login']); 

           console.log(this.user.username);
          }
      else
 
      this.error=1
 
   },
      (error) =>
 
      {
        console.log(error);
 
      }
      
      )
 
     }

  getUser()

  {

}

}
