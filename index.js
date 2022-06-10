const fs = require('fs');
const inquirer = require('inquirer');
const {developers, manager, engineer, intern } = require('./assets/javascript/classes');

const managerQuestion = [
    {
        type: 'input',
        message: 'what is your name?',
        name: 'name',
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
        name: 'ID',
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
        name: 'email',
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

// function roleCheck (roleData) {
//     switch(roleData) {
//         case 'manager':
//             questions.next({
//                 type: 'input',
//                 message: 'What is the office number?',
//                 name: 'office'
//             });
            
//         break;
//         case 'engineer':
//             questions.next({
//                 type: 'input',
//                 message: 'What is the github profile?',
//                 name: 'github'
//             });
//         break;
//         case 'intern':
//             questions.next({
//                 type: 'input',
//                 message: 'What school are you from?',
//                 name: 'school'
//             })
//     }
// };




function init() {
    inquirer.prompt(teamRole)
    .then((data) => {
        // console.log(data)
        let teamRole = data.role;
        askQuestions(teamRole)
    })
}

function askQuestions (teamRole) {
        inquirer.prompt(questions)
        .then((data) => {
            // roleCheck(roleData)
            // console.log(data);
            addDev(teamRole, data)
        })
    
};
function addDev(teamRole, data) {
    console.log(teamRole);
    console.log(data)
    let newDev = data.name
 const member  = new `${teamRole}`(data.name , data.ID , data.email, `${teamRole}`, 'stuff')
 console.log(developers)
}

init();
