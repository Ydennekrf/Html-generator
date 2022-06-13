//importing in all the files and functions required in index.js
const fs = require('fs');
const inquirer = require('inquirer');
const {Employee, Manager, Engineer, Intern } = require('./assets/javascript/classes');
const { generateCard, generateHtml } = require('./assets/javascript/generateHtml');
// my lone global variable
let employeeArr = [];
// array of questions run first to get data on the team manager.
const managerQuestion = [
   
    {
        type: 'input',
        message: "what is your manager's name?",
        name: 'managerName',
        // validates there is an input value before you move on to the next question.
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your name.')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'what is the ID #?',
        name: 'managerID',
        validate: IDInput => {
            if(IDInput) {
                return true;
            } else {
                console.log('an ID number is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'what is the email?',
        name: 'managerEmail',
        validate: emailIn => {
            if(emailIn) {
                return true;
            } else {
                console.log('please enter an email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office',
        validate: officeIn => {
            if(officeIn) {
                return true;
            } else {
                console.log('please enter an office number.');
                return false;
            }
        }
    },

];
// array of questions used for every non managment employee.
const questions = [
    {
        type: 'confirm',
        name: 'confirmNewEmployee',
        message: 'add an employee?',
        default: true
    },
    {
        type: 'input',
        message: 'what is your name?',
        name: 'name',
        // used to skip questions when you select no for creating a new team member.
        when: confirm => confirm.confirmNewEmployee,
        validate: nameIn => {
            if(nameIn) {
                return true;
            } else {
                console.log('please enter an input.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'what is the ID #?',
        name: 'id',
        when: confirm => confirm.confirmNewEmployee,
        validate: IDin => {
            if(IDin) {
                return true;
            } else {
                console.log('please enter an input.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'what is the email?',
        name: 'email',
        when: confirm => confirm.confirmNewEmployee,
        validate: emailIn => {
            if(emailIn) {
                return true;
            } else {
                console.log('please enter an input.')
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'select the employees role',
        name: 'role',
        choices: ['engineer', 'intern'],
        when: confirm => confirm.confirmNewEmployee,
        validate: roleIn => {
            if(roleIn) {
                return true;
            } else {
                console.log('please select an input.')
                return false;
            }
        } 
    },
    {
        type: 'input',
        message: 'What is the github profile?',
        name: 'github',
        // uses data from the question about which role you are
        //if an engineer was picked then this question will be asked.
        when: role => role.role === 'engineer'
    },
    {
        type: 'input',
        message: 'What school are you from?',
        name: 'school',
        when: role => role.role === 'intern'
    }
];
// the init function is run on initialization of the file.
// it begins with the manager questions then takes that data and creates the manager instance in the employee class
// then the function asked questions is run.
function init() {
    inquirer.prompt(managerQuestion)
    .then((data) => {
        addManager(data)
        askQuestions()
    })
}
// this handles the creation of each instance of a new employee and when no more team members are desired it directs the code to write the html document based on the inpout data.
function askQuestions () {
        inquirer.prompt(questions)
        .then((data) => {
        addDev(data);
        if (data.confirmNewEmployee){
            askQuestions();
        } else {
            writeHtml();
        }
})
    
};
// adds and instance of the manager class
// moves that data into and employee array for future use.
function addManager(data) {
    const manager = new Manager(data.managerName, data.managerID, data.managerEmail, 'manager' , data.office );
    employeeArr.push(manager);
};
// add and instance of either the engineer or intern classes
// will default when no is selected for creating a new team member.
function addDev(data) { 
    const devRole = data.role
    switch(devRole) {
        case 'engineer':
            engineer = new Engineer(data.name, data.id, data.email,data.role, data.github);
            employeeArr.push(engineer);
          
        break;
        case 'intern':
            intern = new Intern(data.name, data.id, data.email, data.role, data.school);
            employeeArr.push(intern);
            
        break;
        default:
            console.log('Finished creating team.');
    }
};
// uses the functions within generateHtml.js to write the new html document with the given data.
function writeHtml() {
    let cardArr = [];
    let fileName = `team-${employeeArr[0].name.toLowerCase().split(' ').join('')}.html`;
    generateCard(employeeArr, cardArr);
    fs.writeFile(`./genHTML/${fileName}`, generateHtml(employeeArr, cardArr), (err) => err ? console.log(err) : console.log('Success!'));
};

init();
