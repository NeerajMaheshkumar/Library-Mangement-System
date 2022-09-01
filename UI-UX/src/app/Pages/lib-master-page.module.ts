import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibMasterPageRoutingModule, MasterPageAllComponent } from './lib-master-page-routing.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from '../../MaterialModule/material.module';
import { MainLeftSidebarComponent } from '../leftsidebar/leftsidebar.component';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BootstrapModalModule } from 'node_modules/ng2-bootstrap-modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule, ToastNoAnimationModule, ToastNoAnimation } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{AddmemberComponent} from '../addmember/addmember.component';
import{AddbookComponent} from '../addbook/addbook.component';
import{MemberlistComponent} from '../memberlist/memberlist.component';
import { ViewmemberComponent } from '../viewmember/viewmember.component';
import { ViewbookComponent } from '../viewbook/viewbook.component';
import { BooklistComponent } from '../booklist/booklist.component';



@NgModule({
  declarations: [
    MasterPageAllComponent, HeaderComponent, FooterComponent, ViewbookComponent,ViewmemberComponent,
    MainLeftSidebarComponent,AddmemberComponent,AddbookComponent, MemberlistComponent,BooklistComponent
  
  ],
 
    
  imports: [
    CommonModule,
    LibMasterPageRoutingModule,
    MaterialModule,
    TextMaskModule,
    HttpClientModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    ModalModule.forRoot(),
    ToastNoAnimationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BsDropdownModule.forRoot()
  ],
  
  entryComponents: [],

  providers: [ ]
})
export class MasterPageModule { }

