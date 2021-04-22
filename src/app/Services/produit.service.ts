import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit.model';

const httpOptions =
{
  //les donnees seront sous forme de JSON 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({

  providedIn: 'root'

})

export class ProduitService {
  //Un tableau de String 

  produits: Produit[];

  apiUrl: string = 'http://localhost:8080/produits/api';

  //Utilisation de ce tableau pour le dataBinding

  constructor(private http: HttpClient) {

    /*
    this.produits=[    
      
      {id:1,nom:"Velo", prix:15000,dateCreation:new Date("12/12/2020")},
    
      {id:2,nom:"Stylo", prix:100,dateCreation:new Date("09/12/2017")},
    
      {id:3,nom:"Ecouteur", prix:5000,dateCreation:new Date("09/12/2018")},
    
      {id:4,nom:"Cahier", prix:200,dateCreation:new Date("09/12/2018")},
    
      {id:5,nom:"Souris", prix:2000,dateCreation:new Date("07/12/2019")}
    
        ];
     */

  }

  //Lobservable est un canal qui se connecte sur le 
  //serveur pour faciliter tout acces sur la bd 

  listProduit(): Observable<Produit[]> {

    return this.http.get<Produit[]>(this.apiUrl);


  }

  consulterProduitById(id: number): Observable<Produit> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Produit>(url)

  }

  addProduit(produit: Produit): Observable<Produit> {

    return this.http.post<Produit>(this.apiUrl, produit, httpOptions)

    // this.produits.push( produit);

  }

  deleteProduitById(id: number) {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete(url, httpOptions);

  }

  updateProduit(produit: Produit): Observable<Produit> {

    return this.http.put<Produit>(this.apiUrl, produit, httpOptions)

  }



  /*
  deleteProduitById(produit:Produit)
  {
    const index=this.produits.indexOf(produit,0);
  
    if(index > -1)
    {
        //le parametre 1 montre qu'un seul produit sera supprmie
   
        this.produits.splice(index, 1);
  
    }
  
    */





  /*
  updateProduit(id:number)
  {
  
    this.deleteProduitById(id);
  
    this.addProduit(id)
  
  }
  */

}
