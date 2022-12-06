import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";
import { IAd } from "../interfaces/ad";

@Injectable({
    providedIn: 'root'
})

export class AdsResolver implements Resolve<IAd | null> {
    constructor(private apiService: ApiService, private router: Router) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IAd | null | Observable<IAd> | Promise<IAd> {
        const adId = route.params['id'];
        if (!adId) {
            this.router.navigate(['/ads/list']);
            return null;
        }
        return this.apiService.loadAd(adId);
    }
}