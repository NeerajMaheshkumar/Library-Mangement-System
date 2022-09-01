import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { bootstrap } from 'bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BootstrapModalModule, DialogService } from 'ng2-bootstrap-modal';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';


import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { MaterialModule } from './MaterialModule/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LibMasterPageComponent } from './PAGES/lib-master-page/lib-master-page.component';
import { DashboardComponent } from './PAGES/dashboard/dashboard.component';
import { AddmemberComponent } from './PAGES/addmember/addmember.component';
import { AddbookComponent } from './Pages/addbook/addbook.component';
import { ViewmemberComponent } from './Pages/viewmember/viewmember.component';
import { ViewbookComponent } from './Pages/viewbook/viewbook.component';
import { BooklistComponent } from './Pages/booklist/booklist.component';
import { DeletememberComponent } from './Pages/deletemember/deletemember.component';
import { DeletebookComponent } from './Pages/deletebook/deletebook.component';
import { UpdatememberComponent } from './Pages/updatemember/updatemember.component';




@NgModule({
  declarations: [
    AppComponent,
   
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    ModalModule.forRoot(),
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation
    }),
    
  ],
  providers: [DialogService,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }















 
  

 