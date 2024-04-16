import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const foodIdValidationGuard: CanActivateChildFn = (
  childRoute,
  state
) => {
  const router = inject(Router);
  if (state.url === '/diet') {
    return true;
  } else {
    const param = childRoute.params['id'];
    if (!isNaN(Number(param))) return true;
    else {
      router.navigate(['diet']);
      return false;
    }
  }
};
