import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookcreationService } from '../../Shared/Services/bookcreation.service'
import { BookModel } from '../../Shared/Models/bookCreation';


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
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.scss']
})
export class ViewbookComponent implements OnInit 
{

  id: number;
  editable:true;
  book: BookModel;
  BookFormGroup: FormGroup;

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

  constructor(public router:Router,private bookcreationService: BookcreationService,private route: ActivatedRoute,private fb: FormBuilder) {this.formgroupvalid(); }


  ngOnInit() 
  {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id:any)
  {
      this.bookcreationService.getBook(id).subscribe((data:any) => 
    {this.book = data;
      console.log(this.book);
      }); 
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
