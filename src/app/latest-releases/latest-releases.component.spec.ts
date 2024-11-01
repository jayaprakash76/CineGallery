import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReleasesComponent } from './latest-releases.component';

describe('LatestReleasesComponent', () => {
  let component: LatestReleasesComponent;
  let fixture: ComponentFixture<LatestReleasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestReleasesComponent]
    });
    fixture = TestBed.createComponent(LatestReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
