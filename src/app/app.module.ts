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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellproductComponent } from './Components/dashboard/sellproduct/sellproduct.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminsellComponent } from './Components/adminsell/adminsell.component';
import { TopnavComponent } from './Components/dashboard/topnav/topnav.component';
import { MainComponent } from './Components/dashboard/main/main.component';
import { VerticalnavComponent } from './Components/dashboard/verticalnav/verticalnav.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ViewusersComponent } from './Components/dashboard/viewusers/viewusers.component';
import { InterceptInterceptor } from './Services/intercepter/intercept.interceptor';
import { EditproductComponent } from './Components/dashboard/editproduct/editproduct.component';
import { EditproducthereComponent } from './Components/dashboard/editproducthere/editproducthere.component';




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
    SignupComponent,
    ViewusersComponent,
    EditproductComponent,
    EditproducthereComponent,

    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
