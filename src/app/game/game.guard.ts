import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ScoreService } from "./score.service";
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {
  constructor(private scoreService: ScoreService, private router: Router) { }
  get game_over() {
    return this.scoreService.game_over;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.game_over?true:this.router.createUrlTree(['/game']);

  }
  
}
