import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { foodIdValidationGuard } from './food-id-validation.guard';

describe('foodIdValidationGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => foodIdValidationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
