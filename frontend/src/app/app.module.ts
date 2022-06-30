import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DownScrollerComponent } from './components/down-scroller/down-scroller.component';
import { LogoComponent } from './components/logo/logo.component';
import { BackgroundImgComponent } from './components/background-img/background-img.component';
import { AboutComponent } from './components/about/about.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DownScrollerComponent,
    LogoComponent,
    BackgroundImgComponent,
    AboutComponent,
    SpacerComponent,
    ContactComponent,
    ShopComponent,
    CartComponent,
    SignupComponent,
    SigninComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    NgxScrollTopModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
