import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieBookComponent } from './recepie-book.component';

describe('RecepieBookComponent', () => {
  let component: RecepieBookComponent;
  let fixture: ComponentFixture<RecepieBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
