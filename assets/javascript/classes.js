class Employee {
    constructor(name , id, email) {
        console.log(name)
        this.name = name;
        this.id = id;
        this.email = email;
    }
    get name() {
        return this.name;
    }
    get id() {
        return this.id;
    }
    get email() {
        return this.email;
    }
}

class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    get office() {
        return this.office;
    }
}

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    get github() {
        return this.github;
    }
}

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    get school() {
        return this.school;
    }
};

module.exports = { Employee, Manager, Engineer, Intern };