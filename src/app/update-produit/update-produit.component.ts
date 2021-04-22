import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modele/produit.model';
import { ProduitService } from '../Services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  currentProduit=new Produit();

  constructor(private produitService :ProduitService,private activatedRoute:ActivatedRoute,private router:Router)
   {

    }

  ngOnInit(): void {

    this.produitService.consulterProduitById(this.activatedRoute.snapshot.params.id).subscribe(pro =>

      {
        this.currentProduit=pro;
      }

    )

  }
  
  update()
  {
   this.produitService.updateProduit(this.currentProduit).subscribe(() =>
    {
      this.router.navigate(['/produits']);
  
    }),

    (error) =>
    {
      alert("Probleme lors de la modification");
    }
  }


}
