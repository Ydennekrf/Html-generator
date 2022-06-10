class developers {
    constructor(name , ID, email) {
        this._name = name;
        this._ID = ID;
        this._email = email;
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
}

class manager extends developers{
    constructor(name, ID, email, office) {
        super(name, ID, email)
        this._office = office;
    }
    get office() {
        return this._office;
    }
}

class engineer extends developers{
    constructor(name, ID, email, github) {
        super(name, ID, email)
        this._github = github;
    }
    get github() {
        return this._github;
    }
}

class intern extends developers{
    constructor(name, ID, email, school) {
        super(name, ID, email)
        this._school = school;
    }
    get school() {
        return this._school;
    }
};

module.exports = { developers, manager, engineer, intern };