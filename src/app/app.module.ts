import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { AuthModule } from './auth/auth.module';
import { RecentAdsComponent } from './ads/recent-ads/recent-ads.component';
import { AdsModule } from './ads/ads.module';
import { appInterceptorProvider } from './app.interceptor';
import { AutenticateComponent } from './autenticate/autenticate.component';
import { BehaviorSubject } from 'rxjs';
import { API_ERROR } from './shared/constants';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    // RecentAdsComponent,
    MainComponent,
    TestComponent,
    AutenticateComponent,
  ],
  imports: [
    AuthModule,
    AdsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appInterceptorProvider,
    {
        provide: API_ERROR,
        useValue: new BehaviorSubject(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
