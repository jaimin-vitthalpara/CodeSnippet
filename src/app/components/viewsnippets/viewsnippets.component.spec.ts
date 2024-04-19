import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsnippetsComponent } from './viewsnippets.component';

describe('ViewsnippetsComponent', () => {
  let component: ViewsnippetsComponent;
  let fixture: ComponentFixture<ViewsnippetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsnippetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
