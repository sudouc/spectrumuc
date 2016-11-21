import { Component, ViewContainerRef, ViewChild, OnInit } from '@angular/core';
import { ModalDirective, ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Spectrum UC';

  model = { email: '', password: '' };    // Username/Password Model
  submitted: boolean = false;             // Flag if the login form has been submitted
  submissionError: string = undefined;    // Used to show the user any errors with login
  authState;                                      // App auth state

  @ViewChild('loginModal') public loginModal: ModalDirective;

  public constructor(private componentsHelper: ComponentsHelper,
    private viewContainerRef: ViewContainerRef,
    private af: AngularFire,
    private router: Router) {
    // You need this small hack in order to catch application root view container ref
    componentsHelper.setRootViewContainerRef(viewContainerRef);
    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
    this.af.auth.subscribe(                      // Subscribe to auth state changes
      auth => {
        this.authChange(auth);
      }
    );
  }

  public showLoginModal(): void {
    this.loginModal.show();
  }

  public hideLoginModal(): void {
    this.loginModal.hide();
  }

  passwordLogin() {
    this.submitted = true;
    this.submissionError = undefined;

    this.af.auth.login(
      this.model,
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      })
      .then(auth =>                           // On success call the success method
        this.authSuccess(auth)
      )
      .catch(err =>                           // On fail call the error method
        this.authFail(err)
      );
  }

  authSuccess(auth) {                         // Password login success
    if (auth) {
      console.log('[AppComponent] User Authenticated');
      // TODO Redirect to suitable location here
      this.loginModal.hide();
    }
  }

  authFail(err) {                             // Password Login Failure
    console.error(err);
    this.submitted = false;
    this.submissionError = err;
  }

  authChange(auth) {
    this.authState = auth;
    if (!auth) {
      // if this was a logout auth change, redirect to the status screen
      console.log('[AppComponent] User became unauthenticated');
      this.router.navigate(['/status']);
    }
  }

  logout() {
    this.af.auth.logout(); // Firebase logout
    this.submitted = false;
    this.model = { email: '', password: '' };
    this.submissionError = undefined;
  }
}
