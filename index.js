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