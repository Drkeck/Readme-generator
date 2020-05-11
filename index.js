const inquirer = require('inquirer');
const writeFile = require('./utils/writeToFile');
const genrateFile = require('./utils/generateMarkdown');
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
                    console.log('please enter project name :');
                    return false;
                }
            }
        },
        {
            //description
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project :',
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
            message:'Explain how to use the App:'
        },
        {
            //liscense picker
            type: 'list',
            name: 'liscense',
            message: 'Which liscense is your project protected under',
            choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License', 'Boost_Software_License_1.0', 'Unlicense'],
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
            //credits
            type: 'input',
            name: 'credits',
            message: 'Who was appart of this project? or what outside help did you have developing this project?'
        },
        {
            //contributing / contributers
            type: 'input',
            name:'contributing',
            message:'how would you like others to contribut to the project?'
        },
        {
            //tests
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
        return genrateFile(readmeData);
    })
    .then(ReadmeMarkDown => {
        return writeFile(ReadmeMarkDown);
    })
    .then(writeToFileResponse => {
        console.log(writeToFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
