import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { RecentAdsComponent } from './recent-ads/recent-ads.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    RecentAdsComponent,
    MainComponent,
    TestComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
