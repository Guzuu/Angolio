import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedoComponent } from './redo.component';

describe('RedoComponent', () => {
  let component: RedoComponent;
  let fixture: ComponentFixture<RedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
