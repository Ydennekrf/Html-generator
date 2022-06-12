const Engineer = require ("../assets/javascript/classes");

test( 'creating an engineer object within employee object', () => {
    const engineer = new Engineer("Fraser", 10, 'email@email.com', 'engineer', 'ydennekrf');

    expect( typeof( engineer)).toBe( "object" );
    expect( engineer.name ).toBe( String );
    expect( engineer.id ).toBe( Number );
    expect( engineer.email ).toBe( String );
    expect( engineer.github ).toBe( String );
    expect( engineer.role ).toBe( String );
});

test( "Test to see if getName works.", () => {
    const testName = "Fraser";
    const engineer = new Engineer( testName );
    expect (engineer.getName()).toBe( testName );
});

test( "test to see if getId works.", () => {
    const testId = 10;
    const engineer = new Engineer( "Fraser", testId);

    expect (engineer.getId()).toBe( testId )     
});

test( "test to see if getEmail works.", () => {
    const testEmail = 'ydennekrf@hotmail.com'
    const engineer = new Engineer( 'Fraser', 10, testEmail);

    expect( engineer.getEmail().toBe( testEmail ));
});

test(" check to see if getRole returns engineer as role", () => {
    const testRole = 'engineer';
    const engineer = new Engineer( 'Fraser', 10, 'ydennekrf@hotmail.com', testRole);

    expect( engineer.getRole()).toBe( testRole );
});

test(" check to see if getGithub works", () => {
    const testGit = 'ydennekrf';
    const engineer = new Engineer('Fraser', 10, 'ydennekrf@hotmail.com', 'engineer', testGit);

    expect( engineer.getGithub()).toBe( testGit );
});