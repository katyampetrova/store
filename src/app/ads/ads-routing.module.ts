import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.active";
import { AdDetailsComponent } from "./ad-details/ad-details.component";
import { AddCreateComponent } from "./add-create/add-create.component";
import { AddEditComponent } from "./add-edit/add-edit.component";
import { AdsListComponent } from "./ads-list/ads-list.component";
import { AdsResolver } from "./ads.resolver";

const routes: Routes = [
    {
        path: 'ads/details/:id',
        component: AdDetailsComponent,
        resolve: {
            ad: AdsResolver
        },
        // canActivate: [AuthActivate],
        // data: {
        //     loginRequired: true
        // }
    },
    {
        path: 'ads/edit/:id',
        component: AddEditComponent,
        resolve: {
            ad: AdsResolver
        }

    },
    {
        path: 'ads/create',
        component: AddCreateComponent,
        // canActivate: [AuthActivate],
        // data: {
        //     loginRequired: true
        // }
    },
    {
        path: 'ads/list',
        component: AdsListComponent,
        // canActivate: [AuthActivate],
        // data: {
        //     loginRequired: false
        // }
    },
];

export const AdsRoutingModule = RouterModule.forChild(routes);