const inquirer = require('inquirer');
const writeToFile = require('./utils/writeToFile');
const genrateFile = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
//project name
//project description
//table of contents (links to lower sections of the readme.md [look into it.])
//installation
//usage
//liscense (use a badge to display which & a notice is added to the readme)
//contributing
//tests
//questions (Github Username & Email address)

];

// function to initialize program
const init = () => {

    return inquirer.prompt([
        {
            //project name
            type: 'input',
            name: 'name',
            message: 'Whats the name of the project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter project name');
                    return false;
                }
            }
        },
        {
            //description
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('please enter info about your project');
                    return false
                }
            }
        },
        {
            //installation guide.
            type: 'input',
            name: 'installation',
            message: 'What are the steps needed to install and run your program?'
        },
        {   //usage section.
            type: 'input',
            name: 'usage',
            message:'Explain how to use the App and what it problem it can solve'
        },
        {
            //liscense picker
            type: 'list',
            name: 'liscense',
            message: 'Which liscense is your project protected under',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unlicense'],
            validate: lisInput => {
                if(lisInput) {
                    return true;
                } else {
                    console.log('please pick a liscense. \n "unlicensed" is avalible');
                    return false;
                }
            }
        },
        {
            //contributing / contributers
            type: 'input',
            name:'contributing',
            message:'Who contributed to the project, OR how can others contribute to the project..'
        },
        {
            //tests???
            type: 'input',
            name: 'tests',
            message:'Explain the tests you ran with this code. (would be wise to add images after generation)',
        },
        {
            //github username
            type:'input',
            name:'github',
            message: 'Enter a github for the pourpouse of contacting',
            validate: gituser => {
                if (gituser) {
                    return true;
                } else {
                    console.log('please enter a github user');
                    return false;
                }
            }
        },
        {
            //contact email
            type: 'input',
            name: 'email',
            message: 'Please Enter an email that users can use to contact you.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('please enter an email');
                    return false;
                }
            }
        }

    ])
}

// function call to initialize program
init()
    .then(readmeData => {
        console.log(readmeData);
        return genrateFile(readmeData);
    })
    // .then(ReadmeMarkDown => {
    //     return writeToFile(ReadmeMarkDown);
    // })
    // .then(writeToFileResponse => {
    //     console.log(writeToFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
