import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomesComponent } from './homes.component';
import { DataServiceService } from '../../services/data-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: jasmine.SpyObj<DataServiceService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: DataServiceService,
          useValue: jasmine.createSpyObj<DataServiceService>('DataServiceService', ['getHomes$'])
        }
      ]
    });

    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataServiceService) as jasmine.SpyObj<DataServiceService>;

    dataService.getHomes$.and.returnValue(of([
      {
        id: 1,
        title: 'Home 1',
        location: 'new york'
      },
      {
        id: 2,
        title: 'Home 2',
        location: 'rome'
      },
      {
        id: 3,
        title: 'Home 3',
        location: 'stuttgart'
      }
    ]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Homes', () => {
    it('show homes', () => {
      expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);
    });

    it('show home id', () => {
      const home = fixture.nativeElement.querySelector('[data-test="home"]');
      expect(home.querySelector('[data-test="id"]').innerText).toEqual('1');
      expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    });
  });
});

