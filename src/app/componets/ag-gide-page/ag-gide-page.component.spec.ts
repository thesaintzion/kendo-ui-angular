import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGidePageComponent } from './ag-gide-page.component';

describe('AgGidePageComponent', () => {
  let component: AgGidePageComponent;
  let fixture: ComponentFixture<AgGidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGidePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
