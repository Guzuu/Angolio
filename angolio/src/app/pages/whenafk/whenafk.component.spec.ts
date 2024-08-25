import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenafkComponent } from './whenafk.component';

describe('WhenafkComponent', () => {
  let component: WhenafkComponent;
  let fixture: ComponentFixture<WhenafkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhenafkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhenafkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
