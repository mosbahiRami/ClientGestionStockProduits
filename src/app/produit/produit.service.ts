import {Injectable} from '@angular/core' ;
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
@Injectable()
export class ProduitService {
  constructor(private http: HttpClient) { }

  getProduits(): Observable<any> {
    return this.http.get(API_URLS.PRODUITS_URL);
  }

}
