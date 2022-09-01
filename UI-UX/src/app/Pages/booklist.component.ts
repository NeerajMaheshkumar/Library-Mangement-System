import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookcreationService } from 'src/app/Shared/Services/bookcreation.service';
import { BookModel } from 'src/app/Shared/Models/BookCreation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  book : BookModel[];

  constructor(public http: HttpClient, private bookcreationService: BookcreationService,public router:Router) { }

  ngOnInit() 
  {
    this.getBookList();
  }

  getBookList() {
    this.bookcreationService.getBookDetails().subscribe((data:any[]) => {console.log(data);
    this.book = data;
    let str: string = JSON.stringify(this.book);
    });
  }

  bookDetails(id:number)
  {
        this.router.navigate(['/Pages/viewbook', id]); 
  }

}

