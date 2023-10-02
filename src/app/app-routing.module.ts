
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:"home"
    },
    {
        path: 'home',
        loadChildren: () => import('./routes/home/home.module').then
            (m=> m.HomeModule)
    },
    {
      path: 'customer',
      loadChildren: () => import('./routes/customer/customer.module').then
          (m=> m.CustomerModule)
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
