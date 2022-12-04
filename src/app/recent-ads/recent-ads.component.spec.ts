import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAdsComponent } from './recent-ads.component';

describe('RecentAdsComponent', () => {
  let component: RecentAdsComponent;
  let fixture: ComponentFixture<RecentAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
