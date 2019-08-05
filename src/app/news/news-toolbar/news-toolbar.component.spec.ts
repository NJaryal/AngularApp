import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsToolbarComponent } from './news-toolbar.component';

describe('NewsToolbarComponent', () => {
  let component: NewsToolbarComponent;
  let fixture: ComponentFixture<NewsToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
