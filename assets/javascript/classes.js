class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "employee";
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
        super(name, id, email);
        this.office = office;
        this.role = role
    }
    getOffice() {
        return this.office;
    }
    getRole() {
        return this.role;
     }
}

class Engineer extends Employee{
    constructor(name, id, email, role, github) {
        super(name, id, email)
        this.github = github;
        this.role = role
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
     };
}

class Intern extends Employee{
    constructor(name, id, email, role, school) {
        super(name, id, email)
        this.school = school;
        this.role = role
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
     };
};

module.exports = { Employee, Manager, Engineer, Intern };