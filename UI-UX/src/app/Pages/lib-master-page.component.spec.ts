import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibMasterPageComponent } from './lib-master-page.component';

describe('LibMasterPageComponent', () => {
  let component: LibMasterPageComponent;
  let fixture: ComponentFixture<LibMasterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibMasterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
