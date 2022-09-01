import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MembercreationService } from '../../Shared/Services/membercreation.service'
import { MemberModel } from '../../Shared/Models/MemberCreation';

import { HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-viewmember',
  templateUrl: './viewmember.component.html',
  styleUrls: ['./viewmember.component.scss']
})
export class ViewmemberComponent implements OnInit {
  id: number;
  member: MemberModel;
  MemberFormGroup: FormGroup;

  gender: string;
    genders: string[] = ['Male', 'Female','Transgender']

  constructor(public router:Router,private membercreationService: MembercreationService,private route: ActivatedRoute,private fb: FormBuilder) {this.formgroupvalid();  }

  ngOnInit() 
  {
    this.getMemberDetails(this.route.snapshot.params['id']);
  }

  getMemberDetails(id:any)
  {
      this.membercreationService.getMember(id).subscribe((data:any) => 
    {this.member = data;
      console.log(this.member);
      }); 
  }

  back()
  {
    this.router.navigate(['/Pages/memberlist']); 
  }
  

  public formgroupvalid()
     {
      this.MemberFormGroup = this.fb.group
      (
        {
        memberCode: ['', [Validators.required]],
        memberName:['',[Validators.required]],
        memberAddress:['',[Validators.required]],
        phoneNumber: ['', [ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]], 
        aadharNo:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(12), Validators.maxLength(12)]],
        gender:['',[Validators.required]],
        
        }
      );

      }

}






