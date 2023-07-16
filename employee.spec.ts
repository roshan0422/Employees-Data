import { Employee } from './employee';
describe('Employee', () => {
  it('should create an instance', () => {
    const employee = new Employee(0, '', '', '');

    expect(employee).toBeTruthy();
  });
});
