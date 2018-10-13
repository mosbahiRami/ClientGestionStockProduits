import { Component, OnInit } from '@angular/core';
import {ProduitMockService} from './produit.mock.service';
import {Produit} from '../shared/produit';
import {ProduitService} from './produit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];

  produitForm: FormGroup;
  constructor(private produitservice: ProduitService ,  private fb: FormBuilder) {

    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });

  }

  ngOnInit() {
    this.loadProduits();
  }

  loadProduits() {
    this.produitservice.getProduits().subscribe (
      data => this.produits = data,
      error => {console.log('Error'); },
      () => {console.log('Chargement des produits'); }

      );

  }
}
