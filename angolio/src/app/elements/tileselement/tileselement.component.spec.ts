import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileselementComponent } from './tileselement.component';

describe('TileselementComponent', () => {
  let component: TileselementComponent;
  let fixture: ComponentFixture<TileselementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileselementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileselementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
