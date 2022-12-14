import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, of, Subscription, tap } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnDestroy {

    private user$$ = new BehaviorSubject<undefined | null | IUser | HttpErrorResponse>(undefined);

    user$ = this.user$$.asObservable().pipe( filter((val): val is IUser | null => val !== undefined));
    user: IUser | null = null;

    get isLoggedIn() {
        return this.user !== null && this.user.status !== 401;
    } 

    subscription: Subscription;

    constructor(private http: HttpClient) { 
        this.subscription = this.user$.subscribe(user => {
            this.user = user;
        })
    }

    register(email: string, password: string) {
        return this.http.post<IUser>('/api/users/register', {email, password})
        .pipe(tap(user => this.user$$.next(user)));
    }

    login(email: string, password: string) {
        return this.http.post<IUser>('/api/users/login', {email, password})
        .pipe(tap(user => this.user$$.next(user)));
    }

    getProfile() {
        return this.http.get<IUser>('/api/users/profile')
        .pipe(
            tap(user => this.user$$.next(user)),
            catchError((err) => {
                this.user$$.next(null);
                return of(err);
            })
        );
    }

    logout() {
        return this.http.get<void>('/api/users/logout')
        .pipe(tap(() => this.user$$.next(null)));
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
