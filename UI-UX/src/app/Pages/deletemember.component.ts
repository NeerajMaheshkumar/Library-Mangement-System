import { Component, TemplateRef, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar} from '@angular/material';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MembercreationService } from '../../Shared/Services/membercreation.service'
import { MemberModel } from '../../Shared/Models/MemberCreation';
import { HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-deletemember',
  templateUrl: './deletemember.component.html',
  styleUrls: ['./deletemember.component.scss']
})
export class DeletememberComponent implements OnInit {
  id: number;
  member: MemberModel;
  version = VERSION;
  modalRef: BsModalRef;
  MemberFormGroup: FormGroup;

  gender: string;
  genders: string[] = ['Male', 'Female','Transgender']

  @ViewChild('template',null) template: ElementRef;


  constructor(public router:Router,private membercreationService: MembercreationService,private route: ActivatedRoute,private dialog: MatDialog,public modalService: BsModalService,private fb: FormBuilder) {this.formgroupvalid(); }

 

  
  ngOnInit() 
  { 
    this.getMemberDetails(this.route.snapshot.params['id']);
  }

  openModal() 
  {
    this.modalService.onHide.subscribe((e) => {console.log('close', this.modalService.config.initialState);});
    const user = 
    {
      id:0,
    }; 
    this.modalRef = this.modalService.show(this.template, {initialState: user});
  }

  onConfirmClick(id:any)
  {
    this.deleteMemberDetails(id);
    this.modalRef.hide;
  }


  reloadData() {
    this.membercreationService.getMemberDetails();
  }
  
  getMemberDetails(id:any)
  {
      this.membercreationService.getMember(id).subscribe((data:any) => 
    {this.member = data;
      console.log(this.member);
      }); 
  }

  deleteMemberDetails(id:any)
  {
    this.membercreationService.deleteMember(id).subscribe(data => { console.log(data);
      this.reloadData();
    
        },
        error => console.log(error));
        
        this.router.navigate(['/Pages/memberlist']);

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






