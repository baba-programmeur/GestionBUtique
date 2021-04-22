import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../modele/produit.model';
import { AuthService } from '../Services/auth.service';
import { ProduitService } from '../Services/produit.service';

@Component(
  {
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']

   })

export class ProduitComponent implements OnInit 

{
  
   produits:Produit[];

   produit:Produit;

  constructor(private produitService:ProduitService,private  router:Router
    ,public authservice:AuthService)

  {

  }

  /*
  getProduit()
  {

    this.produits=this.produitService.listeProduit();

  }
  */

  ngOnInit(): void
  {

  this.produitService.listProduit().subscribe(prod =>

    {
      console.log(prod)

      this.produits=prod

    }

  );

  }

  supprimerProduit(produit :Produit)
  {
        
 let confirmation= confirm("Etes-Vous sur de bien vouloir supprimer");
     
     if(confirmation)

        this.produitService.deleteProduitById(produit.idProduit).subscribe(() =>
    {
          console.log("Produit bien supprime");
    
        this.supprimerProduitDuTableau(produit);

       } );

  }

//Suppression du tableau sans a avoir a rechrger la page 

  supprimerProduitDuTableau(p:Produit)
  {
     this.produits.forEach((cur,index )=>
     {
       if(p.idProduit==cur.idProduit)
       {
         this.produits.splice(index, 1)
       }

     }

     );
     

  }

}
