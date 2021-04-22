import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { ProduitGuard } from './produit.guard';
import { ProduitComponent } from './produit/produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = 
[
{ path: 'produits', component:ProduitComponent},
{ path: 'login', component:LoginComponent},
{ path: 'app-forbidden', component:ForbiddenComponent},
{path: 'addProduit',canActivate:[ProduitGuard], component:AddProduitsComponent},

{path: 'updateProduit/:id', component:UpdateProduitComponent},

 //Notre composant par defaut 

{ path:'', redirectTo:'produits' ,pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
