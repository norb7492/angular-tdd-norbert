import { TestBed } from '@angular/core/testing';
import { DataServiceService } from './data-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';;

describe('DataServiceService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let dataService: DataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataServiceService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    dataService = TestBed.inject(DataServiceService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return list of homes', () => {
    const homeMock = [
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
    ];
    const spy = jasmine.createSpy('spy');
    dataService.getHomes$().subscribe(spy);

    const req = httpTestingController.expectOne('assets/homes.json');
    expect(req.request.method).toBe('GET');
    req.flush(homeMock);

    expect(spy).toHaveBeenCalledWith(homeMock);
  });
});
