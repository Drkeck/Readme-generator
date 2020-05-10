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
            message:'usage placeholder',
        },
        {
            //liscense picker
            type: 'list',
            name: 'liscense',
            message: 'Which liscense is your project protected under',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unlicense']
        },
        {
            //contributing / contributers
            type: 'input',
            name:'contributing',
            message:'Leave some information of contributing.'
        },
        {
            //tests???
            type: 'input',
            name: 'tests',
            message:'leave info about tests',
        },
        {
            //github username
            type:'input',
            name:'github',
            message: 'Enter a github for the pourpouse of contacting'
        },
        {
            //contact email
            type: 'input',
            name: 'email',
            message: 'Please Enter an email that users can use to contact you.'
        }

    ])
}

// function call to initialize program
init()
    .then(readmeData => {
        return genrateFile(readmeData);
    })
    .then(ReadmeMarkDown => {
        return writeToFile(ReadmeMarkDown);
    })
    .then(writeToFileResponse => {
        console.log(writeToFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
