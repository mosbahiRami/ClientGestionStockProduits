import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    ContentComponent,
    SidebarComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
