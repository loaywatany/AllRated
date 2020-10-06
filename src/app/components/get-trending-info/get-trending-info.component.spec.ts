import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTrendingInfoComponent } from './get-trending-info.component';

describe('GetTrendingInfoComponent', () => {
  let component: GetTrendingInfoComponent;
  let fixture: ComponentFixture<GetTrendingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTrendingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTrendingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
