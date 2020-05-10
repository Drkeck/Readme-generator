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
const init = readmeData => {

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
            type: 'input',
            name: 'installation',
            message: 'What are the steps needed to install and run your program?'
        },
        {
            type: 'input',
            name: 'usage',
            message:'usage placeholder',
        },
        

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
