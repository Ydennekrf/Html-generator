// imports the engineer class to the document
const { Engineer } = require ("../assets/javascript/classes");
// this file runs jest unit tests for the engineer class
test( 'creating an engineer object within employee object', () => {
    const engineer = new Engineer('Fraser', 10, 'email@email.com', 'engineer', 'ydennekrf');

    expect( typeof( engineer)).toBe( "object" );
    expect( typeof engineer.name ).toBe( 'string' );
    expect( typeof engineer.id ).toBe( 'number' );
    expect( typeof engineer.email ).toBe( 'string' );
    expect( typeof engineer.github ).toBe( 'string' );
    expect( typeof engineer.role ).toBe( 'string' );
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

    expect( engineer.getEmail()).toBe( testEmail );
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