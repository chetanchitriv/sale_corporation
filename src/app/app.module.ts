import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { HomeComponent } from './Components/home/home.component';
import { ShopComponent } from './Components/shop/shop.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WhishlistComponent } from './Components/whishlist/whishlist.component';
import { ViewproductComponent } from './Components/viewproduct/viewproduct.component';
import { HotdealsComponent } from './Components/hotdeals/hotdeals.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellproductComponent } from './Components/dashboard/sellproduct/sellproduct.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminsellComponent } from './Components/adminsell/adminsell.component';
import { TopnavComponent } from './Components/dashboard/topnav/topnav.component';
import { MainComponent } from './Components/dashboard/main/main.component';
import { VerticalnavComponent } from './Components/dashboard/verticalnav/verticalnav.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';




@NgModule({
  declarations: [
    AppComponent,

    SidenavComponent,
    HomeComponent,
    ShopComponent,
    
    CartComponent,
    ContactusComponent,
    FooterComponent,
    WhishlistComponent,
    ViewproductComponent,
    HotdealsComponent,
    LoginComponent,
    AboutComponent,
    SellproductComponent,
    AdminComponent,
    AdminsellComponent,
    TopnavComponent,
    MainComponent,
    VerticalnavComponent,
    EcommerceComponent,

    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }