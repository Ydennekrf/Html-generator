class Employee {
    constructor(name,id,email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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
    getRole() {
        return this.role;
    }
}

class Manager extends Employee{
    constructor(name, id, email, role, office) {
        super(name, id, email, role);
        this.office = office;
    }
    getOffice() {
        return this.office;
    }
}

class Engineer extends Employee{
    constructor(name, id, email, role, github) {
        super(name, id, email, role)
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

class Intern extends Employee{
    constructor(name, id, email, role, school) {
        super(name, id, email, role)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
};

module.exports = { Employee, Manager, Engineer, Intern };