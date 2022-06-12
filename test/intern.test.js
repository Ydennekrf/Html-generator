const {Intern} = require ("../assets/javascript/classes");

test( 'creating an intern object within employee object', () => {
    const intern = new Intern('Fraser', 10, 'email@email.com', 'intern', 'UofT');

    expect( typeof intern ).toBe( "object" );
    expect( typeof intern.name ).toBe( 'string' );
    expect( typeof intern.id ).toBe( 'number' );
    expect( typeof intern.email ).toBe( 'string' );
    expect( typeof intern.school ).toBe( 'string' );
    expect( typeof intern.role ).toBe( 'string' );
});

test( "Test to see if getName works.", () => {
    const testName = "Fraser";
    const intern = new Intern( testName );
    expect (intern.getName()).toBe( testName );
});

test( "test to see if getId works.", () => {
    const testId = 10;
    const intern = new Intern( "Fraser", testId);

    expect (intern.getId()).toBe( testId )     
});

test( "test to see if getEmail works.", () => {
    const testEmail = 'ydennekrf@hotmail.com'
    const intern = new Intern( 'Fraser', 10, testEmail);

    expect( intern.getEmail()).toBe( testEmail );
});

test(" check to see if getRole returns engineer as role", () => {
    const testRole = 'intern';
    const intern = new Intern( 'Fraser', 10, 'ydennekrf@hotmail.com', testRole);

    expect( intern.getRole()).toBe( testRole );
});

test(" check to see if getSchool works", () => {
    const testSchool = 'UofT';
    const intern = new Intern('Fraser', 10, 'ydennekrf@hotmail.com', 'intern', testSchool);

    expect( intern.getSchool()).toBe( testSchool );
});