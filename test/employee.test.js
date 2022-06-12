const {Employee} = require ("../assets/javascript/classes");

test( 'creating an employee object', () => {
    const employee = new Employee('Fraser', 10, 'email@email.com', 'intern');

    expect( typeof employee).toBe( "object" );
    expect( typeof employee.name ).toBe( 'string' );
    expect( typeof employee.id ).toBe( 'number' );
    expect( typeof employee.email ).toBe( 'string' );
});

test( "Test to see if getName works.", () => {
    const testName = "Fraser";
    const employee = new Employee( testName );
    expect (employee.getName()).toBe( testName );
});

test( "test to see if getId works.", () => {
    const testId = 10;
    const employee = new Employee( "Fraser", testId);

    expect (employee.getId()).toBe( testId )     
});

test( "test to see if getEmail works.", () => {
    const testEmail = 'ydennekrf@hotmail.com'
    const employee = new Employee( 'Fraser', 10, testEmail);

    expect( employee.getEmail()).toBe( testEmail );
});

test(" check to see if getRole returns employee as role", () => {
    const testRole = 'employee';
    const employee = new Employee( 'Fraser', 10, 'ydennekrf@hotmail.com', testRole);

    expect( employee.getRole()).toBe( testRole );
});