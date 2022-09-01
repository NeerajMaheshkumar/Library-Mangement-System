import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibMasterPageComponent } from './lib-master-page.component';


import { DashboardComponent} from '../dashboard/dashboard.component';
import{AddmemberComponent} from '../addmember/addmember.component';
import{AddbookComponent} from '../addbook/addbook.component';
import{MemberlistComponent} from '../memberlist/memberlist.component';
import { ViewmemberComponent } from '../viewmember/viewmember.component';
import { ViewbookComponent } from '../viewbook/viewbook.component';
import { BooklistComponent } from '../booklist/booklist.component';
import { DeletememberComponent } from '../deletemember/deletemember.component';
import { DeletebookComponent } from '../deletebook/deletebook.component';
import { UpdatememberComponent } from '../updatemember/updatemember.component';
import { UpdatebookComponent } from '../updatebook/updatebook.component';

const routes: Routes = [{
  path: '', component: LibMasterPageComponent, children:
    [
      {
        path: 'DashBoard', component: DashboardComponent
      },
      {
        path: 'addmember', component: AddmemberComponent
      },
      {
        path: 'addbook',  component: AddbookComponent
      },
      {
        path: 'memberlist',  component: MemberlistComponent
      },
      {
        path: 'booklist',  component: BooklistComponent
      },
      {
        path: 'viewmember/:id',  component: ViewmemberComponent
      },
      {
        path: 'viewbook/:id',  component: ViewbookComponent
      },
      {
        path: 'confirmdeletemember/:id',  component: DeletememberComponent
      },
      {
        path: 'confirmdeletebook/:id',  component: DeletebookComponent
      },
      {
        path: 'updatemember/:id',  component: UpdatememberComponent
      },
      {
        path: 'updatebook/:id',  component: UpdatebookComponent
      },
      
      
      

    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibMasterPageRoutingModule { }

export const MasterPageAllComponent = [
  LibMasterPageComponent,
  DashboardComponent,
  AddmemberComponent,
  AddbookComponent,
  MemberlistComponent,
  BooklistComponent,
  ViewbookComponent,
  ViewmemberComponent,
  DeletememberComponent,
  DeletebookComponent,
  UpdatememberComponent,
  UpdatebookComponent ,
]




