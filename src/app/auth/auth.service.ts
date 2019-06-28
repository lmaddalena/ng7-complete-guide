import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    idToken: string;
    kind: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({ providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}
    signup(email: string, password: string) {
        // tslint:disable-next-line:max-line-length
        return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD4WO6bu0BbJPaIIbdQt_gb79N3GhM_t8E',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        );
    }
}
