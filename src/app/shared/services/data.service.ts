import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { UserData } from './user-data.service';
import { UserMockData } from '../models/user-mock-data.model';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    public apiurl = 'api/users';
    public headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    public httpOptions = {
        headers : this.headers
    }

    constructor(private http: HttpClient) {}

    private handleError(error: any) {
        console.log(error);
        return throwError(error);
    }

    public getListOfUsers(): Observable<UserData[]> {
        return this.http.get<UserData[]>(this.apiurl).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    public getUser(userId: number): Observable<UserMockData> {
        const url = `${this.apiurl}/${userId}`;
        return this.http.get<UserMockData>(url).pipe(
            catchError(this.handleError)
        );
    }

    public updateUser(user: UserMockData): Observable<UserMockData> {
        const url = `${this.apiurl}/${user.id}`;
        return this.http.put<UserMockData>(this.apiurl, user, this.httpOptions).pipe(
            map(() => user),
            catchError(this.handleError)
        );
    }
}
