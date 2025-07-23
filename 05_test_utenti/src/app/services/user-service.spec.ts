import { TestBed } from '@angular/core/testing';

import { UserService } from './user-service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user object', () => {
    let user = service.getUser();
    expect(user).toEqual({ id: 1,  nome: "Giovanni Pace" })
  })

});
