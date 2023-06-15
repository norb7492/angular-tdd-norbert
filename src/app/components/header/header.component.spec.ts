import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('navbar', () => {
    it('should show logo', () => {
      expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();
    });

    it('should show home', () => {
      expect(fixture.nativeElement.querySelector('[data-test="home"]')).toBeTruthy();
    });

    it('should show contacts', () => {
      expect(fixture.nativeElement.querySelector('[data-test="contacts"]')).toBeTruthy();
    });
  })

  describe('filter buttons', () => {
    it('show all filters', () => {
      expect(fixture.nativeElement.querySelector('[data-test="type"]')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('[data-test="dates"]')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('[data-test="prices"]')).toBeTruthy();
    });

  })
});
