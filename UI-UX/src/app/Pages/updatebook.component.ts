import { Component, OnInit } from '@angular/core';
import { BookcreationService } from 'src/app/Shared/Services/bookcreation.service';
import { BookModel } from 'src/app/Shared/Models/BookCreation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';




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
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.scss']
})
export class UpdatebookComponent implements OnInit 
{
  id: number;
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
    { id: 0, name: 'Is Reference' },
  ];

constructor(private BookcreationService:BookcreationService, private fb: FormBuilder,public router:Router,private route: ActivatedRoute) {this.formgroupvalid(); }

keyPress(event: any) 
 {
  const pattern = /[0-9]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar))
   {
    event.preventDefault();
  }
}

keyPress1(event: any) 
 {
  const pattern = /[A-Z a-z]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar))
   {
    event.preventDefault();
  }
}

ngOnInit() 
{

  this.book=new BookModel();
  this.id = this.route.snapshot.params['id'];

  this.BookcreationService.getBook(this.id)
    .subscribe(data => {
      console.log(data)
      this.book = data;
    }, error => console.log(error));

  }


  updateBook()
  {
    this.BookcreationService.updateBook(this.id, this.book).subscribe(data => console.log(data), error => console.log(error));
    this.book = new BookModel();   
    alert("UPDATED SUCCESSFULLY");
    this.router.navigate(['/Pages/booklist']); 
  }

  submit()
  {
    this.updateBook();
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
