import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonalComponent } from './diagonal.component';

describe('DiagonalComponent', () => {
  let component: DiagonalComponent;
  let fixture: ComponentFixture<DiagonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
