import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberModel } from 'src/app/Shared/Models/MemberCreation';
import { from, Observable,of, throwError } from 'rxjs';
import { map, catchError,tap } from 'rxjs/operators';
import { Router} from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MembercreationService
 {

      constructor( private http:HttpClient, public router:Router){}

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
            console.error(error); 
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }


        Savememberdetails(member:MemberModel)
        {
          return this.http.post("http://localhost:8080/LibraryApp/LMS/SaveMember",member)         
         }

         getMemberDetails()
         {
          return this.http.get('http://localhost:8080/LibraryApp/LMS/Memberlist').
          pipe(
            map((data: MemberModel[]) => {return data;}), 
            catchError( error => { return throwError( 'Something went wrong!');})
         )
         }

         
       
         getMember(id: number): Observable<MemberModel> {
          const url = 'http://localhost:8080/LibraryApp/LMS/members/'+id;
          return this.http.get<MemberModel>(url).pipe(
            tap(_ => console.log(`fetched member id=${id}`)),
            catchError(this.handleError<MemberModel>(`getMember id=${id}`))
          );
        }


        deleteMember(id: number): Observable<any> 
        {
          const url = 'http://localhost:8080/LibraryApp/LMS/member/'+id;
          return this.http.delete(url);
        }

        updateMember(id: number, value: any): Observable<Object>
         {
          const url = 'http://localhost:8080/LibraryApp/LMS/Member/'+id;
          return this.http.put(url, value);
        }

}
