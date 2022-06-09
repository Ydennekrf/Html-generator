class developers {
    constructor(name , ID, email, role) {
        this._name = name;
        this._ID = ID;
        this._email = email;
        this._role = role;
    }
    get name() {
        return this._name;
    }
    get ID() {
        return this._ID;
    }
    get email() {
        return this._email;
    }
    get role() {
        return this._role;
    }
}

class manager extends developers{
    constructor(name, ID, email, office, role) {
        super(name, ID, email, role)
        this._office = office;
    }
    get office() {
        return this._office;
    }
}

class engineer extends developers{
    constructor(name, ID, email, role, github) {
        super(name, ID, email, role)
        this._github = github;
    }
    get github() {
        return this._github;
    }
}

class intern extends developers{
    constructor(name, ID, email, role, school) {
        super(name, ID, email, role)
        this._school = school;
    }
    get school() {
        return this._school;
    }
}

const questions = [
    {
        type: 'list',
        message: 'how many members in the team?',
        name: 'numMembers',
        choices: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ]
    },
    {
        type: 'list',
        message: 'What is your role?',
        name: 'role',
        choices: [
            'manager',
            'engineer',
            'intern'
        ]
    },
    {
        type: 'input',
        message: 'what is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'what is the ID #?',
        name: 'ID'
    },
    {
        type: 'input',
        message: 'what is the email?',
        name: 'email'
    }
];

function roleCheck (role) {
    switch(role) {
        case 'manager':
            questions.next({
                type: 'input',
                message: 'What is the office number?',
                name: 'office'
            });
        break;
        case 'engineer':
            questions.next({
                type: 'input',
                message: 'What is the github profile?',
                name: 'github'
            });
        break;
        case 'intern':
            questions.next({
                type: 'input',
                message: 'What school are you from?',
                name: 'school'
            })
    }
};