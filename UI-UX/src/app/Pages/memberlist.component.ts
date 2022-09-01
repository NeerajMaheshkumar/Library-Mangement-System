import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MembercreationService } from 'src/app/Shared/Services/membercreation.service';
import { MemberModel } from 'src/app/Shared/Models/MemberCreation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss']
})
export class MemberlistComponent implements OnInit {
  member : MemberModel[];
  ID:number;

  constructor(public http: HttpClient, private membercreationService: MembercreationService,public router:Router) { }

  ngOnInit() 
  {
    this.getMemberList();
  }

  getMemberList() {
    
   
    this.membercreationService.getMemberDetails().subscribe((data:any[]) => {console.log(data);
    this.member = data;
    let str: string = JSON.stringify(this.member);
    });
  }

  
  memberDetails(id:number)
  {
        this.router.navigate(['/Pages/viewmember', id]); 
  }

}
