import { Component, OnInit } from '@angular/core';
import { MembercreationService } from 'src/app/Shared/Services/membercreation.service';
import { MemberModel } from 'src/app/Shared/Models/MemberCreation';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.scss']
})
export class AddmemberComponent implements OnInit {
    member: MemberModel = new MemberModel();
    MemberFormGroup: FormGroup;

    submitted = false;

  

    gender: string;
    genders: string[] = ['Male', 'Female','Transgender']


  constructor(private MembercreationService: MembercreationService,private fb: FormBuilder,public router:Router) {this.formgroupvalid(); }


   //only number will be add
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
      
  submit() 
  {
    this.submitted = true;
    // stop here if form is invalid
    if (this.MemberFormGroup.invalid) 
    {
        return;
    }
    else
    {
    this.MembercreationService.Savememberdetails(this.member).subscribe(data => console.log(data), error => console.log(error));
        alert("SAVED SUCCESSFULLY");
        this.router.navigate(['/Pages/memberlist']);
    }
       
  }

  back()
  {
    this.router.navigate(['/Pages/DashBoard']);
  }

}
