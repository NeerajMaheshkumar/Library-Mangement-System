import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MembercreationService } from '../../Shared/Services/membercreation.service'
import { MemberModel } from '../../Shared/Models/MemberCreation';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-updatemember',
  templateUrl: './updatemember.component.html',
  styleUrls: ['./updatemember.component.scss']
})
export class UpdatememberComponent implements OnInit {

  id: number;
  member: MemberModel;
  MemberFormGroup: FormGroup;

  gender: string;
    genders: string[] = ['Male', 'Female','Transgender']

  constructor(public router:Router,private membercreationService: MembercreationService,private route: ActivatedRoute,private fb: FormBuilder) {this.formgroupvalid();  }


  keyPress(event: any) 
  {
   const pattern = /[0-9\+\-\ ]/;

   let inputChar = String.fromCharCode(event.charCode);
   if (event.keyCode != 8 && !pattern.test(inputChar))
    {
     event.preventDefault();
   }
 }

 keyPress1(event: any) 
  {
   const pattern = /[A-Z a-z . ' ']/;

   let inputChar = String.fromCharCode(event.charCode);
   if (event.keyCode != 8 && !pattern.test(inputChar))
    {
     event.preventDefault();
   }
 }

  ngOnInit() 
  {
    this.member=new MemberModel();
    this.id = this.route.snapshot.params['id'];

    this.membercreationService.getMember(this.id)
      .subscribe(data => {
        console.log(data)
        this.member = data;
      }, error => console.log(error));
  }

  updateMember()
  {
    this.membercreationService.updateMember(this.id, this.member).subscribe(data => console.log(data), error => console.log(error));
    this.member = new MemberModel();   
    alert("UPDATED SUCCESSFULLY");
    this.router.navigate(['/Pages/memberlist']); 
  }

  submit()
  {
    this.updateMember();
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
      get f() { return this.MemberFormGroup.controls; }
}
