import { Component, OnInit } from '@angular/core';
import {ProduitMockService} from './produit.mock.service';
import {Produit} from '../shared/produit';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];

  produitForm: FormGroup;
  constructor(private produitmockservice: ProduitMockService ,  private fb: FormBuilder) { }

  ngOnInit() {
    this.produits = this.produitmockservice.getProduits();
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
  }

}
