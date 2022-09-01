import { Component, TemplateRef, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar} from '@angular/material';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookcreationService } from '../../Shared/Services/bookcreation.service'
import { BookModel } from '../../Shared/Models/BookCreation';
import { HttpClientModule} from "@angular/common/http";


export interface genres
{
  value: string;
  viewValue: string;
}

export interface languages
{
  value: string;
  viewValue: string;
}

export interface references {
  id: number;
  name: string;
}

export interface bookformats
{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.scss']
})

export class DeletebookComponent implements OnInit {

  id: number;
  book: BookModel;
  version = VERSION;
  modalRef: BsModalRef;
  BookFormGroup: FormGroup;

  @ViewChild('template',null) template: ElementRef;

  genre: genres[] = [
    { value: 'Mystery', viewValue: 'Mystery' },
    { value: 'Sci-fi', viewValue: 'Sci-fi' },
    { value: 'Horror', viewValue: 'Horror' },
    { value: 'Historical', viewValue: 'Historical' },
  ];



  language: languages[] = [
    { value: 'English', viewValue: 'English' },
    { value: 'Tamil', viewValue: 'Tamil' },
    { value: 'Hindi', viewValue: 'Hindi' },
  ];

  bookformat: bookformats[] = [
    { value: 'Paperback', viewValue: 'Paperback' },
    { value: 'Hardback', viewValue: 'Hardback' },
    { value: 'Audiobook', viewValue: 'Audiobook' },
    { value: 'e-book', viewValue: 'e-book' },
  ];

  reference: references[] = [
    { id: 0, name: 'false' },
  ];


  constructor(public router:Router,private bookcreationService: BookcreationService,private route: ActivatedRoute,private dialog: MatDialog,public modalService: BsModalService,private fb: FormBuilder) {this.formgroupvalid(); }


  ngOnInit()
  {
    this.getBookDetails(this.route.snapshot.params['id']);
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
    this.deleteBookDetails(id);
    this.modalRef.hide;
  }

  reloadData() 
  {
    this.bookcreationService.getBookDetails();
  }
  
  getBookDetails(id:any)
  {
      this.bookcreationService.getBook(id).subscribe((data:any) => 
    {this.book = data;
      console.log(this.book);
      }); 
  }

  deleteBookDetails(id:any)
  {
    this.bookcreationService.deleteBook(id).subscribe(data => { console.log(data);
      this.reloadData();
    
        },
        error => console.log(error));
        
        this.router.navigate(['/Pages/booklist']);

  }

  back()
  {
    this.router.navigate(['/Pages/booklist']);

  }


  public formgroupvalid()
   {
    this.BookFormGroup = this.fb.group
    (
      {
      bookCode: ['', [Validators.required]],
      title:['',[Validators.required,Validators.minLength(1), Validators.maxLength(26)]],
      author:['',[Validators.required,Validators.minLength(1), Validators.maxLength(25)]],
      publication:['',[Validators.required,Validators.minLength(1), Validators.maxLength(101)]],
      description:['',[Validators.required]],
      isbn:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(13), Validators.maxLength(13)]],
      genre:['',[Validators.required]],
      language:['',[Validators.required]],
      bookFormat:['',[Validators.required]],
      bookCount:['',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(1),Validators.maxLength(6)]],
      isReference:['',[Validators.required]],
      }
    );

    }
    
}
