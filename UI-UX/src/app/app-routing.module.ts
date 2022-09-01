import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthenticationModule } from './Authentication/authentication.module';
import { MasterPageModule } from './PAGES/lib-master-page/lib-master-page.module';



const routes: Routes = [

  {
    path: 'Pages',
    loadChildren: () => import('./Pages/lib-master-page/lib-master-page.module').then(m => m.MasterPageModule)
  },
  
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
];
@NgModule({
  imports:
   [
  RouterModule.forRoot(routes)
  //AuthenticationModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }