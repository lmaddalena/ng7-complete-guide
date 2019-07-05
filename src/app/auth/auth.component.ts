import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error = null;

    constructor(private authService: AuthService, private router: Router) {}

    onHandleError() {
        this.error = null;
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObservable: Observable<AuthResponseData>;
        this.isLoading = true;

        if (this.isLoginMode) {
            // login
            authObservable = this.authService.login(email, password);
        } else {
            // signup
            authObservable = this.authService.signup(email, password);
        }

        authObservable.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });

        form.reset();
    }
}
