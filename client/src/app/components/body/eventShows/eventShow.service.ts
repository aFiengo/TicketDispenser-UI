import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IEventShow } from "./eventShow";

@Injectable()
export class EventShowService {
    private eventShowUrl = 'http://localhost:8800/api/event';
    constructor (private http: HttpClient) {

    }

    getEventShows(): Observable<IEventShow[]>{
        return this.http.get<IEventShow[]>(this.eventShowUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'An error occurred: ${err.error.message}';
        } else {
            errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
}

