import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLigueComponent } from './add-ligue.component';

describe('AddLigueComponent', () => {
  let component: AddLigueComponent;
  let fixture: ComponentFixture<AddLigueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLigueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
