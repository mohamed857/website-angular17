import { Routes } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { ServicesComponent } from "./components/services/services.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { NotfoundComponent } from './components/notfound/notfound.component';
export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {title:'ramadan | home',path:'home',component:HeaderComponent},
    {title:'ramadan | about',path:'about',component:AboutComponent},
    {title:'ramadan | services',path:'services',component:ServicesComponent},
    {title:'ramadan | gallery',path:'gallery',component:GalleryComponent},
    {title:'ramadan | testimonials',path:'testimonials',component:TestimonialsComponent},
    {title:'ramadan | clients',path:'clients',component:ClientsComponent},
    {title:'ramadan | pricing',path:'pricing',component:PricingComponent},
    {title:'ramadan | notfound',path:'**',component:NotfoundComponent},
    


];
