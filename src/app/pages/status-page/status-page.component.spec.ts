/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs';

import { StatusPageComponent } from './status-page.component';

describe('StatusPageComponent', () => {
  let component: StatusPageComponent;
  let fixture: ComponentFixture<StatusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusPageComponent],
      providers: [{ provide: AngularFire, useClass: AngularFireMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// TODO actually test the AngularFire2 stuff. They haven't got testing docs yet
// https://github.com/angular/angularfire2/issues/18
class AngularFireMock {                   // added this class
  database = {
    list: function (path) {
      return {
        subscribe: function () { }
      };
    }
  };
}
