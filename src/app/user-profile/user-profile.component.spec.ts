/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../services/logger.service';
import { UserProfileComponent } from './user-profile.component';

class LoggerMock {
  log(msg: string) {}
}

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [FormsModule],
      providers: [{ provides: LoggerService, useClass: LoggerMock }]
    });
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
