import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from 'src/app/Shared/Models/BookCreation';
import { from, Observable,of, throwError } from 'rxjs';
import { map, catchError,tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BookcreationService
 {

      constructor( private http:HttpClient){}

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
            console.error(error); 
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
       Savebookdetails(book:BookModel)
        {
          return this.http.post("http://localhost:8080/LibraryApp/LMS/SaveBook",book)         
         }

         getBookDetails()
         {
          return this.http.get('http://localhost:8080/LibraryApp/LMS/Bookslist').
          pipe(
            map((data: BookModel[]) => {return data;}), 
            catchError( error => { return throwError( 'Something went wrong!' );})
         )
         }

         getBook(id: number): Observable<BookModel> {
          const url = 'http://localhost:8080/LibraryApp/LMS/books/'+id;
          return this.http.get<BookModel>(url).pipe(
            tap(_ => console.log(`fetched customer id=${id}`)),
            catchError(this.handleError<BookModel>(`getMember id=${id}`))
          );
        }

        deleteBook(id: number): Observable<any> 
        {
          const url = 'http://localhost:8080/LibraryApp/LMS/book/'+id;
          return this.http.delete(url);

        }

        updateBook(id: number, value: any): Observable<Object>
         {
          const url = 'http://localhost:8080/LibraryApp/LMS/Book/'+id;
          return this.http.put(url, value);
        }

}
