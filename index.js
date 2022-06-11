const fs = require('fs');
const inquirer = require('inquirer');
const {Employee, Manager, Engineer, Intern } = require('./assets/javascript/classes');
const { generateCard } = require('./assets/javascript/generateHtml');

let employeeArr = [];
const managerQuestion = [
   
    {
        type: 'input',
        message: "what is your manager's name?",
        name: 'managerName',
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
        when: role => role.role === 'engineer'
    },
    {
        type: 'input',
        message: 'What school are you from?',
        name: 'school',
        when: role => role.role === 'intern'
    }
];

function init() {
    inquirer.prompt(managerQuestion)
    .then((data) => {
        addManager(data)
        askQuestions()
    })
}

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
function addManager(data) {
    const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.office );
    employeeArr.push(manager);
}
function addDev(data) { 
    const devRole = data.role
    switch(devRole) {
        case 'engineer':
            engineer = new Engineer(data.name, data.id, data.email, data.github);
            employeeArr.push(engineer);
            console.log(employeeArr);
        break;
        case 'intern':
            intern = new Intern(data.name, data.id, data.email, data.school);
            employeeArr.push(intern);
            console.log(employeeArr)
        break;
        default:
            console.log('Finished creating team.');
    }
};
function writeHtml() {
    // let fileName = `team-${employeeArr[0].name.toLowerCase().split(' ').join('')}.html`;
    generateCard(employeeArr);
    for(i=0; i<employeeArr.length;i++){
        console.log(employeeArr[i]);
    }

}

init();
