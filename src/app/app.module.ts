import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { ModalModule, ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';
import { StatusPageComponent } from './pages/status-page/status-page.component';

const firebaseConfig = {
    apiKey: 'AIzaSyCG2-TArRw69Pkk4Pot1LY5ThFd6f0axI4',
    authDomain: 'sudo-spectrumuc.firebaseapp.com',
    databaseURL: 'https://sudo-spectrumuc.firebaseio.com',
    storageBucket: 'sudo-spectrumuc.appspot.com',
    messagingSenderId: "521515407409"
};

@NgModule({
  declarations: [
    AppComponent,
    StatusPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    ModalModule
  ],
  providers: [{ provide: ComponentsHelper, useClass: ComponentsHelper }],
  bootstrap: [AppComponent]
})
export class AppModule { }
