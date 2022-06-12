const Manager = require ("../assets/javascript/classes");

test( 'creating a Manager object within employee object', () => {
    const manager = new Manager("Fraser", 10, 'email@email.com', 'manager', 10);

    expect( typeof( manager )).toBe( "object" );
    expect( manager.name ).toBe( String );
    expect( manager.id ).toBe( Number );
    expect( manager.email ).toBe( String );
    expect( manager.office ).toBe( Number );
    expect( manager.role ).toBe( String );
});

test( "Test to see if getName works.", () => {
    const testName = "Fraser";
    const manager = new Manager( testName );
    expect (manager.getName()).toBe( testName );
});

test( "test to see if getId works.", () => {
    const testId = 10;
    const manager = new Manager( "Fraser", testId);

    expect (manager.getId()).toBe( testId )     
});

test( "test to see if getEmail works.", () => {
    const testEmail = 'ydennekrf@hotmail.com'
    const manager = new Manager( 'Fraser', 10, testEmail);

    expect( manager.getEmail().toBe( testEmail ));
});

test(" check to see if getRole returns engineer as role", () => {
    const testRole = 'manager';
    const manager = new Manager( 'Fraser', 10, 'ydennekrf@hotmail.com', testRole);

    expect( manager.getRole()).toBe( testRole );
});

test(" check to see if getOffice works", () => {
    const testOffice = 10;
    const manager = new Manager('Fraser', 10, 'ydennekrf@hotmail.com', 'engineer', testOffice);

    expect( manager.getOffice()).toBe( testOffice );
});