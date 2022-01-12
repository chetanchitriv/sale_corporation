import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './Components/cart/cart.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HotdealsComponent } from './Components/hotdeals/hotdeals.component';
import { LoginComponent } from './Components/login/login.component';
import { ShopComponent } from './Components/shop/shop.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { ViewproductComponent } from './Components/viewproduct/viewproduct.component';
import { WhishlistComponent } from './Components/whishlist/whishlist.component';
import { AboutComponent } from './Components/about/about.component';
import { SellproductComponent } from './Components/dashboard/sellproduct/sellproduct.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminsellComponent } from './Components/adminsell/adminsell.component';
import { MainComponent } from './Components/dashboard/main/main.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthGuard } from './Services/auth.guard';
import { ViewusersComponent } from './Components/dashboard/viewusers/viewusers.component';
import { EditproductComponent } from './Components/dashboard/editproduct/editproduct.component';
import { EditproducthereComponent } from './Components/dashboard/editproducthere/editproducthere.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: '/ecom/home',
        pathMatch: 'full',
    },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },

    {path:"ecom",component:EcommerceComponent,
    children:[
    { path: "deal", component: HotdealsComponent },
    { path: "view/:id", component: ViewproductComponent },
    { path: "cart", component: CartComponent },
    { path: "footer", component: FooterComponent },
    { path: "home", component: HomeComponent },
    { path: "shop", component: ShopComponent },
    { path: "sidenav", component: SidenavComponent },
    { path: "contactus", component: ContactusComponent },
    { path: "wishlist", component: WhishlistComponent },
    { path: "about", component: AboutComponent },
    ]},
    {path:"admin",component:AdminComponent},
    {path:"adminsell",component:AdminsellComponent},
    {path:"main",component:MainComponent,
     children:[
        { path: "sell", component: SellproductComponent },
        { path: "viewusers", component: ViewusersComponent },
        { path: "editproduct", component: EditproductComponent },
        { path: "editproduct1/:id", component: EditproducthereComponent }
     ]}
   

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}