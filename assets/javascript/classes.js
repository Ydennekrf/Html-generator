class Employee {
    constructor(name,id,email) {
        console.log(name)
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getOffice() {
        return this.office;
    }
}

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
};

module.exports = { Employee, Manager, Engineer, Intern };