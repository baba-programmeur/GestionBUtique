import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { FormsModule } from '@angular/forms';
import { ProduitService } from './Services/produit.service';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './Services/auth.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    AddProduitsComponent,
    UpdateProduitComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProduitService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
