import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ScoreService } from "./score.service";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StartGuard implements CanActivate {
  constructor(private scoreService: ScoreService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.scoreService.gameStarted?true:this.router.createUrlTree(['/game']);
  }
  
}
