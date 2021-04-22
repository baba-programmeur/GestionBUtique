import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../modele/produit.model';
import { ProduitService } from '../Services/produit.service';

@Component(
{
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.css']

})

export class AddProduitsComponent implements OnInit {

  nouveauProduit=new Produit();

  message : string;
  
  constructor(private produitService:ProduitService,private router:Router) 
  { 

  }

  ngOnInit(): void {
  }

  ajoutProduit()
  {
  
   this.produitService.addProduit(this.nouveauProduit).subscribe(produit =>
   
    {
      console.log(produit);

    });

    this.router.navigate(['/produits'])
  }

  resetFormulaire()
  {
    this.nouveauProduit.id=null;
   this.nouveauProduit.nom="";
   //this.nouveauProduit.prix=null;
   this.nouveauProduit.dateCreation=null;
  }


}
