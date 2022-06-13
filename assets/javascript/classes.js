// the main employee class
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
// the manager sub class
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
// the engineer sub class
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
// the intern sub class
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
// exporting the classes out to other documents.
module.exports = { Employee, Manager, Engineer, Intern };