import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CommonService } from '../services/common.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private commonService: CommonService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.commonService.userValue;
        if (Object.keys(user).length !== 0 ) {
            return true;
        }
        this.router.navigate(['']);
        return false;
        
        // not logged in so redirect to login page with the return url
    }
}