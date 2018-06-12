import { TestBed, inject } from '@angular/core/testing';

import { EmployeeserviceService } from './employeeservice.service';

describe('EmployeeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeserviceService]
    });
  });

  it('should be created', inject([EmployeeserviceService], (service: EmployeeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
